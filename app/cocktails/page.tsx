import Image from "next/image";
import { PageHero } from "@/components/site/PageHero";
import { FadeIn } from "@/components/site/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cocktails — Drink Umbrella",
  description: "Eight signature serves built around Umbrella Ogogoro.",
  openGraph: {
    title: "Umbrella Cocktails",
    description: "Lemonade, Tonic, Chapman, Margarita, Martini and more.",
  },
};

type Cocktail = {
  n: string;
  name: string;
  tagline: string;
  description: string;
  ingredients: string[];
  glass: string;
  garnish: string;
  image: string;
};

const cocktails: Cocktail[] = [
  {
    n: "01",
    name: "Umbrella Lemonade",
    tagline: "Sun-soaked. Citrus-forward. Made for the beach.",
    description:
      "Our house pour and the easiest way in. Hand-pressed lemons cut through the natural sweetness of the cane spirit, while a long fizz of soda keeps it loose. This is the drink we order on day one of the holiday and never quite finish ordering.",
    ingredients: [
      "50 ml Umbrella Ogogoro",
      "25 ml fresh lemon juice",
      "15 ml cane sugar syrup",
      "Top with chilled soda water",
    ],
    glass: "Tall highball, packed with cubed ice",
    garnish: "Lemon wheel and a single mint leaf",
    image: "/assets/cocktails/lemonade.jpg",
  },
  {
    n: "02",
    name: "Umbrella Tonic",
    tagline: "Botanical. Bright. The four o'clock pour.",
    description:
      "Built like a long G&T but warmer in character, the corn and coconut backbone of the spirit lifts the quinine and pulls the rosemary forward. Three ingredients, one of the best pre-dinner drinks we make.",
    ingredients: [
      "50 ml Umbrella Ogogoro",
      "150 ml premium Indian tonic",
      "Squeeze of fresh lime",
    ],
    glass: "Copa de balon over a single block of ice",
    garnish: "Rosemary sprig, lightly clapped",
    image: "/assets/cocktails/tonic.jpg",
  },
  {
    n: "03",
    name: "Umbrella Screwdriver",
    tagline: "Fresh-pressed orange. Two ice cubes. No fuss.",
    description:
      "The brunch order. The standing rule is fresh juice or no juice; the spirit is too well made to drown. Use blood orange when in season for a sunset-coloured glass.",
    ingredients: [
      "50 ml Umbrella Ogogoro",
      "120 ml fresh-pressed orange juice",
      "Dash of orange bitters (optional)",
    ],
    glass: "Rocks glass, two oversized ice cubes",
    garnish: "Half-wheel of orange perched on the rim",
    image: "/assets/cocktails/screwdriver.jpg",
  },
  {
    n: "04",
    name: "Umbrella Cosmopolitan",
    tagline: "Cranberry, lime, triple sec. A new classic.",
    description:
      "A reframed cosmo, shaken hard so the spirit chills properly and the citrus oils bloom. The result is sharper and drier than the 90s version, just the way it always should have been.",
    ingredients: [
      "45 ml Umbrella Ogogoro",
      "20 ml triple sec",
      "20 ml fresh lime juice",
      "30 ml cranberry juice",
    ],
    glass: "Chilled coupe",
    garnish: "Flamed orange peel, expressed and dropped",
    image: "/assets/cocktails/cosmo.jpg",
  },
  {
    n: "05",
    name: "Umbrella Margarita",
    tagline: "Lime, agave, salt rim. West Africa meets Mexico.",
    description:
      "Ogogoro and agave share more DNA than most spirits. Both are wild, agricultural, and made by hand. Swap your tequila for a week. You will taste the difference.",
    ingredients: [
      "50 ml Umbrella Ogogoro",
      "25 ml fresh lime juice",
      "15 ml agave syrup",
      "Pinch of sea salt in the shaker",
    ],
    glass: "Coupe with a half salt rim",
    garnish: "Thin lime wheel",
    image: "/assets/cocktails/margarita.jpg",
  },
  {
    n: "06",
    name: "Umbrella Chapman",
    tagline: "Nigerian classic. Grenadine, bitters, citrus.",
    description:
      "The drink every Lagos kitchen knows by heart, made with a grown-up's pour. Long, fruity, deeply nostalgic, and the Ogogoro adds the swagger the original was always quietly missing.",
    ingredients: [
      "40 ml Umbrella Ogogoro",
      "60 ml Fanta orange",
      "60 ml lemonade",
      "15 ml grenadine",
      "2 dashes Angostura bitters",
    ],
    glass: "Tall pilsner or hurricane glass",
    garnish: "Cucumber slice, orange wheel, a maraschino cherry",
    image: "/assets/cocktails/chapman.jpg",
  },
  {
    n: "07",
    name: "Umbrella Russian",
    tagline: "Coffee liqueur, cream, served on the rocks.",
    description:
      "Our nightcap. The cane spirit gives the drink a clean snap that traditional vodka never quite delivers — silkier on the tongue, longer on the finish.",
    ingredients: [
      "40 ml Umbrella Ogogoro",
      "20 ml coffee liqueur",
      "30 ml double cream, gently floated",
    ],
    glass: "Old-fashioned tumbler over a clear cube",
    garnish: "Three coffee beans",
    image: "/assets/cocktails/russian.jpg",
  },
  {
    n: "08",
    name: "Umbrella Martini",
    tagline: "Stirred. Lemon twist. Always cold.",
    description:
      "The acid test. No juice, no sugar, just spirit, vermouth, and very cold ice. If you have ever wondered what the bottle actually tastes like, order this one.",
    ingredients: [
      "60 ml Umbrella Ogogoro",
      "10 ml dry vermouth",
      "Stir 30 turns over fresh ice",
    ],
    glass: "Frozen Nick & Nora or coupe",
    garnish: "Lemon twist, expressed and dropped",
    image: "/assets/cocktails/martini.jpg",
  },
];

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
        <div className="container-edge grid gap-12 py-12 md:py-24 md:grid-cols-2 md:items-end">
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
              are the signature of properly distilled cane, and the anchor
              every recipe on this page is designed to flatter, never disguise.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
