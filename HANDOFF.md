# Maura Brand Video — Developer Handoff

> **Project type:** React + Vite mobile prototype (fixed-frame, 401×869px)
> **Purpose:** Interactive demo of a fashion content discovery app featuring brand video assets, curation, and lookbooks
> **Last updated:** April 2026

---

## Quick Start

```bash
cd /Users/chrisbasey/Documents/GitHub/Maurabrandvideo
npm install
npm run dev        # starts on http://localhost:5174
```

> Node must be at `/usr/local/bin/node`. If `npm` fails, prefix with `PATH="/usr/local/bin:$PATH"`.

---

## Project Structure

```
src/
├── app/
│   ├── App.tsx                  # Mounts RouterProvider
│   ├── routes.tsx               # All route definitions
│   ├── pages/
│   │   ├── DiscoverFeed.tsx     # / — main feed
│   │   ├── ItemDetail.tsx       # /item/:id — video detail
│   │   ├── AtelierHome.tsx      # /atelier — your inspirations
│   │   └── BrandPage.tsx        # /brand/:id — brand lookbooks
│   ├── components/
│   │   ├── MobileLayout.tsx     # Shell: status bar, header, nav, route outlet
│   │   ├── FeedCard.tsx         # Card in discover feed
│   │   ├── BrandLogos.tsx       # Scrollable brand avatar row
│   │   ├── VideoPlayer.tsx      # Video element with muted fix + placeholder
│   │   └── MauraLogo.tsx        # SVG wordmark
│   ├── data/
│   │   ├── feedItems.ts         # Feed card data
│   │   ├── brands.ts            # Brand logo + story count data
│   │   └── inspirations.ts      # Atelier cards, brand inspirations, lookbooks
│   └── lib/
│       └── iconPaths.ts         # SVG path strings for nav icons
├── imports/
│   └── StatusBar/               # Figma-exported iOS status bar
└── styles/
    ├── fonts.css                # Google Fonts imports
    ├── theme.css                # CSS custom properties + Tailwind @theme
    ├── tailwind.css             # @import "tailwindcss"
    └── index.css                # Entry point (@import all above)

public/
└── images/                      # All static assets (images + videos)
```

---

## Routes

| Path | Component | Notes |
|------|-----------|-------|
| `/` | `DiscoverFeed` | Brand logo carousel + vertical feed cards |
| `/item/:id` | `ItemDetail` | Full-screen video player or image |
| `/atelier` | `AtelierHome` | Hero video + 2-col inspiration grid |
| `/brand/:id` | `BrandPage` | Brand inspirations + lookbooks (Hermès data hardcoded) |

All routes are children of `MobileLayout`, which provides the status bar, header, and bottom nav shell.

---

## MobileLayout Shell

The shell is a **fixed 401×869px frame** centered on a beige gradient (`#e8ddd0` → `#d5c4b0`), styled to look like an iOS device.

```
┌─────────────────────┐  ← rounded-[21px], shadow-2xl
│   StatusBar (47px)  │
│   Header   (43px)   │  ← title centered, back btn left, "Add new" right
├─────────────────────┤  ← border-[#d7d7d7]
│                     │
│   Content (fills)   │  ← overflow-hidden, AnimatePresence outlet
│                     │
├─────────────────────┤  ← border-[#d7d7d7]
│   Bottom Nav (94px) │  ← 5 nav buttons + home indicator bar
└─────────────────────┘
```

**Header behaviour:**
- Shows back chevron on `/item/*` routes
- Shows "Add new" text button on all non-detail routes
- Title: brand name (uppercase) on detail routes, `DISCOVER` on `/`, `ATELIER` on `/atelier` and `/brand/*`

**Bottom nav active states:**
- Discover tab active: any route that is not `/atelier` or `/brand/*`
- Atelier tab active: `/atelier` or `/brand/*`
- Wardrobe, Curator, Looks: icons render but are not yet wired to routes

---

## Pages

### DiscoverFeed (`/`)
- Renders `<BrandLogos />` (parallax scroll-out) then a list of `<FeedCard />` items
- Data from `feedItems.ts` (3 items: Dolce & Gabbana, Prada, Kiton)
- Clicking a card navigates to `/item/:id`

### ItemDetail (`/item/:id`)
- Looks up `id` in `feedItems` array
- If `item.video` is a string → renders `<VideoPlayer src={item.video} />`
- If `item.video === null` → renders `<VideoPlayer />` with animated "Video Rendering" placeholder
- If no video prop → shows item image

### AtelierHome (`/atelier`)
- **Hero card:** plays `Image_Animation_Request_Fulfilled.mp4` in a `220px`-tall video element
- **Grid:** 2-column rows from `myInspirations` (filtering `size === "grid"`)
- Contributor avatars: `18×18px` circles with `−5px` left overlap
- All headings and card titles use `font-serif` (Source Serif 4) at `font-medium` (500) max weight

