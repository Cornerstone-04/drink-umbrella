import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process | Drink Umbrella",
  description:
    "Organically grown cane, slow natural fermentation, copper-pot distillation, solar power.",
  keywords: [
    "how is Ogogoro made",
    "Nigerian spirit distillation",
    "sustainable African spirits",
    "solar powered distillery Nigeria",
    "organic spirit production",
    "fair trade spirits",
    "copper pot distillation Nigeria",
  ],
  alternates: { canonical: "https://drinkumbrella.vercel.app/process" },
  openGraph: {
    title: "Our Process | Drink Umbrella",
    description:
      "Organically grown cane, slow natural fermentation, copper-pot distillation, solar power.",
    url: "https://drinkumbrella.vercel.app/process",
  },
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
