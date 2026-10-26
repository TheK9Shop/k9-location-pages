import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ClosureModal from '../../../components/EditModals/ClosureModal'
import StaffModal from '../../../components/EditModals/StaffModal'
import styles from '../../../styles/Dashboard.module.css'

export default function Dashboard() {
  const router = useRouter()
  const { slug } = router.query
  const [account, setAccount] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showClosureModal, setShowClosureModal] = useState(false)
  const [showStaffModal, setShowStaffModal] = useState(false)

    useEffect(() => {
    if (!slug) return

    const token = localStorage.getItem('session_token')
    if (!token) {
      router.push('/auth/login')
      return
    }

    fetch(`/api/auth/verify?slug=${encodeURIComponent(slug)}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((data) => {
        if (!data.ok) {
          localStorage.removeItem('session_token')
          router.push('/auth/login')
          return
        }
        setAccount({ location_slug: data.location_slug, role: data.role, email: data.email })
        setLoading(false)
      })
      .catch(() => router.push('/auth/login'))
  }, [slug, router])

  if (loading) return <div>Loading...</div>

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1>Location Manager — {slug}</h1>
        <button onClick={() => router.push('/auth/login')}>Logout</button>
      </header>

      <div className={styles.content}>
        <section className={styles.module}>
          <h2>Featured Products</h2>
          <button>Edit</button>
        </section>

        <section className={styles.module}>
          <h2>Events</h2>
          <button>Manage</button>
        </section>

        <section className={styles.module}>
          <h2>Staff</h2>
          <button onClick={() => setShowStaffModal(true)}>Edit</button>
        </section>

        <section className={styles.module}>
          <h2>About</h2>
          <button>Edit</button>
        </section>

        <section className={styles.module}>
          <h2>Reviews</h2>
          <button>Manage</button>
        </section>

        <section className={styles.module}>
          <h2>Gallery</h2>
          <button>Manage</button>
        </section>

        <section className={styles.module}>
          <h2>Social Media</h2>
          <button>Edit</button>
        </section>

        <section className={styles.module}>
          <h2>Newsletter Signup</h2>
          <button>Configure</button>
        </section>

        <section className={styles.module}>
          <h2>Store Closure Banner</h2>
          <button onClick={() => setShowClosureModal(true)}>Edit</button>
        </section>
      </div>

      {showClosureModal && (
        <ClosureModal
          locationSlug={slug}
          onClose={() => setShowClosureModal(false)}
          onSave={() => {
            setShowClosureModal(false)
            alert('Submitted for approval!')
          }}
        />
      )}

      {showStaffModal && (
        <StaffModal
          locationSlug={slug}
          onClose={() => setShowStaffModal(false)}
          onSave={() => {
            setShowStaffModal(false)
            alert('Submitted for approval!')
          }}
        />
      )}
    </div>
  )
}