import { Cocktail, cocktails } from "@/data/cocktails";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCocktail(slug: string): Cocktail | undefined {
  return cocktails.find((c) => c.slug === slug);
}
