// Brand data for the story strip at the top of the feed.
// Add logo images to /public/images/logos/ and update the logo paths below.

export interface Brand {
  id: string;
  name: string;
  logo: string;        // path relative to /public, e.g. "/images/logos/hermes.png"
  backgroundColor: string;
  storyCount?: number; // shown as a badge when set
}

export const brands: Brand[] = [
  {
    id: "hermes",
    name: "Hermès",
    logo: "/images/Brand Logo.png",
    backgroundColor: "#fff",
    storyCount: 10,
  },
  {
    id: "dolce-gabbana",
    name: "Dolce & Gabbana",
    logo: "/images/Brand Logo-1.png",
    backgroundColor: "#fff",
  },
  {
    id: "prada",
    name: "Prada",
    logo: "/images/Brand Logo-2.png",
    backgroundColor: "#000",
    storyCount: 4,
  },
  {
    id: "kiton",
    name: "Kiton",
    logo: "/images/Brand Logo-3.png",
    backgroundColor: "#fff",
  },
  {
    id: "gucci",
    name: "Gucci",
    logo: "/images/Brand Logo-4.png",
    backgroundColor: "#fff",
  },
];
