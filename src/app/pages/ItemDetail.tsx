import { useParams, useNavigate } from "react-router";
import { motion } from "motion/react";
import { feedItems } from "../data/feedItems";
import VideoPlayer from "../components/VideoPlayer";
import MauraLogo from "../components/MauraLogo";

export default function ItemDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const item = feedItems.find((item) => item.id === id);

  if (!item) {
    return (
      <div className="absolute inset-0 bg-white flex items-center justify-center">
        <p className="text-[#585858]">Item not found</p>
      </div>
    );
  }

  return (
    <motion.div
      className="absolute inset-0 bg-white flex flex-col z-20 shadow-2xl"
      initial={{ x: "100%", opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 1 }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
    >
      {/* Full screen image */}
        <div className="flex-1 relative overflow-hidden">
          {item.video !== undefined ? (
            // Don't pass the feed thumbnail as a poster — it contains baked-in Figma UI.
            // The video itself starts quickly (faststart moov) so a brief black bg is fine.
            <VideoPlayer src={item.video || undefined} className="w-full h-full absolute inset-0" />
          ) : (
            <img
              src={item.image}
              alt={item.brandName}
              className="w-full h-full object-cover object-top"
            />
          )}
        </div>

        {/* Brand info at bottom */}
        <div className="p-6 bg-white border-t border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden border border-[rgba(0,0,0,0.12)]">
              <img
                src={item.brandLogo}
                alt={item.brandName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-medium text-xl text-[#1e1e1e]">{item.brandName}</h2>
              <p className="text-[#585858] text-sm">{item.source}</p>
            </div>
          </div>

          {/* Powered by Maura */}
          <div className="flex items-center justify-center gap-1 mt-6">
            <p className="text-[#585858] text-[8.56px] font-normal leading-[1.2]">POWERED BY</p>
            <MauraLogo />
          </div>
        </div>
    </motion.div>
  );
}