# Drink Umbrella

The official website for **The Umbrella Palm Company** — a premium Nigerian-British spirits brand built around Ogogoro, West Africa's traditional distilled spirit.

---

## Tech Stack

| Tool                                                                                                 | Version | Purpose                     |
| ---------------------------------------------------------------------------------------------------- | ------- | --------------------------- |
| [Next.js](https://nextjs.org)                                                                        | 16      | Framework (App Router)      |
| [React](https://react.dev)                                                                           | 19      | UI                          |
| [TypeScript](https://www.typescriptlang.org)                                                         | 5       | Type safety                 |
| [Tailwind CSS](https://tailwindcss.com)                                                              | 4       | Styling                     |
| [Motion](https://motion.dev)                                                                         | 12      | Animations                  |
| [Lucide React](https://lucide.dev)                                                                   | latest  | Icons                       |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | latest  | Conditional class utilities |

---

## Getting Started

```bash
# Install dependencies
bun install

# Start the dev server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Production build
bun run build

# Run the production build locally
bun start
```

---

## Project Structure

```
drink-umbrella-next/
├── 📁 .zed
│   └── ⚙️ debug.json
├── 📁 app
│   ├── 📁 airegin
│   │   └── 📄 page.tsx
│   ├── 📁 cocktails
│   │   └── 📄 page.tsx
│   ├── 📁 contact
│   │   ├── 📄 ContactForm.tsx
│   │   └── 📄 page.tsx
│   ├── 📁 palmsap
│   │   └── 📄 page.tsx
│   ├── 📁 process
│   │   └── 📄 page.tsx
│   ├── 📁 story
│   │   └── 📄 page.tsx
│   ├── 🎨 globals.css
│   ├── 📄 layout.tsx
│   ├── 📄 not-found.tsx
│   └── 📄 page.tsx
├── 📁 components
│   └── 📁 ui
│       ├── 📄 age_gate.tsx
│       ├── 📄 fade_in.tsx
│       ├── 📄 field.tsx
│       ├── 📄 footer.tsx
│       ├── 📄 marquee.tsx
│       ├── 📄 navbar.tsx
│       ├── 📄 page_hero.tsx
│       └── 📄 scroll_to_top.tsx
├── 📁 lib
│   ├── 📄 bottles.ts
│   ├── 📄 cocktails.ts
│   ├── 📄 contacts.ts
│   ├── 📄 links.ts
│   ├── 📄 step.ts
│   ├── 📄 timeline.ts
│   └── 📄 utils.ts
├── 📁 public
│   └── 📁 assets
│       ├── 📁 cocktails
│       │   ├── 🖼️ chapman.jpg
│       │   ├── 🖼️ cosmo.jpg
│       │   ├── 🖼️ lemonade.jpg
│       │   ├── 🖼️ margarita.jpg
│       │   ├── 🖼️ martini.jpg
│       │   ├── 🖼️ russian.jpg
│       │   ├── 🖼️ screwdriver.jpg
│       │   └── 🖼️ tonic.jpg
│       ├── 🖼️ cocktail.jpg
│       ├── 🖼️ hero-beach.jpg
│       ├── 🖼️ lifestyle.jpg
│       ├── 🖼️ pattern.jpg
│       ├── 🖼️ process-still.jpg
│       ├── 🖼️ sugarcane.jpg
│       ├── 🖼️ umbrella_bottle.jpg
│       ├── 🖼️ umbrella_bottles_shelf.jpg
│       ├── 🖼️ umbrella_bottles_table.jpg
│       └── 🖼️ umbrella_skull.jpg
├── ⚙️ .gitignore
├── 📝 README.md
├── 📄 bun.lock
├── 📄 next.config.ts
├── ⚙️ package.json
├── 📄 postcss.config.mjs
└── ⚙️ tsconfig.json
```

---

## Pages

| Route        | Page                                                                      |
| ------------ | ------------------------------------------------------------------------- |
| `/`          | Home — hero, brand intro, bottle showcase, process teaser, stats, CTA     |
| `/story`     | Our Story — brand history, Ogogoro timeline, founders                     |
| `/process`   | Process — six distillation steps, sustainability figures                  |
| `/airegin`   | Umbrella Airegin Ogogoro — standard bottle, made in London                |
| `/palmsap`   | Umbrella Palmsap Ogogoro — skull bottle, made in Nigeria, 12 bottles/year |
| `/cocktails` | Eight house cocktail recipes                                              |
| `/team`      | Founders, partners, and alumni                                            |
| `/contact`   | Contact form + office details                                             |

---

## Key Components

### `FadeIn`

A scroll-triggered animation wrapper built on `motion/react`. Wrap any section or element to have it fade and slide in when it enters the viewport.

```tsx
<FadeIn direction="up" delay={0.1}>
  <p>This fades in when scrolled to.</p>
</FadeIn>
```

**Props:**

- `direction` — `"up"` | `"left"` | `"right"` | `"none"` (default: `"up"`)
- `delay` — seconds to wait before animating (default: `0`)
- `className` — passed through to the wrapper `div`

---

### `PageHero`

Consistent page header used across all inner pages.

```tsx
<PageHero
  eyebrow="The Standard Bottle"
  title={
    <>
      Umbrella Airegin{" "}
      <em className="font-serif italic font-light">Ogogoro.</em>
    </>
  }
  intro="Optional subtitle paragraph."
/>
```

---

### `LogoMarquee`

Infinite scrolling strip for the partners and alumni sections on the team page. Accepts both plain strings and objects.

```tsx
<LogoMarquee
  items={[{ name: "Jameson", sub: "Spirits" }, "Audiomack"]}
  theme="bone" // "bone" (light on dark) | "ink" (dark on light)
  duration={35} // seconds per loop
/>
```

---

## Design Tokens

All brand colours are defined as CSS variables in `app/globals.css` and exposed via Tailwind:

| Token        | Value            | Usage                           |
| ------------ | ---------------- | ------------------------------- |
| `--ink`      | Near-black       | Primary text, dark backgrounds  |
| `--bone`     | Warm off-white   | Page background, light sections |
| `--sun`      | Signature yellow | Accents, CTAs, highlights       |
| `--sun-deep` | Deeper amber     | Italic emphasis, hover states   |

Use them in Tailwind as `bg-ink`, `text-bone`, `bg-sun`, `text-sun-deep` etc.

**Fonts:**

- `font-display` — Aileron (headings)
- `font-serif` — Fraunces italic (decorative emphasis)
- `font-body` — Inter (body copy)
- `font-mono` — used for eyebrows, labels, and UI chrome

---

## Assets

All images live in `public/assets/`. The Palmsap skull bottle image should be placed at:

```
public/assets/umbrella_skull.jpg
```

Cocktail images are referenced individually per recipe in `app/cocktails/page.tsx`:

```
public/assets/cocktails/lemonade.jpg
public/assets/cocktails/tonic.jpg
public/assets/cocktails/screwdriver.jpg
... etc.
```

---

## Deployment

The site is fully statically generated (all routes are `○ Static`). It can be deployed to any static host — Vercel is the recommended platform for Next.js.

```bash
bun run build
# → outputs to .next/
# → deploy via Vercel, or export with `next export` for pure static hosting
```

---

## Brand Notes

- **Umbrella Airegin Ogogoro** — the standard bottle. Made in London. Sugarcane sourced from the North. _Airegin_ is Nigeria spelled backwards, named after the 1954 Sonny Rollins jazz standard.
- **Umbrella Palmsap Ogogoro** — the skull bottle. Made in Nigeria. Palm sap tapped from the creeks of Bayelsa. Ultra-limited: 12 bottles per year.
- Age gate uses `sessionStorage` — verified once per browser session.
- The mobile menu locks body scroll while open (`document.body.style.overflow = "hidden"`).

---

_The Umbrella Palm Company · Lagos · London_
