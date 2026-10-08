import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import styles from '../../styles/ClosureModal.module.css'

export default function ClosureModal({ locationSlug, onClose, onSave }) {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSave = async () => {
    setLoading(true)
    setError('')

    try {
      const { error: submitError } = await supabase
        .from('location_edits')
        .insert({
          location_slug: locationSlug,
          field_name: 'closure_banner',
          edit_type: 'update',
          old_value: null,
          new_value: JSON.stringify({
            is_open: !isOpen,
            message: message,
          }),
          status: 'pending_approval',
          submitted_by: 'test-user',
          submitted_at: new Date().toISOString(),
        })

      console.log('Supabase error:', submitError)

      if (submitError) {
        console.error('Full error:', submitError)
        setError('Failed to submit. Please try again.')
        setLoading(false)
        return
      }

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
          <button 
            onClick={handleSave} 
            disabled={loading}
            className={styles.primary}
          >
            {loading ? 'Submitting...' : 'Submit for Approval'}
          </button>
        </div>

        <p className={styles.note}>Changes will be reviewed and approved within 24 hours.</p>
      </div>
    </div>
  )
}