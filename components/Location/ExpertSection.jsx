import ExpertCard from './ExpertCard';

// Only these people appear in the Expert section, per store
const EXPERT_NAMES = {
  bohemia: ['Elana Gold'],
  massapequa: ['Frankie', 'Lina'],
};

export default function ExpertSection({ location }) {
  const names = EXPERT_NAMES[location.slug];
  if (!names) return null;

  const experts = (location.team || []).filter((m) => names.includes(m.name));
  if (experts.length === 0) return null;

  return (
    <section id="expert" style={{ background: '#F9F9F7', padding: '80px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: '0.2em', color: '#C0392B', textTransform: 'uppercase', marginBottom: 12 }}>
            Expert Guidance
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, color: '#1A1A1A', margin: '0 0 16px 0' }}>
            Book a Nutrition Consultation
          </h2>
          <p style={{ fontSize: 16, color: '#555', margin: 0 }}>
            Talk one-on-one with our team about your dog's diet.
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24 }}>
          {experts.map((e) => (
            <ExpertCard key={e.name} expert={e} storePhone={location.phone} />
          ))}
        </div>
      </div>
    </section>
  );
}