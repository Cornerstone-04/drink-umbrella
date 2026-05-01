import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/ui/marquee";
import { FadeIn } from "@/components/ui/fade_in";

export default function HomePage() {
  return (
    <>
      <section className="relative h-svh min-h-160 w-full overflow-hidden">
        <Image
          src="/assets/hero-beach.jpg"
          alt="Umbrella Ogogoro on a West African beach at golden hour"
          className="absolute inset-0 h-full w-full object-cover"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-ink/60 via-ink/20 to-ink/80" />

        <div className="relative z-10 flex h-full flex-col justify-end pb-20 text-bone container-edge">
          <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-white font-bold! fade-up">
            Umbrella Ogogoro &middot; Est. 2020
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(3rem,9vw,9rem)] leading-[0.9] reveal">
            A taste of the
            <br />
            <span className="font-serif italic font-light text-sun">
              premium
            </span>{" "}
            African spirit.
          </h1>
          <p className="mt-8 max-w-xl text-base text-bone/80 fade-up">
            Crafted from organically sourced cane. Born in Bayelsa. Bottled in
            London for the world.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/story"
              className="bg-sun px-8 py-4 font-mono text-xs uppercase tracking-[0.3em] text-ink transition hover:bg-bone"
            >
              Our Story
            </Link>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/airegin"
                className="border border-bone/40 px-8 py-4 font-mono text-xs uppercase tracking-[0.3em] text-bone transition hover:border-sun hover:text-sun"
              >
                Airegin
              </Link>
              <Link
                href="/palmsap"
                className="border border-bone/40 px-8 py-4 font-mono text-xs uppercase tracking-[0.3em] text-bone transition hover:border-sun hover:text-sun"
              >
                Palmsap
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee
        items={[
          "Organic",
          "80 Proof",
          "Batch Made",
          "Vegan Friendly",
          "Low Sugar",
          "Gluten Free",
          "Sustainable",
        ]}
      />

      {/* Right place, right time */}
      <section className="container-edge grid gap-16 py-32 md:grid-cols-12">
        <FadeIn className="md:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/50">
            01 / The Brand
          </p>
          <h2 className="mt-6 font-display text-5xl md:text-7xl text-balance">
            Right place.{" "}
            <em className="font-serif italic font-light text-sun-deep">
              Right time.
            </em>
          </h2>
        </FadeIn>
        <FadeIn
          className="md:col-span-6 md:col-start-7 space-y-6 text-lg leading-relaxed text-ink/80"
          delay={0.15}
        >
          <p>
            Umbrella Ogogoro is a premium organic Nigerian-British spirit
            inspired by the rich cultural heritage of West Africa, a category
            long owned by foreign houses, finally reclaimed.
          </p>
          <p>
            We craft a distinct, organic alcoholic beverage that honours African
            roots while promoting sustainability and ethical practices at every
            step.
          </p>
          <p>
            Born in the creeks of Bayelsa, farmed in Kano, distributed from
            London. One bottle, one expression, three cities; built by a small
            team of Nigerian and British creatives who grew up on either side of
            the Atlantic and decided the African spirits aisle was overdue a
            serious entry.
          </p>
          <Link
            href="/story"
            className="inline-block border-b border-ink pb-1 font-mono text-xs uppercase tracking-[0.3em] hover:text-sun-deep hover:border-sun-deep"
          >
            Read our story &rarr;
          </Link>
        </FadeIn>
      </section>

      {/* Bottle showcase */}
      <section className="bg-ink text-bone">
        <div className="container-edge grid items-center gap-16 py-32 md:grid-cols-2">
          <FadeIn direction="left">
            <div className="relative">
              <Image
                src="/assets/umbrella_bottle.jpg"
                alt="Umbrella bottle"
                className="mx-auto max-h-[80vh] w-auto"
                width={1280}
                height={1600}
                loading="lazy"
              />
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-sun">
              02 / The Spirit
            </p>
            <h2 className="mt-6 font-display text-5xl md:text-6xl text-balance">
              Our home
              <br />
              made{" "}
              <em className="font-serif italic font-light text-sun">stuff.</em>
            </h2>
            <p className="mt-8 max-w-md text-bone/70">
              &ldquo;Marshmallow, a hint of butterscotch pudding, cotton candy
              and molasses hit the nose while subtle floral and herbal aromas
              show through.&rdquo;
            </p>

            <dl className="mt-12 grid grid-cols-3 gap-8 border-t border-bone/10 pt-8">
              {[
                { k: "Proof", v: "80" },
                { k: "Base", v: "Cane" },
                { k: "Style", v: "Batch" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/50">
                    {s.k}
                  </dt>
                  <dd className="mt-2 font-display text-4xl">{s.v}</dd>
                </div>
              ))}
            </dl>

            <Link
              href="/airegin"
              className="mt-12 inline-block bg-sun px-8 py-4 font-mono text-xs uppercase tracking-[0.3em] text-ink hover:bg-bone"
            >
              Explore Airegin
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Process teaser */}
      <section className="container-edge py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <FadeIn className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/50">
              03 / The Process
            </p>
            <h2 className="mt-6 font-display text-5xl md:text-6xl">
              Distilled by hand,
              <br />
              <em className="font-serif italic font-light text-sun-deep">
                honoured
              </em>{" "}
              by tradition.
            </h2>
            <p className="mt-8 text-ink/70">
              From organic Nigerian sugarcane to copper-pot distillation, every
              batch is a tribute to the families that have brewed Ogogoro for
              generations.
            </p>
            <Link
              href="/process"
              className="mt-8 inline-block border-b border-ink pb-1 font-mono text-xs uppercase tracking-[0.3em] hover:text-sun-deep"
            >
              See the process &rarr;
            </Link>
          </FadeIn>
          <FadeIn className="md:col-span-7" delay={0.15}>
            <Image
              src="/assets/process-still.jpg"
              alt="Distiller tending a copper still"
              className="aspect-4/3 w-full object-cover"
              width={1400}
              height={1050}
              loading="lazy"
            />
          </FadeIn>
        </div>
      </section>

      {/* By the numbers */}
      <section className="bg-sun text-ink">
        <div className="container-edge py-24">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <FadeIn className="md:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/60">
                04 / By the numbers
              </p>
              <h2 className="mt-4 font-display text-5xl md:text-6xl">
                Small house.{" "}
                <em className="font-serif italic font-light">
                  Real footprint.
                </em>
              </h2>
            </FadeIn>
            <FadeIn
              className="md:col-span-6 md:col-start-7 text-ink/80 leading-relaxed"
              delay={0.1}
            >
              We are a young brand on purpose, producing small batches, signed
              contracts with every farm, and zero diesel in the production
              chain.
            </FadeIn>
          </div>

          <dl className="mt-16 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                k: "Source farms",
                v: "47",
                sub: "All organic, all contracted",
              },
              {
                k: "Solar-powered",
                v: "100%",
                sub: "Distillery operations",
              },
              { k: "Batch size", v: "1,200", sub: "Bottles per release" },
              { k: "Water donated", v: "12 L", sub: "Per bottle sold" },
            ].map((s, i) => (
              <FadeIn key={s.k} delay={i * 0.08}>
                <div className="bg-sun p-8">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55">
                    {s.k}
                  </dt>
                  <dd className="mt-3 font-display text-5xl">{s.v}</dd>
                  <p className="mt-2 text-sm text-ink/65">{s.sub}</p>
                </div>
              </FadeIn>
            ))}
          </dl>
        </div>
      </section>

      {/* Lifestyle full-bleed */}
      <section className="relative h-[80vh] min-h-120 w-full overflow-hidden">
        <Image
          src="/assets/lifestyle.jpg"
          alt="Friends toasting at sunset"
          className="absolute inset-0 h-full w-full object-cover"
          fill
          loading="lazy"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/20 to-transparent" />
        <div className="container-edge relative z-10 flex h-full flex-col justify-end pb-20 text-bone">
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-sun">
              #DrinkUmbrella
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-5xl md:text-7xl text-balance">
              For the parties that{" "}
              <em className="font-serif italic font-light text-sun">never</em>{" "}
              end.
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="container-edge py-32 text-center">
        <FadeIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/50">
            Lagos &middot; London &middot; Los Angeles
          </p>
          <h2 className="mt-6 font-display text-6xl md:text-8xl text-balance">
            Heritage in{" "}
            <em className="font-serif italic font-light text-sun-deep">
              every
            </em>{" "}
            sip.
          </h2>
          <Link
            href="/contact"
            className="mt-12 inline-block bg-ink px-10 py-5 font-mono text-xs uppercase tracking-[0.3em] text-bone hover:bg-sun hover:text-ink"
          >
            Get in touch
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
