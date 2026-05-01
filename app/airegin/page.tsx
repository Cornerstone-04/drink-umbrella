import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/page_hero";
import { FadeIn } from "@/components/ui/fade_in";
import { airegin_facts, airegin_tasting } from "@/lib/bottles";

export default function AireginPage() {
  return (
    <>
      <PageHero
        eyebrow="The Standard Bottle"
        title={
          <>
            Umbrella Airegin
            <br />
            <em className="font-serif italic font-light text-sun-deep">
              Ogogoro.
            </em>
          </>
        }
        intro="Made in London. Our flagship expression is distilled from sugarcane sourced in the North, bringing West African distilling tradition into a British craft context."
      />

      <section className="bg-ink text-bone">
        <div className="container-edge grid items-center gap-16 py-24 md:grid-cols-2">
          <FadeIn direction="left">
            <Image
              src="/assets/umbrella_bottle.jpg"
              alt="Umbrella Airegin bottle"
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
              &ldquo;Marshmallow, a hint of butterscotch pudding, cotton candy
              and molasses hit the nose while subtle floral and herbal aromas
              show through.&rdquo;
            </p>
            <dl className="mt-12 flex flex-row justify-between gap-8 border-t border-bone/10 pt-10">
              {[
                { k: "Proof", v: "80" },
                { k: "Made in", v: "London" },
                { k: "Cane from", v: "The North" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/50">
                    {s.k}
                  </dt>
                  <dd className="mt-2 font-display text-2xl md:text-3xl">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </section>

      <section className="container-edge bg-bone text-ink">
        <div className="grid gap-16 py-16 md:py-32 md:grid-cols-2  border-b border-ink/10">
          <FadeIn className="" direction="left">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/60">
              The Name
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[0.95]">
              Read it
              <br />
              <em className="font-serif italic font-light">backwards.</em>
            </h2>
          </FadeIn>
          <FadeIn direction="right" className="flex items-center" delay={0.15}>
            <p className="text-xl leading-relaxed text-ink">
              <em className="font-serif italic font-semibold text-ink">
                Airegin
              </em>{" "}
              is Nigeria, reversed. A deliberate inversion, borrowed from the
              1962 Sonny Rollins jazz standard of the same name. Rollins wrote
              it as a love letter to Africa, spelled backwards to make you look
              twice. We named our spirit after that same instinct: something
              deeply Nigerian, presented in a way that stops you mid-sentence
              and makes you ask the question. The answer, like the spirit, is
              worth the wait.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container-edge py-16 md:py-32">
        <FadeIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/50">
            Tasting Flight
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-5xl md:text-6xl">
            Nose. Palate. Finish.
          </h2>
        </FadeIn>
        <div className="mt-16 grid gap-px bg-ink/10 md:grid-cols-3">
          {airegin_tasting.map((t, i) => (
            <FadeIn key={t.phase} delay={i * 0.1}>
              <div className="bg-bone py-6 md:p-10 h-full">
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
        <div className="container-edge grid gap-16 py-16 md:py-32 md:grid-cols-12">
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
                ["Category", "Cane spirit / Ogogoro"],
                ["Base ingredient", "Sugarcane"],
                ["Distilled & bottled", "London, England"],
                ["ABV", "40% (80 proof)"],
                ["Sugar per 50 ml", "< 0.1 g"],
                ["Calories per 50 ml", "108 kcal"],
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

      <section className="container-edge py-16 md:py-32">
        <FadeIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/50">
            By Nature
          </p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">
            Made the right way.
          </h2>
        </FadeIn>
        <ul className="mt-12 grid gap-px bg-ink/10 md:grid-cols-4">
          {airegin_facts.map((f, i) => (
            <FadeIn key={f} delay={i * 0.06}>
              <li className="bg-bone px-6 py-10 text-center">
                <span className="font-display text-2xl">{f}</span>
              </li>
            </FadeIn>
          ))}
        </ul>

        <div className="mt-12 md:mt-24 grid gap-12 md:grid-cols-2">
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/50">
              Pairing
            </p>
            <h3 className="mt-4 font-display text-4xl">At the table.</h3>
            <p className="mt-6 text-ink/75 leading-relaxed">
              Drink it neat with grilled prawns, jollof rice, suya, or any dish
              carrying a little smoke and chilli. The cane sweetness anchors the
              heat; the dry finish resets the palate between bites.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/50">
              Serving
            </p>
            <h3 className="mt-4 font-display text-4xl">In the glass.</h3>
            <p className="mt-6 text-ink/75 leading-relaxed">
              Pour 35–50 ml into a small tulip glass at room temperature, or
              over a single block of ice in a rocks glass. For mixing, see our{" "}
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

        <FadeIn className="mt-12 md:mt-24 border-t border-ink/10 pt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/50">
            Also from Umbrella
          </p>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-display text-4xl md:text-5xl">
              Try Umbrella Palmsap{" "}
              <em className="font-serif italic font-light text-sun-deep">
                Ogogoro.
              </em>
            </h3>
            <Link
              href="/palmsap"
              className="shrink-0 bg-ink px-8 py-4 font-mono text-xs uppercase tracking-[0.3em] text-bone hover:bg-sun hover:text-ink w-fit"
            >
              Explore Palmsap →
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
