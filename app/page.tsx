import Link from "next/link";

function ShieldIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" className="fill-primary/15" />
      <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" className="stroke-primary" strokeWidth="1.5" fill="none" />
      <path d="M9 12l2 2 4-4" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" className="fill-primary/15 stroke-primary" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" className="fill-primary/15 stroke-primary" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DeviceIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" className="fill-primary/15 stroke-primary" strokeWidth="1.5" />
      <line x1="12" y1="18" x2="12.01" y2="18" className="stroke-primary" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PawIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="8" cy="7" rx="2" ry="2.5" className="fill-primary/15 stroke-primary" strokeWidth="1.2" />
      <ellipse cx="16" cy="7" rx="2" ry="2.5" className="fill-primary/15 stroke-primary" strokeWidth="1.2" />
      <ellipse cx="5" cy="12" rx="1.8" ry="2.2" className="fill-primary/15 stroke-primary" strokeWidth="1.2" />
      <ellipse cx="19" cy="12" rx="1.8" ry="2.2" className="fill-primary/15 stroke-primary" strokeWidth="1.2" />
      <path d="M12 20c-3 0-5-3-5-5.5S10 11 12 11s5 1 5 3.5S15 20 12 20z" className="fill-primary/15 stroke-primary" strokeWidth="1.2" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" className="fill-primary/15 stroke-primary" strokeWidth="1.5" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="12" cy="16" r="1.5" className="fill-primary" />
    </svg>
  );
}

const features = [
  {
    icon: <PawIcon />,
    title: "Track All Your Pets",
    description:
      "Add multiple pets with their species, breed, and weight. Keep everything organised in one place.",
  },
  {
    icon: <BellIcon />,
    title: "Never Miss a Dose",
    description:
      "Set medication reminders that alert you at the right time. Supports complex dosing schedules.",
  },
  {
    icon: <DeviceIcon />,
    title: "Works Offline",
    description:
      "All data lives on your device by default. No account required — the app works fully offline.",
  },
  {
    icon: <CloudIcon />,
    title: "Optional Cloud Sync",
    description:
      "Create an account to sync across devices. Your data is stored on secure EU servers. Turn it off anytime.",
  },
  {
    icon: <ShieldIcon />,
    title: "Privacy First",
    description:
      "No ads, no analytics, no tracking. We collect only what's needed and nothing more.",
  },
  {
    icon: <LockIcon />,
    title: "Secure by Design",
    description:
      "Passwords hashed with Argon2id, encrypted connections, rotating tokens, and rate limiting built in.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 dark:from-primary/10 dark:to-accent/10" />
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-24 text-center sm:pt-32">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 dark:bg-primary/20">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                className="fill-primary"
              />
              <path d="M11 10h2v4h-2zM10 11h4v2h-4z" fill="white" />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-text sm:text-5xl lg:text-6xl dark:text-text-dark">
            Pet medication tracking
            <br />
            <span className="text-primary dark:text-primary-light">made simple.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted dark:text-text-dark-muted">
            Petmedly helps you manage your pet&apos;s medications, set dose reminders,
            and keep a complete health log — all from your phone, with your privacy
            fully respected.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-text transition-all hover:border-primary hover:text-primary dark:border-border-dark dark:text-text-dark dark:hover:border-primary-light dark:hover:text-primary-light"
            >
              Read our Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-text transition-all hover:border-primary hover:text-primary dark:border-border-dark dark:text-text-dark dark:hover:border-primary-light dark:hover:text-primary-light"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-surface-alt dark:border-border-dark dark:bg-surface-dark-alt">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-center text-2xl font-bold tracking-tight text-text sm:text-3xl dark:text-text-dark">
            Everything you need, nothing you don&apos;t.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-muted dark:text-text-dark-muted">
            Built for pet owners who care about their animals and their own privacy.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-md dark:border-border-dark dark:bg-surface-dark"
              >
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold text-text dark:text-text-dark">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted dark:text-text-dark-muted">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Bottom */}
      <section className="border-t border-border dark:border-border-dark">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl dark:text-text-dark">
            Your pet&apos;s health, your data, your control.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-muted dark:text-text-dark-muted">
            Petmedly is free to use with no hidden costs. We believe in transparency — read our legal documents to see exactly how we handle your information.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/privacy"
              className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="rounded-full bg-surface-alt px-8 py-3 text-sm font-semibold text-text shadow-sm ring-1 ring-border transition-colors hover:bg-surface dark:bg-surface-dark-alt dark:text-text-dark dark:ring-border-dark dark:hover:bg-surface-dark"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
