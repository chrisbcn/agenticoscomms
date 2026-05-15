import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { VoiceButton } from "../../components/AgenticShared";
import { useAgent } from "../../context/AgentContext";

const imgBgOuter = "/agentic-assets/284a94f7cf61bfdbb9bfceebbc6f727384c44aea.png";
const imgBgInner = "/agentic-assets/8e23fc692b553096ca4782f38eaa7321e20cdc86.png";
const imgMom = "/agentic-assets/58ce9b58c093882775509f5a54f680857549b19f.png";
const imgUser = "/agentic-assets/f47d24f1011002db3657c4ebc0ad4b61adbac0cc.png";
const imgAaron = "/agentic-assets/dfd1786f5e5a8052a4fb42be2ba5b470db4b021b.png";
const imgMic = "/agentic-assets/6672c983de5a780011f8d6a9ff244867b2a9aaa1.svg";
const imgFrame501 = "/agentic-assets/6ae4b142ab8951f8a345ac1e8725a1fa929d9ad1.png";
const imgFrame502 = "/agentic-assets/257f178049721907e7434a1524818ac674d164d7.png";
const imgFrame503 = "/agentic-assets/d7304c964863691d6aed6b1a427a701906bd08d2.png";
const imgFrame504 = "/agentic-assets/867156475fc7faaf1b1b8910723b7ab3f7f8d1c4.png";
const imgFrame505 = "/agentic-assets/4fa2dc981aa8cbeb284c479c45cdcc8057a49d6c.png";

export default function Screen10_SharePrompt() {
  const navigate = useNavigate();
  const agent = useAgent();

  const liveText = agent.interim || agent.transcript;

  return (
    <div className="bg-white overflow-clip relative rounded-[50px] size-full">
      {/* Outer background */}
      <div className="absolute h-[1040px] left-0 top-0 w-[480px]">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgBgOuter} />
      </div>

      {/* Inner content layer */}
      <div className="absolute bg-[#f9f9f9] h-[888px] left-0 overflow-clip rounded-bl-[50px] rounded-br-[50px] top-0 w-[480px]">
        <div className="absolute h-[1040px] left-0 top-[-81px] w-[480px]">
          <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgBgInner} />
        </div>

        {/* Content area */}
        <div className="absolute flex flex-col gap-[24px] items-start left-[27px] top-[215px] w-[424px]">
          {/* Photo grid */}
          <div className="flex gap-[8px] overflow-clip relative rounded-[48px] shrink-0 w-full" style={{ height: 227.441 }}>
            {/* Left photo — full height */}
            <div className="flex-1 relative min-w-0">
              <div className="absolute inset-0">
                <div className="absolute bg-[#ede4f8] inset-0" />
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgFrame501} />
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgFrame502} />
              </div>
            </div>
            {/* Right column — two photos stacked */}
            <div className="flex flex-1 flex-col gap-[8px] min-w-0" style={{ height: 227.441 }}>
              <div className="flex-1 relative min-h-0">
                <div className="absolute inset-0">
                  <div className="absolute bg-[#ede4f8] inset-0" />
                  <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgFrame503} />
                  <div className="absolute inset-0 overflow-hidden">
                    <img alt="" className="absolute max-w-none" style={{ height: "539.68%", left: "-47.37%", top: "-137.78%", width: "194.37%" }} src={imgFrame504} />
                  </div>
                </div>
              </div>
              <div className="flex-1 relative min-h-0">
                <div className="absolute inset-0">
                  <div className="absolute bg-[#ede4f8] inset-0" />
                  <div className="absolute inset-0 overflow-hidden">
                    <img alt="" className="absolute max-w-none" style={{ height: "149.5%", left: "-0.2%", top: "-39.25%", width: "100%" }} src={imgFrame505} />
                  </div>
                  <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgFrame501} />
                </div>
              </div>
            </div>
          </div>

          {/* "How can I help?" — static prompt */}
          <p
            className="text-[#7b7b7b] text-[28px] w-full"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1.2 }}
          >
            How can I help?
          </p>

          {/* Live speech transcript — blank until user speaks */}
          <p className="w-full" style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", lineHeight: 1.4 }}>
            <span className="text-[#262626] text-[32px] font-bold">{liveText}</span>
            {agent.isListening && (
              <motion.span
                className="text-[#262626] text-[32px] font-bold"
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.5, ease: "steps(1)" }}
              >
                |
              </motion.span>
            )}
          </p>
        </div>
      </div>

      {/* Header with family avatars */}
      <div className="absolute bg-[rgba(255,255,255,0.75)] h-[152px] left-0 overflow-clip rounded-bl-[50px] rounded-br-[50px] top-0 w-[480px] z-10">
        <div className="absolute bg-[#f0f0f2] left-[24px] overflow-clip rounded-[100px] size-[56px] top-[72px]">
          <div className="absolute left-[14px] size-[24px] top-[16px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMic} />
          </div>
        </div>
        <div className="absolute left-[180px] rounded-[500px] size-[48px] top-[76px] overflow-hidden">
          <img alt="Mom" className="absolute left-[-54.55%] max-w-none size-[206.87%] top-[-22.19%]" src={imgMom} />
        </div>
        <div className="absolute left-[216px] rounded-[500px] size-[48px] top-[76px] overflow-hidden">
          <img alt="User" className="absolute inset-0 size-full object-cover rounded-[500px]" src={imgUser} />
        </div>
        <div className="absolute left-[252px] rounded-[500px] h-[47px] w-[48px] top-[77px] overflow-hidden">
          <img alt="Aaron" className="absolute left-[-38.92%] max-w-none size-[181.56%] top-[-5.88%]" src={imgAaron} />
        </div>
      </div>

      <VoiceButton active onClick={() => navigate("/agentic/finale")} />
    </div>
  );
}
