export default function ContactBanner({ location }) {
  if (!location.contactUrl) return null;

  return (
    <div style={{ background: '#FFF', borderBottom: '1px solid #E5E5E5', padding: '24px 40px', textAlign: 'center' }}>
      <a
        href={location.contactUrl}
        style={{
          display: 'inline-block', background: '#C0392B', color: '#FFF', padding: '12px 28px',
          borderRadius: 4, textDecoration: 'none', fontWeight: 900, fontSize: 13,
          letterSpacing: '0.1em', textTransform: 'uppercase',
        }}
      >
        Contact This Store
      </a>
    </div>
  );
}
