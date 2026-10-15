import { useState } from 'react';
import styles from '@/styles/Location.module.css';

export default function WhatWeCarry({ location }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);

  // Combine all categories and keep one entry per brand name
  const allBrands = location?.brands
    ? [...location.brands.food, ...location.brands.treats, ...location.brands.supplements]
    : [];
  const brands = Array.from(new Map(allBrands.map((b) => [b.name, b])).values());

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    setShowModal(true);
  };

  const handleJustBrowsing = () => {
    setShowModal(false);
    setSelectedBrand(null);
  };

  // Pickup-only brands get no delivery or shipping options
  const pickupOnly = !!selectedBrand?.pickupOnly;

  return (
    <section id="what-we-carry" className={styles.whatWeCarrySection}>
      <div className={styles.whatWeCarryContainer}>
        <div className={styles.whatWeCarryHeader}>
          <h2>What We Carry</h2>
          <p>Premium brands for your pet's health</p>
        </div>

        <div className={styles.brandGrid}>
          {brands.map((brand) => (
            <div
              key={brand.id}
              className={styles.brandCard}
              onClick={() => handleBrandClick(brand)}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.brandLogo}>
                <img src={brand.logo} alt={brand.name} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedBrand && (
        <div className={styles.modal}>
          <div className={styles.overlay} onClick={() => setShowModal(false)} />
          <div className={styles.modalContent}>
            <h3>{selectedBrand.name}</h3>
            <p>How would you like to shop?</p>

            <div className={styles.modalButtons}>
              {!pickupOnly && (
                <a
                  href="https://www.doordash.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modalButton}
                >
                  🚗 Local Delivery (DoorDash)
                </a>
              )}

              {!pickupOnly && (
                <a
                  href="https://www.shopify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modalButton}
                >
                  📦 Ship to Me (Shopify)
                </a>
              )}

              <a
                href="https://reserve.example.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modalButton}
              >
                🏪 In-Store Pickup (Reserve Now)
              </a>

              <button
                onClick={handleJustBrowsing}
                className={styles.modalButton}
                style={{
                  background: '#f3f4f6',
                  color: '#666',
                  border: '1px solid #e5e5e5'
                }}
              >
                👀 Just browsing — view this store's products
              </button>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className={styles.closeButton}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
}