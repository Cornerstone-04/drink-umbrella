import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cocktails — Drink Umbrella",
  description: "Eight signature serves built around Umbrella Ogogoro.",
  keywords: [
    "Ogogoro cocktails",
    "Nigerian spirit cocktail recipes",
    "what to mix with Ogogoro",
    "Ogogoro lemonade",
    "Ogogoro tonic",
    "Ogogoro margarita",
    "Ogogoro martini",
    "Ogogoro Chapman",
    "African spirit cocktails UK",
  ],
  alternates: { canonical: "https://drinkumbrella.vercel.app/cocktails" },
  openGraph: {
    title: "Umbrella Cocktails",
    description:
      "Eight ways to drink Umbrella Ogogoro. Recipes for every occasion.",
    url: "https://drinkumbrella.vercel.app/cocktails",
    images: [
      {
        url: "/cocktails-opengraph.png",
        width: 1200,
        height: 630,
        alt: "Eight signature cocktails built around Umbrella Ogogoro.",
      },
    ],
  },
};

export default function CocktailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
