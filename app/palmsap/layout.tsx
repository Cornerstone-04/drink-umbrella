import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umbrella Palmsap Ogogoro",
  description:
    "Umbrella Palmsap Ogogoro. Ultra-limited. 12 bottles per year, tapped from the creeks of Bayelsa.",
  keywords: [
    "Palmsap Ogogoro",
    "palm sap spirit Nigeria",
    "limited edition Nigerian spirit",
    "rare African spirit",
    "skull bottle spirit",
    "Bayelsa palm spirit",
    "Niger Delta spirit",
    "12 bottles per year",
  ],
  alternates: { canonical: "https://drinkumbrella.vercel.app/palmsap" },
  openGraph: {
    title: "Umbrella Palmsap Ogogoro",
    description: "12 bottles per year. Niger Delta. Made in London.",
    url: "https://drinkumbrella.vercel.app/palmsap",
    images: [
      {
        url: "https://drinkumbrella.vercel.app/palmsap-og-image.png",
        width: 1200,
        height: 630,
        alt: "Umbrella Palmsap Ogogoro | Drink Umbrella",
      },
    ],
  },
};

export default function PalmsapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
