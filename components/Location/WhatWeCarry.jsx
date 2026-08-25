import React, { useState } from 'react';

export default function WhatWeCarry({ location }) {
  const { brands = {} } = location;
  const [expandedCategory, setExpandedCategory] = useState(null);

  const categories = [
    { id: 'food', label: 'Raw Food', icon: '🥩' },
    { id: 'treats', label: 'Treats & Chews', icon: '🦴' },
    { id: 'supplements', label: 'Supplements & Wellness', icon: '💊' },
  ];

  const getBrandsByCategory = (categoryId) => {
    return brands[categoryId] || [];
  };

  return (
    <div id="gallery" style={{ background: '#f9f9f7', padding: '60px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '60px' }}>
          <div style={{ fontSize: '11px', fontWeight: '900', color: '#C0392B', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.1em' }}>
            Trusted Partners
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', color: '#1A1A1A', lineHeight: '1.1', margin: '0 0 24px 0' }}>
            What We Carry
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#444', margin: '0 0 48px 0', maxWidth: '600px' }}>
            We partner with the best raw, natural, and wellness brands. Every product on our shelves is chosen because we believe in it and feed it to our own dogs.
          </p>
        </div>

        {/* Categories */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {categories.map((category) => {
            const categoryBrands = getBrandsByCategory(category.id);
            const isExpanded = expandedCategory === category.id;
            const visibleBrands = isExpanded ? categoryBrands : categoryBrands.slice(0, 6);

            return (
              <div key={category.id}>
                {/* Category Header */}
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '900', color: '#1A1A1A', textTransform: 'uppercase', margin: '0 0 4px 0', letterSpacing: '0.08em' }}>
                    {category.icon} {category.label}
                  </h3>
                  <div style={{ width: '40px', height: '2px', background: '#C0392B' }}></div>
                </div>

                {/* Brands Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
                  {visibleBrands.map((brand) => (
                    
                      key={brand.id}
                      href={`https://instore-pickup.replit.app/instore/brand?location=${location.slug}&brand=${brand.slug}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        aspect: '1',
                        background: '#FFF',
                        border: '1px solid #E5E5E5',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                        padding: '12px',
                        textAlign: 'center',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#C0392B';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(192, 57, 43, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#E5E5E5';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      title={brand.name}
                    >
                      <span style={{ fontSize: '32px', lineHeight: '1' }}>{brand.logo}</span>
                    </a>
                  ))}
                </div>

                {/* More Button */}
                {categoryBrands.length > 6 && (
                  <button
                    onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '12px',
                      fontWeight: '900',
                      color: '#C0392B',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      cursor: 'pointer',
                      padding: '0',
                    }}
                  >
                    {isExpanded ? '← Show Less' : `More (${categoryBrands.length - 6}+) →`}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
