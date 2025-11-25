'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-content">
          <Link href="/" className="logo">Burn and Turn</Link>
          <div className="nav-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/support">Support</Link>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          background: #1a1a2e;
          padding: 15px 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .nav-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          color: #4CAF50;
          margin: 0;
          font-size: 1.5rem;
          font-weight: 700;
          text-decoration: none;
          transition: opacity 0.3s ease;
        }

        .logo:hover {
          opacity: 0.8;
        }

        .nav-links {
          display: flex;
          gap: 15px;
        }

        .nav-links :global(a) {
          color: #ffffff;
          text-decoration: none;
          font-weight: 600;
          padding: 10px 20px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .nav-links :global(a:hover) {
          color: #ffffff;
          background: linear-gradient(135deg, #4CAF50, #66BB6A);
          border-color: #4CAF50;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
        }

        @media (max-width: 768px) {
          .nav-links {
            gap: 10px;
          }

          .nav-links :global(a) {
            padding: 8px 14px;
            font-size: 0.9rem;
          }

          .logo {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
}
