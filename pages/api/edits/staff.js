import { getLocationBySlug } from '@/data/locations';

const URL_BASE = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const H = {
  apikey: KEY,
  Authorization: `Bearer ${KEY}`,
  'Content-Type': 'application/json',
};

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  const slug = String(req.query.slug || '');
  if (!/^[a-f0-9]{64}$/.test(token) || !slug) {
    return res.status(401).json({ error: 'Not signed in' });
  }

  // Confirm the session is valid and belongs to this store
  const s = await fetch(
    `${URL_BASE}/rest/v1/session_tokens?token=eq.${token}&select=expires_at,franchisee_accounts(location_slug,active)`,
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
  if (!valid) return res.status(401).json({ error: 'Not authorized' });

  // Use the latest approved team if there is one, otherwise the original team
  const r = await fetch(
    `${URL_BASE}/rest/v1/location_edits?location_slug=eq.${slug}&field_name=eq.staff&status=eq.approved&select=new_value&order=approved_at.desc&limit=1`,
    { headers: H }
  );
  const [row] = await r.json();
  let team = null;
  if (row) {
    let v = row.new_value;
    if (typeof v === 'string') v = JSON.parse(v);
    if (typeof v === 'string') v = JSON.parse(v);
    if (Array.isArray(v)) team = v;
  }

  if (!team) {
    const loc = getLocationBySlug(slug);
    team = (loc?.team || []).map((m, i) => ({
      id: i + 1,
      name: m.name || '',
      title: m.role || '',
      bio: m.bio || '',
      photo: m.image || '',
    }));
  }

  return res.status(200).json({ team });
}
