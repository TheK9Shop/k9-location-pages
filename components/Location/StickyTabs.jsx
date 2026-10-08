import React, { useState } from 'react';

export default function StickyTabs({ activeTab = 'about', onTabChange }) {
  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events' },
    { id: 'products', label: 'Products' },
    { id: 'gallery', label: 'Gallery' },
  ];

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
  };

  return (
    <div style={outerStyle}>
      <div style={containerStyle}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange && onTabChange(tab.id)}
            style={{
              ...buttonStyle,
              color: activeTab === tab.id ? '#C0392B' : '#888',
              borderBottom: activeTab === tab.id ? '2px solid #C0392B' : '2px solid transparent',
            }}
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