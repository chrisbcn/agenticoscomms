import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLocation, useNavigate, useOutlet } from "react-router";
import { AgentProvider } from "../context/AgentContext";

const STORY_ORDER = [
  "/agentic",
  "/agentic/restaurant",
  "/agentic/booking",
  "/agentic/messages",
  "/agentic/messages-aaron",
  "/agentic/messages-mom",
  "/agentic/waymo",
  "/agentic/tracking",
  "/agentic/photos",
  "/agentic/finale",
  "/agentic/share",
];

function AgenticLayoutInner() {
  const location = useLocation();
  const navigate = useNavigate();
  const outlet = useOutlet();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code !== "ArrowLeft" && e.code !== "ArrowRight") return;
      const idx = STORY_ORDER.indexOf(location.pathname);
      if (idx === -1) return;
      if (e.code === "ArrowRight" && idx < STORY_ORDER.length - 1) navigate(STORY_ORDER[idx + 1]);
      if (e.code === "ArrowLeft" && idx > 0) navigate(STORY_ORDER[idx - 1]);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [location.pathname, navigate]);

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
        <AnimatePresence mode="sync">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ position: "absolute", inset: 0 }}
          >
            {outlet}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function AgenticLayout() {
  return (
    <AgentProvider>
      <AgenticLayoutInner />
    </AgentProvider>
  );
}
