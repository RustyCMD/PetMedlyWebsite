import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Petmedly - Pet Medication Tracker.",
};

export default function TermsOfService() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl dark:text-text-dark">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-text-muted dark:text-text-dark-muted">
          Effective date: March 28, 2026 &middot; Last updated: March 28, 2026
        </p>
      </header>

      <div className="prose-section space-y-10 text-[15px] leading-relaxed text-text-muted dark:text-text-dark-muted [&_h2]:mb-3 [&_h2]:mt-0 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-text dark:[&_h2]:text-text-dark [&_h3]:mb-2 [&_h3]:mt-0 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-text dark:[&_h3]:text-text-dark [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1.5">

        <section>
          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and Pet Medly (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), governing your use of the Petmedly mobile application and any related services (collectively, the &quot;Service&quot;).
          </p>
          <p className="mt-3">
            By downloading, installing, or using the Service, you agree to be bound by these Terms. If you do not agree, you must not use the Service.
          </p>
        </section>

        <section>
          <h2>2. Eligibility</h2>
          <p>
            You must be at least <strong>16 years of age</strong> to use the Service. By using the Service, you represent and warrant that you meet this age requirement. If you are under the age of legal majority in your jurisdiction, you confirm that you have obtained consent from a parent or legal guardian.
          </p>
        </section>

        <section>
          <h2>3. Description of the Service</h2>
          <p>
            Petmedly is a mobile application that allows you to:
          </p>
          <ul>
            <li>Track your pets and their information (name, species, breed, weight, photo).</li>
            <li>Record medications including dosage, frequency, and schedules.</li>
            <li>Log doses administered and maintain an adherence history.</li>
            <li>Receive local device notifications as medication reminders.</li>
            <li>Optionally create an account and synchronise your data to our cloud servers.</li>
          </ul>
          <p className="mt-3">
            The Service is provided <strong>free of charge</strong>. There are no in-app purchases, premium tiers, or subscription fees.
          </p>
        </section>

        <section>
          <h2>4. Account Registration</h2>
          <p>
            You may use the Service without creating an account. All core features work fully offline with data stored locally on your device.
          </p>
          <p className="mt-3">
            If you choose to create an account to enable cloud synchronisation:
          </p>
          <ul>
            <li>You must provide a valid email address and a strong password.</li>
            <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
            <li>You agree to notify us promptly of any unauthorised access to your account.</li>
            <li>You may only create one account per person.</li>
          </ul>
        </section>

        <section>
          <h2>5. Cloud Synchronisation</h2>
          <p>
            Cloud sync is an <strong>optional feature</strong> that you can enable or disable at any time within the app. When enabled:
          </p>
          <ul>
            <li>Your pet data, medication records, and dose logs are transmitted to and stored on our servers located in the <strong>European Union</strong>.</li>
            <li>Data is transmitted over encrypted HTTPS connections.</li>
            <li>You retain full control and can disable sync at any time, reverting to local-only storage.</li>
          </ul>
          <p className="mt-3">
            We are not responsible for data loss resulting from device failure when cloud sync is disabled. We recommend enabling sync as a backup mechanism.
          </p>
        </section>

        <section>
          <h2>6. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service for any unlawful purpose or in violation of any applicable law or regulation.</li>
            <li>Attempt to gain unauthorised access to any part of the Service, other accounts, or our servers.</li>
            <li>Interfere with or disrupt the integrity or performance of the Service.</li>
            <li>Reverse-engineer, decompile, or disassemble the application except as permitted by applicable law.</li>
            <li>Use automated scripts, bots, or scrapers to access the Service.</li>
            <li>Transmit malicious code, viruses, or harmful data through the Service.</li>
          </ul>
        </section>

        <section>
          <h2>7. Intellectual Property</h2>
          <p>
            The Service, including its design, code, graphics, logos, and content, is owned by Pet Medly and protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable, revocable licence to use the Service for personal, non-commercial purposes in accordance with these Terms.
          </p>
          <p className="mt-3">
            You retain ownership of any data you enter into the Service (pet information, medication records, etc.). By using cloud sync, you grant us a limited licence to store, process, and transmit your data solely for the purpose of providing the Service to you.
          </p>
        </section>

        <section>
          <h2>8. Medical Disclaimer</h2>
          <p>
            <strong>Petmedly is not a veterinary service and does not provide medical advice.</strong> The Service is a personal organisational tool for tracking pet medication schedules. It is not a substitute for professional veterinary care.
          </p>
          <ul>
            <li>Always consult a qualified veterinarian for medical decisions regarding your pets.</li>
            <li>Do not rely on the Service as the sole means of managing critical or life-threatening medication regimens.</li>
            <li>We make no guarantees about the accuracy or reliability of notification delivery.</li>
          </ul>
        </section>

        <section>
          <h2>9. Service Availability</h2>
          <p>
            We strive to maintain the Service&apos;s availability but do not guarantee uninterrupted access. The Service may be temporarily unavailable due to:
          </p>
          <ul>
            <li>Scheduled or emergency maintenance.</li>
            <li>Server outages or technical failures.</li>
            <li>Circumstances beyond our reasonable control.</li>
          </ul>
          <p className="mt-3">
            The local (offline) functionality of the app is not affected by server availability.
          </p>
        </section>

        <section>
          <h2>10. Account Termination</h2>
          <p>
            <strong>By you:</strong> You may delete your account at any time. Upon account deletion, all your data stored on our servers will be permanently removed. Data stored locally on your device will remain unless you uninstall the app.
          </p>
          <p className="mt-3">
            <strong>By us:</strong> We reserve the right to suspend or terminate your account if you violate these Terms or engage in conduct that we reasonably determine is harmful to the Service or other users. We will make reasonable efforts to notify you before doing so.
          </p>
        </section>

        <section>
          <h2>11. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law:
          </p>
          <ul>
            <li>The Service is provided on an <strong>&quot;as is&quot;</strong> and <strong>&quot;as available&quot;</strong> basis without warranties of any kind, either express or implied.</li>
            <li>We disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</li>
            <li>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Service.</li>
            <li>Our total liability for any claim related to the Service shall not exceed the amount you have paid us (which is zero, as the Service is free).</li>
          </ul>
          <p className="mt-3">
            Some jurisdictions do not allow the exclusion or limitation of certain warranties or liabilities. In such cases, our liability is limited to the fullest extent permitted by law.
          </p>
        </section>

        <section>
          <h2>12. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Pet Medly and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable legal fees) arising from your use of the Service or your violation of these Terms.
          </p>
        </section>

        <section>
          <h2>13. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. When we make material changes:
          </p>
          <ul>
            <li>We will update the &quot;Last updated&quot; date at the top of this page.</li>
            <li>For significant changes, we will notify you through the app or via the email address associated with your account.</li>
          </ul>
          <p className="mt-3">
            Your continued use of the Service after changes take effect constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section>
          <h2>14. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the European Union and the applicable national laws of the jurisdiction in which Pet Medly operates, without regard to conflict of law principles. Any disputes arising under these Terms shall be resolved in the competent courts of that jurisdiction.
          </p>
          <p className="mt-3">
            If you are a consumer in the European Economic Area, you retain the benefit of any mandatory consumer protection provisions in your country of residence. Nothing in these Terms affects your statutory rights as a consumer.
          </p>
        </section>

        <section>
          <h2>15. Severability</h2>
          <p>
            If any provision of these Terms is found to be invalid or unenforceable, that provision will be enforced to the maximum extent permissible, and the remaining provisions will remain in full force and effect.
          </p>
        </section>

        <section>
          <h2>16. Entire Agreement</h2>
          <p>
            These Terms, together with our <a href="/privacy" className="text-primary hover:underline dark:text-primary-light">Privacy Policy</a>, constitute the entire agreement between you and Pet Medly regarding the Service and supersede all prior agreements and understandings.
          </p>
        </section>

        <section>
          <h2>17. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:privacy@petmedly.app" className="text-primary hover:underline dark:text-primary-light">
                privacy@petmedly.app
              </a>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
