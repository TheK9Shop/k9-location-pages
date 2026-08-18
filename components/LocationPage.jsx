import Head from 'next/head';
import Link from 'next/link';

export default function LocationPage({ location }) {
  if (!location) return <div>Location not found</div>;

  return (
    <>
      <Head>
        <title>{location.name} — The K9 Shop</title>
      </Head>
      <nav style={{ padding: '15px 20px', borderBottom: '1px solid #ddd' }}>
        <Link href="/" style={{ color: '#c0392b', fontSize: '20px', fontWeight: 'bold' }}>🐾 K9 Shop</Link>
      </nav>
      <div style={{ background: '#c0392b', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <h1>{location.name}</h1>
        <p>{location.city_state}</p>
      </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <h2>📍 {location.address}</h2>
        <p>📞 <a href={`tel:${location.phone}`} style={{ color: '#c0392b' }}>{location.phone}</a></p>
        <p>🕐 M-F: {location.hours.monday_friday} | Sat: {location.hours.saturday} | Sun: {location.hours.sunday}</p>
        <h3 style={{ marginTop: '30px' }}>Our Story</h3>
        <p>{location.story}</p>
        {location.team && location.team.length > 0 && (
          <>
            <h3 style={{ marginTop: '30px' }}>Meet Our Team</h3>
            {location.team.map((member, idx) => (
              <div key={idx} style={{ background: '#f9f9f7', padding: '15px', borderRadius: '4px', marginBottom: '10px' }}>
                <strong>{member.name}</strong> - {member.role} <br /> {member.bio}
              </div>
            ))}
          </>
        )}
        {location.products && location.products.length > 0 && (
          <>
            <h3 style={{ marginTop: '30px' }}>Featured Products</h3>
            {location.products.map((product, idx) => (
              <div key={idx} style={{ background: '#f9f9f7', padding: '15px', borderRadius: '4px', marginBottom: '10px' }}>
                <strong>{product.brand} - {product.name}</strong> <br /> {product.reason}
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}
