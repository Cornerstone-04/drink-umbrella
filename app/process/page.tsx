import Image from "next/image";
import { PageHero } from "@/components/ui/page_hero";
import { FadeIn } from "@/components/ui/fade_in";
import { Metadata } from "next";
import { steps } from "@/lib/step";

export const metadata: Metadata = {
  title: "Our Process — Drink Umbrella",
  description:
    "Organically grown cane, slow natural fermentation, copper-pot distillation, solar power.",
  openGraph: {
    title: "Our Process — Drink Umbrella",
    description: "Solar-powered, batch made, organically sourced.",
  },
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="The Process"
        title={
          <>
            Slow craft.
            <br />
            <em className="font-serif italic font-light text-sun-deep">
              Solar
            </em>{" "}
            power.
          </>
        }
        intro="Distillation technology has improved immensely, and we use that to elevate, never replace, the traditional methods of Ogogoro. Every step below is run in-house, by a team between Bayelsa, Lagos & London."
      />

      <section className="container-edge pb-12 md:pb-24">
        <FadeIn>
          <Image
            src="/assets/process-still.jpg"
            alt="Distiller at work"
            className="aspect-video w-full object-cover"
            width={1920}
            height={1080}
            loading="lazy"
          />
        </FadeIn>
      </section>

      <section className="container-edge pb-16 md:pb-32">
        <div className="grid gap-px bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.07}>
              <div className="bg-bone py-10 md:p-14 h-full">
                <p className="font-mono text-xs uppercase tracking-[0.4em] text-sun-deep">
                  Step {s.n}
                </p>
                <h3 className="mt-4 font-display text-4xl">{s.title}</h3>
                <p className="mt-4 text-ink/75 leading-relaxed">{s.body}</p>
                <p className="mt-6 border-t border-ink/10 pt-4 font-mono text-[11px] uppercase tracking-[0.25em] text-ink/55">
                  {s.detail}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-ink/95 text-bone">
        <div className="container-edge grid gap-16 py-16 md:py-32 md:grid-cols-2">
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-sun">
              Corporate Social Responsibility
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-balance">
              For every bottle,{" "}
              <em className="font-serif italic font-light text-sun">
                clean water
              </em>
              .
            </h2>
          </FadeIn>
          <FadeIn className="space-y-6 text-lg text-bone/80" delay={0.15}>
            <p>
              Solar-powered production cuts our scope-1 emissions to nearly zero
              and removes the indoor smoke that used to be a routine
              occupational hazard for distillers in this region.
            </p>
            <p>
              For every bottle sold, we donate a measured volume of clean
              drinking water to the source communities who help us formulate the
              spirit, routed through local partners and never through us.
            </p>
            <ul className="grid grid-cols-3 gap-6 border-t border-bone/10 pt-8 text-bone">
              {[
                { k: "Solar coverage", v: "100%" },
                { k: "Water donated", v: "12 L / btl" },
                { k: "Farms on contract", v: "47" },
              ].map((s) => (
                <li key={s.k}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/50">
                    {s.k}
                  </p>
                  <p className="mt-2 font-display text-2xl md:text-3xl">
                    {s.v}
                  </p>
                </li>
              ))}
            </ul>
            {/*<Image
              src="/assets/sugarcane.jpg"
              alt="Sugarcane"
              className="mt-8 aspect-video w-full object-cover"
              width={1920}
              height={1080}
              loading="lazy"
            />*/}
          </FadeIn>
        </div>
      </section>
    </>
  );
}
