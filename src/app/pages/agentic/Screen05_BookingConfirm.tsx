import { useNavigate } from "react-router";

const imgBgOuter = "/agentic-assets/284a94f7cf61bfdbb9bfceebbc6f727384c44aea.png";
const imgBgInner = "/agentic-assets/82ef667a4677b5058801419e722cfb083b1268f9.png";
const imgMom = "/agentic-assets/58ce9b58c093882775509f5a54f680857549b19f.png";
const imgAaron = "/agentic-assets/dfd1786f5e5a8052a4fb42be2ba5b470db4b021b.png";
const imgUser = "/agentic-assets/f47d24f1011002db3657c4ebc0ad4b61adbac0cc.png";
const imgMic = "/agentic-assets/6672c983de5a780011f8d6a9ff244867b2a9aaa1.svg";
const imgVoice = "/agentic-assets/dfbc23a26e99b09a2488f9cb15cd58648bc5b695.png";
const imgRestaurant = "/agentic-assets/76c44909f1796697bb0d348b7afd77ac2d779d8e.png";
const imgAgent = "/agentic-assets/51f0f8de2ceb5c96556af6e5766a2ee8bc691291.png";

export default function Screen05_BookingConfirm() {
  const navigate = useNavigate();

  return (
    <div className="bg-white overflow-clip relative rounded-[50px] size-full">
      {/* Outer background */}
      <div className="absolute h-[1040px] left-0 top-0 w-[480px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full"
          src={imgBgOuter}
        />
      </div>

      {/* Inner content layer */}
      <div className="absolute bg-[#f9f9f9] h-[888px] left-0 overflow-clip rounded-bl-[50px] rounded-br-[50px] top-0 w-[480px]">
        <div className="absolute h-[1040px] left-0 top-[-81px] w-[480px]">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full"
            src={imgBgInner}
          />
        </div>

        {/* Background calendar cards (dimmed) */}
        <div className="absolute bg-white h-[156px] left-[24px] overflow-clip rounded-[40px] shadow-[0px_10px_10px_0px_rgba(164,164,164,0.25)] top-[176px] w-[432px] whitespace-nowrap">
          <p
            className="absolute left-[158px] text-[#909090] text-[16px] top-[20px]"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 600, lineHeight: 1 }}
          >
            Gym with Layla
          </p>
          <p
            className="absolute left-[171px] text-[#a2a2a2] text-[12px] top-[40px]"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1.2 }}
          >
            Sunday 2:30 pm
          </p>
        </div>
        <div className="absolute bg-white h-[156px] left-[24px] overflow-clip rounded-[40px] shadow-[2px_2px_5px_0px_rgba(202,202,202,0.25)] top-[698px] w-[432px] whitespace-nowrap">
          <p
            className="absolute left-[122px] text-[#909090] text-[16px] top-[102px]"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 600, lineHeight: 1 }}
          >
            Get together at aunt May
          </p>
          <p
            className="absolute left-[168px] text-[#a2a2a2] text-[12px] top-[122px]"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1.2 }}
          >
            Sunday 10:00 pm
          </p>
        </div>

        {/* Main restaurant card */}
        <div className="absolute bg-white h-[529px] left-[24px] overflow-clip rounded-[40px] shadow-[2px_2px_10px_5px_rgba(164,164,164,0.25)] top-[246px] w-[432px]">
          {/* Restaurant name and time */}
          <p
            className="absolute left-[172px] text-[#262626] text-[32px] top-[28px] whitespace-nowrap"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 700, lineHeight: 1 }}
          >
            Tasca
          </p>
          <p
            className="absolute left-[164px] text-[#4c4c4c] text-[14px] top-[68px] whitespace-nowrap"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1.2 }}
          >
            Sunday 6:30 pm
          </p>

          {/* Restaurant image */}
          <div className="absolute h-[208px] left-[20px] overflow-clip rounded-[20px] top-[105px] w-[392px]">
            <div className="absolute h-[226px] left-0 top-[-9px] w-[392px]">
              <img
                alt=""
                className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full"
                src={imgRestaurant}
              />
            </div>
            {/* Overlay */}
            <div
              className="absolute h-[90px] left-0 overflow-clip top-0 w-[392px]"
              style={{
                backgroundImage:
                  "linear-gradient(-0.785904deg, rgba(0, 0, 0, 0) 2.7614%, rgba(0, 0, 0, 0.8) 97.138%)",
              }}
            >
              <p
                className="absolute left-[114px] text-[14px] text-white top-[20px] whitespace-nowrap"
                style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, lineHeight: 1.2 }}
              >
                Mediterranean · Midwood
              </p>
            </div>
            {/* Badges */}
            <div className="absolute bg-[rgba(255,255,255,0.8)] flex items-center justify-center left-[16px] px-[8px] py-[4px] rounded-[100px] top-[170px]">
              <p
                className="text-[#262626] text-[12px] whitespace-nowrap"
                style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, lineHeight: 1.2 }}
              >
                Step-free entrance
              </p>
            </div>
            <div className="absolute bg-[rgba(255,255,255,0.8)] flex items-center justify-center left-[143px] px-[8px] py-[4px] rounded-[100px] top-[170px]">
              <p
                className="text-[#262626] text-[12px] whitespace-nowrap"
                style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, lineHeight: 1.2 }}
              >
                Halfway for you
              </p>
            </div>
          </div>

          {/* Agent reasoning */}
          <div className="absolute left-[48px] rounded-[500px] size-[28px] top-[337px] overflow-hidden">
            <img
              alt=""
              className="absolute h-[144.62%] left-[-47.04%] max-w-none top-[-20%] w-[193.81%]"
              src={imgAgent}
            />
          </div>
          <p
            className="absolute left-[92px] text-[#4c4c4c] text-[14px] top-[337px] w-[292px]"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1.2 }}
          >
            Mom mentioned her knee was bothering her in a WhatsApp message last Tuesday. Two of the three options have
            stairs. I've prioritized the step-free option.
          </p>

          {/* Action buttons */}
          <div className="absolute flex gap-[16px] items-center justify-center left-[20px] top-[445px] w-[392px]">
            <button
              className="bg-[#504a58] flex items-center justify-center overflow-clip px-[24px] py-[20px] rounded-[100px] shrink-0"
              onClick={() => navigate("/agentic/messages")}
            >
              <p
                className="font-normal leading-[20px] text-[18px] text-white whitespace-nowrap"
                style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif" }}
              >
                Book
              </p>
            </button>
            <button className="bg-[#f4eef6] flex items-center justify-center overflow-clip px-[24px] py-[20px] rounded-[100px] shrink-0">
              <p
                className="font-normal leading-[20px] text-[#504a58] text-[18px] whitespace-nowrap"
                style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif" }}
              >
                Choose another time
              </p>
            </button>
          </div>
        </div>
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

      {/* Bottom bar */}
      <div className="absolute flex gap-[12px] items-center left-[24px] top-[936px] z-10">
        <div className="bg-white overflow-clip rounded-[100px] shrink-0 size-[60px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[158.72%] left-[-48.7%] max-w-none top-[-32.82%] w-[191.67%]"
              src={imgVoice}
            />
          </div>
        </div>
        <button
          className="bg-white flex items-center justify-center overflow-clip px-[24px] py-[16px] rounded-[100px] shrink-0"
          onClick={() => navigate("/agentic/messages")}
        >
          <p
            className="leading-[20px] text-[#262626] text-[16px] whitespace-nowrap"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300 }}
          >
            See other options
          </p>
        </button>
        <button
          className="flex items-center justify-center overflow-clip px-[24px] py-[16px] rounded-[100px] shrink-0"
          style={{ background: "rgba(255,255,255,0.5)" }}
        >
          <p
            className="leading-[20px] text-[#262626] text-[16px] whitespace-nowrap"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300 }}
          >
            Ask mom
          </p>
        </button>
      </div>
    </div>
  );
}
