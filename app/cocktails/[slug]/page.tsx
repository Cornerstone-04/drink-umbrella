import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cocktails } from "@/data/cocktails";
import { Metadata } from "next";
import { getCocktail } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cocktails.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCocktail(slug);
  if (!c) return { title: "Cocktail Not Found" };
  return {
    title: c.name,
    description: c.description,
    openGraph: {
      title: `${c.name} | Drink Umbrella`,
      description: c.tagline,
      url: `https://drinkumbrella.vercel.app/cocktails/${c.slug}`,
      images: [{ url: c.image, width: 1024, height: 1280, alt: c.name }],
    },
  };
}

export default async function CocktailDetail({ params }: Props) {
  const { slug } = await params;
  const c = getCocktail(slug);
  if (!c) notFound();

  const idx = cocktails.findIndex((x) => x.slug === c.slug);
  const next = cocktails[(idx + 1) % cocktails.length];
  const prev = cocktails[(idx - 1 + cocktails.length) % cocktails.length];
  const bottleHref = c.bottle === "Airegin" ? "/airegin" : "/palmsap";

  return (
    <>
      <section className="container-edge pt-32 pb-8">
        <Link
          href="/cocktails"
          className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60 hover:text-ink"
        >
          ← All cocktails
        </Link>
      </section>

      <section className="container-edge grid gap-12 pb-20 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-6">
          <Image
            src={c.image}
            alt={c.name}
            className="aspect-3/4 w-full object-cover"
            width={1024}
            height={1280}
            loading="lazy"
          />
        </div>
        <div className="md:col-span-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/50">
            Recipe {c.n} / 08 &middot; made with{" "}
            <Link href={bottleHref} className="text-sun-deep hover:underline">
              Umbrella {c.bottle}
            </Link>
          </p>
          <h1 className="mt-4 font-display text-6xl md:text-7xl leading-[0.95]">
            {c.name}
          </h1>
          <p className="mt-6 font-serif text-2xl italic font-light text-sun-deep">
            {c.tagline}
          </p>
          <p className="mt-6 text-ink/75 leading-relaxed">{c.description}</p>
          <p className="mt-4 text-ink/75 leading-relaxed">{c.longStory}</p>
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="container-edge grid gap-16 py-24 md:grid-cols-12">
          {/* Ingredients + serving cards */}
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-sun">
              Ingredients
            </p>
            <ul className="mt-6 space-y-3">
              {c.ingredients.map((ing) => {
                const match = ing.match(
                  /^(\d+\s*ml|Top|Squeeze|Dash|Pinch|Stir|\d+\s*dashes?|\d+\s*fresh)/i,
                );
                const measure = match ? match[0] : "";
                const rest = measure ? ing.slice(measure.length).trim() : ing;
                return (
                  <li
                    key={ing}
                    className="flex items-baseline gap-4 border-l-2 border-sun bg-bone/5 px-4 py-3"
                  >
                    {measure && (
                      <span className="font-display text-2xl text-sun shrink-0 min-w-16">
                        {measure}
                      </span>
                    )}
                    <span className="text-base leading-snug text-bone/90">
                      {rest}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 grid grid-cols-2 gap-3">
              <ServingCard label="Glass" value={c.glass} />
              <ServingCard label="Garnish" value={c.garnish} />
              <ServingCard label="Ice" value={c.ice} />
              <ServingCard label="Prep" value={c.prepTime} />
              <ServingCard label="ABV" value={c.abv} />
              <ServingCard label="Skill" value={c.difficulty} />
            </div>
          </div>

          {/* Method + tips + bottle note */}
          <div className="md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-sun">
              Method
            </p>
            <ol className="mt-6 space-y-4">
              {c.method.map((step, i) => (
                <li
                  key={step}
                  className="flex gap-6 border-b border-bone/15 pb-4"
                >
                  <span className="font-display text-3xl text-sun shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-1 text-lg leading-relaxed text-bone/85">
                    {step}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-12 border border-sun/40 bg-sun/6 p-6 md:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-sun">
                  How to mix
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/50">
                  Bartender notes
                </p>
              </div>
              <div className="mt-6 grid gap-4 border-y border-bone/15 py-5 sm:grid-cols-3">
                <MixMeta label="Glass" value={c.glass} />
                <MixMeta label="Ice" value={c.ice} />
                <MixMeta
                  label="Steps"
                  value={`${c.method.length}-step build`}
                />
              </div>
              <ul className="mt-6 space-y-3">
                {c.tips.map((tip, i) => (
                  <li key={tip} className="flex gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-sun pt-1.5 shrink-0">
                      Tip {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-bone/85 leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 border-t border-bone/15 pt-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-sun">
                Why {c.bottle}?
              </p>
              <p className="mt-4 font-serif text-xl italic font-light text-bone/90">
                {c.bottleNote}
              </p>
              <Link
                href={bottleHref}
                className="mt-6 inline-block bg-sun px-6 py-3 font-mono text-[11px] uppercase tracking-[0.3em] text-ink hover:bg-bone"
              >
                Explore Umbrella {c.bottle} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next navigation */}
      <section className="container-edge grid gap-px bg-ink/10 md:grid-cols-2">
        <Link href={`/cocktails/${prev.slug}`} className="group bg-bone p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50">
            ← Previous
          </p>
          <p className="mt-3 font-display text-3xl group-hover:text-sun-deep">
            {prev.name}
          </p>
        </Link>
        <Link
          href={`/cocktails/${next.slug}`}
          className="group bg-bone p-8 text-right"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50">
            Next →
          </p>
          <p className="mt-3 font-display text-3xl group-hover:text-sun-deep">
            {next.name}
          </p>
        </Link>
      </section>
    </>
  );
}

function ServingCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-bone/15 bg-bone/3 p-3">
      <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-bone/50">
        {label}
      </p>
      <p className="mt-1.5 text-sm text-bone/90 leading-snug">{value}</p>
    </div>
  );
}

function MixMeta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/50">
        {label}
      </p>
      <p className="mt-1.5 font-display text-lg text-bone">{value}</p>
    </div>
  );
}
