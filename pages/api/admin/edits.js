const URL_BASE = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const H = {
  apikey: KEY,
  Authorization: `Bearer ${KEY}`,
  'Content-Type': 'application/json',
};

// Returns the account only if the token is valid, unexpired, active, and an approver
async function approverFor(token) {
  if (!/^[a-f0-9]{64}$/.test(token)) return null;
  const r = await fetch(
    `${URL_BASE}/rest/v1/session_tokens?token=eq.${token}&select=expires_at,franchisee_accounts(email,role,active)`,
    { headers: H }
  );
  const [session] = await r.json();
  const acct = session?.franchisee_accounts;
  const ok =
    session &&
    new Date(session.expires_at) > new Date() &&
    acct &&
    acct.active &&
    acct.role === 'approver';
  return ok ? acct : null;
}

export default async function handler(req, res) {
  const token = (req.headers.authorization || '').replace('Bearer ', '');
  const approver = await approverFor(token);
  if (!approver) return res.status(401).json({ error: 'Not authorized' });

  if (req.method === 'GET') {
    const r = await fetch(
      `${URL_BASE}/rest/v1/location_edits?status=eq.pending_approval&select=*&order=submitted_at.desc`,
      { headers: H }
    );
    return res.status(200).json({ edits: await r.json() });
  }

  if (req.method === 'POST') {
    const { id, action, reason } = req.body || {};
    if (!/^[0-9a-f-]{36}$/i.test(id || '') || !['approve', 'reject'].includes(action)) {
      return res.status(400).json({ error: 'Invalid request' });
    }

    const patch =
      action === 'approve'
        ? { status: 'approved', approved_by: approver.email, approved_at: new Date().toISOString() }
        : { status: 'rejected', approved_by: approver.email, approved_at: new Date().toISOString(), rejection_reason: reason || null };

    // Only changes edits that are still pending, so an edit can't be approved twice
    const r = await fetch(
      `${URL_BASE}/rest/v1/location_edits?id=eq.${id}&status=eq.pending_approval`,
      { method: 'PATCH', headers: { ...H, Prefer: 'return=minimal' }, body: JSON.stringify(patch) }
    );
    return res.status(r.ok ? 200 : 500).json({ ok: r.ok });
  }

  return res.status(405).end();
}