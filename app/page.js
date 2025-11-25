import Link from 'next/link';

export default function Home() {
  return (
    <div className="page-container">
      <nav className="navbar">
        <div className="nav-content">
          <h2 className="logo">Burn and Turn</h2>
          <div className="nav-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/support">Support</Link>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <section className="hero">
          <h1 className="hero-title">Burn and Turn Poker Trainer</h1>
          <p className="hero-subtitle">Master optimal preflop poker strategy with interactive GTO training</p>

          <div className="download-section">
            <p className="coming-soon">Coming Soon to App Store and Google Play</p>
          </div>
        </section>

        <section className="features">
          <h2>Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Interactive Training</h3>
              <p>Practice GTO preflop decisions with randomized hands and immediate feedback</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Strategy Charts</h3>
              <p>Access comprehensive GTO charts for all positions and table sizes (6-max, 8-max, 10-max)</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Progress Tracking</h3>
              <p>Monitor your accuracy and improvement over time with detailed statistics</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Biometric Security</h3>
              <p>Quick and secure sign-in with Face ID, Touch ID, or fingerprint authentication</p>
            </div>
          </div>
        </section>

        <section className="about">
          <h2>About the App</h2>
          <p>
            Burn and Turn Poker Trainer is a mobile application designed to help poker players
            practice Game Theory Optimal (GTO) preflop decisions. Whether you're a beginner
            learning the fundamentals or an experienced player refining your ranges, our app
            provides the tools you need to master optimal preflop strategy.
          </p>
          <p>
            <strong>Important:</strong> This is a training and educational tool only. The app does
            NOT involve real money gambling, betting, or wagering of any kind.
          </p>
        </section>

        <section className="cta">
          <h2>Ready to Improve Your Game?</h2>
          <p>Get notified when the app launches</p>
          <a href="mailto:wguidero@gmail.com?subject=Notify%20me%20when%20Burn%20and%20Turn%20launches" className="cta-button">
            Contact Us
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-links">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/support">Support</Link>
        </div>
        <p>&copy; 2025 Burn and Turn Poker Trainer. All rights reserved.</p>
        <p className="contact-email">
          Contact: <a href="mailto:wguidero@gmail.com">wguidero@gmail.com</a>
        </p>
      </footer>

      <style jsx>{`
        .page-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

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
        }

        .nav-links {
          display: flex;
          gap: 25px;
        }

        .nav-links a {
          color: #ffffff;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: #4CAF50;
        }

        .main-content {
          flex: 1;
        }

        .hero {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: white;
          padding: 80px 20px;
          text-align: center;
        }

        .hero-title {
          font-size: 3rem;
          margin: 0 0 20px 0;
          background: linear-gradient(135deg, #4CAF50, #66BB6A);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: #e0e0e0;
          margin-bottom: 40px;
        }

        .download-section {
          margin-top: 40px;
        }

        .coming-soon {
          font-size: 1.2rem;
          color: #4CAF50;
          font-weight: 600;
          padding: 15px 30px;
          background: rgba(76, 175, 80, 0.1);
          border: 2px solid #4CAF50;
          border-radius: 10px;
          display: inline-block;
        }

        .features {
          max-width: 1200px;
          margin: 60px auto;
          padding: 0 20px;
        }

        .features h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 50px;
          color: #1a1a2e;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .feature-card {
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .feature-card h3 {
          font-size: 1.5rem;
          color: #1a1a2e;
          margin-bottom: 15px;
        }

        .feature-card p {
          color: #666;
          line-height: 1.6;
        }

        .about {
          max-width: 800px;
          margin: 60px auto;
          padding: 0 20px;
          text-align: center;
        }

        .about h2 {
          font-size: 2.5rem;
          margin-bottom: 30px;
          color: #1a1a2e;
        }

        .about p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
          margin-bottom: 20px;
        }

        .cta {
          background: linear-gradient(135deg, #4CAF50, #66BB6A);
          color: white;
          padding: 60px 20px;
          text-align: center;
        }

        .cta h2 {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        .cta p {
          font-size: 1.2rem;
          margin-bottom: 30px;
        }

        .cta-button {
          display: inline-block;
          background: white;
          color: #4CAF50;
          padding: 15px 40px;
          border-radius: 30px;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 600;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .cta-button:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .footer {
          background: #1a1a2e;
          color: white;
          padding: 40px 20px;
          text-align: center;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .footer-links a {
          color: #4CAF50;
          text-decoration: none;
          font-weight: 500;
        }

        .footer-links a:hover {
          text-decoration: underline;
        }

        .footer p {
          margin: 10px 0;
          color: #aaa;
        }

        .contact-email a {
          color: #4CAF50;
          text-decoration: none;
        }

        .contact-email a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .features h2,
          .about h2,
          .cta h2 {
            font-size: 2rem;
          }

          .nav-links {
            gap: 15px;
            font-size: 0.9rem;
          }

          .feature-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
