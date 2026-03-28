import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Petmedly - Pet Medication Tracker",
    template: "%s | Petmedly",
  },
  description:
    "Track your pet's medications, set reminders, and never miss a dose. Privacy-first, local-first, with optional cloud sync.",
};

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md dark:border-border-dark dark:bg-surface-dark/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-text dark:text-text-dark">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="currentColor"
              className="text-primary"
            />
            <path
              d="M11 10h2v4h-2zM10 11h4v2h-4z"
              fill="white"
            />
          </svg>
          Petmedly
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/privacy" className="text-text-muted transition-colors hover:text-primary dark:text-text-dark-muted dark:hover:text-primary-light">
            Privacy
          </Link>
          <Link href="/terms" className="text-text-muted transition-colors hover:text-primary dark:text-text-dark-muted dark:hover:text-primary-light">
            Terms
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface-alt dark:border-border-dark dark:bg-surface-dark-alt">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-text dark:text-text-dark">Petmedly</p>
            <p className="mt-1 text-sm text-text-muted dark:text-text-dark-muted">
              Pet medication tracking made simple.
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-text-muted transition-colors hover:text-primary dark:text-text-dark-muted dark:hover:text-primary-light">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-text-muted transition-colors hover:text-primary dark:text-text-dark-muted dark:hover:text-primary-light">
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-text-muted dark:border-border-dark dark:text-text-dark-muted">
          <p>&copy; {currentYear} Pet Medly. All rights reserved.</p>
          <p className="mt-1">
            Questions? Contact us at{" "}
            <a href="mailto:privacy@petmedly.app" className="text-primary hover:underline dark:text-primary-light">
              privacy@petmedly.app
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col bg-surface text-text dark:bg-surface-dark dark:text-text-dark">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
