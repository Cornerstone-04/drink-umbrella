import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { AgeGate } from "@/components/ui/age_gate";
import { ScrollToTop } from "@/components/ui/scroll_to_top";
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
  title: {
    default: "Drink Umbrella — A Taste of the Premium African Spirit",
    template: "%s | Drink Umbrella",
  },
  description:
    "Umbrella Ogogoro is a premium organic Nigerian-British spirit, crafted from organically sourced cane and palm sap. Born in Bayelsa, made in London and Nigeria. Heritage in every sip.",
  applicationName: "Drink Umbrella",
  keywords: [
    "Ogogoro",
    "Nigerian spirit",
    "premium African spirit",
    "Drink Umbrella",
    "Umbrella Ogogoro",
    "Umbrella Airegin",
    "Umbrella Palmsap",
    "buy Ogogoro UK",
    "West African spirit",
    "craft Nigerian spirit",
    "organic Ogogoro",
    "African owned spirits brand",
    "Lagos London spirits",
    "palm sap spirit",
    "Bayelsa distillery",
    "Nigerian British spirit",
  ],
  authors: [{ name: "The Umbrella Palm Company" }],
  creator: "The Umbrella Palm Company",
  publisher: "The Umbrella Palm Company",
  alternates: {
    canonical: "https://drinkumbrella.vercel.app",
  },
  openGraph: {
    title: "Drink Umbrella — A Taste of the Premium African Spirit",
    description:
      "Umbrella Ogogoro is a premium organic Nigerian-British spirit, crafted from organically sourced cane and palm sap. Born in Bayelsa, made in London and Nigeria.",
    type: "website",
    url: "https://drinkumbrella.vercel.app",
    siteName: "Drink Umbrella",
    locale: "en_GB",
    images: [
      {
        url: "/assets/hero-beach.jpg",
        width: 1200,
        height: 630,
        alt: "Drink Umbrella — A Taste of the Premium African Spirit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@drinkumbrella",
    creator: "@drinkumbrella",
    title: "Drink Umbrella — A Taste of the Premium African Spirit",
    description:
      "Umbrella Ogogoro is a premium organic Nigerian-British spirit, crafted from organically sourced cane and palm sap. Born in Bayelsa, made in London and Nigeria.",
    images: ["/assets/hero-beach.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
  },
  category: "food & drink",
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
