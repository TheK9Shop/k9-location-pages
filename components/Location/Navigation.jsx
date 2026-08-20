import { useState } from 'react';

export default function Navigation({ location }) {
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const hasDoorDash = !['greenville', 'naples'].includes(location?.slug);
  const canShip = true;
  const hasInStorePickup = true;
  const doorDashStoreIds = { bohemia: '23492341', massapequa: '23491028', lynbrook: '23778612', 'east-northport': '25014614', manorville: '28839136' };

  return (
    <nav style={{ background: '#1A1A1A', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
      <a href="https://robertt181.sg-host.com/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img src="/logo.png" alt="K9 Shop" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
      </a>
      <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
        <a href="https://robertt181.sg-host.com/why-raw-2/" style={{ color: '#FFF', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.12em', textDecoration: 'none', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.color = '#C0392B'} onMouseLeave={(e) => e.target.style.color = '#FFF'}>Why Raw?</a>
        <div style={{ position: 'relative' }}>
          <button onMouseEnter={() => setShopDropdownOpen(true)} onMouseLeave={() => setShopDropdownOpen(false)} style={{ color: '#FFF', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.12em', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} onMouseEnter={(e) => e.target.style.color = '#C0392B'} onMouseLeave={(e) => e.target.style.color = '#FFF'}>Shop</button>
          {shopDropdownOpen && (
            <div style={{ position: 'absolute', top: '100%', left: 0, background: '#1A1A1A', border: '1px solid #333', borderRadius: '4px', minWidth: '220px', marginTop: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', zIndex: 1000 }} onMouseEnter={() => setShopDropdownOpen(true)} onMouseLeave={() => setShopDropdownOpen(false)}>
              {hasDoorDash && <a href={`https://www.doordash.com/convenience/store/${doorDashStoreIds[location.slug]}/?pickup=false`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', color: '#FFF', textDecoration: 'none', fontSize: '12px', fontWeight: '600', borderBottom: '1px solid #333' }} onMouseEnter={(e) => e.target.style.background = 'rgba(192, 57, 43, 0.2)'} onMouseLeave={(e) => e.target.style.background = 'transparent'}><span>🏍️</span>Local Delivery</a>}
              {canShip && <a href="https://thek9shop.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', color: '#FFF', textDecoration: 'none', fontSize: '12px', fontWeight: '600', borderBottom: '1px solid #333' }} onMouseEnter={(e) => e.target.style.background = 'rgba(192, 57, 43, 0.2)'} onMouseLeave={(e) => e.target.style.background = 'transparent'}><span>📦</span>Ship to Me</a>}
              {hasInStorePickup && <a href={`/locations/${location.slug}#what-we-carry`} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', color: '#FFF', textDecoration: 'none', fontSize: '12px', fontWeight: '600' }} onMouseEnter={(e) => e.target.style.background = 'rgba(192, 57, 43, 0.2)'} onMouseLeave={(e) => e.target.style.background = 'transparent'}><span>📍</span>In-Store Pickup</a>}
            </div>
          )}
        </div>
        <a href="https://robertt181.sg-host.com/pages/franchise-opportunities" style={{ color: '#FFF', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.12em', textDecoration: 'none', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.color = '#C0392B'} onMouseLeave={(e) => e.target.style.color = '#FFF'}>Franchise</a>
      </div>
      <button style={{ background: '#C0392B', color: '#FFF', padding: '10px 20px', fontSize: '12px', fontWeight: '900', border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.08em' }} onMouseEnter={(e) => e.target.style.background = '#A02E24'} onMouseLeave={(e) => e.target.style.background = '#C0392B'}>Shop Now</button>
    </nav>
  );
}
