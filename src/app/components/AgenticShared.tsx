// Shared assets and components used across the Agentic OS screens
import { motion } from "motion/react";
import { useAgent } from "../context/AgentContext";

export const ASSETS = {
  // Backgrounds
  bgWarm: "/agentic-assets/be22207c5b81f3ba4c374f3f73b8a7f9cd70b3cc.png",
  bgLight: "/agentic-assets/284a94f7cf61bfdbb9bfceebbc6f727384c44aea.png",
  bgLightAlt: "/agentic-assets/8e23fc692b553096ca4782f38eaa7321e20cdc86.png",
  glassTexture: "/agentic-assets/552ea12888d2f3fc11c5468aa567db6c7535068d.png",
  clockTexture: "/agentic-assets/66d7f2a78e502db6ab429f4d52c6cd398d6d9291.png",
  clockMask: "/agentic-assets/cd8421dda6c120be3f316ba10c9c0abca75b6c47.svg",

  // People
  mom: "/agentic-assets/58ce9b58c093882775509f5a54f680857549b19f.png",
  user: "/agentic-assets/f47d24f1011002db3657c4ebc0ad4b61adbac0cc.png",
  aaron: "/agentic-assets/dfd1786f5e5a8052a4fb42be2ba5b470db4b021b.png",
  momCircle: "/agentic-assets/73b9efb858068e485af35eeb97ba4badf8f35437.png",

  // Voice button
  voiceDefault: "/agentic-assets/9eb8e13fcff6e5772ea5d056d1f31510baa20721.png",
  voiceDefault2: "/agentic-assets/dfbc23a26e99b09a2488f9cb15cd58648bc5b695.png",
  micIcon: "/agentic-assets/6672c983de5a780011f8d6a9ff244867b2a9aaa1.svg",
  agentIcon: "/agentic-assets/51f0f8de2ceb5c96556af6e5766a2ee8bc691291.png",
  checkIcon: "/agentic-assets/bbb44051985d55f924d54f225b7bcd2af7ac2fcb.svg",

  // Waymo
  waymoCar: "/agentic-assets/155ae683fcc0fa0c21233166ea3175eaf7a14d6b.png",
  waymoTop: "/agentic-assets/9eb8e13fcff6e5772ea5d056d1f31510baa20721.png",
  waymoEllipse1: "/agentic-assets/103acd76be466e4dbf084e168e9641d671ea3a41.svg",
  waymoEllipse2: "/agentic-assets/8f1a4b7878212e9f4227d59a0f6433776a0d96e8.svg",
  waymoEllipse3: "/agentic-assets/985fd62ea75df3764eda05cd6cade38db798d8ee.svg",
  waymoEllipse4: "/agentic-assets/03007465fccf62848dc467a6992e89b22688bf3d.svg",
  waymoLine: "/agentic-assets/a46def1ef732092951dddb15c59225bbe69973eb.svg",

  // Map
  map: "/agentic-assets/954aefce163e793963ad259506c99c23ed16d316.png",
  mapFood: "/agentic-assets/1260a7e312c0451a2224aea0630a58f5042a0bc7.png",
  waymoLine2: "/agentic-assets/0d814fe01fe073cf523da305ff2d164b77507f44.svg",

  // City illustration (home screen)
  city: "/agentic-assets/2fdf9486fb83b215f5480f884135a96c08112f2e.png",
  cityDot1: "/agentic-assets/903217877c18ec8f02ab079111bdbc9209e3d35e.svg",
  cityDot2: "/agentic-assets/7570b907a9cae6a7f4a85ae17ee13adb386d802e.svg",

  // Restaurant
  restaurantImg: "/agentic-assets/bfdc821a2b7fd97422b365af36f51f9f0c0243ea.png",
  restaurantAlt: "/agentic-assets/1260a7e312c0451a2224aea0630a58f5042a0bc7.png",

  // Photos
  photo1: "/agentic-assets/6ae4b142ab8951f8a345ac1e8725a1fa929d9ad1.png",
  photo2: "/agentic-assets/257f178049721907e7434a1524818ac674d164d7.png",
  photo3: "/agentic-assets/d7304c964863691d6aed6b1a427a701906bd08d2.png",
  photo4: "/agentic-assets/867156475fc7faaf1b1b8910723b7ab3f7f8d1c4.png",
  photo5: "/agentic-assets/4fa2dc981aa8cbeb284c479c45cdcc8057a49d6c.png",

  // Notification bg blobs
  notifBg1: "/agentic-assets/f0eb15cd541d7526aadcbc9ba65b7487b118c2bb.png",
  notifBg2: "/agentic-assets/bfdc821a2b7fd97422b365af36f51f9f0c0243ea.png",
  notifBg3: "/agentic-assets/82ef667a4677b5058801419e722cfb083b1268f9.png",
};

