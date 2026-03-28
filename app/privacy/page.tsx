import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Petmedly - Pet Medication Tracker. GDPR and CCPA compliant.",
};

export default function PrivacyPolicy() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl dark:text-text-dark">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-text-muted dark:text-text-dark-muted">
          Effective date: March 28, 2026 &middot; Last updated: March 28, 2026
        </p>
      </header>

      <div className="prose-section space-y-10 text-[15px] leading-relaxed text-text-muted dark:text-text-dark-muted [&_h2]:mb-3 [&_h2]:mt-0 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-text dark:[&_h2]:text-text-dark [&_h3]:mb-2 [&_h3]:mt-0 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-text dark:[&_h3]:text-text-dark [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_table]:w-full [&_table]:text-sm [&_th]:pb-2 [&_th]:text-left [&_th]:font-semibold [&_th]:text-text dark:[&_th]:text-text-dark [&_td]:border-t [&_td]:border-border dark:[&_td]:border-border-dark [&_td]:py-2.5 [&_td]:pr-4 [&_td]:align-top">

        {/* ========== Intro ========== */}
        <section>
          <h2>1. Introduction</h2>
          <p>
            Pet Medly (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the Petmedly mobile application (the &quot;App&quot;) and related backend services (collectively, the &quot;Service&quot;). This Privacy Policy explains how we collect, use, store, and protect your personal data when you use the Service.
          </p>
          <p className="mt-3">
            We are committed to protecting your privacy and complying with the <strong>General Data Protection Regulation (GDPR)</strong>, the <strong>California Consumer Privacy Act (CCPA)</strong>, and other applicable data protection laws worldwide.
          </p>
          <p className="mt-3">
            Please read this policy carefully. By using the Service, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </section>

        {/* ========== Data Controller ========== */}
        <section>
          <h2>2. Data Controller</h2>
          <p>The data controller responsible for your personal data is:</p>
          <div className="mt-3 rounded-lg border border-border bg-surface-alt p-4 dark:border-border-dark dark:bg-surface-dark-alt">
            <p><strong>Pet Medly</strong></p>
            <p className="mt-1">
              Email:{" "}
              <a href="mailto:privacy@petmedly.app" className="text-primary hover:underline dark:text-primary-light">
                privacy@petmedly.app
              </a>
            </p>
          </div>
        </section>

        {/* ========== Data We Collect ========== */}
        <section>
          <h2>3. Data We Collect</h2>
          <p>
            Petmedly is designed with a <strong>local-first architecture</strong>. You can use the App fully without creating an account, in which case all data stays exclusively on your device. We only collect personal data on our servers when you voluntarily create an account and enable cloud synchronisation.
          </p>

          <h3 className="mt-6">3.1 Data Stored Locally on Your Device Only</h3>
          <p>The following data is stored on your device and is <strong>never sent to our servers</strong> unless you explicitly enable cloud sync:</p>
          <ul>
            <li><strong>Pet profiles:</strong> name, species, breed, weight, and photos.</li>
            <li><strong>Medication records:</strong> medication name, dosage, frequency, times of day, start and end dates, and notes.</li>
            <li><strong>Dose logs:</strong> scheduled time, administration status, logged time, and notes.</li>
            <li><strong>App preferences:</strong> sync toggle state and last synchronisation timestamp.</li>
          </ul>
          <p className="mt-3">
            Pet photos are stored as image files in the app&apos;s private storage directory. They are <strong>not uploaded</strong> to our servers even when cloud sync is enabled.
          </p>

          <h3 className="mt-6">3.2 Data Collected When You Create an Account</h3>
          <p>If you choose to create an account, we collect:</p>
          <ul>
            <li><strong>Email address:</strong> used as your unique account identifier and for important account-related communications.</li>
            <li><strong>Password:</strong> we never store your password in plain text. It is hashed using <strong>Argon2id</strong> (a memory-hard hashing algorithm) before storage.</li>
          </ul>

          <h3 className="mt-6">3.3 Data Synced When Cloud Sync Is Enabled</h3>
          <p>If you create an account <strong>and</strong> enable the &quot;Sync Data to Cloud&quot; toggle, the following data is transmitted to and stored on our servers:</p>
          <ul>
            <li>Pet profiles (name, species, breed, weight &mdash; <strong>excluding photos</strong>).</li>
            <li>Medication records (name, dosage, frequency, schedule, notes).</li>
            <li>Dose logs (times, status, notes).</li>
          </ul>

          <h3 className="mt-6">3.4 Data Collected Automatically (Server-Side)</h3>
          <p>When you interact with our servers (logging in, syncing data), we automatically collect:</p>
          <ul>
            <li><strong>IP address:</strong> for security monitoring, rate limiting, and abuse prevention.</li>
            <li><strong>User-Agent string:</strong> information about your device and app version, for security logging.</li>
            <li><strong>Timestamps:</strong> of authentication events and sync operations.</li>
          </ul>
          <p className="mt-3">This data is recorded in server-side security logs and is used exclusively for security and operational purposes.</p>

          <h3 className="mt-6">3.5 Data We Do NOT Collect</h3>
          <p>We want to be explicit about what we <strong>do not</strong> collect:</p>
          <ul>
            <li>Real names, phone numbers, or physical addresses.</li>
            <li>Location or GPS data.</li>
            <li>Device identifiers, advertising IDs, or fingerprints.</li>
            <li>Usage analytics or behavioural tracking data.</li>
            <li>Cookies (the App does not use a web browser or cookies).</li>
            <li>Payment or financial information.</li>
            <li>Contacts, calendar, or other data from your device.</li>
          </ul>
        </section>

        {/* ========== Legal Bases (GDPR) ========== */}
        <section>
          <h2>4. Legal Bases for Processing (GDPR)</h2>
          <p>Under the General Data Protection Regulation, we process your personal data based on the following legal grounds:</p>
          <div className="mt-4 overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Processing Activity</th>
                  <th>Legal Basis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Account creation and authentication</td>
                  <td><strong>Consent</strong> (Art. 6(1)(a)) &mdash; you voluntarily choose to create an account</td>
                </tr>
                <tr>
                  <td>Cloud data synchronisation</td>
                  <td><strong>Consent</strong> (Art. 6(1)(a)) &mdash; you explicitly enable the sync toggle</td>
                </tr>
                <tr>
                  <td>Security logging (IP, User-Agent)</td>
                  <td><strong>Legitimate interest</strong> (Art. 6(1)(f)) &mdash; protecting the Service and users from abuse, fraud, and unauthorised access</td>
                </tr>
                <tr>
                  <td>Providing and maintaining the Service</td>
                  <td><strong>Contract performance</strong> (Art. 6(1)(b)) &mdash; necessary to deliver the Service you requested</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            You may withdraw your consent at any time by disabling cloud sync or deleting your account. Withdrawal of consent does not affect the lawfulness of processing performed before the withdrawal.
          </p>
        </section>

        {/* ========== Purposes ========== */}
        <section>
          <h2>5. How We Use Your Data</h2>
          <p>We use your personal data for the following purposes only:</p>
          <ul>
            <li><strong>Account management:</strong> to create and manage your user account, authenticate you, and issue secure session tokens.</li>
            <li><strong>Cloud synchronisation:</strong> to store your pet, medication, and dose log data on our servers so you can access it across devices.</li>
            <li><strong>Security and abuse prevention:</strong> to detect and prevent unauthorised access, brute-force attacks, and other malicious activity through rate limiting, account lockout, and security logging.</li>
            <li><strong>Service operation:</strong> to monitor server health, diagnose technical issues, and ensure the Service functions reliably.</li>
          </ul>
          <p className="mt-3">
            We do <strong>not</strong> use your data for advertising, profiling, automated decision-making, or any purpose other than those listed above.
          </p>
        </section>

        {/* ========== Data Storage & Security ========== */}
        <section>
          <h2>6. Data Storage and Security</h2>

          <h3 className="mt-4">6.1 Where Your Data Is Stored</h3>
          <ul>
            <li><strong>On your device:</strong> all app data is stored in a private SQLite database and secure storage within the app&apos;s sandboxed directory.</li>
            <li><strong>On our servers:</strong> if you enable cloud sync, your data is stored in a PostgreSQL database on servers located in the <strong>European Union</strong>.</li>
          </ul>

          <h3 className="mt-6">6.2 Security Measures</h3>
          <p>We implement the following technical and organisational measures to protect your data:</p>
          <ul>
            <li><strong>Password hashing:</strong> Argon2id with memory-hard parameters, ensuring passwords cannot be reversed even if the database is compromised.</li>
            <li><strong>Encrypted connections:</strong> all data in transit is protected by TLS/HTTPS encryption.</li>
            <li><strong>Token security:</strong> short-lived JWT access tokens with rotating refresh tokens. Refresh tokens are stored as SHA-256 hashes on the server.</li>
            <li><strong>Rate limiting:</strong> configurable rate limits on authentication and API endpoints to prevent brute-force and denial-of-service attacks.</li>
            <li><strong>Account lockout:</strong> automatic temporary lockout after repeated failed login attempts.</li>
            <li><strong>Encrypted server statistics:</strong> aggregate operational data is encrypted with AES-256-GCM at rest.</li>
            <li><strong>Secure headers:</strong> HTTP security headers (Helmet) to mitigate common web vulnerabilities.</li>
            <li><strong>Database access:</strong> the PostgreSQL database is not exposed to the public internet; only the application server can connect to it.</li>
          </ul>

          <h3 className="mt-6">6.3 Data Retention</h3>
          <ul>
            <li><strong>Account data:</strong> retained for as long as your account exists. When you delete your account, all associated data is permanently removed from our servers.</li>
            <li><strong>Security logs:</strong> retained for up to <strong>90 days</strong> for security analysis and incident response, then automatically purged.</li>
            <li><strong>Local data:</strong> remains on your device until you delete it within the app or uninstall the app. We have no access to or control over locally stored data.</li>
          </ul>
        </section>

        {/* ========== Data Sharing ========== */}
        <section>
          <h2>7. Data Sharing and Third Parties</h2>
          <p>
            <strong>We do not sell, rent, trade, or share your personal data with any third parties.</strong>
          </p>
          <p className="mt-3">
            Specifically:
          </p>
          <ul>
            <li>We do not use third-party analytics services.</li>
            <li>We do not use third-party advertising networks.</li>
            <li>We do not use third-party crash reporting tools.</li>
            <li>We do not integrate with social media platforms.</li>
            <li>We do not use third-party data processors for your personal data.</li>
          </ul>
          <p className="mt-3">
            The only scenario in which we may disclose your data is if we are legally compelled to do so by a court order or law enforcement request under applicable law. In such cases, we will notify you to the extent legally permitted.
          </p>
        </section>

        {/* ========== International Transfers ========== */}
        <section>
          <h2>8. International Data Transfers</h2>
          <p>
            Our servers are located in the <strong>European Union</strong>. If you access the Service from outside the EU, your data will be transferred to and stored in the EU.
          </p>
          <p className="mt-3">
            The EU provides a high level of data protection under the GDPR. For users in countries with adequacy decisions from the European Commission, this transfer is fully compliant. For users in other jurisdictions, the transfer is based on your explicit consent when you create an account and enable sync.
          </p>
        </section>

        {/* ========== Your Rights (GDPR) ========== */}
        <section>
          <h2>9. Your Rights Under the GDPR</h2>
          <p>
            If you are located in the European Economic Area (EEA), the United Kingdom, or Switzerland, you have the following rights regarding your personal data:
          </p>
          <ul>
            <li>
              <strong>Right of access (Art. 15):</strong> you have the right to obtain confirmation of whether we process your personal data and to request a copy of that data.
            </li>
            <li>
              <strong>Right to rectification (Art. 16):</strong> you have the right to request correction of inaccurate personal data. You can also update your pet and medication records directly in the app.
            </li>
            <li>
              <strong>Right to erasure (Art. 17):</strong> you have the right to request deletion of your personal data. You can delete your account at any time, which permanently removes all server-side data.
            </li>
            <li>
              <strong>Right to restriction of processing (Art. 18):</strong> you have the right to request that we restrict the processing of your personal data in certain circumstances.
            </li>
            <li>
              <strong>Right to data portability (Art. 20):</strong> you have the right to receive your personal data in a structured, commonly used, and machine-readable format. The cloud sync feature effectively provides this through its data pull functionality.
            </li>
            <li>
              <strong>Right to object (Art. 21):</strong> you have the right to object to processing based on legitimate interests. You can disable cloud sync at any time.
            </li>
            <li>
              <strong>Right to withdraw consent (Art. 7):</strong> where processing is based on consent, you can withdraw consent at any time by disabling cloud sync or deleting your account.
            </li>
            <li>
              <strong>Right to lodge a complaint:</strong> you have the right to lodge a complaint with your local data protection supervisory authority if you believe your rights have been violated.
            </li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:privacy@petmedly.app" className="text-primary hover:underline dark:text-primary-light">
              privacy@petmedly.app
            </a>. We will respond within <strong>30 days</strong> of receiving your request, as required by the GDPR.
          </p>
        </section>

        {/* ========== CCPA ========== */}
        <section>
          <h2>10. Your Rights Under the CCPA (California Residents)</h2>
          <p>
            If you are a California resident, the California Consumer Privacy Act (CCPA) grants you additional rights:
          </p>
          <ul>
            <li>
              <strong>Right to know:</strong> you have the right to request disclosure of the categories and specific pieces of personal information we have collected about you in the past 12 months.
            </li>
            <li>
              <strong>Right to delete:</strong> you have the right to request deletion of your personal information, subject to certain exceptions.
            </li>
            <li>
              <strong>Right to non-discrimination:</strong> we will not discriminate against you for exercising your CCPA rights. Since the Service is free, there is no pricing differential.
            </li>
            <li>
              <strong>Right to opt out of sale:</strong> <strong>we do not sell your personal information</strong> to any third party. This right is automatically satisfied.
            </li>
          </ul>
          <p className="mt-3">
            <strong>Categories of personal information collected</strong> (as defined by the CCPA):
          </p>
          <ul>
            <li><strong>Identifiers:</strong> email address, IP address.</li>
            <li><strong>Internet or electronic network activity:</strong> User-Agent string, authentication timestamps.</li>
          </ul>
          <p className="mt-3">
            We do <strong>not</strong> collect categories such as commercial information, biometric data, geolocation data, sensory data, professional information, education information, or inferences drawn from the above.
          </p>
          <p className="mt-3">
            To exercise your CCPA rights, contact us at{" "}
            <a href="mailto:privacy@petmedly.app" className="text-primary hover:underline dark:text-primary-light">
              privacy@petmedly.app
            </a>. We will verify your identity before processing requests and respond within <strong>45 days</strong>.
          </p>
        </section>

        {/* ========== Children ========== */}
        <section>
          <h2>11. Children&apos;s Privacy</h2>
          <p>
            The Service is not directed at children under the age of <strong>16</strong>. We do not knowingly collect personal data from children under 16. This age threshold is set in compliance with <strong>GDPR Article 8</strong>, which establishes 16 as the default age of digital consent.
          </p>
          <p className="mt-3">
            If we become aware that we have collected personal data from a child under 16 without appropriate parental consent, we will take steps to delete that information promptly. If you believe a child under 16 has provided us with personal data, please contact us at{" "}
            <a href="mailto:privacy@petmedly.app" className="text-primary hover:underline dark:text-primary-light">
              privacy@petmedly.app
            </a>.
          </p>
        </section>

        {/* ========== Cookies & Tracking ========== */}
        <section>
          <h2>12. Cookies and Tracking Technologies</h2>
          <p>
            <strong>Petmedly does not use cookies, web beacons, pixels, or any other tracking technologies.</strong>
          </p>
          <p className="mt-3">
            The App is a native mobile application that communicates with our API server using JSON over HTTPS with bearer token authentication. There is no web browser component, no embedded webviews for tracking, and no third-party SDKs that place cookies or collect device identifiers.
          </p>
          <p className="mt-3">
            This website (petmedly.app) is a static informational site and does not use cookies or analytics trackers.
          </p>
        </section>

        {/* ========== Notifications ========== */}
        <section>
          <h2>13. Notifications</h2>
          <p>
            Petmedly uses <strong>local device notifications only</strong> to remind you of scheduled medication doses. These notifications:
          </p>
          <ul>
            <li>Are generated entirely on your device by the app.</li>
            <li>Are not sent from our servers (no push notification services like Firebase Cloud Messaging or Apple Push Notifications are used).</li>
            <li>May contain the pet&apos;s name and medication details for your convenience.</li>
            <li>Can be disabled at any time through your device&apos;s system notification settings.</li>
          </ul>
          <p className="mt-3">
            We do not send marketing emails, promotional notifications, or newsletters. The only communications from us would be critical account-related notices (e.g., security alerts), delivered via the email address associated with your account.
          </p>
        </section>

        {/* ========== Data Breach ========== */}
        <section>
          <h2>14. Data Breach Notification</h2>
          <p>
            In the event of a personal data breach that is likely to result in a risk to your rights and freedoms, we will:
          </p>
          <ul>
            <li>Notify the relevant supervisory authority within <strong>72 hours</strong> of becoming aware of the breach, as required by GDPR Article 33.</li>
            <li>Notify affected users without undue delay if the breach is likely to result in a <strong>high risk</strong> to your rights and freedoms, as required by GDPR Article 34.</li>
            <li>Document the breach, its effects, and the remedial actions taken.</li>
          </ul>
        </section>

        {/* ========== Changes ========== */}
        <section>
          <h2>15. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes:
          </p>
          <ul>
            <li>The &quot;Last updated&quot; date at the top of this page will be revised.</li>
            <li>For material changes, we will provide notice through the App or via email to your registered email address at least <strong>30 days</strong> before the changes take effect.</li>
          </ul>
          <p className="mt-3">
            We encourage you to review this Privacy Policy periodically. Your continued use of the Service after changes become effective constitutes acceptance of the updated policy.
          </p>
        </section>

        {/* ========== Contact ========== */}
        <section>
          <h2>16. Contact Us</h2>
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="mt-3 rounded-lg border border-border bg-surface-alt p-4 dark:border-border-dark dark:bg-surface-dark-alt">
            <p><strong>Pet Medly &mdash; Data Protection Inquiries</strong></p>
            <p className="mt-1">
              Email:{" "}
              <a href="mailto:privacy@petmedly.app" className="text-primary hover:underline dark:text-primary-light">
                privacy@petmedly.app
              </a>
            </p>
          </div>
          <p className="mt-4">
            We aim to respond to all inquiries within <strong>30 days</strong>. For GDPR-related requests, we are legally required to respond within one month and will do so.
          </p>
        </section>
      </div>
    </article>
  );
}
