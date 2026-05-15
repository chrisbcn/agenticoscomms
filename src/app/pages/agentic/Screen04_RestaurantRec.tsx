import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { VoiceButton } from "../../components/AgenticShared";
import { useAgent } from "../../context/AgentContext";

const imgBgOuter = "/agentic-assets/284a94f7cf61bfdbb9bfceebbc6f727384c44aea.png";
const imgBgInner = "/agentic-assets/8e23fc692b553096ca4782f38eaa7321e20cdc86.png";
const imgMom = "/agentic-assets/58ce9b58c093882775509f5a54f680857549b19f.png";
const imgAaron = "/agentic-assets/dfd1786f5e5a8052a4fb42be2ba5b470db4b021b.png";
const imgUser = "/agentic-assets/f47d24f1011002db3657c4ebc0ad4b61adbac0cc.png";
const imgMic = "/agentic-assets/6672c983de5a780011f8d6a9ff244867b2a9aaa1.svg";

export default function Screen04_RestaurantRec() {
  const navigate = useNavigate();
  const agent = useAgent();

  const liveText = agent.liveText;

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

        {/* "How can I help?" — static prompt */}
        <p
          className="absolute left-[27px] text-[#7b7b7b] text-[28px] top-[215px] w-[320px]"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1.2 }}
        >
          How can I help?
        </p>

        {/* Live speech transcript — blank until user speaks */}
        <p
          className="absolute left-[29px] top-[273px] w-[422px]"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", lineHeight: 1.4 }}
        >
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

      {/* Header with avatars */}
      <div className="absolute bg-[rgba(255,255,255,0.75)] h-[152px] left-0 overflow-clip rounded-bl-[50px] rounded-br-[50px] top-0 w-[480px] z-10">
        <div className="absolute left-[180px] rounded-[500px] size-[48px] top-[76px] overflow-hidden">
          <img alt="Mom" className="absolute left-[-54.55%] max-w-none size-[206.87%] top-[-22.19%]" src={imgMom} />
        </div>
        <div className="absolute left-[216px] rounded-[500px] size-[48px] top-[76px] overflow-hidden">
          <img alt="User" className="absolute inset-0 size-full object-cover rounded-[500px]" src={imgUser} />
        </div>
        <div className="absolute left-[252px] rounded-[500px] h-[47px] w-[48px] top-[77px] overflow-hidden">
          <img alt="Aaron" className="absolute left-[-38.92%] max-w-none size-[181.56%] top-[-5.88%]" src={imgAaron} />
        </div>
        <div className="absolute bg-[#f0f0f2] left-[24px] overflow-clip rounded-[100px] size-[56px] top-[72px]">
          <div className="absolute left-[14px] size-[24px] top-[16px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMic} />
          </div>
        </div>
      </div>

      <VoiceButton active onClick={() => navigate("/agentic/booking")} demoText="Find us a nice restaurant for dinner tonight with the family" />
    </div>
  );
}
