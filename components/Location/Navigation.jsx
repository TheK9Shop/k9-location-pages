import { useState } from 'react';

export default function Navigation({ location }) {
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  const navStyle = {
    background: '#1A1A1A',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '68px',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
  };

  const containerStyle = {
    width: '100%',
    maxWidth: '1200px',
    padding: '0 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const linkStyle = {
    color: '#FFF',
    fontSize: '12px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <a href="https://robertt181.sg-host.com/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="K9 Shop" style={{ height: '48px', width: 'auto' }} />
        </a>
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          <a href="https://robertt181.sg-host.com/why-raw-2/" style={linkStyle}>Why Raw?</a>
          <div style={{ position: 'relative' }} onMouseEnter={() => setShopDropdownOpen(true)} onMouseLeave={() => setShopDropdownOpen(false)}>
            <button style={{ ...linkStyle, background: 'none', border: 'none', padding: 0, color: shopDropdownOpen ? '#C0392B' : '#FFF' }}>Shop</button>
            {shopDropdownOpen && (
              <div style={{ position: 'absolute', top: '100%', right: 0, background: '#2A2A2A', minWidth: '180px', borderRadius: '4px', marginTop: '8px' }}>
                <a href="https://robertt181.sg-host.com/shop/" style={{ display: 'block', padding: '12px 16px', color: '#FFF', textDecoration: 'none', fontSize: '12px' }}>All Products</a>
                <a href="https://robertt181.sg-host.com/raw-food/" style={{ display: 'block', padding: '12px 16px', color: '#FFF', textDecoration: 'none', fontSize: '12px' }}>Raw Food</a>
                <a href="https://robertt181.sg-host.com/treats/" style={{ display: 'block', padding: '12px 16px', color: '#FFF', textDecoration: 'none', fontSize: '12px' }}>Treats</a>
              </div>
            )}
          </div>
          <a href="https://robertt181.sg-host.com/franchise/" style={linkStyle}>Franchise</a>
          <a href="https://robertt181.sg-host.com/shop/" style={{ background: '#C0392B', color: '#FFF', padding: '10px 20px', borderRadius: '4px', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', textDecoration: 'none', cursor: 'pointer', border: 'none' }}>Shop Now</a>
        </div>
      </div>
    </nav>
  );
}