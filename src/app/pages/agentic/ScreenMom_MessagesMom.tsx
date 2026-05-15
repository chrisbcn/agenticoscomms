import { motion } from "motion/react";
import { VoiceButton } from "../../components/AgenticShared";

const imgBg = "/agentic-assets/be22207c5b81f3ba4c374f3f73b8a7f9cd70b3cc.png";
const imgBlobMom = "/agentic-assets/bfdc821a2b7fd97422b365af36f51f9f0c0243ea.png";
const imgBlobAaron = "/agentic-assets/f0eb15cd541d7526aadcbc9ba65b7487b118c2bb.png";
const imgAgent = "/agentic-assets/51f0f8de2ceb5c96556af6e5766a2ee8bc691291.png";
const imgMom = "/agentic-assets/dfd1786f5e5a8052a4fb42be2ba5b470db4b021b.png";
const imgAaron = "/agentic-assets/f47d24f1011002db3657c4ebc0ad4b61adbac0cc.png";


export default function ScreenMom_MessagesMom() {
  return (
    <div className="bg-white overflow-clip relative rounded-[50px] size-full">
      {/* Background */}
      <div className="absolute h-[1040px] left-0 top-0 w-[480px]">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgBg} />
      </div>

      {/* Clock "09" — gradient */}
      <p
        className="absolute left-[24px] top-[60px] text-[80px] whitespace-nowrap select-none"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 0.9, background: "linear-gradient(to bottom, #a78bcf, #de7a63)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
      >
        09
      </p>
      <p className="absolute left-[24px] top-[132px] text-[80px] whitespace-nowrap select-none"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 0.9, color: "#de7a63" }}>
        33
      </p>
      <p className="absolute left-[24px] top-[216px] text-[18px] whitespace-nowrap select-none"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1, color: "#d14a41" }}>
        Monday, May 4
      </p>

      {/* Aaron's card — starts at its messages-aaron position (front-center), glides down-right to back */}
      <motion.div
        className="absolute"
        style={{ left: 336, top: 538, width: 360, height: 331, zIndex: 1 }}
        initial={{ x: -233, y: -170 }}
        animate={{ x: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 18 }}
      >
        <div className="absolute pointer-events-none" style={{
          left: 0, top: 0, width: 360, height: 331,
          borderRadius: 100,
          background: "rgba(255,255,255,0.15)",
        }} />
        <div className="absolute rounded-[500px] overflow-hidden" style={{ left: 45, top: 52, width: 64, height: 64 }}>
          <img alt="" className="absolute left-[-25%] max-w-none size-[150%] top-[-8%]" src={imgAaron} />
        </div>
        <p className="absolute whitespace-nowrap"
          style={{ left: 45, top: 128, fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, fontSize: 14, lineHeight: 1.2, color: "#5c5a5a" }}>
          1 min ago
        </p>
        <p className="absolute"
          style={{ left: 45, top: 169, width: 244, fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, fontSize: 24, lineHeight: 1.2, color: "#262626" }}>
          "Works for me! Can't wait to see you both"
        </p>
        <div className="absolute overflow-hidden rounded-[500px]" style={{ left: 45, top: 259, width: 20, height: 20 }}>
          <img alt="" className="absolute h-[144.62%] left-[-47.04%] max-w-none top-[-20%] w-[193.81%]" src={imgAgent} />
        </div>
        <p className="absolute whitespace-nowrap"
          style={{ left: 75, top: 262, fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, fontSize: 12, lineHeight: 1.2, color: "#383838" }}>
          Aaron messaged you
        </p>
      </motion.div>

      {/* Mom's card — slides in from bottom-right, crosses Aaron's path, settles front-left */}
      <motion.div
        className="absolute"
        style={{ left: 24, top: 328, width: 360, height: 384, zIndex: 2 }}
        initial={{ x: 280, y: 360, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 16 }}
      >
        <div className="absolute pointer-events-none" style={{
          left: 0, top: 0, width: 351, height: 384,
          borderRadius: 100,
          background: "rgba(255,255,255,0.15)",
        }} />
        <div className="absolute rounded-[500px] overflow-hidden" style={{ left: 45, top: 52, width: 80, height: 80 }}>
          <img alt="" className="absolute left-[-20%] max-w-none size-[160%] top-[-8%]" src={imgMom} />
        </div>
        <p className="absolute whitespace-nowrap"
          style={{ left: 53, top: 144, fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, fontSize: 16, lineHeight: 1.2, color: "#5c5a5a" }}>
          Just now
        </p>
        <p className="absolute"
          style={{ left: 45, top: 192, width: 244, fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, fontSize: 36, lineHeight: 1.2, color: "#262626" }}>
          {`"Yes! Love that place 😊"`}
        </p>
        <div className="absolute overflow-hidden rounded-[500px]" style={{ left: 45, top: 307, width: 20, height: 20 }}>
          <img alt="" className="absolute h-[144.62%] left-[-47.04%] max-w-none top-[-20%] w-[193.81%]" src={imgAgent} />
        </div>
        <p className="absolute whitespace-nowrap"
          style={{ left: 75, top: 310, fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, fontSize: 12, lineHeight: 1.2, color: "#383838" }}>
          Mom confirmed. Reservation is set.
        </p>
      </motion.div>

      <VoiceButton demoText="Book me a Waymo" />
    </div>
  );
}
