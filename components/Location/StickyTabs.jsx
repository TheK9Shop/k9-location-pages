import React, { useState } from 'react';

export default function StickyTabs({ activeTab = 'about', onTabChange }) {
  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events' },
    { id: 'products', label: 'Products' },
    { id: 'gallery', label: 'Gallery' },
  ];

  return (
    <div style={{ background: '#FFF', borderBottom: '2px solid #1A1A1A', position: 'sticky', top: '68px', zIndex: 90 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', display: 'flex', gap: 0 }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange && onTabChange(tab.id)}
            style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: activeTab === tab.id ? '#C0392B' : '#888', padding: '16px 20px', border: 'none', background: 'none', cursor: 'pointer', borderBottom: activeTab === tab.id ? '2px solid #C0392B' : '2px solid transparent', transition: 'color 0.18s', fontFamily: 'inherit' }}
            onMouseEnter={(e) => { if (activeTab !== tab.id) e.target.style.color = '#C0392B'; }}
            onMouseLeave={(e) => { if (activeTab !== tab.id) e.target.style.color = '#888'; }}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
