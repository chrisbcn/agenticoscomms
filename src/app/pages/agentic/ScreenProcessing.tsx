import { motion } from "motion/react";

const imgOrb = "/agentic-assets/9eb8e13fcff6e5772ea5d056d1f31510baa20721.png";

export default function ScreenProcessing() {
  return (
    <div className="bg-[#f0f0f2] overflow-clip relative rounded-[50px] size-full">
      {/* Giant orb — bleeds off all edges, slowly rotates for shimmer */}
      <motion.div
        className="absolute rounded-full overflow-clip"
        style={{ left: -380, top: -67, width: 1175, height: 1175 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgOrb}
        />
      </motion.div>

      {/* Shimmer sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)",
        }}
        animate={{ x: [-500, 600] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", repeatDelay: 0.8 }}
      />

      {/* Text */}
      <p
        className="absolute text-center"
        style={{
          left: "50%",
          top: 478,
          transform: "translateX(-50%)",
          width: 465,
          fontFamily: "'One UI Sans APP VF', system-ui, sans-serif",
          fontWeight: 600,
          fontSize: 40,
          lineHeight: 1.4,
          color: "#262626",
        }}
      >
        Having a bit of a think, won't be a minute
      </p>
    </div>
  );
}
