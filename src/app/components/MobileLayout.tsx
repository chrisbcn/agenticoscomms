import { AnimatePresence } from "motion/react";
import { useLocation, useNavigate, useOutlet } from "react-router";
import { feedItems } from "../data/feedItems";
import {
  navAtelier,
  navWardrobe,
  navCurator,
  navLooks,
  navDiscoverFill,
  navDiscoverOutline,
} from "../lib/iconPaths";
import StatusBar from "../../imports/StatusBar/StatusBar";

export default function MobileLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const outlet = useOutlet();

  const isDetail = location.pathname.startsWith("/item/");
  const isAtelier = location.pathname === "/atelier";
  const isBrand = location.pathname.startsWith("/brand/");

  const itemId = isDetail ? location.pathname.split("/").pop() : null;
  const item = itemId ? feedItems.find(i => i.id === itemId) : null;

  const title = isDetail && item
    ? item.brandName.toUpperCase()
    : isAtelier || isBrand
      ? "ATELIER"
      : "DISCOVER";
  const showBackButton = isDetail;
  const showAddNew = !isDetail;

  // Nav active states
  const discoverActive = !isAtelier && !isBrand;
  const atelierActive = isAtelier || isBrand;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#e8ddd0] to-[#d5c4b0]">
      <div className="relative w-[401px] h-[869px] bg-white rounded-[21px] shadow-2xl overflow-hidden">

        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-[47px] bg-white z-50">
          <StatusBar />
        </div>

        {/* Header */}
        <div className="absolute top-[47px] left-0 right-0 h-[43px] bg-white z-40 flex items-center justify-center border-b border-[#f0f0f0]">
          {/* Back button */}
          {showBackButton && (
            <button
              onClick={() => navigate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="#404040" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}


          {/* Title */}
          <p className="font-light text-[15px] text-[#1e1e1e]">{title}</p>

          {/* Add new button */}
          {showAddNew && (
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[13px] text-[#585858] font-normal">
              Add new
            </button>
          )}
        </div>

        {/* Content */}
        <div className="absolute top-[90px] left-0 right-0 bottom-[94px] overflow-hidden bg-white">
          <AnimatePresence mode="popLayout">
            <div key={location.pathname} className="w-full h-full">
              {outlet}
            </div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 h-[94px] bg-white border-t border-[#d7d7d7] z-40">
          <div className="flex items-center h-[64px]">
            <NavButton
              icon="atelier"
              label="Atelier"
              active={atelierActive}
              onClick={() => navigate("/atelier")}
            />
            <NavButton
              icon="wardrobe"
              label="Wardrobe"
              active={false}
            />
            <NavButton
              icon="curator"
              label="Curator"
              active={false}
            />
            <NavButton
              icon="looks"
              label="Looks"
              active={false}
            />
            <NavButton
              icon="discover"
              label="Discover"
              active={discoverActive}
              onClick={() => navigate("/")}
            />
          </div>
          <div className="h-[30px] flex items-center justify-center">
            <div className="w-[118px] h-[3px] bg-[#404040] rounded-full" />
          </div>
        </div>

      </div>
    </div>
  );
}

function NavButton({
  icon,
  label,
  active,
  onClick,
}: {
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  const iconColor = active ? "#404040" : "#AFAFAF";

  return (
    <button
      className="flex-1 flex flex-col items-center gap-1 py-3"
      onClick={onClick}
    >
      <div className="w-[26px] h-[26px] flex items-center justify-center">
        {icon === "atelier" && (
          <svg className="w-5 h-5" fill="none" stroke={iconColor} strokeWidth="1.07" viewBox="0 0 20 21">
            <path d={navAtelier} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {icon === "wardrobe" && (
          <svg className="w-5 h-5" fill="none" stroke={iconColor} strokeWidth="1.07" viewBox="0 0 19 24">
            <path d={navWardrobe} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {icon === "curator" && (
          <svg className="w-4 h-4" fill="none" stroke={iconColor} strokeWidth="1.07" viewBox="0 0 16 16">
            <path d={navCurator} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {icon === "looks" && (
          <svg className="w-5 h-5" fill="none" stroke={iconColor} strokeWidth="1.07" viewBox="0 0 22 18">
            <path d={navLooks} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {icon === "discover" && (
          <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 22 22">
            <path fill={active ? "#F6F3EF" : "none"} d={navDiscoverFill} />
            <path stroke={iconColor} strokeWidth="1.07" d={navDiscoverOutline} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <span className={`text-[10px] leading-none ${active ? "text-[#1e1e1e]" : "text-[#AFAFAF]"}`}>
        {label}
      </span>
    </button>
  );
}
