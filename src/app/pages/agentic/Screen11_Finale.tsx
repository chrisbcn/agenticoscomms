import { useNavigate } from "react-router";
import { VoiceButton } from "../../components/AgenticShared";

const imgBg = "/agentic-assets/be22207c5b81f3ba4c374f3f73b8a7f9cd70b3cc.png";
const imgGlassTexture = "/agentic-assets/552ea12888d2f3fc11c5468aa567db6c7535068d.png";
const imgClockTexture = "/agentic-assets/66d7f2a78e502db6ab429f4d52c6cd398d6d9291.png";
const imgClockMask = "/agentic-assets/cd8421dda6c120be3f316ba10c9c0abca75b6c47.svg";
const imgFrame501 = "/agentic-assets/6ae4b142ab8951f8a345ac1e8725a1fa929d9ad1.png";
const imgFrame502 = "/agentic-assets/d7304c964863691d6aed6b1a427a701906bd08d2.png";
const imgFrame503 = "/agentic-assets/867156475fc7faaf1b1b8910723b7ab3f7f8d1c4.png";
const imgFrame504 = "/agentic-assets/257f178049721907e7434a1524818ac674d164d7.png";
const imgAgent = "/agentic-assets/51f0f8de2ceb5c96556af6e5766a2ee8bc691291.png";

export default function Screen11_Finale() {
  const navigate = useNavigate();

  return (
    <div className="bg-white overflow-clip relative rounded-[50px] size-full">
      {/* Background */}
      <div className="absolute h-[1040px] left-0 top-0 w-[480px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full"
          src={imgBg}
        />
      </div>

      {/* Decorative blob */}
      <div
        className="absolute h-[627px] left-[-175px] mix-blend-hard-light rounded-bl-[300px] rounded-br-[800px] rounded-tl-[100px] rounded-tr-[800px] top-[-146px] w-[601px]"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-bottom opacity-25 pointer-events-none rounded-bl-[300px] rounded-br-[800px] rounded-tl-[100px] rounded-tr-[800px] size-full"
          src={imgGlassTexture}
        />
      </div>

      {/* Clock texture mask (hours) */}
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

      {/* Clock hours + minutes */}
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

      {/* Date */}
      <p
        className="absolute left-[24px] text-[#d14a41] text-[18px] top-[216px] whitespace-nowrap select-none"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1 }}
      >
        Monday, May 11
      </p>

      {/* Photo stack */}
      {/* Back-right photo — rotated +8.38deg */}
      <div
        className="absolute flex items-center justify-center"
        style={{ left: 205, top: 196, width: 257.67, height: 257.67 }}
      >
        <div style={{ transform: "rotate(8.38deg)" }}>
          <div className="relative rounded-[56px] overflow-hidden" style={{ width: 227, height: 227 }}>
            <div className="absolute bg-[#ede4f8] inset-0 rounded-[56px]" />
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover rounded-[56px] size-full"
              style={{ opacity: 0.72 }}
              src={imgFrame502}
            />
          </div>
        </div>
      </div>

      {/* Back-left photo — rotated -6.73deg */}
      <div
        className="absolute flex items-center justify-center"
        style={{ left: 18, top: 260, width: 252, height: 252 }}
      >
        <div style={{ transform: "rotate(-6.73deg)" }}>
          <div className="relative rounded-[56px] overflow-hidden" style={{ width: 227, height: 227 }}>
            <div className="absolute bg-[#ede4f8] inset-0 rounded-[56px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[56px]" style={{ opacity: 0.8 }}>
              <img
                alt=""
                className="absolute max-w-none"
                style={{
                  height: "309.95%",
                  left: "-58.04%",
                  top: "-75.86%",
                  width: "211.63%",
                }}
                src={imgFrame503}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Front center photo */}
      <div
        className="absolute rounded-[56px] overflow-hidden"
        style={{ left: "calc(50% + 6.5px)", top: 325, width: 247, height: 247, transform: "translateX(-50%)" }}
      >
        <div className="absolute bg-[#ede4f8] inset-0 rounded-[56px]" />
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover rounded-[56px] size-full"
          src={imgFrame501}
        />
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover rounded-[56px] size-full"
          src={imgFrame504}
        />
      </div>

      {/* Heading */}
      <p
        className="absolute left-[24px] text-[#262626] text-[60px] top-[596px] whitespace-nowrap"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1.2 }}
      >
        From last night
      </p>

      {/* Subheading */}
      <p
        className="absolute left-[24px] text-[#5c5a5a] text-[28px] top-[680px]"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, lineHeight: 1.2, width: "344px" }}
      >
        Want to send this to Mom and Aaron?
      </p>

      {/* Agent drafted message */}
      <div className="absolute flex gap-[16px] items-start left-[24px] top-[764px] w-[399px]">
        <div className="relative rounded-full shrink-0 size-[28px] overflow-hidden">
          <img
            alt=""
            className="absolute h-[144.62%] left-[-47.04%] max-w-none top-[-20%] w-[193.81%]"
            src={imgAgent}
          />
        </div>
        <p
          className="shrink-0 text-[#4c4c4c] text-[16px] w-[355px]"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1.5 }}
        >
          {`Drafted a message for you — "Had such a great time last night. Thanks for making it out."`}
        </p>
      </div>

      {/* Action buttons */}
      <div className="absolute flex flex-wrap gap-[13px] items-center left-[24px] top-[848px] w-[368px]">
        <button
          className="bg-white flex items-center justify-center overflow-clip px-[24px] py-[16px] rounded-[100px] shrink-0"
          onClick={() => navigate("/agentic")}
        >
          <p
            className="leading-[20px] text-[#262626] text-[16px] whitespace-nowrap"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300 }}
          >
            Send
          </p>
        </button>
        <button
          className="flex items-center justify-center overflow-clip px-[24px] py-[16px] rounded-[100px] shrink-0"
          style={{ background: "rgba(255,255,255,0.5)" }}
          onClick={() => navigate("/agentic/share")}
        >
          <p
            className="leading-[20px] text-[#262626] text-[16px] whitespace-nowrap"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300 }}
          >
            Edit message
          </p>
        </button>
      </div>

      <VoiceButton onClick={() => navigate("/agentic")} />
    </div>
  );
}
