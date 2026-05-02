import { PageHero } from "@/components/ui/page_hero";
import { cocktails } from "@/data/cocktails";
import { CocktailGrid, HouseRules } from "@/components/cocktails";

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
        <CocktailGrid cocktails={cocktails} />
      </section>

      <HouseRules />
    </>
  );
}
