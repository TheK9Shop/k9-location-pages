import Image from 'next/image';

/**
 * LocationHero Component
 * Dark hero section with location name, address, and image overlay
 * Based on Greenville location page design
 */
export default function LocationHero({ location }) {
  return (
    <>
      <style jsx>{`
        .k9-location-hero {
          position: relative;
          height: 400px;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          color: white;
          text-align: center;
        }

        /* Placeholder for image background */
        .k9-hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
          z-index: 1;
        }

        .k9-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 2;
        }

        .k9-hero-content {
          position: relative;
          z-index: 3;
          max-width: 800px;
          padding: 0 24px;
        }

        .k9-hero-title {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .k9-hero-subtitle {
          font-size: 20px;
          font-weight: 400;
          opacity: 0.95;
          margin-bottom: 8px;
        }

        .k9-hero-tagline {
          font-size: 14px;
          opacity: 0.85;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .k9-location-hero {
            height: 300px;
          }

          .k9-hero-title {
            font-size: 32px;
          }

          .k9-hero-subtitle {
            font-size: 16px;
          }
        }
      `}</style>

      <div className="k9-location-hero">
        <div className="k9-hero-background" />
        <div className="k9-hero-overlay" />
        <div className="k9-hero-content">
          <h1 className="k9-hero-title">{location.name}</h1>
          <p className="k9-hero-subtitle">{location.city_state}</p>
          <p className="k9-hero-tagline">🐾 Premium Raw Dog Food & Expert Guidance</p>
        </div>
      </div>
    </>
  );
}
