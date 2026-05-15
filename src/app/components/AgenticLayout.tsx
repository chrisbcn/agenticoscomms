import { AnimatePresence, motion } from "motion/react";
import { useLocation, useOutlet } from "react-router";
import { AgentProvider, useAgent } from "../context/AgentContext";

function TranscriptOverlay() {
  const { isListening, isProcessing, transcript, interim } = useAgent();
  const visible = isListening || isProcessing;
  const displayText = interim || transcript;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="transcript"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.18 }}
          className="absolute z-20 pointer-events-none"
          style={{ left: 16, right: 16, bottom: 116 }}
        >
          <div
            className="rounded-[24px] px-[20px] py-[14px]"
            style={{ background: "rgba(20,10,30,0.72)", backdropFilter: "blur(12px)" }}
          >
            {isProcessing ? (
              <div className="flex gap-[6px] items-center justify-center py-[4px]">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="rounded-full size-[7px]"
                    style={{ background: "rgba(200,160,240,0.9)" }}
                    animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
                    transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                  />
                ))}
              </div>
            ) : (
              <p
                className="text-white text-[16px] text-center"
                style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1.4 }}
              >
                {displayText || (
                  <span style={{ opacity: 0.5 }}>Listening…</span>
                )}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function AgenticLayoutInner() {
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
        <TranscriptOverlay />
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
