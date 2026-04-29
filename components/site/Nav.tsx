"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { to: "/story", label: "Our Story" },
  { to: "/process", label: "Process" },
  { to: "/products", label: "Products" },
  { to: "/cocktails", label: "Cocktails" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const isHome = path === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent text-bone"
          : "bg-bone/90 text-ink backdrop-blur-md border-b border-ink/10"
      }`}
    >
      <div className="container-edge flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center bg-sun text-ink">
            <UmbrellaMark />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">Drink Umbrella</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className={`font-mono text-[11px] uppercase tracking-[0.25em] transition hover:text-sun ${
                path === l.to ? "text-sun" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em]">
            {open ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ink text-bone">
          <nav className="container-edge flex flex-col gap-5 py-8">
            {links.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                className={`font-display text-3xl ${path === l.to ? "text-sun" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function UmbrellaMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M2 12a10 10 0 0 1 20 0Z" fill="currentColor" />
      <path d="M12 12v8a2 2 0 0 0 4 0" />
    </svg>
  );
}
