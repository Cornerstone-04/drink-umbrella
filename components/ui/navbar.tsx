"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { links } from "@/data/links";

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

  // lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const transparent = isHome && !scrolled && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          transparent
            ? "bg-transparent text-bone"
            : "bg-bone/80 text-ink backdrop-blur-md border-b border-ink/10"
        }`}
      >
        <div className="container-edge flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center bg-sun text-ink">
              <UmbrellaMark />
            </span>
            <span className="font-display text-xl tracking-tight">
              Drink Umbrella
            </span>
          </Link>

          {/* Desktop nav */}
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

          {/* Mobile hamburger */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col bg-bone md:hidden"
          >
            {/* Spacer for header height */}
            <div className="h-20 shrink-0" />

            {/* Links */}
            <nav className="flex flex-col flex-1 divide-y divide-ink/10 overflow-y-auto px-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.05 + i * 0.06,
                    duration: 0.35,
                    ease: [0.2, 0.7, 0.2, 1],
                  }}
                  className="relative"
                >
                  <Link
                    href={l.to}
                    className={`group flex items-center justify-between py-6 ${
                      path === l.to ? "text-sun" : "text-ink"
                    }`}
                  >
                    <span className="flex items-center gap-5">
                      <span className="font-mono text-[10px] tracking-[0.3em] text-ink/30">
                        0{i + 1}
                      </span>
                      <span className="font-display text-4xl">{l.label}</span>
                    </span>
                    <span className="text-ink/30 transition group-hover:text-sun">
                      <ArrowUpRight />
                    </span>

                    {/* Ghost number on hover */}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer detail */}
            <div className="shrink-0 border-t border-ink/10 px-6 py-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40">
                Lagos &middot; London &middot; Los Angeles Est. 2020
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
