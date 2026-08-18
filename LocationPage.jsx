import Head from 'next/head';
import LocationHero from './LocationHero';
import Navigation from './Navigation';
import StatusBanner from './StatusBanner';
import Footer from './Footer';

/**
 * LocationPage Component
 * Complete location page based on Greenville design
 * Features: Hero, Info Bar, Team, Products, Events, Gallery, Reviews
 */
export default function LocationPage({ location, allLocations }) {
  return (
    <>
      <Head>
        <title>{location.name} — The K9 Shop</title>
        <meta name="description" content={`Visit ${location.name}. ${location.story}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75'>🐾</text></svg>" />
      </Head>

      <style jsx>{`
        .k9-location-page {
          background: #f9f9f7;
          color: #2c2c2c;
        }

        body.dark-mode .k9-location-page {
          background: #1a1a1a;
          color: #f5f5f5;
        }

        /* Info Bar - Contact & Hours */
        .k9-info-bar {
          background: white;
          border-bottom: 1px solid #e0e0e0;
          padding: 24px 0;
          margin-bottom: 32px;
        }

        body.dark-mode .k9-info-bar {
          background: #2a2a2a;
          border-bottom-color: #444;
        }

        .k9-info-bar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 32px;
        }

        .k9-info-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .k9-info-icon {
          font-size: 24px;
          flex-shrink: 0;
        }

        .k9-info-content h4 {
          margin: 0 0 4px 0;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          opacity: 0.7;
        }

        .k9-info-content p {
          margin: 0;
          font-size: 16px;
          line-height: 1.4;
        }

        .k9-info-content a {
          color: #c0392b;
          text-decoration: none;
        }

        .k9-info-content a:hover {
          text-decoration: underline;
        }

        /* Section Heading */
        .k9-section-heading {
          text-align: center;
          margin-bottom: 32px;
          padding: 0 24px;
        }

        .k9-section-heading h2 {
          font-size: 32px;
          margin-bottom: 8px;
        }

        .k9-section-heading p {
          color: #666;
          font-size: 16px;
        }

        body.dark-mode .k9-section-heading p {
          color: #bbb;
        }

        /* Story Section */
        .k9-story-section {
          max-width: 1200px;
          margin: 0 auto 48px;
          padding: 0 24px;
        }

        .k9-story-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }

        .k9-story-card {
          background: white;
          border-radius: 8px;
          padding: 32px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        body.dark-mode .k9-story-card {
          background: #2a2a2a;
        }

        .k9-story-card h3 {
          color: #c0392b;
          margin-bottom: 16px;
        }

        /* Team Section */
        .k9-team-section {
          max-width: 1200px;
          margin: 0 auto 48px;
          padding: 0 24px;
        }

        .k9-team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .k9-team-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: transform 150ms, box-shadow 150ms;
        }

        body.dark-mode .k9-team-card {
          background: #2a2a2a;
        }

        .k9-team-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 16px rgba(0, 0, 0, 0.1);
        }

        .k9-team-avatar {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #c0392b 0%, #e74c3c 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 80px;
        }

        .k9-team-content {
          padding: 20px;
        }

        .k9-team-content h3 {
          margin-bottom: 4px;
          font-size: 18px;
        }

        .k9-team-content .role {
          font-size: 13px;
          color: #c0392b;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .k9-team-content p {
          font-size: 14px;
          line-height: 1.5;
          margin: 0;
        }

        /* Products Section */
        .k9-products-section {
          max-width: 1200px;
          margin: 0 auto 48px;
          padding: 0 24px;
        }

        .k9-products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .k9-product-card {
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        body.dark-mode .k9-product-card {
          background: #2a2a2a;
        }

        .k9-product-card h3 {
          font-size: 16px;
          margin-bottom: 8px;
        }

        .k9-product-brand {
          font-size: 12px;
          color: #c0392b;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .k9-product-reason {
          font-size: 14px;
          line-height: 1.5;
        }

        /* Events Section */
        .k9-events-section {
          max-width: 1200px;
          margin: 0 auto 48px;
          padding: 0 24px;
        }

        .k9-events-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .k9-event-item {
          background: white;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 16px;
          border-left: 4px solid #c0392b;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        body.dark-mode .k9-event-item {
          background: #2a2a2a;
        }

        .k9-event-date {
          font-size: 12px;
          color: #c0392b;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .k9-event-item h3 {
          margin: 0 0 8px 0;
          font-size: 18px;
        }

        .k9-event-item p {
          margin: 0;
          font-size: 14px;
          line-height: 1.5;
        }

        /* Reviews Section */
        .k9-reviews-section {
          max-width: 1200px;
          margin: 0 auto 48px;
          padding: 0 24px;
        }

        .k9-reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .k9-review-card {
          background: white;
          border-radius: 8px;
          padding: 24px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        body.dark-mode .k9-review-card {
          background: #2a2a2a;
        }

        .k9-review-stars {
          font-size: 16px;
          margin-bottom: 12px;
        }

        .k9-review-text {
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 16px;
          font-style: italic;
        }

        .k9-review-author {
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 4px;
        }

        .k9-review-city {
          font-size: 12px;
          color: #666;
        }

        body.dark-mode .k9-review-city {
          color: #999;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .k9-info-bar-container {
            gap: 24px;
            padding: 0 16px;
          }

          .k9-section-heading h2 {
            font-size: 24px;
          }

          .k9-story-section,
          .k9-team-section,
          .k9-products-section,
          .k9-events-section,
          .k9-reviews-section {
            padding: 0 16px;
            margin-bottom: 32px;
          }

          .k9-team-grid,
          .k9-products-grid,
          .k9-reviews-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="k9-location-page">
        <Navigation currentLocation={location.name.split(' — ')[1]} allLocations={allLocations} />
        
        {/* Hero Section */}
        <LocationHero location={location} />

        {/* Info Bar - Contact & Hours */}
        <div className="k9-info-bar">
          <div className="k9-info-bar-container">
            <div className="k9-info-item">
              <div className="k9-info-icon">📍</div>
              <div className="k9-info-content">
                <h4>Location</h4>
                <p>{location.address}</p>
              </div>
            </div>

            <div className="k9-info-item">
              <div className="k9-info-icon">📞</div>
              <div className="k9-info-content">
                <h4>Phone</h4>
                <p><a href={`tel:${location.phone}`}>{location.phone}</a></p>
              </div>
            </div>

            <div className="k9-info-item">
              <div className="k9-info-icon">🕐</div>
              <div className="k9-info-content">
                <h4>Hours</h4>
                <p>M-F: {location.hours.monday_friday}</p>
                <p>Sat: {location.hours.saturday}</p>
                <p>Sun: {location.hours.sunday}</p>
              </div>
            </div>

            <div className="k9-info-item">
              <div className="k9-info-icon">🛒</div>
              <div className="k9-info-content">
                <h4>Shop Online</h4>
                <p><a href="https://shop.thek9shop.com" target="_blank" rel="noopener noreferrer">Order Now</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <section className="k9-story-section">
          <div className="k9-section-heading">
            <h2>Our Story</h2>
          </div>
          <div className="k9-story-grid">
            <div className="k9-story-card">
              <h3>🐾 Our Mission</h3>
              <p>{location.story}</p>
            </div>
            <div className="k9-story-card">
              <h3>🏅 Our Traditions</h3>
              <p>{location.traditions}</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        {location.team && location.team.length > 0 && (
          <section className="k9-team-section">
            <div className="k9-section-heading">
              <h2>Meet Our Team</h2>
              <p>Expert guidance from passionate raw feeding advocates</p>
            </div>
            <div className="k9-team-grid">
              {location.team.map((member) => (
                <div key={member.id} className="k9-team-card">
                  <div className="k9-team-avatar">👤</div>
                  <div className="k9-team-content">
                    <h3>{member.name}</h3>
                    <div className="role">{member.role}</div>
                    <p>{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Products Section */}
        {location.products && location.products.length > 0 && (
          <section className="k9-products-section">
            <div className="k9-section-heading">
              <h2>Featured Products</h2>
              <p>Our most recommended products for your raw-fed dog</p>
            </div>
            <div className="k9-products-grid">
              {location.products.map((product, idx) => (
                <div key={idx} className="k9-product-card">
                  <div className="k9-product-brand">{product.brand}</div>
                  <h3>{product.name}</h3>
                  <p className="k9-product-reason">{product.reason}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Events Section */}
        {location.events && location.events.length > 0 && (
          <section className="k9-events-section">
            <div className="k9-section-heading">
              <h2>Upcoming Events</h2>
            </div>
            <ul className="k9-events-list">
              {location.events.map((event) => (
                <li key={event.id} className="k9-event-item">
                  <div className="k9-event-date">{event.date} • {event.type}</div>
                  <h3>{event.name}</h3>
                  <p>{event.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Reviews Section */}
        {location.reviews && location.reviews.length > 0 && (
          <section className="k9-reviews-section">
            <div className="k9-section-heading">
              <h2>Customer Reviews</h2>
            </div>
            <div className="k9-reviews-grid">
              {location.reviews.map((review) => (
                <div key={review.id} className="k9-review-card">
                  <div className="k9-review-stars">⭐⭐⭐⭐⭐</div>
                  <p className="k9-review-text">"{review.text}"</p>
                  <div className="k9-review-author">{review.name}</div>
                  <div className="k9-review-city">{review.city}, {location.city_state.split(', ')[1]}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  );
}
