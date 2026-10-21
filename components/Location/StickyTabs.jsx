import { useEffect, useState } from 'react';

// Site nav (68px) plus this tab bar (about 52px), with room to spare
const OFFSET = 130;

export default function StickyTabs({ tabs }) {
  const [activeId, setActiveId] = useState(tabs[0]?.target);

  useEffect(() => {
    const onScroll = () => {
      let current = tabs[0]?.target;
      tabs.forEach((tab) => {
        const el = document.getElementById(tab.target);
        if (el && el.getBoundingClientRect().top <= OFFSET + 20) current = tab.target;
      });
      setActiveId(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [tabs]);

  const goTo = (target) => {
    const el = document.getElementById(target);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const outerStyle = {
    background: '#FFF',
    borderBottom: '2px solid #1A1A1A',
    position: 'sticky',
    top: '68px',
    zIndex: 90,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  };

  const containerStyle = {
    maxWidth: '1200px',
    padding: '0 40px',
    display: 'flex',
    gap: 0,
    width: '100%',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
  };

  const buttonStyle = {
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    padding: '16px 20px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    transition: 'color 0.18s',
    fontFamily: 'inherit',
    flexShrink: 0,
  };

  return (
    <div style={outerStyle}>
      <div style={containerStyle}>
        {tabs.map((tab) => {
          const active = activeId === tab.target;
          return (
            <button
              key={tab.target}
              onClick={() => goTo(tab.target)}
              style={{
                ...buttonStyle,
                color: active ? '#C0392B' : '#888',
                borderBottom: active ? '2px solid #C0392B' : '2px solid transparent',
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}