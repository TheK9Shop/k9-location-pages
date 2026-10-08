import React from 'react';

export default function About({ location }) {
  const { name, address, email, story, vision, coreValues, team = [] } = location;

  return (
    <div style={{ background: '#f9f9f7', padding: '60px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '60px' }}>
          <div style={{ fontSize: '14px', fontWeight: '900', color: '#C0392B', textTransform: 'uppercase', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '24px', height: '2px', background: '#C0392B' }}></span>
            OUR STORY
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', color: '#1A1A1A', lineHeight: '1.1', margin: '0 0 40px 0' }}>
            About The K9 Shop {name.split('—')[1]?.trim() || name}
          </h2>
        </div>

        <div style={{ marginBottom: '60px' }}>
          <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#444', margin: '0 0 24px 0' }}>
            {story}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginBottom: '60px' }}>
          <div>
            <div style={{ marginBottom: '40px' }}>
              <div style={{ fontSize: '14px', fontWeight: '900', color: '#C0392B', textTransform: 'uppercase', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '24px', height: '2px', background: '#C0392B' }}></span>
                OUR MISSION
              </div>
              <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#444', margin: '0 0 24px 0' }}>
                {story}
              </p>
            </div>

            <div style={{ marginBottom: '40px' }}>
              <div style={{ fontSize: '14px', fontWeight: '900', color: '#C0392B', textTransform: 'uppercase', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '24px', height: '2px', background: '#C0392B' }}></span>
                OUR VISION
              </div>
              <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#444', margin: '0 0 24px 0' }}>
                {vision}
              </p>
            </div>

            <div style={{ marginBottom: '40px' }}>
              <div style={{ fontSize: '14px', fontWeight: '900', color: '#C0392B', textTransform: 'uppercase', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '24px', height: '2px', background: '#C0392B' }}></span>
                OUR CORE VALUES
              </div>
              <ul style={{ fontSize: '16px', lineHeight: '1.7', color: '#444', margin: '0', paddingLeft: '20px' }}>
                {coreValues && coreValues.map((value, idx) => (
                  <li key={idx} style={{ marginBottom: '8px' }}>{value}</li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '40px' }}>
              <a href={`https://maps.google.com/?q=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px 28px', background: '#C0392B', color: '#FFF', border: 'none', borderRadius: '4px', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', textDecoration: 'none', cursor: 'pointer', transition: 'background 0.2s' }} onMouseEnter={(e) => e.target.style.background = '#a93226'} onMouseLeave={(e) => e.target.style.background = '#C0392B'}>
                📍 Get Directions
              </a>
              <a href={`mailto:${email}`} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px 28px', background: '#FFF', color: '#C0392B', border: '2px solid #C0392B', borderRadius: '4px', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.target.style.background = '#C0392B'; e.target.style.color = '#FFF'; }} onMouseLeave={(e) => { e.target.style.background = '#FFF'; e.target.style.color = '#C0392B'; }}>
                ✉️ Email Us
              </a>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1A1A1A', marginBottom: '32px' }}>Our Team</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {team && team.length > 0 ? (
                team.map((member) => (
                  <div key={member.id} style={{ background: '#FFF', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', transition: 'transform 150ms, box-shadow 150ms' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 16px rgba(0, 0, 0, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)'; }}>
                    <div style={{ width: '100%', height: '180px', background: 'linear-gradient(135deg, #C0392B 0%, #e74c3c 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '72px' }}>
                      👤
                    </div>
                    <div style={{ padding: '20px' }}>
                      <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '700', color: '#1A1A1A' }}>
                        {member.name}
                      </h4>
                      <div style={{ fontSize: '12px', color: '#C0392B', fontWeight: '700', textTransform: 'uppercase', marginBottom: '12px' }}>
                        {member.role}
                      </div>
                      <p style={{ fontSize: '14px', lineHeight: '1.5', margin: '0', color: '#444' }}>
                        {member.bio}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>Team members coming soon.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}