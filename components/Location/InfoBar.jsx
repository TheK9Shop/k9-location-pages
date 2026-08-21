export default function InfoBar({ location }) {
  const getTodayHours = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    
    if (today === 0) return location.hours.sunday;
    if (today === 6) return location.hours.weekend;
    return location.hours.weekday;
  };

  return (
    <div style={{ background: '#1A1A1A', padding: '28px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
        <div style={{ paddingRight: '24px', borderRight: '1px solid #333' }}>
          <div style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.18em', color: '#666', textTransform: 'uppercase', marginBottom: '6px' }}>Address</div>
          <div style={{ fontSize: '14px', fontWeight: '700', color: '#FFF', lineHeight: '1.4' }}>{location.address}</div>
        </div>
        <div style={{ padding: '0 24px', borderRight: '1px solid #333' }}>
          <div style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.18em', color: '#666', textTransform: 'uppercase', marginBottom: '6px' }}>Phone</div>
          <a href={`tel:${location.phone}`} style={{ fontSize: '14px', fontWeight: '700', color: '#C0392B', lineHeight: '1.4', textDecoration: 'none' }}>{location.phone}</a>
        </div>
        <div style={{ padding: '0 24px', borderRight: '1px solid #333' }}>
          <div style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.18em', color: '#666', textTransform: 'uppercase', marginBottom: '6px' }}>Hours</div>
          <div style={{ fontSize: '12px', fontWeight: '700', color: '#C0392B', lineHeight: '1.5', marginBottom: '4px' }}>Today: {getTodayHours()}</div>
          <div style={{ fontSize: '11px', fontWeight: '600', color: '#FFF', lineHeight: '1.4' }}>M-F: {location.hours.weekday}<br/>Sat: {location.hours.weekend}<br/>Sun: {location.hours.sunday}</div>
        </div>
        <div style={{ paddingLeft: '24px' }}>
          <div style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.18em', color: '#666', textTransform: 'uppercase', marginBottom: '6px' }}>Email</div>
          <a href={`mailto:${location.email}`} style={{ fontSize: '14px', fontWeight: '700', color: '#C0392B', lineHeight: '1.4', textDecoration: 'none' }}>{location.email}</a>
        </div>
      </div>
    </div>
  );
}
