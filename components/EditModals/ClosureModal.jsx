import { useState } from 'react'
import styles from '../../styles/ClosureModal.module.css'

export default function ClosureModal({ locationSlug, onClose, onSave }) {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSave = async () => {
    setLoading(true)
    setError('')

    const token = localStorage.getItem('session_token')
    try {
      const res = await fetch('/api/edits/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          slug: locationSlug,
          field_name: 'closure_banner',
          new_value: { is_open: !isOpen, message },
        }),
      })
      const data = await res.json()

      if (!res.ok || !data.id) {
        setError('Failed to submit. Please try again.')
        setLoading(false)
        return
      }

      // Text the approvers. A failed text should not block the save.
      fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ editId: data.id }),
      }).catch((err) => console.error('Notify failed', err))

      onSave()
    } catch (err) {
      console.error('Error submitting changes:', err)
      setError('Error submitting changes')
      setLoading(false)
    }
  }

  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.content}>
        <h2>Store Closure Banner</h2>

        <div className={styles.field}>
          <label>
            <input
              type="checkbox"
              checked={isOpen}
              onChange={(e) => setIsOpen(e.target.checked)}
              disabled={loading}
            />
            {' '}Store is currently closed
          </label>
        </div>

        {isOpen && (
          <div className={styles.field}>
            <label>Closure Message (optional)</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={loading}
              placeholder="We're temporarily closed. We'll reopen on..."
              rows={3}
            />
          </div>
        )}

        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.actions}>
          <button onClick={onClose} disabled={loading}>Cancel</button>
          <button onClick={handleSave} disabled={loading} className={styles.primary}>
            {loading ? 'Submitting...' : 'Submit for Approval'}
          </button>
        </div>

        <p className={styles.note}>Changes will be reviewed and approved within 24 hours.</p>
      </div>
    </div>
  )
}