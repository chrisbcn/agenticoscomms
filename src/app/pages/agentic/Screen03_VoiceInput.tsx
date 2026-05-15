import { useNavigate } from "react-router";
import { VoiceButton } from "../../components/AgenticShared";

const imgBg = "/agentic-assets/be22207c5b81f3ba4c374f3f73b8a7f9cd70b3cc.png";
const imgGlassTexture = "/agentic-assets/552ea12888d2f3fc11c5468aa567db6c7535068d.png";
const imgClockTexture = "/agentic-assets/66d7f2a78e502db6ab429f4d52c6cd398d6d9291.png";
const imgMomCircle = "/agentic-assets/73b9efb858068e485af35eeb97ba4badf8f35437.png";

export default function Screen03_VoiceInput() {
  const navigate = useNavigate();

  return (
    <div className="bg-white overflow-clip relative rounded-[50px] size-full">
      {/* Warm bg photo */}
      <div className="absolute h-[1040px] left-0 top-0 w-[480px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full"
          src={imgBg}
        />
      </div>

      {/* Glass texture blob (mix-blend-mode hard-light) */}
      <div
        className="absolute h-[627px] left-[-80px] rounded-bl-[300px] rounded-br-[800px] rounded-tl-[100px] rounded-tr-[800px] top-0 w-[601px]"
        style={{ mixBlendMode: "hard-light" }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-bottom opacity-25 pointer-events-none rounded-bl-[300px] rounded-br-[800px] rounded-tl-[100px] rounded-tr-[800px] size-full"
          src={imgGlassTexture}
        />
      </div>

      {/* Clock texture overlay */}
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
        className="absolute left-[24px] text-[80px] top-[60px] whitespace-nowrap select-none"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 0.9, background: "linear-gradient(to bottom, #a78bcf, #de7a63)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
      >
        09
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
        Monday, May 4
      </p>

      {/* Main heading */}
      <p
        className="absolute left-[24px] text-[#262626] text-[60px] top-[294px] w-[404px]"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1.2 }}
      >
        Mother's Day is this Sunday.
      </p>

      {/* Subtext */}
      <p
        className="absolute left-[24px] text-[#5c5a5a] text-[28px] top-[454px] w-[344px]"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, lineHeight: 1.2 }}
      >
        Want to plan something with Mom?
      </p>

      {/* Mom avatar circle */}
      <div className="absolute h-[180px] left-[20px] rounded-[500px] top-[548px] w-[181px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-bottom opacity-90 pointer-events-none rounded-[500px] size-full"
          src={imgMomCircle}
        />
      </div>

      <VoiceButton onClick={() => navigate("/agentic/restaurant")} />
    </div>
  );
}
