"use client";

import { motion } from "motion/react";

export function MethodSteps({ method }: { method: string[] }) {
  return (
    <ol className="mt-6 space-y-4">
      {method.map((step, i) => (
        <motion.li
          key={step}
          className="flex gap-6 border-b border-bone/15 pb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.45,
            ease: [0.2, 0.7, 0.2, 1],
            delay: i * 0.07,
          }}
        >
          <span className="font-display text-3xl text-sun shrink-0">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="pt-1 text-lg leading-relaxed text-bone/85">
            {step}
          </span>
        </motion.li>
      ))}
    </ol>
  );
}
