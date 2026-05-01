import Image from "next/image";
import { PageHero } from "@/components/site/page_hero";
import { FadeIn } from "@/components/site/fade_in";
import { Metadata } from "next";
import { cocktails } from "@/lib/cocktails";

export const metadata: Metadata = {
  title: "Cocktails — Drink Umbrella",
  description: "Eight signature serves built around Umbrella Ogogoro.",
  openGraph: {
    title: "Umbrella Cocktails",
    description: "Lemonade, Tonic, Chapman, Margarita, Martini and more.",
  },
};

export default function CocktailsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Menu"
        title={
          <>
            Eight ways to
            <br />
            <em className="font-serif italic font-light text-sun-deep">
              drink umbrella.
            </em>
          </>
        }
        intro="Our spirit is built to mix. These are the eight serves we keep coming back to. The ones that travelled with us from Bayelsa to Lagos to a kitchen counter in London. Recipes for one, scaled to taste."
      />

      <section className="container-edge pb-16 md:pb-32 space-y-16 md:space-y-32">
        {cocktails.map((c, i) => (
          <FadeIn key={c.n}>
            <article className="grid items-center gap-10 md:gap-16 md:grid-cols-12">
              <div
                className={`md:col-span-6 ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <div className="relative overflow-hidden bg-ink/5">
                  <Image
                    src={c.image}
                    alt={`${c.name} cocktail in glass with garnish`}
                    className="aspect-4/5 w-full object-cover"
                    width={1024}
                    height={1280}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/50">
                  Recipe {c.n} / 08
                </p>
                <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[0.95]">
                  {c.name}
                </h2>
                <p className="mt-4 font-serif text-2xl italic font-light text-sun-deep">
                  {c.tagline}
                </p>
                <p className="mt-6 max-w-prose text-ink/75 leading-relaxed">
                  {c.description}
                </p>
                <div className="mt-10 grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50">
                      Ingredients
                    </p>
                    <ul className="mt-3 space-y-1.5 text-ink/85">
                      {c.ingredients.map((ing) => (
                        <li key={ing} className="border-b border-ink/10 pb-1.5">
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="sm:min-w-45 sm:border-l sm:border-ink/10 sm:pl-8">
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50">
                      Glass
                    </p>
                    <p className="mt-3 text-sm text-ink/80">{c.glass}</p>
                    <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50">
                      Garnish
                    </p>
                    <p className="mt-3 text-sm text-ink/80">{c.garnish}</p>
                  </div>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </section>

      <section className="bg-ink text-bone">
        <div className="container-edge grid gap-12 py-12 md:py-32 md:grid-cols-2 md:items-end">
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-sun">
              House Rules
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">
              Drink it neat first.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-bone/75 leading-relaxed">
              Before you build a single cocktail, pour a small measure of
              Umbrella Ogogoro into a glass at room temperature. Sit with it.
              The marshmallow, butterscotch and faint herbal lift on the nose
              are the signature of properly distilled cane, and the anchor every
              recipe on this page is designed to flatter, never disguise.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
