import bcrypt from 'bcryptjs';
import crypto from 'crypto';

const URL_BASE = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const H = {
  apikey: KEY,
  Authorization: `Bearer ${KEY}`,
  'Content-Type': 'application/json',
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ error: 'Missing email or password' });
  }

  const cleanEmail = encodeURIComponent(email.trim().toLowerCase());
  const r = await fetch(
    `${URL_BASE}/rest/v1/franchisee_accounts?email=eq.${cleanEmail}&active=eq.true&select=id,location_slug,password_hash,role`,
    { headers: H }
  );
  const [acct] = await r.json();
  const ok = acct && (await bcrypt.compare(password, acct.password_hash));
  if (!ok) return res.status(401).json({ error: 'Login failed' });

  const token = crypto.randomBytes(32).toString('hex');
  const expires_at = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

  await fetch(`${URL_BASE}/rest/v1/session_tokens`, {
    method: 'POST',
    headers: H,
    body: JSON.stringify({ account_id: acct.id, token, expires_at }),
  });

  return res.status(200).json({ token, location_slug: acct.location_slug, role: acct.role });
}
