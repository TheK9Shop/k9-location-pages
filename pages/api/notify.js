const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
const TW_SID = process.env.TWILIO_ACCOUNT_SID
const TW_TOKEN = process.env.TWILIO_AUTH_TOKEN
const TW_FROM = process.env.TWILIO_FROM_NUMBER

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const editId = req.body?.editId
  if (!editId || !/^[0-9a-f-]{36}$/i.test(editId)) {
    return res.status(400).json({ error: 'Invalid edit id' })
  }

  // Confirm the edit exists and is still pending
  const dbRes = await fetch(
    `${SUPABASE_URL}/rest/v1/location_edits?id=eq.${editId}&select=location_slug,field_name,status`,
    { headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` } }
  )
  const rows = await dbRes.json()
  const edit = rows[0]
  if (!edit || edit.status !== 'pending_approval') {
    return res.status(404).json({ error: 'No pending edit found' })
  }

  const phones = (process.env.APPROVER_PHONES || '').split(',').map((p) => p.trim()).filter(Boolean)
  const body =
    `K9 Shop: ${edit.location_slug} submitted a ${edit.field_name.replace(/_/g, ' ')} change for approval. ` +
    `Review: https://k9-location-pages.vercel.app/admin/approvals`

  const auth = Buffer.from(`${TW_SID}:${TW_TOKEN}`).toString('base64')
  const results = await Promise.all(
    phones.map((to) =>
      fetch(`https://api.twilio.com/2010-04-01/Accounts/${TW_SID}/Messages.json`, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ From: TW_FROM, To: to, Body: body }),
      }).then((r) => r.ok)
    )
  )

  return res.status(200).json({ sent: results.filter(Boolean).length })
}