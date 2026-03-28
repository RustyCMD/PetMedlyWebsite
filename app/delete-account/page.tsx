import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description:
    "How to delete your Petmedly account and all associated data.",
};

export default function DeleteAccount() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl dark:text-text-dark">
          Delete Your Account
        </h1>
        <p className="mt-3 text-text-muted dark:text-text-dark-muted">
          Pet Medly &mdash; Petmedly App
        </p>
      </header>

      <div className="space-y-10 text-[15px] leading-relaxed text-text-muted dark:text-text-dark-muted [&_h2]:mb-3 [&_h2]:mt-0 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-text dark:[&_h2]:text-text-dark [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1.5">

        <section>
          <h2>How to Delete Your Account</h2>
          <p>
            You can delete your Petmedly account at any time. There are two ways to do this:
          </p>
        </section>

        <section>
          <h2>Option 1: Delete From the App</h2>
          <ol className="ml-5 list-decimal space-y-2">
            <li>Open the Petmedly app on your device.</li>
            <li>Go to the <strong>Account</strong> screen (tap your profile or the account icon).</li>
            <li>Tap <strong>Delete Account</strong>.</li>
            <li>Confirm the deletion when prompted.</li>
          </ol>
          <p className="mt-3">
            Your account and all associated data will be permanently removed from our servers immediately.
          </p>
        </section>

        <section>
          <h2>Option 2: Request Deletion by Email</h2>
          <p>
            If you are unable to access the app, you can request account deletion by emailing us:
          </p>
          <div className="mt-3 rounded-lg border border-border bg-surface-alt p-4 dark:border-border-dark dark:bg-surface-dark-alt">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:privacy@petmedly.app?subject=Account%20Deletion%20Request"
                className="text-primary hover:underline dark:text-primary-light"
              >
                privacy@petmedly.app
              </a>
            </p>
            <p className="mt-1">
              <strong>Subject:</strong> Account Deletion Request
            </p>
          </div>
          <p className="mt-3">
            Please send the email from the address associated with your Petmedly account so we can verify your identity. We will process your request within <strong>30 days</strong>.
          </p>
        </section>

        <section>
          <h2>What Gets Deleted</h2>
          <p>When your account is deleted, the following data is <strong>permanently removed</strong> from our servers:</p>
          <ul>
            <li>Your account credentials (email and hashed password).</li>
            <li>All synced pet profiles (name, species, breed, weight).</li>
            <li>All synced medication records (name, dosage, frequency, schedule, notes).</li>
            <li>All synced dose logs (times, status, notes).</li>
            <li>All authentication tokens associated with your account.</li>
          </ul>
        </section>

        <section>
          <h2>What Is NOT Affected</h2>
          <ul>
            <li><strong>Local data on your device</strong> is not affected by account deletion. Your pet profiles, medications, and dose logs stored locally on your phone will remain until you delete them in the app or uninstall the app.</li>
            <li><strong>Security logs</strong> containing your IP address and request metadata may be retained for up to 90 days after deletion for security and abuse prevention purposes, as described in our <a href="/privacy" className="text-primary hover:underline dark:text-primary-light">Privacy Policy</a>.</li>
          </ul>
        </section>

        <section>
          <h2>Important Notes</h2>
          <ul>
            <li>Account deletion is <strong>permanent and irreversible</strong>. We cannot recover your data after deletion.</li>
            <li>If you only want to stop syncing data to the cloud without deleting your account, you can disable the &quot;Sync Data to Cloud&quot; toggle in the app settings instead.</li>
          </ul>
        </section>

        <section>
          <h2>Questions?</h2>
          <p>
            If you have any questions about account deletion or your data, please contact us at{" "}
            <a
              href="mailto:privacy@petmedly.app"
              className="text-primary hover:underline dark:text-primary-light"
            >
              privacy@petmedly.app
            </a>.
          </p>
        </section>
      </div>
    </article>
  );
}
