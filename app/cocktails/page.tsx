import Image from "next/image";
import { PageHero } from "@/components/ui/page_hero";
import { FadeIn } from "@/components/ui/fade_in";
import { cocktails } from "@/data/cocktails";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BsArrowRight } from "react-icons/bs";

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

      <section className="container-edge pb-32">
        <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
          {cocktails.map((c) => (
            <Link
              key={c.slug}
              href={`/cocktails/${c.slug}`}
              className="group relative block overflow-hidden bg-ink"
            >
              <Image
                src={c.image}
                alt={c.name}
                className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                width={600}
                height={750}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-bone">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/75 font-bold">
                  {c.n} &middot; {c.bottle}
                </p>
                <h2 className="mt-2 font-display text-2xl leading-tight">
                  {c.name}
                </h2>
                <p className="mt-1 text-base text-bone/70">{c.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-2 border-b border-sun pb-0.5 font-mono text-[10px]! uppercase tracking-[0.3em] text-sun opacity-0 transition group-hover:opacity-100">
                  See recipe <BsArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
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
