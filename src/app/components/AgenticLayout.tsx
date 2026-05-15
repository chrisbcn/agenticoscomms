import { AnimatePresence, motion } from "motion/react";
import { useLocation, useOutlet } from "react-router";

export default function AgenticLayout() {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#c8bdb8]">
      <div
        style={{
          width: 480,
          height: 1040,
          transform: "scale(0.85)",
          transformOrigin: "top center",
          borderRadius: 50,
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.08)",
          marginBottom: -156,
          position: "relative",
          flexShrink: 0,
        }}
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.22, ease: [0.32, 0, 0.67, 0] }}
            style={{ position: "absolute", inset: 0 }}
          >
            {outlet}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