### BrandPage (`/brand/:id`)
- Currently uses hardcoded Hermès data (`hermesInspirations`, `hermesLookbooks`)
- Two sections: inspiration 2-col grid + lookbooks 2-col grid
- Lookbook tile: 2×2 photo grid (4 images required), title, photo count
- Footer: "POWERED BY MAURA" using `<MauraLogo />`

---

## Data Shapes

### FeedItem (`feedItems.ts`)
```typescript
interface FeedItem {
  id: string;
  image: string;           // e.g. "/images/Discover Card.png"
  brandLogo: string;       // e.g. "/images/Brand Logo.png"
  brandName: string;
  source: string;          // e.g. "Vogue"
  video?: string | null;   // string = path, null = placeholder, undefined = image only
}
```

### Brand (`brands.ts`)
```typescript
interface Brand {
  id: string;
  name: string;
  logo: string;
  backgroundColor: string;
  storyCount?: number;
}
```

### InspirationCard (`inspirations.ts`)
```typescript
interface InspirationCard {
  id: string;
  image: string;
  title: string;
  contributors: { name: string; avatar: string }[];
  size?: "hero" | "grid";
}

interface LookbookCard {
  id: string;
  images: [string, string, string, string];  // exactly 4 required
  title: string;
  photoCount: number;
}
```

---

## Fonts & Typography

| Variable | Value | Usage |
|----------|-------|-------|
| `--font-sans` | Outfit 300–700 | Body, UI, nav labels |
| `--font-family-serif` | Source Serif 4 300–700 | Section headings, card titles |

**Rules:**
- Maximum font weight is **500 (medium)** — no semibold or bold anywhere in app screens
- Apply serif font via Tailwind's `font-serif` class
- Common sizes: `22px` headings, `15px` header title, `14px` card titles, `13px` secondary, `12px` captions, `11px` contributor names

---

## Colors (hardcoded in components — no Tailwind tokens)

| Usage | Value |
|-------|-------|
| Primary text | `#1e1e1e` |
| Secondary text | `#585858` |
| Muted text | `#8a8a8a` |
| Active nav icon + title | `#404040` |
| Inactive nav icon | `#AFAFAF` |
| Dividers | `#d7d7d7`, `#f0f0f0` |
| Card background | `#f0ede9` |
| App gradient start | `#e8ddd0` |
| App gradient end | `#d5c4b0` |
| Video bg | `#1a1a1a` |

---

## Video Assets

| File | Used in |
|------|---------|
| `kiton-screen-video.mp4` | `feedItems[2]` (Kiton detail page) |
| `Image_Animation_Request_Fulfilled.mp4` | AtelierHome hero card |
| `Adjusting_Video_Model_Size.mp4` | Unused |
| `kiton-screen-video-original.mp4` | Backup only |

**Known quirk:** The `muted` prop in React doesn't set the DOM attribute. All video elements must be muted via `useRef` + `useEffect`:
```typescript
useEffect(() => { if (ref.current) ref.current.muted = true; }, []);
```

The kiton video was converted to **faststart** format (moov atom moved to front of file) so it streams without waiting for the full download.

---

## Vite Config

```typescript
plugins: [react(), tailwindcss(), headRequestPlugin()]
alias: { "@": "./src" }
```

`headRequestPlugin` is a custom middleware that converts HEAD requests to GET requests so video `<source>` elements can precheck URLs during dev. Without it Vite returns 503 on HEAD requests.

---

## Design Notes

- **No rounded corners** on any content images or cards. The only border-radius is on the phone shell itself (`rounded-[21px]`) and the circular avatar/logo elements.
- **Slide-in animation** for all pages: `x: "100%"` → `x: 0` using `motion/react` spring (`damping: 30, stiffness: 300`).
- All pages use `position: absolute; inset: 0` inside the content area, with `overflow-y: auto` for internal scrolling.
- `scrollbar-hide` class applied to all scrollable divs to suppress scrollbar visibility.

---

## Known Limitations / TODO

- **BrandPage is not data-driven** — it always shows Hermès data regardless of the `:id` param. To make it dynamic, `BrandPage.tsx` needs to look up the brand by `useParams().id` and load the matching inspiration/lookbook data.
- **Wardrobe, Curator, Looks nav tabs** are not wired to any routes yet.
- **No backend / API** — all data is hardcoded in `src/app/data/`. No auth, no persistence.
- **Prototype fidelity** — this is a fixed-frame demo at 401×869px. There is no responsive layout for other screen sizes.
- **Font optical sizing** — Source Serif 4 is imported with the `opsz` axis (`8..60`) for better rendering at small sizes, but optical size is not explicitly set in CSS.
