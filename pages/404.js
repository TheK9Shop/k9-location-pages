import Link from 'next/link';

export default function Custom404() {
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1 style={{ fontSize: '48px', color: '#c0392b' }}>404</h1>
      <p style={{ fontSize: '18px' }}>Page not found</p>
      <Link href="/" style={{ color: '#c0392b', textDecoration: 'underline' }}>
        Go back home
      </Link>
    </div>
  );
}
