import { PageHero } from "@/components/site/PageHero";
import { FadeIn } from "@/components/site/FadeIn";
import { ContactForm } from "./ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Drink Umbrella",
  description: "Get in touch with The Umbrella Palm Company.",
  openGraph: {
    title: "Contact — Drink Umbrella",
    description: "Lagos and London. Stockists, press and partnerships.",
  },
};

const contactFields = [
  {
    label: "Phone",
    value: "+44 7487 566216",
    href: "tel:+447487566216",
  },
  {
    label: "Email",
    value: "hello@drinkumbrella.co.uk",
    href: "mailto:hello@drinkumbrella.co.uk",
  },
  {
    label: "Studios",
    value: "Lagos · London",
  },
  {
    label: "Company",
    value: "The Umbrella Palm Company",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s{" "}
            <em className="font-serif italic font-light text-sun-deep">talk</em>
            .
          </>
        }
        intro="For stockists, press, hospitality, partnerships and community programmes, or just to say hello. We read everything that lands in this inbox."
      />

      <section className="container grid gap-px bg-ink/10  md:grid-cols-3 items-stretch">
        {[
          {
            k: "Stockists",
            v: "Bars, restaurants and retailers across the UK, EU and Nigeria. Trade pricing on request.",
          },
          {
            k: "Press",
            v: "Samples, interviews, founder commentary and high-res assets — usually back to you within 48 hours.",
          },
          {
            k: "Partnerships",
            v: "Hospitality, music, fashion and community projects. We say no to most things and yes to the right ones.",
          },
        ].map((b, i) => (
          <FadeIn key={b.k} delay={i * 0.08}>
            <div className="bg-bone py-8 px-6 md:px-16 h-full w-full">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-sun-deep">
                {b.k}
              </p>
              <p className="mt-3 text-ink/75 leading-relaxed">{b.v}</p>
            </div>
          </FadeIn>
        ))}
      </section>

      <section className="container-edge grid gap-16 py-16 md:py-32 md:grid-cols-12">
        <FadeIn className="md:col-span-5 space-y-10">
          {contactFields.map((field) => (
            <div key={field.label}>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/50">
                {field.label}
              </p>

              {field.href ? (
                <a
                  href={field.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block font-display hover:text-sun-deep transition-colors text-2xl md:text-3xl"
                >
                  {field.value}
                </a>
              ) : (
                <p className="mt-2 font-display text-2xl md:text-3xl">
                  {field.value}
                </p>
              )}
            </div>
          ))}
        </FadeIn>

        <FadeIn className="md:col-span-7" delay={0.15}>
          <ContactForm />
        </FadeIn>
      </section>
    </>
  );
}
