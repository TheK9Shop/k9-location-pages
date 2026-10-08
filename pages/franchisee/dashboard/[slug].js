import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import supabase from '../../../lib/supabase';
import ClosureModal from '../../../components/EditModals/ClosureModal';
import styles from '../../../styles/Dashboard.module.css';

export default function Dashboard() {
  const router = useRouter();
  const { slug } = router.query;
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showClosureModal, setShowClosureModal] = useState(false);

  useEffect(() => {
    if (!slug) return;
    
    // Check for session token in localStorage
    const token = localStorage.getItem('session_token');
    if (!token) {
      router.push('/auth/login');
      return;
    }
    
    loadDashboard();
  }, [slug, router]);

  const loadDashboard = async () => {
    // TODO: Verify session token from localStorage
    // TODO: Load location data from Supabase
    setAccount({ location_slug: slug, role: 'manager' });
    setLoading(false);
  };

  if (loading) return <div>Loading...</div>;

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
          <button>Edit</button>
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
            setShowClosureModal(false);
            alert('Submitted for approval!');
          }}
        />
      )}
    </div>
  );
}