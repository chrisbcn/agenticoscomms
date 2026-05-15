import { motion } from "motion/react";
import { VoiceButton } from "../../components/AgenticShared";

const imgBg = "/agentic-assets/be22207c5b81f3ba4c374f3f73b8a7f9cd70b3cc.png";
const imgGlassTexture = "/agentic-assets/552ea12888d2f3fc11c5468aa567db6c7535068d.png";
const imgMap = "/agentic-assets/954aefce163e793963ad259506c99c23ed16d316.png";
const imgCar = "/agentic-assets/a24853e15e70a30eae08fd40af64d4f650c24299.png";
const imgEllipse1 = "/agentic-assets/103acd76be466e4dbf084e168e9641d671ea3a41.svg";
const imgEllipse2 = "/agentic-assets/8f1a4b7878212e9f4227d59a0f6433776a0d96e8.svg";
const imgEllipse3 = "/agentic-assets/985fd62ea75df3764eda05cd6cade38db798d8ee.svg";
const imgEllipse4 = "/agentic-assets/03007465fccf62848dc467a6992e89b22688bf3d.svg";
const imgLine = "/agentic-assets/a46def1ef732092951dddb15c59225bbe69973eb.svg";

export default function Screen08_WaymoTracking() {
  return (
    <div className="bg-white overflow-clip relative rounded-[50px] size-full">
      {/* Background */}
      <div className="absolute h-[1040px] left-0 top-0 w-[480px]">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgBg} />
      </div>

      {/* Clock "05" — gradient purple→coral */}
      <p
        className="absolute left-[24px] top-[60px] text-[80px] whitespace-nowrap select-none"
        style={{
          fontFamily: "'One UI Sans APP VF', system-ui, sans-serif",
          fontWeight: 300,
          lineHeight: 0.9,
          background: "linear-gradient(to bottom, #a78bcf, #de7a63)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        05
      </p>

      {/* Clock "50" */}
      <p
        className="absolute left-[24px] top-[132px] text-[80px] whitespace-nowrap select-none"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 0.9, color: "#de7a63" }}
      >
        50
      </p>

      {/* Date */}
      <p
        className="absolute left-[24px] top-[204px] text-[18px] whitespace-nowrap select-none"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1, color: "#d14a41" }}
      >
        Sunday, May 10
      </p>

      {/* Ellipse 3 — soft pulse behind car, centered on car */}
      <motion.div
        className="absolute"
        style={{ left: 267, top: 97, width: 205, height: 205 }}
        animate={{ opacity: [0.6, 1, 0.6], scale: [0.95, 1.03, 0.95] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
      >
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse3} />
      </motion.div>

      {/* Ellipse 4 — inner pulse, centered on car */}
      <motion.div
        className="absolute"
        style={{ left: 284, top: 114, width: 170, height: 170 }}
        animate={{ opacity: [0.7, 1, 0.7], scale: [0.96, 1.02, 0.96] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut", delay: 0.3 }}
      >
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse4} />
      </motion.div>

      {/* Car — rotated 90° to face up, 80% of Figma size */}
      <div
        className="absolute flex items-center justify-center"
        style={{ right: 45, top: 60, width: 132, height: 279 }}
      >
        <div style={{ transform: "rotate(90deg)", width: 279, height: 132, position: "relative", flexShrink: 0 }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute max-w-none"
              style={{ height: "127.48%", left: "-3.35%", top: "-14.16%", width: "107.1%" }}
              src={imgCar}
            />
          </div>
        </div>
      </div>

      {/* "10 minutes" + subtitle */}
      <div
        className="absolute flex flex-col gap-[8px] items-start left-[24px]"
        style={{ top: 309, lineHeight: 1.2 }}
      >
        <p
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, fontSize: 40, color: "#262626", width: 202 }}
        >
          10 minutes
        </p>
        <p
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, fontSize: 18, color: "#5c5a5a", width: 200 }}
        >
          Your Waymo is headed to you now
        </p>
      </div>

      {/* Glass card */}
      <div
        className="absolute flex flex-col gap-[32px] items-start left-[23px] pb-[32px] pt-[184px] px-[32px] rounded-[56px]"
        style={{ top: 437, width: 432, border: "1px solid rgba(255,255,255,0.7)" }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-bottom opacity-25 pointer-events-none rounded-[56px] size-full"
          src={imgGlassTexture}
        />

        {/* Map section — top of card */}
        <div
          className="absolute left-[-1px] top-[-1px] overflow-clip rounded-[56px]"
          style={{ width: 432, height: 160, border: "1px solid rgba(255,255,255,0.48)" }}
        >
          <img alt="" className="absolute inset-0 max-w-none object-cover opacity-80 pointer-events-none rounded-[56px] size-full" src={imgMap} />
          {/* Purple dot on map */}
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2" style={{ width: 28, height: 28 }}>
            <div className="absolute" style={{ inset: "-25% -39.29% -53.57% -39.29%" }}>
              <img alt="" className="block max-w-none size-full" src={imgEllipse2} />
            </div>
          </div>
        </div>

        {/* Vertical line connecting dots — rotated SVG */}
        <div className="absolute flex items-center justify-center" style={{ left: 43, top: 198, width: 0, height: 82 }}>
          <div style={{ transform: "rotate(90deg)", flexShrink: 0 }}>
            <div className="relative" style={{ width: 82, height: 0 }}>
              <div className="absolute" style={{ inset: "-2px 0" }}>
                <img alt="" className="block max-w-none size-full" src={imgLine} />
              </div>
            </div>
          </div>
        </div>

        {/* Pick up row */}
        <div className="flex gap-[16px] items-start relative shrink-0">
          <div className="relative shrink-0" style={{ width: 24, height: 24 }}>
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
          </div>
          <div className="flex flex-col gap-[8px] items-start justify-center" style={{ lineHeight: 1.2 }}>
            <p style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, fontSize: 16, color: "rgba(66,66,66,0.64)", width: 201 }}>
              Pick up
            </p>
            <p style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, fontSize: 18, color: "#424242", width: 201 }}>
              42nd St and Sixth Ave
            </p>
          </div>
        </div>

        {/* Drop-off row */}
        <div className="flex gap-[16px] items-start relative shrink-0">
          <div className="relative shrink-0" style={{ width: 24, height: 24 }}>
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
          </div>
          <div className="flex flex-col gap-[8px] items-start justify-center" style={{ lineHeight: 1.2 }}>
            <p style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, fontSize: 16, color: "rgba(66,66,66,0.64)", width: 201 }}>
              Drop-off
            </p>
            <p style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, fontSize: 18, color: "#424242", width: 201 }}>
              Tasca Restaurant, NY
            </p>
          </div>
        </div>

        {/* Times — absolute right */}
        <p
          className="absolute right-[30px] text-right whitespace-nowrap"
          style={{ top: 202, fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, fontSize: 20, lineHeight: 1.2, color: "#262626" }}
        >
          6:00 PM
        </p>
        <p
          className="absolute right-[31px] text-right whitespace-nowrap"
          style={{ top: 276, fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, fontSize: 20, lineHeight: 1.2, color: "#262626" }}
        >
          6:22 PM
        </p>
      </div>

      <VoiceButton demoText="We're on our way to dinner" />
    </div>
  );
}
