import Link from 'next/link';
import { useState } from 'react';

/**
 * Navigation Component
 * Sticky header with location selector and main nav
 */
export default function Navigation({ currentLocation, allLocations }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <style jsx>{`
        .k9-nav {
          position: sticky;
          top: 0;
          background: white;
          border-bottom: 1px solid #e0e0e0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          z-index: 100;
        }

        body.dark-mode .k9-nav {
          background: #2a2a2a;
          border-bottom-color: #444;
        }

        .k9-nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 70px;
        }

        .k9-logo {
          font-size: 24px;
          font-weight: 700;
          color: #c0392b;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .k9-logo:hover {
          text-decoration: none;
        }

        .k9-nav-center {
          flex: 1;
          display: flex;
          justify-content: center;
          gap: 24px;
          align-items: center;
        }

        .k9-nav-link {
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          color: #2c2c2c;
          transition: color 150ms;
          position: relative;
        }

        body.dark-mode .k9-nav-link {
          color: #f5f5f5;
        }

        .k9-nav-link:hover {
          color: #c0392b;
        }

        .k9-location-badge {
          background: #c0392b;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .k9-location-dropdown {
          position: relative;
          display: inline-block;
        }

        .k9-location-dropdown-btn {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          color: #2c2c2c;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        body.dark-mode .k9-location-dropdown-btn {
          color: #f5f5f5;
        }

        .k9-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 6px;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
          list-style: none;
          min-width: 250px;
          margin-top: 8px;
          z-index: 10;
        }

        body.dark-mode .k9-dropdown-menu {
          background: #2a2a2a;
          border-color: #444;
        }

        .k9-dropdown-menu li {
          padding: 0;
        }

        .k9-dropdown-menu a {
          display: block;
          padding: 12px 16px;
          color: #2c2c2c;
          text-decoration: none;
          font-size: 14px;
          transition: background 150ms;
          border-bottom: 1px solid #f0f0f0;
        }

        body.dark-mode .k9-dropdown-menu a {
          color: #f5f5f5;
          border-bottom-color: #333;
        }

        .k9-dropdown-menu a:hover {
          background: #f9f9f7;
          color: #c0392b;
        }

        body.dark-mode .k9-dropdown-menu a:hover {
          background: #333;
        }

        .k9-dropdown-menu li:last-child a {
          border-bottom: none;
        }

        .k9-nav-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .k9-mobile-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #2c2c2c;
        }

        body.dark-mode .k9-mobile-toggle {
          color: #f5f5f5;
        }

        @media (max-width: 768px) {
          .k9-nav-center {
            display: none;
          }

          .k9-mobile-toggle {
            display: block;
          }

          .k9-nav-container {
            height: 60px;
          }

          .k9-logo {
            font-size: 18px;
          }

          .k9-mobile-menu {
            position: fixed;
            top: 60px;
            left: 0;
            right: 0;
            background: white;
            border-bottom: 1px solid #e0e0e0;
            list-style: none;
            padding: 16px 0;
            display: ${mobileMenuOpen ? 'block' : 'none'};
          }

          body.dark-mode .k9-mobile-menu {
            background: #2a2a2a;
            border-bottom-color: #444;
          }

          .k9-mobile-menu li {
            padding: 8px 16px;
          }

          .k9-mobile-menu a {
            display: block;
            padding: 8px 0;
            color: #2c2c2c;
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
          }

          body.dark-mode .k9-mobile-menu a {
            color: #f5f5f5;
          }

          .k9-mobile-menu a:hover {
            color: #c0392b;
          }

          .k9-nav-right {
            gap: 12px;
          }
        }
      `}</style>

      <nav className="k9-nav">
        <div className="k9-nav-container">
          <Link href="/" className="k9-logo">
            🐾 K9 Shop
          </Link>

          <div className="k9-nav-center">
            <Link href="/" className="k9-nav-link">
              All Locations
            </Link>
            <Link href="/blog" className="k9-nav-link">
              Blog
            </Link>
            <div className="k9-location-dropdown">
              <button className="k9-location-dropdown-btn">
                {currentLocation || 'Locations'} ▼
              </button>
              {currentLocation && (
                <ul className="k9-dropdown-menu">
                  {allLocations.map((loc) => (
                    <li key={loc.slug}>
                      <Link href={`/locations/${loc.slug}`}>
                        {loc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="k9-nav-right">
            {currentLocation && (
              <span className="k9-location-badge">{currentLocation}</span>
            )}
            <button 
              className="k9-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <ul className="k9-mobile-menu">
            <li>
              <Link href="/">All Locations</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            {allLocations.map((loc) => (
              <li key={loc.slug}>
                <Link href={`/locations/${loc.slug}`}>
                  {loc.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}
