"use client";

import { motion } from "motion/react";

export function IngredientList({ ingredients }: { ingredients: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {ingredients.map((ing, i) => {
        const match = ing.match(
          /^(\d+\s*ml|Top|Squeeze|Dash|Pinch|Stir|\d+\s*dashes?|\d+\s*fresh)/i,
        );
        const measure = match ? match[0] : "";
        const rest = measure ? ing.slice(measure.length).trim() : ing;
        return (
          <motion.li
            key={ing}
            className="flex items-baseline gap-4 border-l-2 border-sun bg-bone/5 px-4 py-3"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.45,
              ease: [0.2, 0.7, 0.2, 1],
              delay: i * 0.06,
            }}
          >
            {measure && (
              <span className="font-display text-2xl text-sun shrink-0 min-w-16">
                {measure}
              </span>
            )}
            <span className="text-base leading-snug text-bone/90">{rest}</span>
          </motion.li>
        );
      })}
    </ul>
  );
}
