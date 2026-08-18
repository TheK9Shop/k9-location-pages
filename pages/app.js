import '../styles/globals.css';
import { useEffect, useState } from 'react';

/**
 * Next.js App Component
 * Wraps all pages with global styles and providers
 */
function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check for saved dark mode preference
    const savedMode = localStorage.getItem('k9-dark-mode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    } else {
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const body = document.body;
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }

    localStorage.setItem('k9-dark-mode', JSON.stringify(darkMode));
  }, [darkMode, mounted]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <style jsx global>{`
        body {
          transition: background-color 300ms ease-in-out;
        }
      `}</style>
      <Component {...pageProps} />
      
      {/* Dark Mode Toggle (Optional) */}
      <style jsx>{`
        .k9-dark-mode-toggle {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 50px;
          height: 50px;
          background: #c0392b;
          border: none;
          border-radius: 50%;
          color: white;
          font-size: 24px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(192, 57, 43, 0.3);
          transition: all 150ms ease;
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .k9-dark-mode-toggle:hover {
          background: #a93226;
          box-shadow: 0 6px 16px rgba(192, 57, 43, 0.4);
          transform: scale(1.1);
        }

        .k9-dark-mode-toggle:active {
          transform: scale(0.95);
        }

        @media (max-width: 768px) {
          .k9-dark-mode-toggle {
            bottom: 16px;
            right: 16px;
            width: 44px;
            height: 44px;
            font-size: 20px;
          }
        }
      `}</style>

      {/* Uncomment to enable dark mode toggle button */}
      {/* <button 
        className="k9-dark-mode-toggle"
        onClick={toggleDarkMode}
        title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
      >
        {darkMode ? '☀️' : '🌙'}
      </button> */}
    </>
  );
}

export default MyApp;
