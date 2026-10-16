export default function SiteNav() {
  const links = [
    { label: 'Why Raw?', href: 'https://robertt181.sg-host.com/why-raw/' },
    { label: 'How to Feed', href: 'https://robertt181.sg-host.com/how-to-feed/' },
    { label: 'Locations', href: 'https://k9-location-pages.vercel.app/' },
    { label: 'About Us', href: 'https://robertt181.sg-host.com/about-us/' },
    { label: 'Franchise', href: 'https://robertt181.sg-host.com/franchise/' },
    { label: 'Blog', href: 'https://robertt181.sg-host.com/blog/' },
  ];

  return (
    <nav style={{ background: '#1A1A1A', position: 'sticky', top: 0, zIndex: 9999 }}>
      <div style={{
        maxWidth: 1400, margin: '0 auto', padding: '0 40px', height: 68,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="https://robertt181.sg-host.com/">
          <img
            src="https://robertt181.sg-host.com/wp-content/uploads/2026/08/the_k_9_shop.png"
            alt="The K9 Shop — Real Dogs Eat Raw"
            style={{ height: 40, display: 'block' }}
          />
        </a>
        <div style={{ display: 'flex', gap: 28 }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                color: '#FFFFFF', fontSize: 12, fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="https://thek9shop.com/"
          style={{
            background: '#C0392B', color: '#FFFFFF', padding: '10px 22px',
            fontSize: 12, fontWeight: 900, letterSpacing: '0.1em',
            textTransform: 'uppercase', textDecoration: 'none',
          }}
        >
          Shop Now →
        </a>
      </div>
    </nav>
  );
}