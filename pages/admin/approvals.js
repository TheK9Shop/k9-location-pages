import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import styles from '../../styles/Approvals.module.css'

export default function Approvals() {
  const [edits, setEdits] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedEdit, setSelectedEdit] = useState(null)
  const [approvalComment, setApprovalComment] = useState('')

  useEffect(() => {
    loadPendingEdits()
  }, [])

  const loadPendingEdits = async () => {
    const { data, error } = await supabase
      .from('location_edits')
      .select('*')
      .eq('status', 'pending_approval')
      .order('submitted_at', { ascending: false })

    if (!error) {
      setEdits(data)
    }
    setLoading(false)
  }

  const handleApprove = async (editId) => {
    const { error } = await supabase
      .from('location_edits')
      .update({
        status: 'approved',
        approved_by: 'seann@thek9shop.com',
        approved_at: new Date().toISOString(),
      })
      .eq('id', editId)

    if (!error) {
      setSelectedEdit(null)
      loadPendingEdits()
      alert('Approved!')
    }
  }

  const handleReject = async (editId, reason) => {
    const { error } = await supabase
      .from('location_edits')
      .update({
        status: 'rejected',
        rejection_reason: reason,
        approved_at: new Date().toISOString(),
      })
      .eq('id', editId)

    if (!error) {
      setSelectedEdit(null)
      setApprovalComment('')
      loadPendingEdits()
      alert('Rejected!')
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
          {edits.map((edit) => (
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
                  <pre>{JSON.stringify(JSON.parse(edit.new_value), null, 2)}</pre>
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
          ))}
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