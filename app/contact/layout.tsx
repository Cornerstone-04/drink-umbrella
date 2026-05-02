import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Drink Umbrella",
  description: "Get in touch with Drink Umbrella.",
  keywords: [
    "Drink Umbrella contact",
    "Umbrella Ogogoro stockists",
    "Nigerian spirit wholesale UK",
    "African spirit press enquiries",
    "Ogogoro trade pricing",
  ],
  alternates: { canonical: "https://drinkumbrella.vercel.app/contact" },
  openGraph: {
    title: "Contact | Drink Umbrella",
    description:
      "Stockists, press, hospitality and partnerships. Lagos and London.",
    url: "https://drinkumbrella.vercel.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
