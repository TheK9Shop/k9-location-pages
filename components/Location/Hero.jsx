import React from 'react';

export default function Hero({ location }) {
  const { name, state, title, address, phone, heroImage, attributes = [] } = location;

  return (
    <div style={{ position: 'relative', background: '#1A1A1A', overflow: 'hidden', height: '350px', width: '100%' }}>
      {heroImage && <img src={heroImage} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.5 }} />}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 100%)' }}></div>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: '48px 60px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{ maxWidth: '700px' }}>
          <a href="/locations" style={{ fontSize: '11px', fontWeight: '700', color: '#888', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#C0392B'} onMouseLeave={(e) => e.target.style.color = '#888'}>&larr; All Locations</a>
          <div style={{ fontSize: '11px', fontWeight: '900', color: '#C0392B', textTransform: 'uppercase', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ width: '24px', height: '2px', background: '#C0392B' }}></span>{name}, {state}</div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', color: '#FFF', lineHeight: '1.1', margin: '0 0 14px 0' }}>{title}</h1>
          <p style={{ fontSize: '14px', color: '#AAA', margin: '0 0 20px 0' }}>{address} · <a href={`tel:${phone}`} style={{ color: '#C0392B', textDecoration: 'none' }}>{phone}</a></p>
          {attributes.length > 0 && <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>{attributes.map((attr, idx) => <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 16px', border: '1px solid #555', borderRadius: '4px', fontSize: '12px', fontWeight: '600', color: '#FFF', backgroundColor: 'rgba(255, 255, 255, 0.08)' }}>{attr.icon && <i className={`ti ${attr.icon}`} style={{ fontSize: '16px' }} />}{attr.text}</div>)}</div>}
        </div>
      </div>
    </div>
  );
}