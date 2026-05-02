import Link from "next/link";
import { notFound } from "next/navigation";
import { cocktails } from "@/data/cocktails";
import { Metadata } from "next";
import { getCocktail } from "@/lib/utils";
import {
  CocktailNav,
  DetailHero,
  IngredientList,
  MethodSteps,
} from "@/components/cocktails";
import { FadeIn } from "@/components/ui/fade_in";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cocktails.map((cocktail) => ({ slug: cocktail.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cocktail = getCocktail(slug);
  if (!cocktail) return { title: "Cocktail Not Found" };
  return {
    title: cocktail.name,
    description: cocktail.description,
    openGraph: {
      title: `${cocktail.name} | Drink Umbrella`,
      description: cocktail.tagline,
      url: `https://drinkumbrella.vercel.app/cocktails/${cocktail.slug}`,
      images: [
        { url: cocktail.image, width: 1024, height: 1280, alt: cocktail.name },
      ],
    },
  };
}

export default async function CocktailDetail({ params }: Props) {
  const { slug } = await params;
  const cocktail = getCocktail(slug);
  if (!cocktail) notFound();

  const idx = cocktails.findIndex((x) => x.slug === cocktail.slug);
  const next = cocktails[(idx + 1) % cocktails.length];
  const prev = cocktails[(idx - 1 + cocktails.length) % cocktails.length];
  const bottleHref = cocktail.bottle === "Airegin" ? "/airegin" : "/palmsap";

  const cards = [
    { label: "Glass", value: cocktail.glass },
    { label: "Garnish", value: cocktail.garnish },
    { label: "Ice", value: cocktail.ice },
    { label: "Prep", value: cocktail.prepTime },
    { label: "ABV", value: cocktail.abv },
    { label: "Skill", value: cocktail.difficulty },
  ];

  return (
    <>
      <section className="container-edge pt-32 pb-8">
        <Link
          href="/cocktails"
          className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink hover:text-sun inline-flex items-center gap-2"
        >
          <BsArrowLeft /> All cocktails
        </Link>
      </section>

      <DetailHero c={cocktail} bottleHref={bottleHref} />

      <section className="bg-ink text-bone">
        <div className="container-edge grid gap-16 py-24 md:grid-cols-12">
          <div className="md:col-span-5">
            <FadeIn>
              <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-sun">
                Ingredients
              </p>
            </FadeIn>
            <IngredientList ingredients={cocktail.ingredients} />
            <FadeIn className="mt-10 grid grid-cols-2 gap-3" delay={0.1}>
              {cards.map((card) => (
                <ServingCard
                  key={card.label}
                  label={card.label}
                  value={card.value}
                />
              ))}
            </FadeIn>
          </div>

          <div className="md:col-span-7">
            <FadeIn>
              <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-sun">
                Method
              </p>
            </FadeIn>
            <MethodSteps method={cocktail.method} />
            <FadeIn
              className="mt-12 border border-sun/40 bg-sun/6 p-6 md:p-8"
              delay={0.1}
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-sun">
                  How to mix
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/50">
                  Bartender notes
                </p>
              </div>
              <div className="mt-6 grid gap-4 border-y border-bone/15 py-5 sm:grid-cols-3">
                <MixMeta label="Glass" value={cocktail.glass} />
                <MixMeta label="Ice" value={cocktail.ice} />
                <MixMeta
                  label="Steps"
                  value={`${cocktail.method.length}-step build`}
                />
              </div>
              <ul className="mt-6 space-y-3">
                {cocktail.tips.map((tip, i) => (
                  <li key={tip} className="flex gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-sun pt-1.5 shrink-0">
                      Tip {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-bone/85 leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn className="mt-12 border-t border-bone/15 pt-8" delay={0.15}>
              <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-sun">
                Why {cocktail.bottle}?
              </p>
              <p className="mt-4 font-serif text-xl italic font-light text-bone/90">
                {cocktail.bottleNote}
              </p>
              <Link
                href={bottleHref}
                className="mt-6 bg-sun px-6 py-3 font-mono text-[11px] uppercase tracking-[0.3em] text-ink hover:bg-bone inline-flex gap-2 items-center"
              >
                Explore Umbrella {cocktail.bottle} <BsArrowRight />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <CocktailNav prev={prev} next={next} />
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
