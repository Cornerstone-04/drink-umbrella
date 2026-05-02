"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { type Cocktail } from "@/data/cocktails";
import { BsArrowRight } from "react-icons/bs";

export function CocktailGrid({ cocktails }: { cocktails: Cocktail[] }) {
  return (
    <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
      {cocktails.map((cocktail, i) => (
        <motion.div
          key={cocktail.slug}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.2, 0.7, 0.2, 1],
            delay: i * 0.07,
          }}
        >
          <Link
            href={`/cocktails/${cocktail.slug}`}
            className="group relative block overflow-hidden bg-ink"
          >
            <Image
              src={cocktail.image}
              alt={cocktail.name}
              className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              width={600}
              height={750}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-bone">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/75 font-bold">
                {cocktail.n} &middot; {cocktail.bottle}
              </p>
              <h2 className="mt-2 font-display text-2xl leading-tight">
                {cocktail.name}
              </h2>
              <p className="mt-1 text-base text-bone/70">{cocktail.tagline}</p>
              <span className="mt-4 inline-flex items-center gap-2 border-b border-sun pb-0.5 font-mono text-[10px]! uppercase tracking-[0.3em] text-sun opacity-0 transition group-hover:opacity-100">
                See recipe <BsArrowRight />
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
