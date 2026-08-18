import Link from 'next/link';

/**
 * Footer Component
 * Shared footer across all location pages
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style jsx>{`
        .k9-footer {
          background: #1a1a1a;
          color: #f5f5f5;
          padding: 48px 24px 24px;
          margin-top: 64px;
          border-top: 1px solid #333;
        }

        .k9-footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .k9-footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
          margin-bottom: 32px;
        }

        .k9-footer-section h3 {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 16px;
          color: #c0392b;
        }

        .k9-footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .k9-footer-section ul li {
          margin-bottom: 12px;
        }

        .k9-footer-section a {
          color: #bbb;
          text-decoration: none;
          font-size: 14px;
          transition: color 150ms;
        }

        .k9-footer-section a:hover {
          color: #c0392b;
          text-decoration: underline;
        }

        .k9-footer-divider {
          height: 1px;
          background: #333;
          margin: 32px 0;
        }

        .k9-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 14px;
          color: #999;
        }

        .k9-footer-social {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .k9-footer-social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: #c0392b;
          border-radius: 50%;
          color: white;
          font-size: 16px;
          transition: all 150ms;
        }

        .k9-footer-social a:hover {
          background: #a93226;
          transform: scale(1.1);
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .k9-footer {
            padding: 32px 16px 16px;
          }

          .k9-footer-grid {
            gap: 24px;
            grid-template-columns: 1fr;
          }

          .k9-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <footer className="k9-footer">
        <div className="k9-footer-container">
          <div className="k9-footer-grid">
            <div className="k9-footer-section">
              <h3>🐾 The K9 Shop</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>
                Premium raw and natural dog food, supplements, and expert nutritional guidance for dogs of all ages.
              </p>
              <p style={{ fontSize: '12px', color: '#888' }}>
                Proudly serving pet parents across Long Island, South Carolina, and Florida.
              </p>
            </div>

            <div className="k9-footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><Link href="/">All Locations</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><a href="https://shop.thek9shop.com" target="_blank" rel="noopener noreferrer">Online Shop</a></li>
                <li><a href="mailto:info@thek9shop.com">Contact Us</a></li>
              </ul>
            </div>

            <div className="k9-footer-section">
              <h3>Resources</h3>
              <ul>
                <li><a href="#faq">Raw Feeding FAQ</a></li>
                <li><a href="#nutrition-guide">Nutrition Guide</a></li>
                <li><a href="#product-guide">Product Guide</a></li>
                <li><a href="#faqs">Frequently Asked Questions</a></li>
              </ul>
            </div>

            <div className="k9-footer-section">
              <h3>Follow Us</h3>
              <div className="k9-footer-social">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">📸</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">f</a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" title="TikTok">🎵</a>
              </div>
              <p style={{ fontSize: '12px', marginTop: '16px', color: '#888' }}>
                Get updates on new products, events, and raw feeding tips!
              </p>
            </div>
          </div>

          <div className="k9-footer-divider" />

          <div className="k9-footer-bottom">
            <p>© {currentYear} The K9 Shop. All rights reserved.</p>
            <p>
              <Link href="#privacy">Privacy Policy</Link> • <Link href="#terms">Terms of Service</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
