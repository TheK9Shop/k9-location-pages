import Head from 'next/head';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';

export default function Home() {
  const locations = [
    { slug: 'bohemia', name: 'Bohemia', city: 'Bohemia, NY', phone: '631-619-1888' },
    { slug: 'massapequa', name: 'Massapequa', city: 'Massapequa, NY', phone: '516-400-3729' },
    { slug: 'lynbrook', name: 'Lynbrook', city: 'Lynbrook, NY', phone: '516-612-4534' },
    { slug: 'east-northport', name: 'East Northport', city: 'East Northport, NY', phone: '631-486-1009' },
    { slug: 'manorville', name: 'Manorville', city: 'Manorville, NY', phone: '631-909-3930' },
    { slug: 'greenville', name: 'Greenville', city: 'Greenville, SC', phone: '864-729-8600' },
    { slug: 'naples', name: 'Naples', city: 'Naples, FL', phone: '239-234-6065' },
  ];

  return (
    <>
      <Head>
        <title>Our Locations | The K9 Shop</title>
        <meta name="description" content="Find your local K9 Shop for raw dog food and expert nutrition guidance." />
      </Head>

      <SiteNav />

      <div style={{ background: '#F9F9F7', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif' }}>
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 40px' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: '0.2em', color: '#C0392B', textTransform: 'uppercase', marginBottom: 12 }}>
              Find a Store
            </div>
            <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, color: '#1A1A1A', margin: '0 0 16px 0', letterSpacing: '-0.02em' }}>
              Our Locations
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#555', margin: 0 }}>
              Premium raw dog food and expert guidance at seven locations.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {locations.map((loc) => (
              <div key={loc.slug} style={{ background: '#FFFFFF', border: '1px solid #E5E5E5', borderRadius: 8, padding: 28, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <h2 style={{ fontSize: 22, fontWeight: 900, color: '#1A1A1A', margin: '0 0 8px 0' }}>{loc.name}</h2>
                <p style={{ margin: '0 0 6px 0', color: '#555', fontSize: 15 }}>{loc.city}</p>
                <p style={{ margin: '0 0 20px 0', color: '#555', fontSize: 15 }}>📞 {loc.phone}</p>
                <Link
                  href={`/locations/${loc.slug}`}
                  style={{
                    display: 'block', textAlign: 'center', background: '#C0392B', color: '#FFFFFF',
                    padding: '12px 20px', borderRadius: 4, textDecoration: 'none',
                    fontSize: 12, fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase',
                  }}
                >
                  View Location
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}