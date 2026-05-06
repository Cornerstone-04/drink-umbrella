import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Drink Umbrella",
  description:
    "The heritage, family and economic history behind our premium Nigerian spirit, Ogogoro. From Bayelsa to the world.",
  keywords: [
    "Ogogoro history",
    "Nigerian spirit history",
    "Bayelsa distillery",
    "African spirits brand story",
    "what is Ogogoro",
    "Ogogoro legalised Nigeria",
  ],
  alternates: { canonical: "https://drinkumbrella.vercel.app/story" },
  openGraph: {
    title: "Our Story | Drink Umbrella",
    description:
      "Outlawed in 1932. Reclaimed today. The story of Ogogoro and the brand bringing it to the world.",
    url: "https://drinkumbrella.vercel.app/story",
    images: [
      {
        url: "/story-opengraph.png",
        width: 1200,
        height: 630,
        alt: "The story of Ogogoro and the brand bringing it to the world.",
      },
    ],
  },
};

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
