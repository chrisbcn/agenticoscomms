import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { myInspirations, InspirationCard } from "../data/inspirations";

export default function AtelierHome() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  }, []);

  // Separate hero from grid cards
  const hero = myInspirations.find((c) => c.size === "hero");
  const gridCards = myInspirations.filter((c) => c.size === "grid");
  // Pair grid cards into rows of 2
  const rows: InspirationCard[][] = [];
  for (let i = 0; i < gridCards.length; i += 2) {
    rows.push(gridCards.slice(i, i + 2));
  }

  return (
    <motion.div
      className="absolute inset-0 bg-white"
      initial={{ x: "100%", opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 1 }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
    >
      <div className="h-full overflow-y-auto scrollbar-hide">
        <div className="px-5 pb-8">

          {/* Section heading */}
          <div className="flex items-baseline justify-between pt-5 pb-1">
            <h2 className="text-[22px] font-medium text-[#1e1e1e] leading-tight font-serif">
              Your Inspirations
            </h2>
            <button className="flex items-center gap-0.5 text-[13px] text-[#585858]">
              View all
              <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                <path d="M1 1l5 5-5 5" stroke="#585858" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <p className="text-[12px] text-[#8a8a8a] mb-4">
            Recent inspirations created or shared by you
          </p>

          {/* Hero video card */}
          {hero && (
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <div className="w-full h-[220px] overflow-hidden bg-[#1a1a1a]">
                <video
                  ref={videoRef}
                  src="/images/Image_Animation_Request_Fulfilled.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <p className="mt-2 text-[14px] font-medium text-[#1e1e1e] font-serif">{hero.title}</p>
            </motion.div>
          )}

          {/* Grid rows */}
          <div className="flex flex-col gap-4">
            {rows.map((row, rowIdx) => (
              <div key={rowIdx} className="grid grid-cols-2 gap-3">
                {row.map((card, cardIdx) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.2 + (rowIdx * 2 + cardIdx) * 0.08 }}
                  >
                    {/* Image */}
                    <div className="w-full aspect-[3/4] overflow-hidden bg-[#f0ede9]">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    {/* Title + contributors */}
                    <div className="mt-2">
                      <div className="flex items-center justify-between gap-1">
                        <p className="text-[13px] font-medium text-[#1e1e1e] truncate font-serif">
                          {card.title}
                        </p>
                        {/* Contributor avatars */}
                        {card.contributors.length > 0 && (
                          <div className="flex items-center flex-shrink-0">
                            {card.contributors.map((c, i) => (
                              <div
                                key={i}
                                className="w-[18px] h-[18px] rounded-full overflow-hidden border border-white bg-[#e0dbd5]"
                                style={{ marginLeft: i > 0 ? "-5px" : 0, zIndex: card.contributors.length - i }}
                              >
                                <img
                                  src={c.avatar}
                                  alt={c.name}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                  }}
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      {card.contributors.length > 0 && (
                        <p className="text-[11px] text-[#8a8a8a] mt-0.5 truncate">
                          {card.contributors.map((c) => c.name).join(", ")}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
