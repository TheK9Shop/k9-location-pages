import { useState } from 'react';
import styles from '@/styles/Location.module.css';

// DoorDash convenience-store links per location (null = no delivery at that store)
const DOORDASH = {
  bohemia: 'https://www.doordash.com/convenience/store/23492341/?pickup=false',
  massapequa: 'https://www.doordash.com/convenience/store/23491028/?pickup=false',
  lynbrook: 'https://www.doordash.com/convenience/store/23778612/?pickup=false',
  'east-northport': 'https://www.doordash.com/convenience/store/25014614/?pickup=false',
  manorville: 'https://www.doordash.com/convenience/store/28839136/?pickup=false',
  greenville: null,
  naples: null,
};

const SHOPIFY_SEARCH = 'https://thek9shop.com/search?q=';
const CATALOG = 'https://instore-pickup.replit.app/instore/brand';

const SECTIONS = [
  { key: 'food', title: 'Food' },
  { key: 'treats', title: 'Treats & Chews' },
  { key: 'supplements', title: 'Supplements & Wellness' },
];

const sectionTitleStyle = {
  fontSize: '1.4rem',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: '#1A1A1A',
  margin: '40px 0 28px',
  paddingBottom: '12px',
  borderBottom: '2px solid #C0392B',
  display: 'inline-block',
};

const brandNameStyle = {
  textAlign: 'center',
  fontSize: '0.9rem',
  fontWeight: 600,
  color: '#555',
  margin: '8px 0 0',
  lineHeight: 1.4,
};

export default function WhatWeCarry({ location }) {
  // selected = { brand, category } when a brand card is open
  const [selected, setSelected] = useState(null);

  if (!location) return null;

  const locSlug = location.slug;

  const pickupUrl = (brand, category) => {
    const u = new URL(CATALOG);
    u.searchParams.set('location', locSlug);
    u.searchParams.set('brand', brand.slug);
    u.searchParams.set('category', category);
    return u.toString();
  };

  const browseUrl = (brand) => {
    const u = new URL(CATALOG);
    u.searchParams.set('location', locSlug);
    u.searchParams.set('brand', brand.slug);
    return u.toString();
  };

  const closeModal = () => setSelected(null);

  return (
    <section id="what-we-carry" className={styles.whatWeCarrySection}>
      <div className={styles.whatWeCarryContainer}>
        <div className={styles.whatWeCarryHeader}>
          <h2>What We Carry</h2>
          <p>Premium brands for your pet's health</p>
        </div>

        {SECTIONS.map(({ key, title }) => {
          const items = location.brands?.[key] || [];
          if (items.length === 0) return null;

          return (
            <div key={key}>
              <h3 style={sectionTitleStyle}>{title}</h3>
              <div className={styles.brandGrid}>
                {items.map((brand) => (
                  <div key={`${key}-${brand.id}`}>
                    <button
                      type="button"
                      className={styles.brandCard}
                      onClick={() => setSelected({ brand, category: key })}
                      style={{ width: '100%' }}
                    >
                      <div className={styles.brandLogo}>
                        <img src={brand.logo} alt={brand.name} />
                      </div>
                    </button>
                    <p style={brandNameStyle}>{brand.name}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {selected && (
        <div className={styles.modal}>
          <div className={styles.overlay} onClick={closeModal} />
          <div className={styles.modalContent} role="dialog" aria-modal="true">
            <h3>{selected.brand.name}</h3>
            <p>{location.name}</p>
            <p>How would you like to continue?</p>

            <div className={styles.modalButtons}>
              {!selected.brand.pickupOnly && DOORDASH[locSlug] && (
                <a
                  href={DOORDASH[locSlug]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modalButton}
                >
                  🚗 Local Delivery (DoorDash)
                </a>
              )}

              {!selected.brand.pickupOnly && (
                <a
                  href={SHOPIFY_SEARCH + encodeURIComponent(selected.brand.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modalButton}
                >
                  📦 Ship to Me (Shopify)
                </a>
              )}

              <a
                href={pickupUrl(selected.brand, selected.category)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modalButton}
              >
                🏪 In-Store Pickup (Reserve Now)
              </a>

              <a
                href={browseUrl(selected.brand)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modalButton}
                style={{ background: '#f3f4f6', color: '#666', border: '1px solid #e5e5e5' }}
              >
                👀 Just browsing — view this store's products
              </a>
            </div>

            <button type="button" onClick={closeModal} className={styles.closeButton}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
}