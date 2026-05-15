import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { VoiceButton } from "../../components/AgenticShared";

const imgBg = "/agentic-assets/be22207c5b81f3ba4c374f3f73b8a7f9cd70b3cc.png";
const imgClockTexture = "/agentic-assets/66d7f2a78e502db6ab429f4d52c6cd398d6d9291.png";
const imgGlassTexture = "/agentic-assets/552ea12888d2f3fc11c5468aa567db6c7535068d.png";
const imgMap = "/agentic-assets/954aefce163e793963ad259506c99c23ed16d316.png";
const imgCarTop = "/agentic-assets/a24853e15e70a30eae08fd40af64d4f650c24299.png";
const imgLine = "/agentic-assets/a46def1ef732092951dddb15c59225bbe69973eb.svg";
const imgEllipse1 = "/agentic-assets/103acd76be466e4dbf084e168e9641d671ea3a41.svg";
const imgEllipse2 = "/agentic-assets/8f1a4b7878212e9f4227d59a0f6433776a0d96e8.svg";
const imgEllipse3 = "/agentic-assets/985fd62ea75df3764eda05cd6cade38db798d8ee.svg";
const imgEllipse4 = "/agentic-assets/03007465fccf62848dc467a6992e89b22688bf3d.svg";

export default function Screen09_PhotoReel() {
  const navigate = useNavigate();

  return (
    <div className="bg-white overflow-clip relative rounded-[50px] size-full">
      {/* Background */}
      <div className="absolute h-[1040px] left-0 top-0 w-[480px]">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgBg} />
      </div>

      {/* Clock texture mask */}
      <div
        className="absolute pointer-events-none overflow-hidden"
        style={{ left: 24, top: 60, width: "89.061px", height: "58.96px" }}
      >
        <div
          className="absolute"
          style={{
            left: 836.646 - 808.97 + "px",
            top: 1656.08 - 1590 + "px",
            width: "1929.931px",
            height: "2826.621px",
          }}
        >
          <img alt="" className="absolute inset-0 size-full object-bottom pointer-events-none" src={imgClockTexture} />
        </div>
      </div>

      {/* Clock hours + minutes */}
      <p
        className="absolute left-[24px] text-[80px] top-[60px] whitespace-nowrap select-none"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 0.9, background: "linear-gradient(to bottom, #a78bcf, #de7a63)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
      >
        05
      </p>
      <p
        className="absolute left-[24px] text-[#de7a63] text-[80px] top-[132px] whitespace-nowrap select-none"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 0.9 }}
      >
        50
      </p>

      {/* Date */}
      <p
        className="absolute left-[24px] text-[#d14a41] text-[18px] top-[204px] whitespace-nowrap select-none"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1 }}
      >
        Sunday, May 10
      </p>

      {/* Pulsing rings beneath car — staggered radar effect */}
      {/* Outer ring (largest) */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ left: 249, top: 136, width: 205, height: 205, border: "1.5px solid rgba(180,140,220,0.5)" }}
        animate={{ scale: [1, 1.45], opacity: [0.7, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut", delay: 0 }}
      />
      {/* Mid ring */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ left: 267, top: 155, width: 170, height: 170, border: "1.5px solid rgba(180,140,220,0.55)" }}
        animate={{ scale: [1, 1.5], opacity: [0.75, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut", delay: 0.6 }}
      />
      {/* Inner ring (smallest) */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ left: 299, top: 188, width: 106, height: 106, border: "2px solid rgba(180,140,220,0.65)" }}
        animate={{ scale: [1, 1.6], opacity: [0.8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut", delay: 1.2 }}
      />

      {/* Top-down Waymo car — rotated 90deg */}
      <div
        className="absolute flex items-center justify-center"
        style={{ right: 45.08, top: 60, width: 164.922, height: 349 }}
      >
        <div style={{ transform: "rotate(90deg)" }}>
          <div className="relative overflow-hidden pointer-events-none" style={{ width: 349, height: 164.922 }}>
            <img
              alt=""
              className="absolute max-w-none"
              style={{ height: "127.48%", left: "-3.35%", top: "-14.16%", width: "107.1%" }}
              src={imgCarTop}
            />
          </div>
        </div>
      </div>

      {/* Timer text */}
      <div className="absolute flex flex-col gap-[8px] items-start left-[24px] top-[309px]">
        <p
          className="text-[#262626] text-[40px] w-[202px]"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1.2 }}
        >
          10 minutes
        </p>
        <p
          className="text-[#5c5a5a] text-[18px] w-[200px]"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, lineHeight: 1.2 }}
        >
          Your Waymo is headed to you now
        </p>
      </div>

      {/* Glass card */}
      <div
        className="absolute flex flex-col gap-[32px] items-start left-[23px] pb-[32px] pt-[184px] px-[32px] rounded-[56px] top-[437px] w-[432px]"
        style={{ border: "1px solid rgba(255,255,255,0.7)" }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-bottom opacity-25 pointer-events-none rounded-[56px] size-full"
          src={imgGlassTexture}
        />

        {/* Map section */}
        <div
          className="absolute border border-[rgba(255,255,255,0.48)] overflow-clip rounded-[56px]"
          style={{ left: -1, top: -1, width: 432, height: 160 }}
        >
          <img alt="" className="absolute inset-0 max-w-none object-cover opacity-80 pointer-events-none rounded-[56px] size-full" src={imgMap} />
          {/* Map marker — pulsing dot */}
          <div className="absolute" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 28, height: 28 }}>
            {/* Pulse ring */}
            <motion.div
              className="absolute rounded-full"
              style={{ inset: "-25% -39.29% -53.57% -39.29%", background: "rgba(139,92,220,0.35)" }}
              animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            />
            <div className="absolute" style={{ inset: "-25% -39.29% -53.57% -39.29%" }}>
              <img alt="" className="block max-w-none size-full" src={imgEllipse2} />
            </div>
          </div>
        </div>

        {/* Vertical connector line between stops */}
        <div className="absolute" style={{ left: 43, top: 198, width: 0, height: 82, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ transform: "rotate(90deg)" }}>
            <div className="relative" style={{ width: 82, height: 0 }}>
              <div className="absolute" style={{ inset: "-2px 0" }}>
                <img alt="" className="block max-w-none size-full" src={imgLine} />
              </div>
            </div>
          </div>
        </div>

        {/* Pick up row */}
        <div className="flex gap-[16px] items-start relative shrink-0">
          <div className="relative shrink-0 size-[24px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
          </div>
          <div className="flex flex-col gap-[8px] items-start">
            <p
              className="text-[16px] w-[201px]"
              style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, lineHeight: 1.2, color: "rgba(66,66,66,0.64)" }}
            >
              Pick up
            </p>
            <p
              className="text-[#424242] text-[18px] w-[201px]"
              style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, lineHeight: 1.2 }}
            >
              42nd St and Sixth Ave
            </p>
          </div>
        </div>

        {/* Drop-off row */}
        <div className="flex gap-[16px] items-start relative shrink-0">
          <div className="relative shrink-0 size-[24px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
          </div>
          <div className="flex flex-col gap-[8px] items-start">
            <p
              className="text-[16px] w-[201px]"
              style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, lineHeight: 1.2, color: "rgba(66,66,66,0.64)" }}
            >
              Drop-off
            </p>
            <p
              className="text-[#424242] text-[18px] w-[201px]"
              style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, lineHeight: 1.2 }}
            >
              Tasca Restaurant, NY
            </p>
          </div>
        </div>

        {/* Times — absolute positioned on right */}
        <p
          className="absolute text-[#262626] text-[20px] text-right whitespace-nowrap"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, lineHeight: 1.2, right: 30, top: 202 }}
        >
          6:00 PM
        </p>
        <p
          className="absolute text-[#262626] text-[20px] text-right whitespace-nowrap"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, lineHeight: 1.2, right: 31, top: 276 }}
        >
          6:22 PM
        </p>
      </div>

      <VoiceButton onClick={() => navigate("/agentic/finale")} />
    </div>
  );
}
