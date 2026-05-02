"use client";
import { ReactNode } from "react";
import { motion } from "motion/react";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <section className="container-edge pt-40 pb-20">
      <motion.p
        className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/50"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
      >
        {eyebrow}
      </motion.p>

      <motion.h1
        className="mt-6 max-w-5xl font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] text-balance"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay: 0.1 }}
      >
        {title}
      </motion.h1>

      {intro && (
        <motion.p
          className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/70"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1], delay: 0.2 }}
        >
          {intro}
        </motion.p>
      )}
    </section>
  );
}
