import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { FadeIn } from "@/components/site/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umbrella Palmsap Ogogoro — Drink Umbrella",
  description:
    "Umbrella Palmsap Ogogoro. Made in Nigeria from sap tapped directly from the Niger Delta.",
  openGraph: {
    title: "Umbrella Palmsap Ogogoro",
    description: "Made in Nigeria. Niger Delta sap.",
  },
};

const facts = [
  "Vegan Friendly",
  "Gluten Free",
  "Low Calorie",
  "Sustainable",
  "Low Sugar",
  "Low Carb",
  "Certified Organic",
  "All Natural",
];

const tasting = [
  {
    phase: "Nose",
    note: "Fresh palm sap, toasted coconut, ripe plantain. A wave of tropical sweetness followed by warm vanilla and a faint earthiness from the Delta soil.",
  },
  {
    phase: "Palate",
    note: "Silkier and rounder than Airegin — the palm sap base gives a natural creaminess. Dried mango, caramelised pineapple and a gentle white-pepper spice through the mid-palate.",
  },
  {
    phase: "Finish",
    note: "Medium-long and gently sweet, with lingering palm oil and a clean agricultural snap. Fades slower than the standard expression — warmer and more tropical.",
  },
];

export default function PalmsapPage() {
  return (
    <>
      <PageHero
        eyebrow="The Skull Bottle · Made in Nigeria"
        title={
          <>
            Umbrella Palmsap
            <br />
            <em className="font-serif italic font-light text-sun-deep">
              Ogogoro.
            </em>
          </>
        }
        intro="Tapped from the Niger Delta. Made in Nigeria. Palmsap is our most rooted expression — harvested and distilled at the source, in the creeks where Ogogoro was born."
      />

      <section className="bg-ink text-bone">
        <div className="container-edge grid items-center gap-16 py-24 md:grid-cols-2">
          <FadeIn direction="left">
            <Image
              src="/assets/umbrella_skull.jpg"
              alt="Umbrella Palmsap skull bottle"
              className="mx-auto max-h-[80vh] w-auto"
              width={1280}
              height={1600}
              loading="lazy"
            />
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-sun">
              Tasting Notes
            </p>
            <p className="mt-6 font-serif text-3xl md:text-4xl italic font-light leading-snug text-bone/90">
              &ldquo;Fresh palm sap, toasted coconut and ripe plantain — silky,
              round and unmistakably of the Delta.&rdquo;
            </p>
            <dl className="mt-12 grid grid-cols-3 gap-8 border-t border-bone/10 pt-10">
              {[
                { k: "Proof", v: "80" },
                { k: "Made in", v: "Nigeria" },
                { k: "Sap from", v: "Niger Delta" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/50">
                    {s.k}
                  </dt>
                  <dd className="mt-2 font-display text-4xl">{s.v}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </section>

      <section className="container-edge py-32">
        <FadeIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/50">
            Tasting Flight
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-5xl md:text-6xl">
            Nose. Palate. Finish.
          </h2>
        </FadeIn>
        <div className="mt-16 grid gap-px bg-ink/10 md:grid-cols-3">
          {tasting.map((t, i) => (
            <FadeIn key={t.phase} delay={i * 0.1}>
              <div className="bg-bone p-10 h-full ">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-sun-deep">
                  {t.phase}
                </p>
                <p className="mt-6 text-lg leading-relaxed text-ink/80">
                  {t.note}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-sun text-ink">
        <div className="container-edge grid gap-16 py-24 md:grid-cols-12">
          <FadeIn className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/60">
              Technical Sheet
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">
              The fine print.
            </h2>
          </FadeIn>
          <FadeIn className="md:col-span-7" delay={0.1}>
            <dl className="grid grid-cols-2 gap-x-10 gap-y-8 text-ink/85">
              {[
                ["Category", "Palm spirit / Ogogoro"],
                ["Base ingredient", "Palm sap — Niger Delta"],
                ["Distilled & bottled", "Nigeria"],
                ["ABV", "40% (80 proof)"],
                ["Sugar per 50 ml", "< 0.2 g"],
                ["Calories per 50 ml", "110 kcal"],
                ["Allergens", "None"],
                ["Suitable for", "Vegan & vegetarian diets"],
              ].map(([k, v]) => (
                <div key={k} className="border-t border-ink/15 pt-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55">
                    {k}
                  </dt>
                  <dd className="mt-2 font-display text-2xl">{v}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </section>

      <section className="container-edge py-32">
        <FadeIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/50">
            By Nature
          </p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">
            Made the right way.
          </h2>
        </FadeIn>
        <ul className="mt-12 grid gap-px bg-ink/10 md:grid-cols-4">
          {facts.map((f, i) => (
            <FadeIn key={f} delay={i * 0.06}>
              <li className="bg-bone px-6 py-10 text-center">
                <span className="font-display text-2xl">{f}</span>
              </li>
            </FadeIn>
          ))}
        </ul>

        <div className="mt-24 grid gap-12 md:grid-cols-2">
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/50">
              Pairing
            </p>
            <h3 className="mt-4 font-display text-4xl">At the table.</h3>
            <p className="mt-6 text-ink/75 leading-relaxed">
              The palm sap character makes Palmsap a natural partner for Delta
              cooking — banga soup, grilled catfish, coconut rice. Also
              exceptional poured cold alongside fresh tropical fruit.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/50">
              Serving
            </p>
            <h3 className="mt-4 font-display text-4xl">In the glass.</h3>
            <p className="mt-6 text-ink/75 leading-relaxed">
              Best served lightly chilled — 10 minutes in the fridge before
              pouring. Over ice with a squeeze of lime is the house
              recommendation. For mixing, see our{" "}
              <Link
                href="/cocktails"
                className="border-b border-ink hover:text-sun-deep hover:border-sun-deep"
              >
                eight house cocktails
              </Link>
              .
            </p>
          </FadeIn>
        </div>

        <FadeIn className="mt-24 border-t border-ink/10 pt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/50">
            Also from Umbrella
          </p>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-display text-4xl md:text-5xl">
              Try Umbrella Airegin{" "}
              <em className="font-serif italic font-light text-sun-deep">
                Ogogoro.
              </em>
            </h3>
            <Link
              href="/airegen"
              className="shrink-0 bg-ink px-8 py-4 font-mono text-xs uppercase tracking-[0.3em] text-bone hover:bg-sun hover:text-ink"
            >
              Explore Airegin →
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
