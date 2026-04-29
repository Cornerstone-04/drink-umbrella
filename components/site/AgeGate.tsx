"use client";
import { useEffect, useState } from "react";

const KEY = "umbrella-age-verified";

export function AgeGate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(KEY)) setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 text-bone backdrop-blur-md">
      <div className="container-edge w-full max-w-xl text-center fade-up">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-sun">Drink Umbrella</p>
        <h2 className="mt-6 font-display text-5xl md:text-6xl">Are you of legal drinking age?</h2>
        <p className="mt-6 text-sm text-bone/70">
          You must be of legal drinking age in your country of residence to enter this site.
          Please drink responsibly.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => { sessionStorage.setItem(KEY, "1"); setOpen(false); }}
            className="bg-sun px-8 py-4 font-mono text-xs uppercase tracking-[0.3em] text-ink transition hover:bg-sun-deep"
          >
            Yes, enter
          </button>
          <a
            href="https://www.google.com"
            className="border border-bone/30 px-8 py-4 font-mono text-xs uppercase tracking-[0.3em] text-bone transition hover:border-bone"
          >
            No
          </a>
        </div>
        <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">
          Please enjoy responsibly &middot; 18+
        </p>
      </div>
    </div>
  );
}
