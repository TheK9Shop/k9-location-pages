import { useEffect, useState } from 'react'

const overlay = { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }
const box = { background: '#FFF', borderRadius: 8, padding: 28, width: '100%', maxWidth: 640, maxHeight: '90vh', overflowY: 'auto' }
const input = { width: '100%', padding: 10, border: '1px solid #DDD', borderRadius: 4, fontSize: 14, boxSizing: 'border-box', marginBottom: 8, fontFamily: 'inherit' }
const label = { display: 'block', fontSize: 12, fontWeight: 700, color: '#555', marginBottom: 4 }
const button = (bg, color = '#FFF') => ({ background: bg, color, border: 'none', borderRadius: 4, padding: '10px 18px', fontWeight: 700, fontSize: 13, cursor: 'pointer' })

export default function StaffModal({ locationSlug, onClose, onSave }) {
  const [team, setTeam] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('session_token')
    fetch(`/api/edits/staff?slug=${encodeURIComponent(locationSlug)}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((d) => {
        setTeam(d.team || [])
        setLoading(false)
      })
      .catch(() => {
        setError('Could not load the current team.')
        setLoading(false)
      })
  }, [locationSlug])

  const update = (i, key, value) =>
    setTeam((t) => t.map((m, idx) => (idx === i ? { ...m, [key]: value } : m)))

  const remove = (i) => setTeam((t) => t.filter((_, idx) => idx !== i))

  const add = () =>
    setTeam((t) => [...t, { id: Date.now(), name: '', title: '', bio: '', photo: '' }])

  const handleSave = async () => {
    const cleaned = team.filter((m) => m.name.trim())
    if (cleaned.length === 0) {
      setError('Add at least one team member.')
      return
    }
    if (cleaned.some((m) => !m.title.trim())) {
      setError('Every team member needs a title.')
      return
    }

    setSaving(true)
    setError('')
    const token = localStorage.getItem('session_token')

    try {
      const res = await fetch('/api/edits/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          slug: locationSlug,
          field_name: 'staff',
          new_value: cleaned.map((m) => ({
            id: m.id,
            name: m.name.trim(),
            title: m.title.trim(),
            bio: (m.bio || '').trim(),
            photo: (m.photo || '').trim(),
          })),
        }),
      })
      if (!res.ok) {
        setError('Failed to submit. Please try again.')
        setSaving(false)
        return
      }
      onSave()
    } catch (err) {
      console.error('Error submitting changes:', err)
      setError('Error submitting changes.')
      setSaving(false)
    }
  }

  return (
    <div style={overlay}>
      <div style={box}>
        <h2 style={{ fontSize: 22, fontWeight: 900, color: '#1A1A1A', margin: '0 0 6px 0' }}>Edit Our Team</h2>
        <p style={{ fontSize: 13, color: '#666', margin: '0 0 20px 0' }}>
          Changes replace the full team once approved. Fred reviews every change.
        </p>

        {loading && <p>Loading current team...</p>}

        {!loading && team.map((m, i) => (
          <div key={m.id} style={{ border: '1px solid #E5E5E5', borderRadius: 6, padding: 16, marginBottom: 16 }}>
            <label style={label}>Name</label>
            <input style={input} value={m.name} onChange={(e) => update(i, 'name', e.target.value)} disabled={saving} />

            <label style={label}>Title</label>
            <input style={input} value={m.title} onChange={(e) => update(i, 'title', e.target.value)} disabled={saving} />

            <label style={label}>Bio (optional)</label>
            <textarea style={{ ...input, minHeight: 70 }} value={m.bio} onChange={(e) => update(i, 'bio', e.target.value)} disabled={saving} />

            <label style={label}>Photo URL (optional, photo upload comes next)</label>
            <input style={input} value={m.photo} onChange={(e) => update(i, 'photo', e.target.value)} disabled={saving} />

            <button type="button" onClick={() => remove(i)} disabled={saving} style={button('#FFF', '#C0392B')}>
              Remove
            </button>
          </div>
        ))}

        {!loading && (
          <button type="button" onClick={add} disabled={saving} style={{ ...button('#1A1A1A'), marginBottom: 20 }}>
            Add person
          </button>
        )}

        {error && <p style={{ color: '#C0392B', fontSize: 14, margin: '0 0 16px 0' }}>{error}</p>}

        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
          <button type="button" onClick={onClose} disabled={saving} style={button('#EEE', '#333')}>Cancel</button>
          <button type="button" onClick={handleSave} disabled={loading || saving} style={button('#C0392B')}>
            {saving ? 'Submitting...' : 'Submit for approval'}
          </button>
        </div>
      </div>
    </div>
  )
}