import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { AgeGate } from "@/components/site/age_gate";
import { ScrollToTop } from "@/components/site/scroll_to_top";
import {
  JetBrains_Mono,
  Inter,
  Fraunces,
  Manrope,
  Plus_Jakarta_Sans,
} from "next/font/google";
import { cn } from "@/lib/utils";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        jetBrainsMono.variable,
        inter.variable,
        fraunces.variable,
        manrope.variable,
        plusJakartaSans.variable,
      )}
      data-scroll-behavior="smooth"
    >
      <body>
        <div className="min-h-screen bg-bone text-ink">
          <AgeGate />
          <ScrollToTop />
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
