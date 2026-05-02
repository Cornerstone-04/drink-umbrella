import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { FadeIn } from "@/components/ui/fade-in";
import { palmsap_facts, palmsap_tasting } from "@/data/bottles";
import { BsArrowRight } from "react-icons/bs";

export default function PalmsapPage() {
  return (
    <>
      <PageHero
        eyebrow="The Skull Bottle · Made in London"
        title={
          <>
            Umbrella Palmsap
            <br />
            <em className="font-serif italic font-light text-sun-deep">
              Ogogoro.
            </em>
          </>
        }
        intro="Tapped from the creeks of Bayelsa. Made in London. Just 12 bottles per year, harvested and distilled at the source, in the riverine communities where Ogogoro was born."
      />

      {/* Limited edition callout */}
      <div className="bg-ink text-bone">
        <div className="container-edge py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-sun">
            Ultra Limited Release
          </p>
          <p className="font-display text-xl md:text-2xl">
            Only <span className="text-sun font-bold">12 bottles</span> produced
            per year.
          </p>
        </div>
      </div>

      <section className="bg-ink text-bone border-t border-bone/10">
        <div className="container-edge grid items-center gap-16 py-12 md:py-24 md:grid-cols-2">
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
              &ldquo;Bonfire embers, coconut and black pepper. Creamy, smoky,
              and unmistakably of the Delta creeks.&rdquo;
            </p>
            <dl className="mt-12 flex flex-row justify-between gap-8 border-t border-bone/10 pt-10">
              {[
                { k: "Proof", v: "80" },
                { k: "Made in", v: "Nigeria" },
                { k: "Sap from", v: "Bayelsa" },
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

      <section className="container-edge py-16 md:py-32">
        <FadeIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/50">
            Tasting Flight
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-5xl md:text-6xl">
            Nose. Palate. Finish.
          </h2>
        </FadeIn>
        <div className="mt-8 md:mt-16 grid gap-px bg-ink/10 md:grid-cols-3">
          {palmsap_tasting.map((t, i) => (
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
                ["Category", "Palm spirit / Ogogoro"],
                ["Base ingredient", "Palm sap"],
                ["Distilled & bottled", "London, England"],
                ["ABV", "40% (80 proof)"],
                ["Annual production", "12 bottles"],
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
          {palmsap_facts.map((f, i) => (
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
              The smoky, spicy-sweet character holds its own against bold,
              heat-forward dishes. Think grilled fish, rich broths, and
              slow-cooked proteins. Also exceptional neat as an aperitif, or
              alongside anything charred and salted.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/50">
              Serving
            </p>
            <h3 className="mt-4 font-display text-4xl">In the glass.</h3>
            <p className="mt-6 text-ink/75 leading-relaxed">
              Best enjoyed neat, this is too rare to dilute. If you must mix, a
              basil gimlet or a long pour over ice with coconut water is the
              house recommendation. For more ideas, see our{" "}
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
              Try Umbrella Airegin{" "}
              <em className="font-serif italic font-light text-sun-deep">
                Ogogoro.
              </em>
            </h3>
            <Link
              href="/airegin"
              className="shrink-0 bg-ink px-8 py-4 font-mono text-xs uppercase tracking-[0.3em] text-bone hover:bg-sun hover:text-ink w-fit inline-flex items-center gap-2"
            >
              Explore Airegin <BsArrowRight className="inline" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
