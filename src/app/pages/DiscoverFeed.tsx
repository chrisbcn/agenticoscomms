import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { useRef, useEffect } from "react";
import FeedCard from "../components/FeedCard";
import BrandLogos from "../components/BrandLogos";
import { feedItems } from "../data/feedItems";
import MauraLogo from "../components/MauraLogo";

let isInitialLoad = true;

export default function DiscoverFeed() {
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    isInitialLoad = false;
  }, []);

  const handleCardClick = (id: string) => {
    navigate(`/item/${id}`);
  };

  return (
    <motion.div 
      className="absolute inset-0 bg-white"
      initial={{ x: isInitialLoad ? 0 : "-100%", opacity: isInitialLoad ? 0 : 1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 1 }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
    >
      <div ref={scrollContainerRef} className="h-full overflow-y-auto scrollbar-hide">
        {/* Brand Logos Section */}
        <BrandLogos scrollContainerRef={scrollContainerRef} />

        {/* Feed Cards */}
        <div className="flex flex-col gap-8 pb-8 pt-4">
          {feedItems.map((item, index) => (
            <FeedCard 
              key={item.id} 
              item={item} 
              onClick={() => handleCardClick(item.id)}
              delay={0.9 + (index * 0.25)}
            />
          ))}
        </div>

        {/* Powered by Maura */}
        <motion.div 
          className="flex items-center justify-center gap-1 px-4 pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 + (feedItems.length * 0.25) }}
        >
          <p className="text-[#585858] text-[8.56px] font-normal leading-[1.2]">POWERED BY</p>
          <MauraLogo />
        </motion.div>
      </div>
    </motion.div>
  );
}