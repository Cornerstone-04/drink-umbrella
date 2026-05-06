"use client";

import { useState } from "react";
import { Field } from "../ui/field";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="bg-ink p-10 md:p-14 text-bone"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <h2 className="font-display text-2xl md:text-3xl">Send us a note</h2>
      {sent ? (
        <p className="mt-10 text-bone/80">
          Thank you! We&rsquo;ll be in touch shortly.
        </p>
      ) : (
        <div className="mt-8 space-y-6">
          <Field label="Name" name="name" />
          <Field label="Email" name="email" type="email" />
          <Field label="Subject" name="subject" />
          <div>
            <label className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone/60">
              Message
            </label>
            <textarea
              rows={5}
              required
              className="mt-2 w-full border-b border-bone/30 bg-transparent py-3 text-bone outline-none transition focus:border-sun"
            />
          </div>
          <button
            type="submit"
            className="bg-sun px-8 py-4 font-mono text-xs uppercase tracking-[0.3em] text-ink transition hover:bg-bone"
          >
            Send message
          </button>
        </div>
      )}
    </form>
  );
}
