"use client";

import { motion } from "motion/react";

export function HouseRules() {
  return (
    <section className="bg-sun text-ink">
      <div className="container-edge grid gap-12 py-24 md:grid-cols-2 md:items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink">
            House Rules
          </p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">
            Drink it neat first.
          </h2>
        </motion.div>
        <motion.p
          className="text-ink leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1], delay: 0.15 }}
        >
          Before you build a cocktail, pour a small measure of Umbrella into a
          glass at room temperature. The marshmallow and butterscotch on Airegen
          and the tropical creaminess of Palmsap are what every recipe on this
          page is designed to flatter, never disguise.
        </motion.p>
      </div>
    </section>
  );
}
