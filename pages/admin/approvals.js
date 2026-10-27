import { useEffect, useState } from 'react'
import { renderEditValue } from '@/lib/renderEditValue'
import styles from '../../styles/Approvals.module.css'

export default function Approvals() {
  const [edits, setEdits] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedEdit, setSelectedEdit] = useState(null)
  const [approvalComment, setApprovalComment] = useState('')

  useEffect(() => {
    loadPendingEdits()
  }, [])

    const getToken = () => localStorage.getItem('session_token')

  const loadPendingEdits = async () => {
    const res = await fetch('/api/admin/edits', {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
    if (res.status === 401) {
      window.location.href = '/auth/login'
      return
    }
    const data = await res.json()
    setEdits(data.edits || [])
    setLoading(false)
  }

  const handleApprove = async (editId) => {
    const res = await fetch('/api/admin/edits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
      body: JSON.stringify({ id: editId, action: 'approve' }),
    })
    if (res.ok) {
      setSelectedEdit(null)
      loadPendingEdits()
      alert('Approved!')
    } else {
      alert('Could not approve. Please try again.')
    }
  }

  const handleReject = async (editId, reason) => {
    const res = await fetch('/api/admin/edits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
      body: JSON.stringify({ id: editId, action: 'reject', reason }),
    })
    if (res.ok) {
      setSelectedEdit(null)
      setApprovalComment('')
      loadPendingEdits()
      alert('Rejected!')
    } else {
      alert('Could not reject. Please try again.')
    }
  }

  if (loading) return <div className={styles.container}><p>Loading...</p></div>

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Pending Approvals</h1>
        <p>{edits.length} pending</p>
      </header>

      {edits.length === 0 ? (
        <div className={styles.empty}>
          <p>No pending approvals</p>
        </div>
      ) : (
        <div className={styles.list}>
          {edits.map((edit) => {
            const rendered = renderEditValue(edit.field_name, edit.new_value)
            return (
              <div key={edit.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3>{edit.location_slug}</h3>
                  <span className={styles.field}>{edit.field_name}</span>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.submission}>
                    <p><strong>Submitted by:</strong> {edit.submitted_by}</p>
                    <p><strong>At:</strong> {new Date(edit.submitted_at).toLocaleString()}</p>
                  </div>

                  <div className={styles.changePreview}>
                    <p><strong>New Value:</strong></p>
                    {rendered.isHtml ? (
                      <div dangerouslySetInnerHTML={{ __html: rendered.html }} />
                    ) : (
                      <p>{rendered.text}</p>
                    )}
                  </div>
                </div>

                <div className={styles.actions}>
                  <button 
                    className={styles.approve}
                    onClick={() => handleApprove(edit.id)}
                  >
                    ✓ Approve
                  </button>
                  <button 
                    className={styles.reject}
                    onClick={() => setSelectedEdit(edit)}
                  >
                    ✗ Reject
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {selectedEdit && (
        <div className={styles.modal}>
          <div className={styles.overlay} onClick={() => setSelectedEdit(null)} />
          <div className={styles.modalContent}>
            <h2>Reject this change?</h2>
            <p>
              <strong>{selectedEdit.location_slug}</strong> — {selectedEdit.field_name}
            </p>

            <textarea
              placeholder="Reason for rejection (optional)"
              value={approvalComment}
              onChange={(e) => setApprovalComment(e.target.value)}
              rows={3}
            />

            <div className={styles.modalActions}>
              <button onClick={() => setSelectedEdit(null)}>Cancel</button>
              <button 
                className={styles.rejectBtn}
                onClick={() => handleReject(selectedEdit.id, approvalComment)}
              >
                Confirm Rejection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}