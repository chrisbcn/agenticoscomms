import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { VoiceButton } from "../../components/AgenticShared";

const imgBg = "/agentic-assets/be22207c5b81f3ba4c374f3f73b8a7f9cd70b3cc.png";
const imgGlassTexture = "/agentic-assets/552ea12888d2f3fc11c5468aa567db6c7535068d.png";
const imgWaymoCar = "/agentic-assets/155ae683fcc0fa0c21233166ea3175eaf7a14d6b.png";
const imgLine = "/agentic-assets/0d814fe01fe073cf523da305ff2d164b77507f44.svg";

export default function Screen07_WaymoBooked() {
  const navigate = useNavigate();

  return (
    <div className="bg-white overflow-clip relative rounded-[50px] size-full">
      {/* Background */}
      <div className="absolute h-[1040px] left-0 top-0 w-[480px]">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgBg} />
      </div>

      {/* Glass texture blob */}
      <div
        className="absolute mix-blend-hard-light pointer-events-none"
        style={{ right: -175, top: -146, width: 601, height: 627, borderRadius: "800px 100px 300px 800px" }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none pointer-events-none size-full opacity-25"
          style={{ borderRadius: "800px 100px 300px 800px", objectFit: "cover" }}
          src={imgGlassTexture}
        />
      </div>

      {/* Waymo car — slides in from right */}
      <motion.div
        className="absolute h-[270px] left-[188px] top-[90px] w-[448px]"
        initial={{ x: 320 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[150.53%] left-[-31.53%] max-w-none top-[-25.26%] w-[163.06%]" src={imgWaymoCar} />
        </div>
      </motion.div>

      {/* Clock */}
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
        30
      </p>
      <p
        className="absolute left-[24px] text-[#d14a41] text-[18px] top-[216px] whitespace-nowrap select-none"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1 }}
      >
        Sunday, May 10
      </p>

      {/* Content text — fades in after car arrives */}
      <motion.div
        className="absolute flex flex-col gap-[16px] items-start leading-[1.2] left-[23px] top-[340px] w-[368px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <p
          className="font-light relative shrink-0 text-[#262626] text-[36px] w-full"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif" }}
        >
          Your reservation at Tasca is in an hour
        </p>
        <p
          className="font-normal relative shrink-0 text-[#5c5a5a] text-[18px] w-full"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif" }}
        >
          I booked a Waymo for you.
        </p>
      </motion.div>

      {/* Waymo details card */}
      <motion.div
        className="-translate-x-1/2 absolute flex flex-col gap-[24px] items-start left-1/2 p-[32px] rounded-[56px] top-[516px] w-[432px]"
        style={{ border: "1px solid rgba(255,255,255,0.7)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85, duration: 0.5 }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-bottom opacity-25 pointer-events-none rounded-[56px] size-full"
          src={imgGlassTexture}
        />

        <div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          {/* FARE */}
          <div className="flex items-center justify-between relative shrink-0 w-full whitespace-nowrap">
            <p
              className="leading-[1.2] relative shrink-0 text-[#7a7a7a] text-[16px]"
              style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 400 }}
            >
              FARE
            </p>
            <p
              className="relative shrink-0 text-[18px]"
              style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, lineHeight: 1.2 }}
            >
              <span className="line-through text-[rgba(92,90,90,0.48)]">Uber $19</span>
              <span className="text-[#5c5a5a]"> $12</span>
            </p>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine} />
            </div>
          </div>

          {/* PICKUP */}
          <div className="flex items-center justify-between leading-[1.2] relative shrink-0 w-full whitespace-nowrap">
            <p
              className="relative shrink-0 text-[#7a7a7a] text-[16px]"
              style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 400 }}
            >
              PICKUP
            </p>
            <p
              className="relative shrink-0 text-[#5c5a5a] text-[18px]"
              style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400 }}
            >
              6:00 PM
            </p>
          </div>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine} />
            </div>
          </div>

          {/* DROP-OFF */}
          <div className="flex items-center justify-between leading-[1.2] relative shrink-0 w-full whitespace-nowrap">
            <p
              className="relative shrink-0 text-[#7a7a7a] text-[16px]"
              style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 400 }}
            >
              DROP-OFF
            </p>
            <p
              className="relative shrink-0 text-[#5c5a5a] text-[18px]"
              style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400 }}
            >
              6:22 PM
            </p>
          </div>
        </div>

      </motion.div>

      <VoiceButton demoText="Track the Waymo" />
    </div>
  );
}
