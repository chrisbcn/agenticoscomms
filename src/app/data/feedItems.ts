// Import images from Figma
import imgDolceGabbana from "../../imports/Graphic-1/28ff60628157514b5d5cd498c5023b208fb41022.png";
import imgPrada from "../../imports/Graphic-1/91c8fe459f911f939ec262df25370e13975c7e67.png";
import imgKiton from "../../imports/Graphic-1/5fe4a2b88a51328710ae7c6c7f40cca9e60aa3cc.png";
import imgBrandLogoDG from "../../imports/Graphic-1/07259163f23f94c79a41f3539ce3af900f0dabfa.png";
import imgBrandLogoPrada from "../../imports/Graphic-1/b417c574a2885e6227de93735acb4b2c6ced634c.png";
import imgBrandLogoKiton from "../../imports/Graphic-1/8f4905999e49ec26052574809c01dc427af86985.png";

export interface FeedItem {
  id: string;
  image: string;
  brandLogo: string;
  brandName: string;
  source: string;
  backgroundColor?: string;
  video?: string | null;
}

export const feedItems: FeedItem[] = [
  {
    id: "1",
    image: imgDolceGabbana,
    brandLogo: imgBrandLogoDG,
    brandName: "Dolce & Gabbana",
    source: "Vogue",
    backgroundColor: "#fff",
  },
  {
    id: "2",
    image: imgPrada,
    brandLogo: imgBrandLogoPrada,
    brandName: "Prada",
    source: "Instagram",
    backgroundColor: "#000",
  },
  {
    id: "3",
    image: imgKiton,
    brandLogo: imgBrandLogoKiton,
    brandName: "Kiton",
    source: "Instagram",
    video: null, // Placeholder ready for Kiton video asset
  },
];
