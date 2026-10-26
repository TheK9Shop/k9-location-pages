const URL_BASE = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const H = {
  apikey: KEY,
  Authorization: `Bearer ${KEY}`,
  'Content-Type': 'application/json',
};

// Only these fields can be submitted from the dashboard
const ALLOWED_FIELDS = ['closure_banner', 'staff'];

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  const { slug, field_name, new_value } = req.body || {};

  if (!/^[a-f0-9]{64}$/.test(token)) {
    return res.status(401).json({ error: 'Not signed in' });
  }
  if (!slug || !ALLOWED_FIELDS.includes(field_name)) {
    return res.status(400).json({ error: 'Invalid edit' });
  }

  // Confirm the session is valid and belongs to this store
  const s = await fetch(
    `${URL_BASE}/rest/v1/session_tokens?token=eq.${token}&select=expires_at,franchisee_accounts(email,location_slug,active)`,
    { headers: H }
  );
  const [session] = await s.json();
  const acct = session?.franchisee_accounts;
  const valid =
    session &&
    new Date(session.expires_at) > new Date() &&
    acct &&
    acct.active &&
    acct.location_slug === slug;

  if (!valid) {
    return res.status(401).json({ error: 'Not authorized for this location' });
  }

  // Save as pending, recording the logged-in franchisee as the submitter
  const ins = await fetch(`${URL_BASE}/rest/v1/location_edits`, {
    method: 'POST',
    headers: { ...H, Prefer: 'return=representation' },
    body: JSON.stringify({
      location_slug: slug,
      field_name,
      edit_type: 'update',
      old_value: null,
      new_value: JSON.stringify(new_value),
      status: 'pending_approval',
      submitted_by: acct.email,
      submitted_at: new Date().toISOString(),
    }),
  });

  if (!ins.ok) return res.status(500).json({ error: 'Could not save' });

  const [row] = await ins.json();
  return res.status(200).json({ ok: true, id: row.id });
}