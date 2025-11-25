export default function Support() {
  return (
    <div className="container">
      <h1>Support & Contact</h1>
      <p className="subtitle">We're here to help! Get in touch with the Burn and Turn team.</p>

      <section className="contact-section">
        <h2>Contact Information</h2>
        <div className="contact-card">
          <div className="contact-item">
            <span className="icon">📧</span>
            <div>
              <h3>Email Support</h3>
              <p>
                <a href="mailto:wguidero@gmail.com">wguidero@gmail.com</a>
              </p>
              <p className="note">We typically respond within 24-48 hours</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <h3>How do I create an account?</h3>
          <p>
            You can sign up using your email and password, or use the "Sign in with Google" option
            for quick access. No credit card required!
          </p>
        </div>

        <div className="faq-item">
          <h3>Is biometric authentication secure?</h3>
          <p>
            Yes! We use industry-standard biometric authentication provided by Apple (Face ID/Touch ID)
            and Android (Fingerprint/Face Unlock). Your biometric data NEVER leaves your device and is
            handled entirely by your phone's operating system.
          </p>
        </div>

        <div className="faq-item">
          <h3>How do I enable Face ID / Touch ID?</h3>
          <p>
            After signing in, you'll be prompted to enable biometric authentication. If you skipped it,
            simply sign out and sign back in, then choose "Enable" when prompted.
          </p>
        </div>

        <div className="faq-item">
          <h3>Does this app involve real money gambling?</h3>
          <p>
            <strong>No.</strong> Burn and Turn Poker Trainer is a training and educational tool ONLY.
            There is no real money gambling, betting, or wagering. You cannot win or lose money using this app.
          </p>
        </div>

        <div className="faq-item">
          <h3>What are GTO ranges?</h3>
          <p>
            GTO (Game Theory Optimal) ranges represent mathematically balanced poker strategies that
            cannot be exploited by opponents. Our app teaches you these optimal preflop opening and
            defense ranges for various positions and table sizes.
          </p>
        </div>

        <div className="faq-item">
          <h3>Which table sizes are supported?</h3>
          <p>
            The app supports 6-max (6 players), 8-max (8 players), and 10-max (10 players) tables.
            You can switch between table sizes in the training mode settings.
          </p>
        </div>

        <div className="faq-item">
          <h3>How is my progress tracked?</h3>
          <p>
            Your training sessions, accuracy statistics, and performance metrics are securely stored
            in our database. You can view your progress on the Profile/Statistics screen.
          </p>
        </div>

        <div className="faq-item">
          <h3>Can I use the app offline?</h3>
          <p>
            You need an internet connection to sign in and sync your progress, but once authenticated,
            you can view charts and practice in training mode with limited offline functionality.
          </p>
        </div>

        <div className="faq-item">
          <h3>How do I delete my account?</h3>
          <p>
            To delete your account and all associated data, please email us at{' '}
            <a href="mailto:wguidero@gmail.com">wguidero@gmail.com</a> with the subject line
            "Account Deletion Request." We will process your request within 30 days.
          </p>
        </div>

        <div className="faq-item">
          <h3>I forgot my password. How do I reset it?</h3>
          <p>
            On the sign-in screen, click "Forgot Password?" and enter your email address. You'll
            receive a password reset link via email.
          </p>
        </div>

        <div className="faq-item">
          <h3>Why can't I sign in with Google?</h3>
          <p>
            Make sure you're using the correct Google account and that you have a stable internet
            connection. If the issue persists, try signing in with email/password instead, or
            contact support.
          </p>
        </div>

        <div className="faq-item">
          <h3>The app crashed or is not working correctly</h3>
          <p>
            First, try closing and reopening the app. If that doesn't work, try restarting your device.
            If the problem continues, please email us with:
          </p>
          <ul>
            <li>Your device model and operating system version</li>
            <li>A description of what you were doing when the crash occurred</li>
            <li>Any error messages you saw</li>
          </ul>
        </div>
      </section>

      <section className="report-section">
        <h2>Report a Bug or Request a Feature</h2>
        <p>
          Found a bug? Have an idea for a new feature? We'd love to hear from you!
        </p>
        <p>
          Email us at <a href="mailto:wguidero@gmail.com">wguidero@gmail.com</a> with:
        </p>
        <ul>
          <li><strong>Bug Reports:</strong> Include device info, steps to reproduce, and screenshots if possible</li>
          <li><strong>Feature Requests:</strong> Describe the feature and how it would improve your training experience</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>Legal & Privacy</h2>
        <div className="legal-links">
          <a href="/privacy" className="legal-link">Privacy Policy</a>
          <a href="/terms" className="legal-link">Terms of Service</a>
        </div>
      </section>

      <section className="response-section">
        <h2>Response Times</h2>
        <p>
          We strive to respond to all support inquiries within 24-48 hours during business days
          (Monday-Friday). For urgent issues, please include "URGENT" in your email subject line.
        </p>
        <p>
          <strong>Note:</strong> We're a small team, so we appreciate your patience!
        </p>
      </section>

      <style jsx>{`
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          color: #1a1a2e;
          text-align: center;
        }

        .subtitle {
          text-align: center;
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 50px;
        }

        section {
          margin-bottom: 50px;
        }

        h2 {
          font-size: 1.8rem;
          margin-top: 40px;
          margin-bottom: 20px;
          color: #1a1a2e;
          border-bottom: 2px solid #4CAF50;
          padding-bottom: 10px;
        }

        h3 {
          font-size: 1.2rem;
          margin-top: 15px;
          margin-bottom: 8px;
          color: #2c3e50;
        }

        p {
          margin-bottom: 15px;
        }

        ul {
          margin-bottom: 15px;
          padding-left: 25px;
        }

        li {
          margin-bottom: 8px;
        }

        a {
          color: #4CAF50;
          text-decoration: none;
          font-weight: 500;
        }

        a:hover {
          text-decoration: underline;
        }

        .contact-section {
          background: #f8f9fa;
          padding: 30px;
          border-radius: 10px;
        }

        .contact-card {
          background: white;
          padding: 25px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }

        .icon {
          font-size: 2.5rem;
        }

        .contact-item h3 {
          margin-top: 0;
          font-size: 1.3rem;
        }

        .note {
          font-size: 0.9rem;
          color: #666;
          font-style: italic;
        }

        .faq-section {
          background: white;
        }

        .faq-item {
          margin-bottom: 25px;
          padding: 20px;
          border-left: 4px solid #4CAF50;
          background: #f8f9fa;
          border-radius: 4px;
        }

        .faq-item h3 {
          margin-top: 0;
          color: #1a1a2e;
        }

        .faq-item p {
          margin-bottom: 10px;
        }

        .report-section {
          background: #e8f5e9;
          padding: 30px;
          border-radius: 10px;
        }

        .legal-section {
          text-align: center;
        }

        .legal-links {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .legal-link {
          font-size: 1.1rem;
          padding: 10px 20px;
          background: #4CAF50;
          color: white !important;
          border-radius: 5px;
          text-decoration: none;
          transition: background 0.3s;
        }

        .legal-link:hover {
          background: #45a049;
          text-decoration: none;
        }

        .response-section {
          background: #fff9e6;
          padding: 25px;
          border-radius: 10px;
          border: 1px solid #ffd54f;
        }

        strong {
          color: #1a1a2e;
        }

        @media (max-width: 768px) {
          .container {
            padding: 20px 15px;
          }

          h1 {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          h2 {
            font-size: 1.5rem;
          }

          .contact-item {
            flex-direction: column;
            gap: 10px;
          }

          .icon {
            font-size: 2rem;
          }

          .legal-links {
            flex-direction: column;
            gap: 15px;
          }
        }
      `}</style>
    </div>
  );
}
