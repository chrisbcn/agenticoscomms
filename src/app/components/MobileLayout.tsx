import { ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLocation, useNavigate, useOutlet } from "react-router";
import { feedItems } from "../data/feedItems";
import svgPaths from "../../imports/Graphic-1/svg-c3ovxrd9pu";
import StatusBar from "../../imports/StatusBar/StatusBar";

export default function MobileLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const isDetail = location.pathname.startsWith("/item/");
  const itemId = isDetail ? location.pathname.split("/").pop() : null;
  const item = itemId ? feedItems.find(i => i.id === itemId) : null;

  const title = isDetail && item ? item.brandName.toUpperCase() : "DISCOVER";
  const showBackButton = isDetail;
  const animateNav = !isDetail;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#e8ddd0] to-[#d5c4b0]">
      <div className="relative w-[401px] h-[869px] bg-white rounded-[21px] shadow-2xl overflow-hidden">
        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-[47px] bg-white z-50">
          <StatusBar />
        </div>

        {/* Header */}
        <div className="absolute top-[47px] left-0 right-0 h-[43px] bg-white z-40 flex items-center justify-center border-b border-[#f0f0f0]">
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
          <p className="font-light text-[15px] text-[#1e1e1e]">{title}</p>
        </div>

        {/* Content - with overflow visible to allow sliding content */}
        <div className="absolute top-[90px] left-0 right-0 bottom-[94px] overflow-hidden bg-white">
          <AnimatePresence mode="popLayout">
            {/* We clone the outlet with a key so AnimatePresence detects changes */}
            {(() => {
              const element = useOutlet();
              return (
                <div key={location.pathname} className="w-full h-full">
                  {element}
                </div>
              );
            })()}
          </AnimatePresence>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 h-[94px] bg-white border-t border-[#d7d7d7] z-40">
          <div className="flex items-center h-[64px]">
            <NavButton icon="atelier" label="Atelier" animate={animateNav} delay={1.75} />
            <NavButton icon="wardrobe" label="Wardrobe" animate={animateNav} delay={1.9} />
            <NavButton icon="curator" label="Curator" animate={animateNav} delay={2.05} />
            <NavButton icon="looks" label="Looks" animate={animateNav} delay={2.2} />
            <NavButton icon="discover" label="Discover" active animate={animateNav} delay={2.35} />
          </div>
          <div className="h-[30px] flex items-center justify-center">
            <div className="w-[118px] h-[3px] bg-[#404040] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavButton({ icon, label, active, delay, animate }: { icon: string; label: string; active?: boolean; delay?: number; animate?: boolean }) {
  const iconColor = active ? "#404040" : "#AFAFAF";
  const textColor = active ? "#1e1e1e" : "#585858";

  const ButtonContent = (
    <>
      <div className="w-[26px] h-[26px] flex items-center justify-center">
        {icon === "atelier" && (
          <svg className="w-5 h-5" fill="none" stroke={iconColor} strokeWidth="1.07" viewBox="0 0 20 21">
            <path d={svgPaths.p31d55400} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {icon === "wardrobe" && (
          <svg className="w-5 h-5" fill="none" stroke={iconColor} strokeWidth="1.07" viewBox="0 0 19 24">
            <path d={svgPaths.p3c4ce3c0} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {icon === "curator" && (
          <svg className="w-4 h-4" fill="none" stroke={iconColor} strokeWidth="1.07" viewBox="0 0 16 16">
            <path d={svgPaths.p2e826880} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {icon === "looks" && (
          <svg className="w-5 h-5" fill="none" stroke={iconColor} strokeWidth="1.07" viewBox="0 0 22 18">
            <path d={svgPaths.p3ecc9e80} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {icon === "discover" && (
          <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 22 22">
            <path fill={active ? "#F6F3EF" : "none"} d={svgPaths.p14d5fe00} />
            <path stroke={iconColor} strokeWidth="1.07" d={svgPaths.p3bb69f80} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </>
  );
  
  // Skip button animation logic for now inside the persistent layout, 
  // or use Framer Motion, but only animate on initial mount, not on every page transition.
  return (
    <button className="flex-1 flex flex-col items-center gap-1 py-3">
      {ButtonContent}
    </button>
  );
}