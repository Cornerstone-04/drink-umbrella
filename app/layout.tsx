import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { AgeGate } from "@/components/site/AgeGate";

export const metadata: Metadata = {
  title: "Drink Umbrella — A Taste of the Premium African Spirit",
  description:
    "Umbrella Ogogoro is a premium organic Nigerian-British spirit, crafted from organically sourced cane, corn and coconut. Heritage in every sip.",
  authors: [{ name: "The Umbrella Palm Company" }],
  openGraph: {
    title: "Drink Umbrella — Premium African Spirit",
    description: "Heritage. Craft. Sustainability. A new chapter for Ogogoro.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-bone text-ink">
          <AgeGate />
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
