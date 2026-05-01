import Image from "next/image";
import { PageHero } from "@/components/ui/page_hero";
import { FadeIn } from "@/components/ui/fade_in";
import { timeline } from "@/lib/timeline";


export default function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={
          <>
            In our hometown of Bayelsa,{" "}
            <em className="font-serif italic font-light text-sun-deep">
              Ògógóró
            </em>{" "}
            is the country&rsquo;s homebrew.
          </>
        }
        intro="Outlawed under British colonisation in the 1930s, Ogogoro never disappeared. It was hidden, refined and passed between hands. Today, we bring it back properly, premium, and on our own terms."
      />

      <section className="relative h-[60vh] min-h-105 overflow-hidden">
        <Image
          src="/assets/sugarcane.jpg"
          alt="Sugarcane field"
          fill
          className="object-cover aspect-video"
          loading="lazy"
          sizes="100vw"
        />
      </section>

      <section className="container-edge grid gap-8 md:gap-16 py-16 md:py-32 md:grid-cols-12">
        <FadeIn className="md:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/50">
            The Misconception
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Not ethanol.{" "}
            <em className="font-serif italic font-light text-sun-deep">
              Tradition.
            </em>
          </h2>
        </FadeIn>
        <FadeIn
          className="md:col-span-6 md:col-start-7 space-y-5 text-lg text-ink/80"
          delay={0.15}
        >
          <p>
            There is a misconception, even inside Nigeria, that Ogogoro is a
            kind of rough, unregulated grain alcohol. It is not. Traditionally,
            it is distilled from sap of a palm tree.
          </p>
          <p>
            Research from UKZN&rsquo;s School of Life Sciences and
            Nigeria&rsquo;s Federal Institute of Industrial Research has
            confirmed what village distillers have known for generations:
            properly made Ogogoro is loaded with nutrients and a long list of
            health-supporting compounds. It is the reason the drink forms the
            base of so many Nigerian herbal medicines.
          </p>
          <p>Ogogoro is not the rough end of the market. It is the original.</p>
        </FadeIn>
      </section>

      <section className="bg-sun text-ink">
        <div className="container-edge grid gap-8 md:gap-16 py-16 md:py-32 md:grid-cols-2">
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/60">
              Our Mission
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-balance">
              Honouring roots.{" "}
              <em className="font-serif italic font-light">Hyping it up.</em>
            </h2>
          </FadeIn>
          <FadeIn className="space-y-5 text-lg text-ink/80" delay={0.15}>
            <p>
              Many working-class Nigerian families, like our grandparents, brew
              Ogogoro as a means of economic subsistence. It is full-time work,
              and a cultural inheritance. It has fed generations.
            </p>
            <p>
              Our job is to build a world-class product on top of that
              inheritance, and to route a real share of every international
              bottle back to those communities as a proper, contracted wage, not
              charity, not tokens.
            </p>
            <p className="font-serif text-3xl italic font-light">
              The economic facets of Ogogoro have been salient throughout
              Nigerian history. It&rsquo;s time to hype it up.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container-edge py-16 md:py-32">
        <FadeIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/50">
            The Long View
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-5xl md:text-6xl text-balance">
            A hundred and sixty years, in five acts.
          </h2>
        </FadeIn>

        <ol className="mt-8 md:mt-16 grid gap-px bg-ink/10 md:grid-cols-5 items-stretch">
          {" "}
          {timeline.map((t, i) => (
            <FadeIn key={t.year} delay={i * 0.08}>
              <li className="bg-bone px-0 py-8 md:p-10 h-full">
                <p className="font-display text-3xl text-sun-deep">{t.year}</p>
                <h3 className="mt-4 font-display text-xl">{t.title}</h3>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                  {t.body}
                </p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </section>

      <section className="bg-ink text-bone">
        <div className="container-edge grid gap-8 md:gap-16 py-16 md:py-32 md:grid-cols-12">
          <FadeIn className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-sun">
              The Founders
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">
              Two cities.{" "}
              <em className="font-serif italic font-light text-sun">
                One bottle.
              </em>
            </h2>
          </FadeIn>
          <FadeIn
            className="md:col-span-6 md:col-start-7 space-y-5 text-lg text-bone/80"
            delay={0.15}
          >
            <p>
              Umbrella was started by a small group of Nigerian and British
              creatives between Lagos and London, people who grew up either
              drinking Ogogoro quietly at family events or being told, with a
              wink, that they couldn&rsquo;t have any.
            </p>
            <p>
              We met through music, fashion and tech, and kept noticing the same
              gap on every back-bar we worked on: the African spirits category
              was tiny, and almost nothing in it was actually owned, distilled
              and shipped by Africans.
            </p>
            <p>
              Umbrella is the bottle we wanted to order, designed, distilled and
              exported by the people whose families have been making it the
              longest.
            </p>
          </FadeIn>
        </div>
        <div className="container-edge pb-24">
          <Image
            src="/assets/process-still.jpg"
            alt="Distiller at the still"
            className="aspect-4/3 md:aspect-video w-full object-cover"
            width={1920}
            height={840}
            loading="lazy"
          />
        </div>
      </section>

      <section className="relative h-[70vh] min-h-120 overflow-hidden">
        <Image
          src="/assets/lifestyle.jpg"
          alt="Toast at sunset"
          fill
          className="object-cover"
          loading="lazy"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink/80 to-transparent" />
        <div className="container-edge relative z-10 flex h-full flex-col justify-end pb-20 text-bone">
          <FadeIn>
            <h2 className="max-w-3xl font-display text-5xl md:text-7xl text-balance">
              From Bayelsa.
              <br />
              <em className="font-serif italic font-light text-sun">
                For the world.
              </em>
            </h2>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
