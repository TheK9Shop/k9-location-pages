import Head from 'next/head';
import Link from 'next/link';

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
        <title>The K9 Shop — Premium Raw Dog Food</title>
        <meta name="description" content="Find your local K9 Shop for raw dog food and expert nutrition guidance." />
      </Head>
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', color: '#c0392b', marginBottom: '10px' }}>🐾 The K9 Shop</h1>
        <p style={{ textAlign: 'center', fontSize: '18px', marginBottom: '40px' }}>Premium Raw Dog Food & Expert Guidance</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {locations.map(loc => (
            <div key={loc.slug} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px' }}>
              <h2 style={{ color: '#c0392b', margin: '0 0 10px 0' }}>{loc.name}</h2>
              <p style={{ margin: '0 0 5px 0' }}><strong>{loc.city}</strong></p>
              <p style={{ margin: '0 0 15px 0' }}>📞 {loc.phone}</p>
              <Link href={`/locations/${loc.slug}`} style={{ color: 'white', background: '#c0392b', padding: '10px 20px', borderRadius: '4px', textDecoration: 'none', display: 'block', textAlign: 'center' }}>
                View Location
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
