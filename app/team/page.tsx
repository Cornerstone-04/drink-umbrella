import { PageHero } from "@/components/site/PageHero";
import { FadeIn } from "@/components/site/FadeIn";
import { Metadata } from "next";
import Image from "next/image";
import { LogoMarquee } from "@/components/site/LogoMarque";

export const metadata: Metadata = {
  title: "The Team — Drink Umbrella",
  description:
    "Founders, operators and partners building Umbrella Ogogoro between Lagos and London.",
  openGraph: {
    title: "The Team — Drink Umbrella",
    description: "Creatives between Lagos and London.",
  },
};

const team = [
  {
    name: "Funfere Keniye Koroye",
    role: "Co-Founder & CEO",
    initials: "KB",
    bio: "Born in Yenagoa, raised between Lagos and London. Previously led commercial strategy for two African music labels. Runs Umbrella's distillery and source-farm relationships from Bayelsa.",
    image: "/assets/team/keniye.jpg",
  },
  {
    name: "Sinatra Zantout",
    role: "Co-Founder & Creative Director",
    initials: "SZ",
    bio: "British-Lebanese designer and ex-fashion director. Owns the brand world end-to-end — bottle, label, look-book, every comma on this site.",
    image: "/assets/team/sinatra.jpg",
  },
  {
    name: "Dzisan Duniya",
    role: "Head of Branding",
    initials: "DD",
    bio: "Former art director at a major spirits house. Builds the campaigns, the activations and the partnerships that put the bottle in the right hands.",
    image: "/assets/team/dzisan.jpg",
  },
  {
    name: "Iderikumo Okara",
    role: "Head of Logistics",
    initials: "IO",
    bio: "Twelve years moving sensitive cargo in and out of West Africa. Manages everything between the Lagos line and our London bond.",
    image: "/assets/team/iderikumo.jpg",
  },
];

const partners = [
  {
    name: "Seyi & Seun",
    org: "Wilson's Lemonade",
    note: "Bottling collaboration on our flagship Umbrella Lemonade serve.",
  },
  {
    name: "Rilwan",
    org: "Sol Beach Club, Lagos",
    note: "Hospitality launch partner for the Nigerian market.",
  },
  {
    name: "Brandi",
    org: "The Patio, London",
    note: "First UK on-trade listing — and our unofficial focus group.",
  },
  {
    name: "Daniel",
    org: "We Value Africa",
    note: "Community programme partner for source-farm investment.",
  },
];

const previously = [
  "Jameson",
  "Lord's London Dry Gin",
  "Mavin Records",
  "Audiomack",
  "Antler",
  "LSF|PR",
  "Tech Nation",
  "TechCabal",
  "The Future Awards Africa",
  "Wilson's Juice Co.",
  "Martell",
  "The Balvenie",
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="The Team"
        title={
          <>
            Creatives between
            <br />
            <em className="font-serif italic font-light text-sun-deep">
              Lagos
            </em>{" "}
            &amp;{" "}
            <em className="font-serif italic font-light text-sun-deep">
              London
            </em>
            .
          </>
        }
        intro="A small, sharp team with deep experience across spirits, music, fashion, logistics and tech. Twelve people across two cities, one bottle on the move."
      />

      <section className="container-edge pb-32">
        <div className="grid gap-px bg-ink/10 md:grid-cols-2">
          {team.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.1}>
              <article className="bg-bone p-10 md:p-14 h-full">
                <div className="relative h-70 w-70 overflow-hidden bg-sun font-display text-5xl text-ink">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center">
                      {p.initials}
                    </span>
                  )}
                </div>
                <h3 className="mt-8 font-display text-4xl">{p.name}</h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-ink/60">
                  {p.role}
                </p>
                <p className="mt-6 max-w-prose text-ink/75 leading-relaxed">
                  {p.bio}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-ink/95 text-bone">
        <div className="container-edge pt-32 pb-16">
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-sun">
              Partners
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">
              In good company.
            </h2>
            <p className="mt-6 max-w-2xl text-bone/70">
              The people pouring, programming and championing Umbrella across
              Lagos, London and points in between.
            </p>
          </FadeIn>
          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {partners.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.08}>
                <div className="border-t border-bone/15 pt-6">
                  <h3 className="font-display text-2xl">{p.name}</h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.3em] text-bone/60">
                    {p.org}
                  </p>
                  <p className="mt-4 text-sm text-bone/70 leading-relaxed">
                    {p.note}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/*<div className="border-y border-bone/10 overflow-hidden">
          <LogoMarquee items={partners} theme="bone" duration={20} />
        </div>*/}

        <div className="container-edge pt-24 pb-16">
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-bone/50">
              Previously at
            </p>
            <p className="mt-3 max-w-2xl text-bone/50 text-sm">
              Where our team cut their teeth before bringing it all to Umbrella.
            </p>
          </FadeIn>
        </div>

        <div className="border-y border-bone/10 overflow-hidden">
          <LogoMarquee items={previously} theme="bone" duration={35} />
        </div>

        <div className="pb-24" />
      </section>

      {/*<section className="bg-ink text-bone">
        <div className="container-edge py-32">
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-sun">
              Partners
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">
              In good company.
            </h2>
            <p className="mt-6 max-w-2xl text-bone/70">
              The people pouring, programming and championing Umbrella across
              Lagos, London and points in between.
            </p>
          </FadeIn>
          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {partners.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.08}>
                <div className="border-t border-bone/15 pt-6">
                  <h3 className="font-display text-2xl">{p.name}</h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.3em] text-bone/60">
                    {p.org}
                  </p>
                  <p className="mt-4 text-sm text-bone/70 leading-relaxed">
                    {p.note}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-24">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-bone/50">
              Previously at
            </p>
            <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
              {previously.map((p) => (
                <span key={p} className="font-display text-xl text-bone/70">
                  {p}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>*/}
    </>
  );
}
