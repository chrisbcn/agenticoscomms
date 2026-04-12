import { motion } from "motion/react";
import { hermesInspirations, hermesLookbooks, LookbookCard } from "../data/inspirations";
import MauraLogo from "../components/MauraLogo";

export default function BrandPage() {
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

          {/* ── Hermès Inspirations ── */}
          <div className="flex items-baseline justify-between pt-5 pb-1">
            <h2 className="text-[22px] font-medium text-[#1e1e1e] leading-tight font-serif">
              Hermès Inspirations
            </h2>
            <button className="flex items-center gap-0.5 text-[13px] text-[#585858]">
              View all
              <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                <path d="M1 1l5 5-5 5" stroke="#585858" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <p className="text-[12px] text-[#8a8a8a] mb-4">
            Recently added to inspire your styling
          </p>

          {/* 2-column inspiration cards */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {hermesInspirations.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
              >
                <div className="w-full aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="mt-2 text-[14px] font-medium text-[#1e1e1e] font-serif">{card.title}</p>
              </motion.div>
            ))}
          </div>

          {/* ── Brand Lookbooks ── */}
          <div className="flex items-baseline justify-between pb-1">
            <h2 className="text-[22px] font-medium text-[#1e1e1e] leading-tight font-serif">
              Brand Lookbooks
            </h2>
            <button className="flex items-center gap-0.5 text-[13px] text-[#585858]">
              View all
              <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                <path d="M1 1l5 5-5 5" stroke="#585858" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <p className="text-[12px] text-[#8a8a8a] mb-4">
            The latest Hermès Lookbooks
          </p>

          {/* Lookbook tiles - 2 column */}
          <div className="grid grid-cols-2 gap-3">
            {hermesLookbooks.map((book, i) => (
              <LookbookTile key={book.id} book={book} delay={0.3 + i * 0.1} />
            ))}
          </div>

          {/* Powered by Maura */}
          <div className="flex items-center justify-center gap-1 mt-8">
            <p className="text-[#585858] text-[8.56px] font-normal leading-[1.2]">POWERED BY</p>
            <MauraLogo />
          </div>

        </div>
      </div>
    </motion.div>
  );
}

function LookbookTile({ book, delay }: { book: LookbookCard; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
    >
      {/* 2×2 photo grid */}
      <div className="grid grid-cols-2 gap-0.5 overflow-hidden bg-[#f0ede9]">
        {book.images.map((img, i) => (
          <div key={i} className="aspect-square overflow-hidden">
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover object-top"
            />
          </div>
        ))}
      </div>

      <p className="mt-2 text-[13px] font-medium text-[#1e1e1e] leading-tight font-serif">
        {book.title}
      </p>
      <p className="text-[11px] text-[#8a8a8a] mt-0.5">{book.photoCount} photos</p>
    </motion.div>
  );
}
