import { useNavigate } from "react-router";
import { VoiceButton } from "../../components/AgenticShared";
import { useAgent } from "../../context/AgentContext";

const imgBg = "/agentic-assets/be22207c5b81f3ba4c374f3f73b8a7f9cd70b3cc.png";
const imgGlassTexture = "/agentic-assets/552ea12888d2f3fc11c5468aa567db6c7535068d.png";
const imgFrame501 = "/agentic-assets/6ae4b142ab8951f8a345ac1e8725a1fa929d9ad1.png";
const imgFrame502 = "/agentic-assets/d7304c964863691d6aed6b1a427a701906bd08d2.png";
const imgFrame503 = "/agentic-assets/867156475fc7faaf1b1b8910723b7ab3f7f8d1c4.png";
const imgFrame504 = "/agentic-assets/257f178049721907e7434a1524818ac674d164d7.png";
const imgAgent = "/agentic-assets/51f0f8de2ceb5c96556af6e5766a2ee8bc691291.png";

export default function Screen11_Finale() {
  const navigate = useNavigate();
  const agent = useAgent();

  return (
    <div className="bg-white overflow-clip relative rounded-[50px] size-full">
      {/* Warm background */}
      <div className="absolute h-[1040px] left-0 top-0 w-[480px]">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgBg} />
      </div>

      {/* Glass texture blob — hard-light at top-left */}
      <div
        className="absolute mix-blend-hard-light pointer-events-none"
        style={{ left: -175, top: -146, width: 601, height: 627, borderRadius: "100px 800px 800px 300px" }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none pointer-events-none size-full opacity-25"
          style={{ borderRadius: "100px 800px 800px 300px", objectFit: "cover" }}
          src={imgGlassTexture}
        />
      </div>

      <p
        className="absolute left-[24px] top-[60px] text-[80px] whitespace-nowrap select-none"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 0.9, color: "#de7a63" }}
      >
        09
      </p>
      <p
        className="absolute left-[24px] top-[132px] text-[80px] whitespace-nowrap select-none"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 0.9, color: "#de7a63" }}
      >
        30
      </p>
      <p
        className="absolute left-[24px] top-[216px] text-[18px] whitespace-nowrap select-none"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1, color: "#d14a41" }}
      >
        Monday, May 11
      </p>

      {/* Photo stack — three overlapping rounded photos */}
      {/* Back-right photo */}
      <div className="absolute flex items-center justify-center" style={{ left: 205, top: 196, width: 258, height: 258 }}>
        <div style={{ transform: "rotate(8.38deg)" }}>
          <div className="relative overflow-hidden" style={{ width: 227, height: 227, borderRadius: 56 }}>
            <div className="absolute inset-0" style={{ background: "#ede4f8", borderRadius: 56 }} />
            <img alt="" className="absolute inset-0 max-w-none object-cover size-full" style={{ opacity: 0.72, borderRadius: 56 }} src={imgFrame502} />
          </div>
        </div>
      </div>

      {/* Back-left photo */}
      <div className="absolute flex items-center justify-center" style={{ left: 18, top: 260, width: 252, height: 252 }}>
        <div style={{ transform: "rotate(-6.73deg)" }}>
          <div className="relative overflow-hidden" style={{ width: 227, height: 227, borderRadius: 56 }}>
            <div className="absolute inset-0" style={{ background: "#ede4f8", borderRadius: 56 }} />
            <div className="absolute inset-0 overflow-hidden" style={{ opacity: 0.8, borderRadius: 56 }}>
              <img
                alt=""
                className="absolute max-w-none"
                style={{ height: "309.95%", left: "-58.04%", top: "-75.86%", width: "211.63%" }}
                src={imgFrame503}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Front-center photo */}
      <div
        className="absolute overflow-hidden"
        style={{ left: "calc(50% + 6.5px)", top: 325, width: 247, height: 247, borderRadius: 56, transform: "translateX(-50%)" }}
      >
        <div className="absolute inset-0" style={{ background: "#ede4f8", borderRadius: 56 }} />
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" style={{ borderRadius: 56 }} src={imgFrame501} />
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" style={{ borderRadius: 56 }} src={imgFrame504} />
      </div>

      {/* Heading */}
      <p
        className="absolute left-[24px] top-[596px] whitespace-nowrap"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, fontSize: 60, lineHeight: 1.2, color: "#262626" }}
      >
        From last night
      </p>

      {/* Subheading */}
      <p
        className="absolute left-[24px] top-[680px]"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, fontSize: 28, lineHeight: 1.2, color: "#5c5a5a", width: 344 }}
      >
        Want to send this to Mom and Aaron?
      </p>

      {/* Agent-drafted message */}
      <div className="absolute flex gap-[16px] items-start left-[24px] top-[764px] w-[399px]">
        <div className="relative shrink-0 overflow-hidden" style={{ width: 28, height: 28, borderRadius: 500 }}>
          <img alt="" className="absolute max-w-none" style={{ height: "144.62%", left: "-47.04%", top: "-20%", width: "193.81%" }} src={imgAgent} />
        </div>
        <p
          className="shrink-0"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, fontSize: 16, lineHeight: 1.5, color: "#4c4c4c", width: 355 }}
        >
          {`Drafted a message for you — "Had such a great time last night. Thanks for making it out."`}
        </p>
      </div>

      {/* Action buttons */}
      <div className="absolute flex flex-wrap gap-[13px] items-center left-[24px] top-[848px]">
        <button
          className="flex items-center justify-center px-[24px] py-[16px] rounded-[100px] shrink-0"
          style={{ background: "white" }}
          onClick={() => navigate("/agentic")}
        >
          <span style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, fontSize: 16, lineHeight: "20px", color: "#262626", whiteSpace: "nowrap" }}>
            Send
          </span>
        </button>
        <button
          className="flex items-center justify-center px-[24px] py-[16px] rounded-[100px] shrink-0"
          style={{ background: "rgba(255,255,255,0.5)" }}
          onClick={() => navigate("/agentic/share")}
        >
          <span style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, fontSize: 16, lineHeight: "20px", color: "#262626", whiteSpace: "nowrap" }}>
            Edit message
          </span>
        </button>
      </div>

      <VoiceButton onClick={() => navigate("/agentic")} demoText="Send it to Mom and Aaron" />
    </div>
  );
}
