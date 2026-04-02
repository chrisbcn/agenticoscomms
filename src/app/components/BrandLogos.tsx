import imgBrandLogoHermes from "../../imports/Graphic-1/dd074350957f7096eced77fa83b07ae00b1b60bc.png";
import imgBrandLogoDG from "../../imports/Graphic-1/07259163f23f94c79a41f3539ce3af900f0dabfa.png";
import imgBrandLogoPrada from "../../imports/Graphic-1/b417c574a2885e6227de93735acb4b2c6ced634c.png";
import imgBrandLogoKiton from "../../imports/Graphic-1/8f4905999e49ec26052574809c01dc427af86985.png";
import imgBrandLogoGucci from "../../imports/Graphic-1/c24f46bbce8145f47a0dbe9b6ed80081d9d01441.png";
import { motion, useScroll, useTransform } from "motion/react";
import { RefObject } from "react";

export default function BrandLogos({ scrollContainerRef }: { scrollContainerRef: RefObject<HTMLDivElement> }) {
  const { scrollY } = useScroll({
    container: scrollContainerRef
  });
  
  // Transform scroll position to scale (1 to 0.3 over 150px of scroll)
  const scale = useTransform(scrollY, [0, 150], [1, 0.3]);
  const opacity = useTransform(scrollY, [0, 150], [1, 0]);

  return (
    <motion.div 
      className="bg-white px-4 py-3 relative"
      style={{ scale, opacity }}
    >
      <div className="flex items-start gap-3 relative">
        <BrandLogo src={imgBrandLogoHermes} badge="10" bgColor="#fff" delay={0} />
        <BrandLogo src={imgBrandLogoDG} bgColor="#fff" delay={0.15} />
        <BrandLogo src={imgBrandLogoPrada} bgColor="#000" badge="4" badgeLeft="240px" delay={0.3} />
        <BrandLogo src={imgBrandLogoKiton} bgColor="#fff" delay={0.45} />
        <BrandLogo src={imgBrandLogoGucci} bgColor="#fff" delay={0.6} />
      </div>
    </motion.div>
  );
}

function BrandLogo({
  src,
  badge,
  badgeLeft,
  bgColor,
  delay,
}: {
  src: string;
  badge?: string;
  badgeLeft?: string;
  bgColor: string;
  delay: number;
}) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <div
        className="w-[77px] h-[77px] rounded-full overflow-hidden border-[1.6px] border-[rgba(0,0,0,0.12)]"
        style={{ backgroundColor: bgColor }}
      >
        <img src={src} alt="" className="w-full h-full object-contain p-2" />
      </div>
      {badge && (
        <div
          className="absolute -top-0 bg-[#f5f5f5] border border-[#b8b8b8] rounded-full px-2 py-0.5"
          style={{ left: badgeLeft || "54px" }}
        >
          <p className="font-medium text-[12.84px] leading-[19px] text-[#1e1e1e] whitespace-nowrap">
            {badge}
          </p>
        </div>
      )}
    </motion.div>
  );
}