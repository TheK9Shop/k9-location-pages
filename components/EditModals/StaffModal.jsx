import { useState } from 'react'
import styles from '../../styles/StaffModal.module.css'

export default function StaffModal({ locationSlug, onClose, onSave }) {
  const [staff, setStaff] = useState([
    { id: 1, name: '', title: '', photo: null }
  ])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [nextId, setNextId] = useState(2)

  const handleAddStaff = () => {
    setStaff([...staff, { id: nextId, name: '', title: '', photo: null }])
    setNextId(nextId + 1)
  }

  const handleRemoveStaff = (id) => {
    setStaff(staff.filter(s => s.id !== id))
  }

  const handlePhotoUpload = (id, file) => {
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      setStaff(staff.map(s => 
        s.id === id ? { ...s, photo: e.target.result } : s
      ))
    }
    reader.readAsDataURL(file)
  }

  const handleFieldChange = (id, field, value) => {
    setStaff(staff.map(s => 
      s.id === id ? { ...s, [field]: value } : s
    ))
  }

    const handleSave = async () => {
    setLoading(true)
    setError('')

    if (staff.some(s => !s.name || !s.title)) {
      setError('All staff must have a name and title')
      setLoading(false)
      return
    }

    const token = localStorage.getItem('session_token')
    try {
      const res = await fetch('/api/edits/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ slug: locationSlug, field_name: 'staff', new_value: staff }),
      })

      if (!res.ok) {
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
        <h2>Staff</h2>
        
        <div className={styles.staffList}>
          {staff.map((person, idx) => (
            <div key={person.id} className={styles.staffCard}>
              <div className={styles.photoSection}>
                <div className={styles.photoPlaceholder}>
                  {person.photo ? (
                    <img src={person.photo} alt={person.name} />
                  ) : (
                    <span>No photo</span>
                  )}
                </div>
                <label className={styles.uploadLabel}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handlePhotoUpload(person.id, e.target.files?.[0])}
                    disabled={loading}
                  />
                  {person.photo ? 'Change Photo' : 'Upload Photo'}
                </label>
              </div>

              <div className={styles.fieldsSection}>
                <input
                  type="text"
                  placeholder="Name"
                  value={person.name}
                  onChange={(e) => handleFieldChange(person.id, 'name', e.target.value)}
                  disabled={loading}
                />
                <input
                  type="text"
                  placeholder="Title"
                  value={person.title}
                  onChange={(e) => handleFieldChange(person.id, 'title', e.target.value)}
                  disabled={loading}
                />
              </div>

              {staff.length > 1 && (
                <button
                  className={styles.removeBtn}
                  onClick={() => handleRemoveStaff(person.id)}
                  disabled={loading}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>

        <button 
          className={styles.addBtn}
          onClick={handleAddStaff}
          disabled={loading}
        >
          + Add Staff Member
        </button>

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