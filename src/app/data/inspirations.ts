// Inspiration data for the Atelier Home and Brand pages

export interface Contributor {
  name: string;
  avatar: string;
}

export interface InspirationCard {
  id: string;
  image: string;
  title: string;
  contributors: Contributor[];
  size?: "hero" | "grid"; // hero = full width, grid = half width
}

export interface LookbookCard {
  id: string;
  images: [string, string, string, string]; // always 4
  title: string;
  photoCount: number;
}

export interface BrandInspirationCard {
  id: string;
  image: string;
  title: string;
}

// --- Atelier Home (Screen 1: CA - Inspiration) ---
export const myInspirations: InspirationCard[] = [
  {
    id: "urban-trench",
    image: "/images/graphic_4.png",
    title: "The Urban Trench",
    contributors: [],
    size: "hero",
  },
  {
    id: "casual-daytime",
    image: "/images/graphic_19.jpg",
    title: "Casual Daytime",
    contributors: [
      { name: "Eleanor Pena", avatar: "/images/graphic_5.png" },
      { name: "Arlene McCoy", avatar: "/images/graphic_7.jpg" },
    ],
    size: "grid",
  },
  {
    id: "fall-winter-city",
    image: "/images/graphic_17.png",
    title: "Fall/Winter City",
    contributors: [
      { name: "Lily-Rose Chedjou", avatar: "/images/graphic_11.png" },
      { name: "+2 more", avatar: "/images/graphic_6.png" },
    ],
    size: "grid",
  },
  {
    id: "monochrome-edit",
    image: "/images/graphic_29.jpg",
    title: "Monochrome Edit",
    contributors: [
      { name: "Chris Basey", avatar: "/images/graphic_10.png" },
    ],
    size: "grid",
  },
  {
    id: "soft-tailoring",
    image: "/images/graphic_9.png",
    title: "Soft Tailoring",
    contributors: [
      { name: "Eleanor Pena", avatar: "/images/graphic_5.png" },
    ],
    size: "grid",
  },
];

// --- Brand Page (Screen 2: Hermès brand) ---
export const hermesInspirations: BrandInspirationCard[] = [
  {
    id: "modern-noir",
    image: "/images/graphic_18.jpg",
    title: "Modern Noir",
  },
  {
    id: "porcelain-ease",
    image: "/images/graphic_23.png",
    title: "Porcelain Ease",
  },
];

export const hermesLookbooks: LookbookCard[] = [
  {
    id: "fw-2025",
    images: ["/images/graphic_12.png", "/images/graphic_15.jpg", "/images/graphic_25.png", "/images/graphic_29.jpg"],
    title: "Fall/Winter 2025 Lookbook",
    photoCount: 24,
  },
  {
    id: "ss-2025",
    images: ["/images/graphic_3.png", "/images/graphic_16.png", "/images/graphic_24.png", "/images/graphic_30.jpg"],
    title: "Spring/Summer 2025 Lookbook",
    photoCount: 20,
  },
];
