const URL_BASE = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const H = { apikey: KEY, Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' };

export default async function handler(req, res) {
  const token = (req.headers.authorization || '').replace('Bearer ', '');
  if (!/^[a-f0-9]{64}$/.test(token)) return res.status(401).json({ ok: false });

  const r = await fetch(
    `${URL_BASE}/rest/v1/session_tokens?token=eq.${token}&select=expires_at,franchisee_accounts(role,active)`,
    { headers: H }
  );
  const [session] = await r.json();
  const acct = session?.franchisee_accounts;
  const ok = session && new Date(session.expires_at) > new Date() && acct && acct.active && acct.role === 'approver';
  if (!ok) return res.status(401).json({ ok: false });
  return res.status(200).json({ ok: true });
}
