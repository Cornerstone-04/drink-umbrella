import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umbrella Airegin Ogogoro",
  description:
    "The standard bottle. Airegin is Nigeria spelled backwards, made in London from northern sugarcane.",
  keywords: [
    "Airegin Ogogoro",
    "Airegin Nigeria backwards",
    "Nigerian spirit made in London",
    "sugarcane spirit UK",
    "buy Ogogoro London",
    "premium cane spirit UK",
    "Sonny Rollins Airegin",
    "organic cane spirit",
  ],
  alternates: { canonical: "https://drinkumbrella.vercell.app/airegin" },
  openGraph: {
    title: "Umbrella Airegin Ogogoro | Drink Umbrella",
    description:
      "The standard bottle. Airegin is Nigeria spelled backwards, made in London from northern sugarcane.",
    url: "https://drinkumbrella.vercel.app/airegin",
    images: [
      {
        url: "/airegin-opengraph.png",
        width: 1200,
        height: 630,
        alt: "Umbrella Airegin Ogogoro | Drink Umbrella",
      },
    ],
  },
};
export default function AireginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
