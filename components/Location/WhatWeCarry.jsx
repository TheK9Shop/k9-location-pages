import React, { useState } from 'react';
import { SHOPIFY_URL } from '@/config/shopifyUrl';
import { doordashUrls, hasDoordash, doordashStatus } from '@/config/doordashUrls';

export default function WhatWeCarry({ location }) {
  const { brands = {} } = location;
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const categories = [
    { id: 'food', label: 'Raw Food', icon: '🥩' },
    { id: 'treats', label: 'Treats & Chews', icon: '🦴' },
    { id: 'supplements', label: 'Supplements & Wellness', icon: '💊' },
  ];

  const getBrandsByCategory = (categoryId) => {
    return brands[categoryId] || [];
  };

  const handleBrandClick = (e, brand) => {
    e.preventDefault();
    setSelectedBrand(brand);
    setShowModal(true);
  };

  const handleFulfillmentOption = (option) => {
    if (!selectedBrand) return;

    const brand = selectedBrand;
    let url = '';

    switch (option) {
      case 'doordash':
        url = doordashUrls[location.slug]?.url;
        if (url) window.open(url, '_blank');
        break;

      case 'ship':
        url = `${SHOPIFY_URL}/search?q=${brand.name}`;
        window.open(url, '_blank');
        break;

      case 'pickup':
      case 'browse':
        url = `https://instore-pickup.replit.app/instore/brand?location=${encodeURIComponent(location.slug)}&brand=${encodeURIComponent(brand.slug)}`;
        window.open(url, '_blank');
        break;
    }

    setShowModal(false);
  };

  const doordashAvailable = hasDoordash(location.slug);
  const doordashState = doordashStatus(location.slug);

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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {categories.map((category) => {
            const categoryBrands = getBrandsByCategory(category.id);
            const isExpanded = expandedCategory === category.id;
            const visibleBrands = isExpanded ? categoryBrands : categoryBrands.slice(0, 6);

            return (
              <div key={category.id}>
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '900', color: '#1A1A1A', textTransform: 'uppercase', margin: '0 0 4px 0', letterSpacing: '0.08em' }}>
                    {category.icon} {category.label}
                  </h3>
                  <div style={{ width: '40px', height: '2px', background: '#C0392B' }}></div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
                  {visibleBrands.map((brand) => (
                    <button key={brand.id} onClick={(e) => handleBrandClick(e, brand)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '1', background: '#FFF', border: '1px solid #E5E5E5', borderRadius: '4px', cursor: 'pointer', textDecoration: 'none', transition: 'all 0.2s', padding: '12px', textAlign: 'center', overflow: 'hidden' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C0392B'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(192, 57, 43, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E5E5E5'; e.currentTarget.style.boxShadow = 'none'; }} title={brand.name}>
                      <img src={brand.logo} alt={brand.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </button>
                  ))}
                </div>

                {categoryBrands.length > 6 && (
                  <button onClick={() => setExpandedCategory(isExpanded ? null : category.id)} style={{ background: 'none', border: 'none', fontSize: '12px', fontWeight: '900', color: '#C0392B', textTransform: 'uppercase', letterSpacing: '0.08em', cursor: 'pointer', padding: '0' }}>
                    {isExpanded ? '← Show Less' : `More (${categoryBrands.length - 6}+) →`}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Fulfillment Modal */}
      {showModal && selectedBrand && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#FFF', borderRadius: '8px', padding: '40px', maxWidth: '500px', width: '90%', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}>
            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '900', color: '#1A1A1A', margin: '0 0 8px 0' }}>
                {selectedBrand.name}
              </h2>
              <p style={{ fontSize: '14px', color: '#666', margin: '0' }}>
                How would you like to shop?
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px', marginBottom: '24px' }}>
              {/* DoorDash Option */}
              {doordashAvailable && (
                <button onClick={() => handleFulfillmentOption('doordash')} style={{ padding: '16px', border: '2px solid #E5E5E5', borderRadius: '6px', background: '#FFF', cursor: 'pointer', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C0392B'; e.currentTarget.style.background = '#FFF8F6'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E5E5E5'; e.currentTarget.style.background = '#FFF'; }}>
                  🚗 Local Delivery (DoorDash)
                </button>
              )}

              {doordashState === 'coming_soon' && (
                <button disabled style={{ padding: '16px', border: '2px solid #E5E5E5', borderRadius: '6px', background: '#F5F5F5', cursor: 'not-allowed', fontSize: '16px', fontWeight: '600', color: '#999' }}>
                  🚗 Local Delivery (Coming Soon)
                </button>
              )}

              {/* Ship to Me Option */}
              <button onClick={() => handleFulfillmentOption('ship')} style={{ padding: '16px', border: '2px solid #E5E5E5', borderRadius: '6px', background: '#FFF', cursor: 'pointer', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C0392B'; e.currentTarget.style.background = '#FFF8F6'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E5E5E5'; e.currentTarget.style.background = '#FFF'; }}>
                📦 Ship to Me (Shopify)
              </button>

              {/* In-Store Pickup Option */}
              <button onClick={() => handleFulfillmentOption('pickup')} style={{ padding: '16px', border: '2px solid #E5E5E5', borderRadius: '6px', background: '#FFF', cursor: 'pointer', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C0392B'; e.currentTarget.style.background = '#FFF8F6'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E5E5E5'; e.currentTarget.style.background = '#FFF'; }}>
                🏪 In-Store Pickup (Reserve Now)
              </button>

              {/* Just Browsing Option */}
              <button onClick={() => handleFulfillmentOption('browse')} style={{ padding: '16px', border: '2px solid #E5E5E5', borderRadius: '6px', background: '#FFF', cursor: 'pointer', fontSize: '16px', fontWeight: '600', color: '#1A1A1A', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C0392B'; e.currentTarget.style.background = '#FFF8F6'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E5E5E5'; e.currentTarget.style.background = '#FFF'; }}>
                Just browsing — view this store's products
              </button>
            </div>

            <button onClick={() => setShowModal(false)} style={{ width: '100%', padding: '12px', border: 'none', borderRadius: '6px', background: '#F0F0F0', cursor: 'pointer', fontSize: '14px', fontWeight: '600', color: '#666' }}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