// Clock display used on ambient screens
export function ClockDisplay({ hours, minutes, date }: { hours: string; minutes: string; date: string }) {
  return (
    <>
      {/* Hours - masked/textured version approximated as coral text */}
      <div
        className="absolute left-[24px] top-[60px]"
        style={{
          WebkitMaskImage: `url('${ASSETS.clockMask}')`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "836.485px 1656px",
          WebkitMaskSize: "89.547px 59.12px",
          width: 1929,
          height: 2826,
          left: -785,
          top: -1530,
          pointerEvents: "none",
          position: "absolute",
        }}
      >
        <img src={ASSETS.clockTexture} alt="" className="absolute inset-0 w-full h-full object-bottom pointer-events-none" />
      </div>
      <p className="absolute font-light leading-[0.9] left-[24px] text-[#de7a63] text-[80px] top-[60px] whitespace-nowrap select-none"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300 }}>
        {hours}
      </p>
      <p className="absolute font-light leading-[0.9] left-[24px] text-[#de7a63] text-[80px] top-[132px] whitespace-nowrap select-none"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300 }}>
        {minutes}
      </p>
      <p className="absolute font-light leading-none left-[24px] text-[#d14a41] text-[18px] top-[216px] whitespace-nowrap select-none"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300 }}>
        {date}
      </p>
    </>
  );
}

// Voice button — centered near bottom, use on every screen
export function VoiceButton({ onClick, active = false, className = "" }: { onClick?: () => void; active?: boolean; className?: string }) {
  const agent = useAgent();
  const listening = agent.isListening;
  const processing = agent.isProcessing;

  const handleClick = () => {
    agent.toggleListening();
    // onClick kept as fallback when speech not supported
    if (!agent.supported) onClick?.();
  };

  return (
    <div
      className={`-translate-x-1/2 absolute z-10 ${className}`}
      style={{ left: "calc(50% + 6px)", top: 936, width: 72, height: 72 }}
    >
      {/* Pulsing ring while listening */}
      {listening && (
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ border: "2.5px solid rgba(180,100,220,0.6)" }}
          animate={{ scale: [1, 1.55], opacity: [0.8, 0] }}
          transition={{ repeat: Infinity, duration: 1.1, ease: "easeOut" }}
        />
      )}
      {/* Processing dots ring */}
      {processing && (
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{ inset: -6, border: "2px solid rgba(180,100,220,0.35)" }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
        />
      )}
      <button
        onClick={handleClick}
        className="absolute inset-0 overflow-clip rounded-full"
        style={{
          background: "white",
          border: (active || listening) ? "6px solid rgba(205,133,219,0.7)" : "none",
          boxShadow: (active || listening)
            ? "0px 1.8px 5.4px 0px rgba(154,159,222,0.05), 0px -3.6px 5.4px 0px rgba(154,159,222,0.05)"
            : "none",
        }}
      >
        <img
          src={ASSETS.voiceDefault}
          alt="Voice"
          className="absolute inset-0 size-full object-cover pointer-events-none"
        />
      </button>
    </div>
  );
}

// Family avatar header (for white-bg screens)
export function FamilyAvatarHeader({ onBack }: { onBack?: () => void }) {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.75)] h-[152px] left-0 overflow-clip rounded-bl-[50px] rounded-br-[50px] top-0 w-[480px] z-10">
      <button
        onClick={onBack}
        className="absolute left-[24px] top-[76px] w-[48px] h-[48px] bg-[#f0f0f2] rounded-full flex items-center justify-center"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#262626" strokeWidth="1.8" strokeLinecap="round">
          <path d="M13 16l-6-6 6-6" />
        </svg>
      </button>
      {/* Mic icon */}
      <div className="absolute bg-[#f0f0f2] left-[24px] overflow-clip rounded-[100px] size-[56px] top-[72px]">
        <div className="absolute left-[14px] size-[24px] top-[16px]">
          <img src={ASSETS.micIcon} alt="" className="absolute block inset-0 size-full" />
        </div>
      </div>
      {/* Family avatars */}
      <div className="absolute left-[180px] rounded-[500px] size-[48px] top-[76px] overflow-hidden">
        <img src={ASSETS.mom} alt="Mom" className="absolute left-[-54.55%] max-w-none size-[206.87%] top-[-22.19%]" />
      </div>
      <div className="absolute left-[216px] rounded-[500px] size-[48px] top-[76px] overflow-hidden">
        <img src={ASSETS.user} alt="User" className="absolute inset-0 size-full object-cover rounded-[500px]" />
      </div>
      <div className="absolute left-[252px] rounded-[500px] h-[47px] w-[48px] top-[77px] overflow-hidden">
        <img src={ASSETS.aaron} alt="Aaron" className="absolute left-[-38.92%] max-w-none size-[181.56%] top-[-5.88%]" />
      </div>
    </div>
  );
}
