"use client";

import { Cocktail } from "@/data/cocktails";
import { motion } from "motion/react";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export function CocktailNav({
  prev,
  next,
}: {
  prev: Cocktail;
  next: Cocktail;
}) {
  return (
    <section className="container-edge grid gap-px md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <Link
          href={`/cocktails/${prev.slug}`}
          className="group block bg-bone p-8"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50 inline-flex items-center gap-2">
            <BsArrowLeft /> Previous
          </p>
          <p className="mt-3 font-display text-3xl group-hover:text-sun-deep">
            {prev.name}
          </p>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1], delay: 0.1 }}
      >
        <Link
          href={`/cocktails/${next.slug}`}
          className="group block bg-bone p-8 text-right"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50 inline-flex items-center gap-2">
            Next <BsArrowRight />
          </p>
          <p className="mt-3 font-display text-3xl group-hover:text-sun-deep">
            {next.name}
          </p>
        </Link>
      </motion.div>
    </section>
  );
}
