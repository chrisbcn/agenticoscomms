// Feed item data — add images/videos to /public/images/ and update the paths below.

export interface FeedItem {
  id: string;
  image: string;       // path relative to /public, e.g. "/images/dolce-gabbana.jpg"
  brandLogo: string;   // path relative to /public, e.g. "/images/logos/dolce-gabbana.png"
  brandName: string;
  source: string;
  backgroundColor?: string;
  video?: string | null; // null = coming soon placeholder, undefined = show image only
}

export const feedItems: FeedItem[] = [
  {
    id: "1",
    image: "/images/Discover Card.png",
    brandLogo: "/images/Brand Logo-1.png",
    brandName: "Dolce & Gabbana",
    source: "Vogue",
    backgroundColor: "#fff",
  },
  {
    id: "2",
    image: "/images/Image.png",
    brandLogo: "/images/Brand Logo-2.png",
    brandName: "Prada",
    source: "Instagram",
    backgroundColor: "#000",
  },
  {
    id: "3",
    image: "/images/Trending card.png",
    brandLogo: "/images/Brand Logo-3.png",
    brandName: "Kiton",
    source: "Instagram",
    video: "/images/kiton-screen-video.mp4",
  },
];
