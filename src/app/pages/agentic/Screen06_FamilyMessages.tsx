import { useNavigate } from "react-router";
import { VoiceButton } from "../../components/AgenticShared";

const imgBg = "/agentic-assets/be22207c5b81f3ba4c374f3f73b8a7f9cd70b3cc.png";
const imgGlassTexture = "/agentic-assets/552ea12888d2f3fc11c5468aa567db6c7535068d.png";
const imgMap = "/agentic-assets/954aefce163e793963ad259506c99c23ed16d316.png";
const imgMapFood = "/agentic-assets/1260a7e312c0451a2224aea0630a58f5042a0bc7.png";
const imgAgent = "/agentic-assets/51f0f8de2ceb5c96556af6e5766a2ee8bc691291.png";
const imgCheck = "/agentic-assets/bbb44051985d55f924d54f225b7bcd2af7ac2fcb.svg";

export default function Screen06_FamilyMessages() {
  const navigate = useNavigate();

  return (
    <div className="bg-white overflow-clip relative rounded-[50px] size-full">
      {/* Background */}
      <div className="absolute h-[1040px] left-0 top-0 w-[480px]">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgBg} />
      </div>

      {/* Clock */}
      <p
        className="absolute left-[24px] text-[80px] top-[60px] whitespace-nowrap select-none"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 0.9, color: "#de7a63" }}
      >
        05
      </p>
      <p
        className="absolute left-[24px] text-[#de7a63] text-[80px] top-[132px] whitespace-nowrap select-none"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 0.9 }}
      >
        15
      </p>
      <p
        className="absolute left-[24px] text-[#d14a41] text-[18px] top-[216px] whitespace-nowrap select-none"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1 }}
      >
        Sunday, May 10
      </p>

      {/* Main glass card */}
      <div
        className="absolute flex flex-col gap-[20px] items-start left-[24px] pb-[28px] pt-[236px] px-[32px] rounded-[56px] top-[318px] w-[432px]"
        style={{ border: "1px solid rgba(255,255,255,0.7)" }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-bottom opacity-25 pointer-events-none rounded-[56px] size-full"
          src={imgGlassTexture}
        />

        {/* Map section */}
        <div
          className="absolute border border-[rgba(255,255,255,0.48)] h-[218px] items-center left-[-1px] overflow-clip rounded-[56px] top-[-1px] w-[432px]"
          style={{ border: "1px solid rgba(255,255,255,0.48)" }}
        >
          <div className="absolute inset-0 pointer-events-none rounded-[56px]">
            <img alt="" className="absolute max-w-none object-cover opacity-80 rounded-[56px] size-full" src={imgMap} />
            <div className="absolute inset-0 overflow-hidden rounded-[56px]">
              <img alt="" className="absolute h-[113.72%] left-[-12.12%] max-w-none top-[-13.7%] w-[124.23%]" src={imgMapFood} />
            </div>
            <div
              className="absolute inset-0 rounded-[56px]"
              style={{ backgroundImage: "linear-gradient(-1.75863deg, rgba(0, 0, 0, 0) 2.7614%, rgb(0, 0, 0) 97.138%)" }}
            />
          </div>
          <p
            className="font-bold leading-none relative shrink-0 text-[32px] text-center text-white whitespace-nowrap"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", position: "absolute", bottom: 48, left: 0, right: 0, textAlign: "center" }}
          >
            Tasca
          </p>
          <p
            className="font-normal leading-[1.2] relative shrink-0 text-[14px] text-white whitespace-nowrap"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", position: "absolute", bottom: 24, left: 0, right: 0, textAlign: "center" }}
          >
            May 10 · 6:30 PM
          </p>
        </div>

        {/* Check icon */}
        <div className="absolute left-[366px] overflow-clip size-[28px] top-[240px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheck} />
        </div>

        {/* Confirmation text */}
        <p
          className="font-light leading-[1.2] min-w-full relative shrink-0 text-[#262626] text-[32px]"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif" }}
        >
          Reservation confirmed
        </p>
        <p
          className="font-normal leading-[1.2] min-w-full relative shrink-0 text-[#5c5a5a] text-[18px]"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif" }}
        >
          I drafted a message to Mom and Aaron to confirm plans.
        </p>

        {/* Draft message */}
        <div className="flex gap-[16px] items-start relative shrink-0 w-full">
          <div className="relative rounded-[500px] shrink-0 size-[28px] overflow-hidden">
            <img alt="" className="absolute h-[144.62%] left-[-47.04%] max-w-none top-[-20%] w-[193.81%]" src={imgAgent} />
          </div>
          <p
            className="flex-[1_0_0] font-light leading-[1.5] min-w-px relative text-[#4c4c4c] text-[16px]"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif" }}
          >
            "I booked Tasca for 6:30 PM on Sunday for Mother's Day. Does that work for everyone?"
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex gap-[12px] items-center relative shrink-0">
          <button
            className="flex items-center justify-center px-[24px] py-[14px] rounded-[100px]"
            style={{ background: "white" }}
            onClick={() => navigate("/agentic/messages-aaron")}
          >
            <span style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, fontSize: 16, lineHeight: "20px", color: "#262626", whiteSpace: "nowrap" }}>
              Send
            </span>
          </button>
          <button
            className="flex items-center justify-center px-[24px] py-[14px] rounded-[100px]"
            style={{ background: "rgba(255,255,255,0.5)" }}
            onClick={() => navigate("/agentic/share")}
          >
            <span style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, fontSize: 16, lineHeight: "20px", color: "#262626", whiteSpace: "nowrap" }}>
              Edit message
            </span>
          </button>
        </div>
      </div>

      <VoiceButton demoText="Send it to Mom and Aaron" />
    </div>
  );
}
