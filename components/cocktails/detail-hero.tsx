"use client";

import { Cocktail } from "@/data/cocktails";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function DetailHero({
  c,
  bottleHref,
}: {
  c: Cocktail;
  bottleHref: string;
}) {
  return (
    <section className="container-edge grid gap-12 pb-20 md:grid-cols-12 md:gap-16">
      <motion.div
        className="md:col-span-6"
        initial={{ opacity: 0, x: -32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <Image
          src={c.image}
          alt={c.name}
          className="aspect-4/5 w-full object-cover"
          width={1024}
          height={1280}
          loading="lazy"
        />
      </motion.div>
      <motion.div
        className="md:col-span-6"
        initial={{ opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay: 0.1 }}
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/50">
          Recipe {c.n} / 08 &middot; made with{" "}
          <Link href={bottleHref} className="text-sun-deep hover:underline">
            Umbrella {c.bottle}
          </Link>
        </p>
        <h1 className="mt-4 font-display text-6xl md:text-7xl leading-[0.95]">
          {c.name}
        </h1>
        <p className="mt-6 font-serif text-2xl italic font-light text-sun-deep">
          {c.tagline}
        </p>
        <p className="mt-6 text-ink/75 leading-relaxed">{c.description}</p>
        <p className="mt-4 text-ink/75 leading-relaxed">{c.longStory}</p>
      </motion.div>
    </section>
  );
}
