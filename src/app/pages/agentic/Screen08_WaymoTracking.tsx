import { useNavigate } from "react-router";

const imgBg = "/agentic-assets/be22207c5b81f3ba4c374f3f73b8a7f9cd70b3cc.png";
const imgClockTexture = "/agentic-assets/66d7f2a78e502db6ab429f4d52c6cd398d6d9291.png";
const imgGlassTexture = "/agentic-assets/552ea12888d2f3fc11c5468aa567db6c7535068d.png";
const imgWaymoCar = "/agentic-assets/155ae683fcc0fa0c21233166ea3175eaf7a14d6b.png";
const imgLine = "/agentic-assets/0d814fe01fe073cf523da305ff2d164b77507f44.svg";
const imgVoice = "/agentic-assets/dfbc23a26e99b09a2488f9cb15cd58648bc5b695.png";

export default function Screen08_WaymoTracking() {
  const navigate = useNavigate();

  return (
    <div className="bg-white overflow-clip relative rounded-[50px] size-full">
      {/* Background photo */}
      <div className="absolute h-[1040px] left-0 top-0 w-[480px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full"
          src={imgBg}
        />
      </div>

      {/* Decorative blob */}
      <div
        className="absolute flex h-[512px] items-center justify-center left-[240px] top-[-124px] w-[491px]"
        style={{ mixBlendMode: "hard-light" }}
      >
        <div className="flex-none rotate-180">
          <div
            className="h-[512px] relative rounded-bl-[300px] rounded-br-[800px] rounded-tl-[100px] rounded-tr-[800px] w-[491px]"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-bottom opacity-25 pointer-events-none rounded-bl-[300px] rounded-br-[800px] rounded-tl-[100px] rounded-tr-[800px] size-full"
              src={imgGlassTexture}
            />
          </div>
        </div>
      </div>

      {/* Waymo car image */}
      <div className="absolute h-[270px] left-[188px] top-[90px] w-[448px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[150.53%] left-[-31.53%] max-w-none top-[-25.26%] w-[163.06%]"
            src={imgWaymoCar}
          />
        </div>
      </div>

      {/* Clock texture */}
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
          <img
            alt=""
            className="absolute inset-0 size-full object-bottom pointer-events-none"
            src={imgClockTexture}
          />
        </div>
      </div>

      {/* Clock */}
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

      {/* Content text */}
      <div className="absolute flex flex-col gap-[16px] items-start leading-[1.2] left-[23px] top-[336px] w-[368px]">
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
      </div>

      {/* Waymo details card */}
      <div
        className="-translate-x-1/2 absolute flex flex-col gap-[24px] items-start left-1/2 p-[32px] rounded-[56px] top-[496px] w-[432px]"
        style={{ border: "1px solid rgba(255,255,255,0.7)" }}
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

        {/* Buttons */}
        <div className="flex flex-wrap gap-[13px] items-center relative shrink-0 w-[368px]">
          <button
            className="flex items-center justify-center overflow-clip px-[24px] py-[16px] rounded-[100px] shrink-0"
            style={{ background: "rgba(255,255,255,0.5)" }}
          >
            <p
              className="font-light leading-[20px] text-[#262626] text-[16px] whitespace-nowrap"
              style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif" }}
            >
              Other options
            </p>
          </button>
          <button
            className="flex items-center justify-center overflow-clip px-[24px] py-[16px] rounded-[100px] shrink-0"
            style={{ background: "rgba(255,255,255,0.5)" }}
            onClick={() => navigate("/agentic/photos")}
          >
            <p
              className="font-light leading-[20px] text-[#262626] text-[16px] whitespace-nowrap"
              style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif" }}
            >
              Track my Waymo
            </p>
          </button>
        </div>
      </div>

      {/* Voice button */}
      <div className="absolute flex items-center left-[210px] top-[936px]">
        <button
          className="bg-white overflow-clip rounded-[100px] shrink-0 size-[60px]"
          onClick={() => navigate("/agentic/photos")}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[158.72%] left-[-48.7%] max-w-none top-[-32.82%] w-[191.67%]"
              src={imgVoice}
            />
          </div>
        </button>
      </div>
    </div>
  );
}
