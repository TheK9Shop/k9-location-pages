import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

/**
 * StatusBanner Component
 * Displays urgent closures, hours changes, and other notices at the top of location pages
 * Auto-fetches from Supabase, auto-expires based on end_time
 */

const StatusBanner = ({ locationId, locationSlug }) => {
  const [banner, setBanner] = useState(null);
  const [isExpired, setIsExpired] = useState(false);

  // Initialize Supabase
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  // Fetch active banner for this location
  useEffect(() => {
    const fetchBanner = async () => {
      const { data, error } = await supabase
        .from('status_banners')
        .select('*')
        .eq('location_id', locationId)
        .eq('active', true)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching status banner:', error);
        return;
      }

      if (data) {
        // Check if banner has expired
        const endTime = new Date(data.end_time);
        const now = new Date();

        if (now > endTime) {
          setIsExpired(true);
          return;
        }

        setBanner(data);
      }
    };

    fetchBanner();

    // Subscribe to real-time updates for this location
    const subscription = supabase
      .from(`status_banners:location_id=eq.${locationId}`)
      .on('*', (payload) => {
        if (payload.new?.active) {
          setBanner(payload.new);
          setIsExpired(false);
        } else {
          setBanner(null);
        }
      })
      .subscribe();

    // Check expiration every minute
    const expirationInterval = setInterval(() => {
      if (banner) {
        const endTime = new Date(banner.end_time);
        const now = new Date();
        if (now > endTime) {
          setIsExpired(true);
        }
      }
    }, 60000);

    return () => {
      subscription.unsubscribe();
      clearInterval(expirationInterval);
    };
  }, [locationId, supabase]);

  if (!banner || isExpired) {
    return null;
  }

  // Determine styling based on urgency
  const styles = {
    critical: {
      background: 'linear-gradient(135deg, #C0392B, #A02F23)',
      borderLeft: '5px solid #C0392B',
      icon: '🔴',
    },
    important: {
      background: 'linear-gradient(135deg, #E67E22, #D35400)',
      borderLeft: '5px solid #E67E22',
      icon: '🟠',
    },
    notice: {
      background: 'linear-gradient(135deg, #F39C12, #E67E22)',
      borderLeft: '5px solid #F39C12',
      icon: '🟡',
    },
  };

  const style = styles[banner.urgency] || styles.notice;

  // Format end time for display
  const endTime = new Date(banner.end_time);
  const endTimeDisplay = endTime.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div
      style={{
        backgroundColor: style.background,
        borderLeft: style.borderLeft,
        color: '#FFFFFF',
        padding: '18px 28px',
        marginBottom: '32px',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      {/* Left: Message */}
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '6px',
          }}
        >
          <span style={{ fontSize: '1.4rem' }}>{style.icon}</span>
          <strong style={{ fontSize: '1.05rem', fontWeight: '900' }}>
            {getBannerTitle(banner.banner_type)}
          </strong>
        </div>
        <p
          style={{
            fontSize: '0.95rem',
            margin: '0',
            lineHeight: '1.5',
            opacity: 0.95,
          }}
        >
          {banner.message}
        </p>
      </div>

      {/* Right: Expiration info */}
      <div
        style={{
          textAlign: 'right',
          borderLeft: '1px solid rgba(255,255,255,0.3)',
          paddingLeft: '20px',
          minWidth: '140px',
          fontSize: '0.85rem',
        }}
      >
        <div style={{ opacity: 0.8, marginBottom: '4px' }}>Expires:</div>
        <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>
          {endTimeDisplay}
        </div>
      </div>
    </div>
  );
};

/**
 * Helper function to get user-friendly banner title
 */
function getBannerTitle(bannerType) {
  const titles = {
    closed: 'We are Closed',
    closed_week: 'We are Closed This Week',
    hours_changed: 'Today\'s Hours Are Different',
    delayed_opening: 'Delayed Opening Today',
    early_closure: 'Early Closure Today',
    notice: 'Important Notice',
    custom: 'Notice',
  };
  return titles[bannerType] || 'Notice';
}

export default StatusBanner;
