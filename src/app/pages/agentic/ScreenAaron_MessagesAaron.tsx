import { useEffect } from "react";
import { useNavigate } from "react-router";
import { VoiceButton } from "../../components/AgenticShared";

const imgBg = "/agentic-assets/be22207c5b81f3ba4c374f3f73b8a7f9cd70b3cc.png";
const imgAgent = "/agentic-assets/51f0f8de2ceb5c96556af6e5766a2ee8bc691291.png";
const imgAaron = "/agentic-assets/f47d24f1011002db3657c4ebc0ad4b61adbac0cc.png";

export default function ScreenAaron_MessagesAaron() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate("/agentic/messages-mom"), 2500);
    return () => clearTimeout(t);
  }, [navigate]);

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
        32
      </p>
      <p className="absolute left-[24px] top-[216px] text-[18px] whitespace-nowrap select-none"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1, color: "#d14a41" }}>
        Monday, May 4
      </p>

      {/* Notification card */}
      <div className="absolute" style={{ left: 103, top: 368, width: 360, height: 331 }}>
        <div className="absolute pointer-events-none" style={{
          left: 0, top: 0, width: 348, height: 331,
          borderRadius: 100,
          background: "rgba(255,255,255,0.15)",
        }} />

        {/* Aaron avatar */}
        <div className="absolute rounded-[500px] overflow-hidden" style={{ left: 45, top: 52, width: 64, height: 64 }}>
          <img alt="" className="absolute left-[-25%] max-w-none size-[150%] top-[-8%]" src={imgAaron} />
        </div>

        {/* "Just now" */}
        <p className="absolute whitespace-nowrap"
          style={{ left: 45, top: 128, fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, fontSize: 14, lineHeight: 1.2, color: "#5c5a5a" }}>
          Just now
        </p>

        {/* Quote */}
        <p className="absolute"
          style={{ left: 45, top: 169, width: 285, fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, fontSize: 24, lineHeight: 1.2, color: "#262626" }}>
          "Works for me! Can't wait to see you both"
        </p>

        {/* Agent icon + footer */}
        <div className="absolute overflow-hidden rounded-[500px]" style={{ left: 45, top: 259, width: 20, height: 20 }}>
          <img alt="" className="absolute h-[144.62%] left-[-47.04%] max-w-none top-[-20%] w-[193.81%]" src={imgAgent} />
        </div>
        <p className="absolute whitespace-nowrap"
          style={{ left: 75, top: 262, fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, fontSize: 12, lineHeight: 1.2, color: "#383838" }}>
          Aaron messaged you
        </p>
      </div>

      <VoiceButton demoText="Book me a Waymo" />
    </div>
  );
}
