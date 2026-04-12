import { FeedItem } from "../data/feedItems";
import { motion } from "motion/react";

interface FeedCardProps {
  item: FeedItem;
  onClick: () => void;
  delay?: number;
}

export default function FeedCard({ item, onClick, delay = 0 }: FeedCardProps) {
  return (
    <motion.div
      className="w-full flex flex-col gap-3 cursor-pointer"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="w-full h-[466px] relative overflow-hidden">
        <img
          src={item.image}
          alt={item.brandName}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="flex items-center gap-2 px-4">
        <div className="w-[34px] h-[34px] rounded-full overflow-hidden border border-[rgba(0,0,0,0.12)] flex-shrink-0">
          <img
            src={item.brandLogo}
            alt={item.brandName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-medium text-[12.84px] leading-[19px] text-[#1e1e1e]">
            {item.brandName}
          </p>
          <p className="font-normal text-[12.84px] leading-[19px] text-[#585858]">
            {item.source}
          </p>
        </div>
      </div>
    </motion.div>
  );
}