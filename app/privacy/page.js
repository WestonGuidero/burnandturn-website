export default function PrivacyPolicy() {
  return (
    <div className="container">
      <h1>Privacy Policy</h1>
      <p className="last-updated">Last Updated: January 24, 2025</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Burn and Turn Poker Trainer ("we," "our," or "us") is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information
          when you use our mobile application.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>

        <h3>2.1 Personal Information</h3>
        <p>When you create an account, we collect:</p>
        <ul>
          <li><strong>Email Address:</strong> Used for account creation, authentication, and communication</li>
          <li><strong>Display Name:</strong> Optional, used to personalize your experience</li>
          <li><strong>Birthday:</strong> Optional, for age verification and personalization</li>
          <li><strong>ClubGG ID:</strong> Optional, if you choose to link your ClubGG account</li>
        </ul>

        <h3>2.2 Authentication Data</h3>
        <p>When you sign in using Google OAuth, we receive:</p>
        <ul>
          <li>Your Google account email address</li>
          <li>Your Google account profile information (name, profile picture if available)</li>
          <li>A unique user identifier from Google</li>
        </ul>

        <h3>2.3 Usage Data</h3>
        <p>We automatically collect information about your training sessions:</p>
        <ul>
          <li>Hands played and training scenarios completed</li>
          <li>Accuracy statistics and performance metrics</li>
          <li>Session timestamps and durations</li>
          <li>Table size preferences (6-max, 8-max, 10-max)</li>
        </ul>

        <h3>2.4 Device Information</h3>
        <p>We may collect:</p>
        <ul>
          <li>Device type and operating system version</li>
          <li>App version and build number</li>
          <li>Biometric authentication preferences (whether enabled/disabled)</li>
          <li>Crash reports and error logs</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>We use the collected information for:</p>
        <ul>
          <li><strong>Account Management:</strong> Creating and maintaining your user account</li>
          <li><strong>Authentication:</strong> Securely signing you in to the app</li>
          <li><strong>Progress Tracking:</strong> Storing your training history and statistics</li>
          <li><strong>App Improvement:</strong> Analyzing usage patterns to enhance features</li>
          <li><strong>Support:</strong> Responding to your questions and troubleshooting issues</li>
          <li><strong>Security:</strong> Detecting and preventing fraudulent activity</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Storage and Security</h2>

        <h3>4.1 Backend Infrastructure</h3>
        <p>
          Your data is stored securely using Supabase, a trusted cloud database provider.
          All data is encrypted in transit using HTTPS/TLS and at rest using industry-standard encryption.
        </p>

        <h3>4.2 Biometric Data</h3>
        <p>
          <strong>Important:</strong> We do NOT collect, store, or transmit your biometric data
          (Face ID, Touch ID, fingerprints). Biometric authentication is handled entirely by your
          device's operating system (iOS or Android). We only store a boolean preference indicating
          whether you've enabled biometric unlock.
        </p>

        <h3>4.3 Local Storage</h3>
        <p>Some data is stored locally on your device:</p>
        <ul>
          <li>Session tokens (for keeping you signed in)</li>
          <li>Biometric authentication preferences</li>
          <li>App settings and preferences</li>
        </ul>
      </section>

      <section>
        <h2>5. Data Sharing and Disclosure</h2>

        <h3>5.1 Third-Party Services</h3>
        <p>We use the following third-party services:</p>
        <ul>
          <li><strong>Supabase:</strong> Database hosting and authentication</li>
          <li><strong>Google OAuth:</strong> Optional sign-in method (Google's Privacy Policy applies)</li>
          <li><strong>Expo/EAS:</strong> App infrastructure and hosting</li>
        </ul>

        <h3>5.2 We Do NOT Sell Your Data</h3>
        <p>
          We do not sell, rent, or trade your personal information to third parties for marketing purposes.
        </p>

        <h3>5.3 Legal Requirements</h3>
        <p>We may disclose your information if required by law or to:</p>
        <ul>
          <li>Comply with legal obligations or court orders</li>
          <li>Protect our rights, property, or safety</li>
          <li>Prevent fraud or abuse</li>
        </ul>
      </section>

      <section>
        <h2>6. Your Rights and Choices</h2>

        <h3>6.1 Access and Update</h3>
        <p>
          You can view and update your profile information at any time through the app's Profile/Settings screen.
        </p>

        <h3>6.2 Data Deletion</h3>
        <p>
          You have the right to request deletion of your account and all associated data.
          To request deletion, contact us at <a href="mailto:wguidero@gmail.com">wguidero@gmail.com</a>
          with the subject line "Account Deletion Request." We will delete your data within 30 days.
        </p>

        <h3>6.3 Opt-Out of Biometric Authentication</h3>
        <p>
          You can disable biometric unlock at any time by signing out and choosing "Not Now"
          when prompted to enable biometrics on your next sign-in.
        </p>

        <h3>6.4 GDPR Rights (European Users)</h3>
        <p>If you are located in the European Economic Area, you have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing of your data</li>
          <li>Request data portability</li>
          <li>Withdraw consent at any time</li>
        </ul>

        <h3>6.5 CCPA Rights (California Users)</h3>
        <p>California residents have the right to:</p>
        <ul>
          <li>Know what personal information is collected</li>
          <li>Know whether personal information is sold or disclosed</li>
          <li>Opt-out of the sale of personal information (we do not sell data)</li>
          <li>Request deletion of personal information</li>
          <li>Non-discrimination for exercising CCPA rights</li>
        </ul>
      </section>

      <section>
        <h2>7. Children's Privacy</h2>
        <p>
          Our app is intended for users aged 18 and older. We do not knowingly collect personal
          information from children under 18. If you believe we have collected information from
          a child under 18, please contact us immediately at <a href="mailto:wguidero@gmail.com">wguidero@gmail.com</a>.
        </p>
      </section>

      <section>
        <h2>8. Data Retention</h2>
        <p>We retain your personal information for as long as:</p>
        <ul>
          <li>Your account is active</li>
          <li>Needed to provide you with our services</li>
          <li>Required to comply with legal obligations</li>
          <li>Necessary to resolve disputes or enforce agreements</li>
        </ul>
        <p>
          After you request account deletion, we will delete or anonymize your data within 30 days,
          except where we are legally required to retain certain information.
        </p>
      </section>

      <section>
        <h2>9. International Data Transfers</h2>
        <p>
          Your information may be transferred to and processed in countries other than your country
          of residence, including the United States. We ensure appropriate safeguards are in place
          to protect your data in accordance with this Privacy Policy.
        </p>
      </section>

      <section>
        <h2>10. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of significant
          changes by updating the "Last Updated" date and, where appropriate, by sending you an
          email notification or in-app message.
        </p>
      </section>

      <section>
        <h2>11. Contact Us</h2>
        <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:wguidero@gmail.com">wguidero@gmail.com</a></li>
          <li><strong>Support Page:</strong> <a href="/support">burnandturnpoker.com/support</a></li>
        </ul>
      </section>

      <section>
        <h2>12. Consent</h2>
        <p>
          By using Burn and Turn Poker Trainer, you consent to this Privacy Policy and agree to
          its terms.
        </p>
      </section>

      <style jsx>{`
        .container {
          max-width: 800px;
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
        }

        .last-updated {
          color: #666;
          font-style: italic;
          margin-bottom: 30px;
        }

        section {
          margin-bottom: 40px;
        }

        h2 {
          font-size: 1.8rem;
          margin-top: 40px;
          margin-bottom: 15px;
          color: #1a1a2e;
          border-bottom: 2px solid #4CAF50;
          padding-bottom: 10px;
        }

        h3 {
          font-size: 1.3rem;
          margin-top: 25px;
          margin-bottom: 10px;
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
        }

        a:hover {
          text-decoration: underline;
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

          h2 {
            font-size: 1.5rem;
          }

          h3 {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
}
