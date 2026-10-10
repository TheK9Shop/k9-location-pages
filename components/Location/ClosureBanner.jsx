import { useEffect, useState } from 'react'
import styles from '../../styles/ClosureBanner.module.css'

export default function ClosureBanner({ locationSlug }) {
  const [closure, setClosure] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchClosureStatus()
  }, [locationSlug])

  const fetchClosureStatus = async () => {
    try {
      const { supabase } = await import('@/lib/supabase')
      
      const { data, error } = await supabase
        .from('location_edits')
        .select('new_value')
        .eq('location_slug', locationSlug)
        .eq('field_name', 'closure_banner')
        .eq('status', 'approved')
        .order('approved_at', { ascending: false })
        .limit(1)

      if (!error && data && data.length > 0) {
        try {
          // Handle double-escaped JSON
          let closureData = JSON.parse(data[0].new_value)
          if (typeof closureData === 'string') {
            closureData = JSON.parse(closureData)
          }
          
          // Check if store is closed (is_open = false)
          if (closureData.is_open === false) {
            setClosure(closureData)
          }
        } catch (parseError) {
          console.error('Error parsing closure data:', parseError)
        }
      }
    } catch (e) {
      console.error('Error fetching closure status:', e)
    } finally {
      setLoading(false)
    }
  }

  if (loading || !closure) {
    return null
  }

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.header}>
          <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
          <h2>Store Closed</h2>
        </div>
        
        {closure.message && (
          <p className={styles.message}>{closure.message}</p>
        )}
        
        {closure.reopens_at && (
          <p className={styles.reopens}>
            Reopens: <strong>{new Date(closure.reopens_at).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</strong>
          </p>
        )}
      </div>
    </div>
  )
}