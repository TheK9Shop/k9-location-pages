import Head from 'next/head';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>Blog Post — The K9 Shop</title>
      </Head>
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Link href="/blog" style={{ color: '#c0392b', marginBottom: '20px', display: 'block' }}>← Back to Blog</Link>
        <h1 style={{ color: '#c0392b' }}>Blog Post</h1>
        <p>Blog post content coming soon!</p>
      </div>
    </>
  );
}
