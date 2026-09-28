# ⚡ Adrenaline — Motivation Engine

A free, open-source motivational quote website. One tap fires a random quote — and every quote comes with a **"Your Move"**: one small, concrete action so motivation turns into doing, not just reading.

![MIT License](https://img.shields.io/badge/license-MIT-orange)

## Features

- **Quote engine** — 48 curated quotes across 6 categories: Discipline, Courage, Grind, Focus, Resilience, Greatness
- **"Your Move" actions** — every quote pairs with a tiny actionable step
- **Category filters** — pick the flavor of fire you need
- **The Wall** — browse the full arsenal in a masonry grid
- **Favorites** — heart the quotes that hit hardest (saved in your browser)
- **Copy to clipboard** — share any quote in one tap
- **Fully responsive** — desktop and mobile, touch-friendly targets
- **Reduced-motion support** — respects `prefers-reduced-motion`

## Tech stack

React 19 · TypeScript · Vite · Tailwind CSS · lucide-react

## Run it locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
```

The built site is fully static — host `dist/` on any static host, free forever.

## Project structure

```
src/
  data/quotes.ts        # all 48 quotes + categories + "Your Move" actions
  hooks/useFavorites.ts # localStorage favorites
  sections/             # Hero, QuoteEngine, QuoteWall, Footer
  pages/Home.tsx        # single-page composition
```

> Note: this repo ships only the components the app actually uses. It was
> scaffolded with shadcn/ui — if you want the full component library, run
> `npx shadcn@latest add --all` (see `components.json`).

## Contributing

PRs welcome — add quotes to `src/data/quotes.ts` (every quote needs a `spark`:
one small action the reader can take right now).

## License

MIT — do whatever you want with it. See [LICENSE](LICENSE).
