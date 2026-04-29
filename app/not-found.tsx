import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-4 text-bone">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-sun">
          Lost in the haze
        </p>
        <h1 className="mt-4 font-display text-7xl">404</h1>
        <p className="mt-4 text-sm text-bone/70">
          This page has wandered off. Let&rsquo;s get you home.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-sun px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-ink transition hover:bg-sun-deep"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
