import React from 'react';

export default function FeaturedProducts({ location }) {
  const { featuredProducts = [] } = location;

  return (
    <div id="products" style={{ background: '#FFF', padding: '60px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '60px' }}>
          <div style={{ fontSize: '11px', fontWeight: '900', color: '#C0392B', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.1em' }}>
            Featured
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', color: '#1A1A1A', lineHeight: '1.1', margin: '0 0 24px 0' }}>
            Featured Products
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#444', margin: '0 0 48px 0', maxWidth: '600px' }}>
            Special products that {location.name} carries. Handpicked by our team.
          </p>
        </div>

        {featuredProducts && featuredProducts.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  background: '#f9f9f7',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                }}
              >
                {/* Product Image Placeholder */}
                <div
                  style={{
                    width: '100%',
                    height: '250px',
                    background: 'linear-gradient(135deg, #C0392B 0%, #e74c3c 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '48px',
                  }}
                >
                  📦
                </div>

                {/* Product Info */}
                <div style={{ padding: '24px' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', color: '#888', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.08em' }}>
                    {product.brand}
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#1A1A1A', margin: '0 0 12px 0', lineHeight: '1.3' }}>
                    {product.name}
                  </h3>

                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#444', margin: '0' }}>
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px', background: '#f9f9f7', borderRadius: '4px' }}>
            <p style={{ fontSize: '16px', color: '#666', margin: 0 }}>Featured products coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
}
