export default function ExpertCard({ expert, storePhone }) {
    const initials = expert.initials || (
    expert.name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase()
  );

  const hasBooking = Boolean(expert.bookingUrl);
  const bookingHref = hasBooking ? expert.bookingUrl : `tel:${storePhone.replace(/[^0-9+]/g, '')}`;
  const bookingLabel = hasBooking ? 'Book a Consultation' : 'Call to Book a Consultation';

  return (
    <div style={{ background: '#FFF', border: '1px solid #E5E5E5', borderRadius: 8, padding: 28, textAlign: 'center', maxWidth: 320 }}>
      {expert.image ? (
        <img
          src={expert.image}
          alt={expert.name}
          style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 16px' }}
        />
      ) : (
        <div
          aria-label={expert.name}
          style={{
            width: 120, height: 120, borderRadius: '50%', margin: '0 auto 16px',
            background: '#1A1A1A', color: '#FFF', display: 'flex',
            alignItems: 'center', justifyContent: 'center', fontSize: 36, fontWeight: 900,
          }}
        >
          {initials}
        </div>
      )}
      <h3 style={{ fontSize: 20, fontWeight: 900, color: '#1A1A1A', margin: '0 0 6px 0' }}>{expert.name}</h3>
      <p style={{ fontSize: 13, color: '#C0392B', fontWeight: 700, margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{expert.role}</p>
      <p style={{ fontSize: 14, color: '#555', lineHeight: 1.6, margin: '0 0 20px 0' }}>{expert.bio}</p>
      <a
        href={bookingHref}
        target={hasBooking ? '_blank' : undefined}
        rel={hasBooking ? 'noopener noreferrer' : undefined}
        style={{
          display: 'block', background: '#C0392B', color: '#FFF', padding: '12px 20px',
          borderRadius: 4, textDecoration: 'none', fontWeight: 900, fontSize: 12,
          letterSpacing: '0.1em', textTransform: 'uppercase',
        }}
      >
        {bookingLabel}
      </a>
    </div>
  );
}