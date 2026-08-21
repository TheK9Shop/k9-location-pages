import React from 'react';

export default function Events({ location }) {
  const { events = [] } = location;

  return (
    <div style={{ background: '#f9f9f7', padding: '60px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ fontSize: '11px', fontWeight: '900', color: '#C0392B', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.1em' }}>
            What's Happening
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', color: '#1A1A1A', lineHeight: '1.1', margin: '0 0 24px 0' }}>
            Events & Community
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#444', margin: '0 0 48px 0', maxWidth: '600px' }}>
            From farmers markets to in-store sampling events, we love being part of the {location.name} community. Check back often for upcoming events.
          </p>
        </div>

        {/* Events Grid */}
        {events && events.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {events.map((event) => (
              <div key={event.id} style={{ background: '#FFF', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)' }}>
                {/* Date Header */}
                <div style={{ background: '#1A1A1A', color: '#FFF', padding: '24px', display: 'flex', alignItems: 'flex-end', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '11px', fontWeight: '900', color: '#C0392B', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '0.08em' }}>
                      {event.date.split(' ')[0]}
                    </div>
                    <div style={{ fontSize: '36px', fontWeight: '900', lineHeight: '1', margin: '0' }}>
                      {event.date.split(' ')[1]}
                    </div>
                  </div>
                  <div style={{ fontSize: '13px', color: '#888', fontWeight: '700', marginLeft: 'auto' }}>
                    {event.date.split(' ')[2]}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '24px' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', color: '#888', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.08em' }}>
                    {event.type}
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#1A1A1A', margin: '0 0 12px 0', lineHeight: '1.3' }}>
                    {event.name}
                  </h3>

                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#444', margin: '0 0 20px 0' }}>
                    {event.description}
                  </p>

                  <a href="#" style={{ fontSize: '12px', fontWeight: '900', color: '#C0392B', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'inline-flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 40px', background: '#FFF', borderRadius: '4px' }}>
            <p style={{ fontSize: '16px', color: '#666', margin: 0 }}>No upcoming events at this time. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
