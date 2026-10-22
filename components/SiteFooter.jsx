export default function SiteFooter() {
  const linkStyle = { color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: 13 };
  const headStyle = { fontSize: 14, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 20px 0', color: '#C0392B' };
  const liStyle = { marginBottom: 12 };

  return (
    <footer style={{ width: '100%', background: '#1A1A1A', color: '#FFFFFF', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif', padding: '80px 40px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 48, marginBottom: 48 }}>
          <div>
            <a href="/auth/login" aria-label="Franchisee login" style={{ display: 'inline-block', marginBottom: 12 }}>
              <img
                src="https://robertt181.sg-host.com/wp-content/uploads/2026/08/The-K9-Shop-Logo-1.png"
                alt="The K9 Shop"
                style={{ height: 48, display: 'block' }}
              />
            </a>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', margin: '0 0 20px 0' }}>Franchisee login</p>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: 'rgba(255,255,255,0.8)', margin: 0 }}>
              Premium raw dog food and expert guidance across seven locations.
            </p>
          </div>

          <div>
            <h4 style={headStyle}>Shop</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={liStyle}><a href="https://thek9shop.com/" style={linkStyle}>Shop Online</a></li>
              <li style={liStyle}><a href="https://robertt181.sg-host.com/" style={linkStyle}>Home</a></li>
              <li style={liStyle}><a href="https://k9-location-pages.vercel.app/why-raw" style={linkStyle}>Why Raw?</a></li>
              <li><a href="https://k9-location-pages.vercel.app/" style={linkStyle}>All Locations</a></li>
            </ul>
          </div>

          <div>
            <h4 style={headStyle}>Support</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={liStyle}><a href="https://robertt181.sg-host.com/franchise/" style={linkStyle}>Franchise Opportunities</a></li>
              <li><a href="mailto:info@thek9shop.com" style={linkStyle}>Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 style={headStyle}>Legal</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={liStyle}><a href="https://thek9shop.com/pages/privacy-policy" style={linkStyle}>Privacy Policy</a></li>
              <li style={liStyle}><a href="https://thek9shop.com/pages/terms-conditions" style={linkStyle}>Terms & Conditions</a></li>
              <li style={{ ...liStyle, fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>© 2026 The K9 Shop</li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24, textAlign: 'center' }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', margin: 0 }}>Powered by The K9 Shop | All rights reserved 2026</p>
        </div>
      </div>
    </footer>
  );
}