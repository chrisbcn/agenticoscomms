import { motion, useScroll, useTransform } from "motion/react";
import { RefObject } from "react";
import { brands } from "../data/brands";

interface BrandLogosProps {
  scrollContainerRef: RefObject<HTMLDivElement>;
}

export default function BrandLogos({ scrollContainerRef }: BrandLogosProps) {
  const { scrollY } = useScroll({ container: scrollContainerRef });
  const scale = useTransform(scrollY, [0, 150], [1, 0.3]);
  const opacity = useTransform(scrollY, [0, 150], [1, 0]);

  return (
    <motion.div
      className="bg-white px-4 py-3"
      style={{ scale, opacity }}
    >
      <div className="flex items-start gap-3">
        {brands.map((brand, index) => (
          <BrandAvatar
            key={brand.id}
            logo={brand.logo}
            name={brand.name}
            backgroundColor={brand.backgroundColor}
            storyCount={brand.storyCount}
            delay={index * 0.15}
          />
        ))}
      </div>
    </motion.div>
  );
}

interface BrandAvatarProps {
  logo: string;
  name: string;
  backgroundColor: string;
  storyCount?: number;
  delay: number;
}

function BrandAvatar({ logo, name, backgroundColor, storyCount, delay }: BrandAvatarProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="w-[77px] h-[77px] rounded-full overflow-hidden border border-[rgba(0,0,0,0.12)]">
        <img src={logo} alt={name} className="w-full h-full object-cover" />
      </div>
      {storyCount !== undefined && (
        <div className="absolute -top-1 right-0 translate-x-1/4 bg-[#f5f5f5] border border-[#b8b8b8] rounded-full px-2 py-0.5">
          <p className="font-medium text-[12.84px] leading-[19px] text-[#1e1e1e] whitespace-nowrap">
            {storyCount}
          </p>
        </div>
      )}
    </motion.div>
  );
}
