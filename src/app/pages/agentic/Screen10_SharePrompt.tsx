import { useNavigate } from "react-router";

const imgBgOuter = "/agentic-assets/284a94f7cf61bfdbb9bfceebbc6f727384c44aea.png";
const imgBgInner = "/agentic-assets/82ef667a4677b5058801419e722cfb083b1268f9.png";
const imgMom = "/agentic-assets/58ce9b58c093882775509f5a54f680857549b19f.png";
const imgAaron = "/agentic-assets/dfd1786f5e5a8052a4fb42be2ba5b470db4b021b.png";
const imgUser = "/agentic-assets/f47d24f1011002db3657c4ebc0ad4b61adbac0cc.png";
const imgMic = "/agentic-assets/6672c983de5a780011f8d6a9ff244867b2a9aaa1.svg";
const imgVoice = "/agentic-assets/dfbc23a26e99b09a2488f9cb15cd58648bc5b695.png";
const imgAgent = "/agentic-assets/51f0f8de2ceb5c96556af6e5766a2ee8bc691291.png";
const imgPhoto1 = "/agentic-assets/6ae4b142ab8951f8a345ac1e8725a1fa929d9ad1.png";
const imgPhoto2 = "/agentic-assets/257f178049721907e7434a1524818ac674d164d7.png";
const imgPhoto3 = "/agentic-assets/d7304c964863691d6aed6b1a427a701906bd08d2.png";
const imgPhoto4 = "/agentic-assets/867156475fc7faaf1b1b8910723b7ab3f7f8d1c4.png";
const imgPhoto5 = "/agentic-assets/4fa2dc981aa8cbeb284c479c45cdcc8057a49d6c.png";

export default function Screen10_SharePrompt() {
  const navigate = useNavigate();

  const photos = [imgPhoto1, imgPhoto2, imgPhoto3, imgPhoto4, imgPhoto5];

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

        {/* Agent message */}
        <div className="absolute flex gap-[12px] items-start left-[24px] top-[176px] w-[432px]">
          <div className="rounded-[500px] shrink-0 size-[28px] overflow-hidden">
            <img
              alt=""
              className="absolute h-[144.62%] left-[-47.04%] max-w-none top-[-20%] w-[193.81%]"
              src={imgAgent}
            />
          </div>
          <p
            className="flex-1 text-[#262626] text-[24px] leading-[1.3]"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300 }}
          >
            What a day! I put together a reel of today's memories. Want to share it?
          </p>
        </div>

        {/* Photo grid */}
        <div className="absolute left-[24px] top-[300px] w-[432px]">
          {/* Large photo */}
          <div className="h-[240px] w-full rounded-[24px] overflow-hidden mb-[8px]">
            <img
              alt=""
              className="w-full h-full object-cover"
              src={imgPhoto1}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.background = "linear-gradient(135deg, #de7a63, #cd85db)";
              }}
            />
          </div>

          {/* Small photos row */}
          <div className="flex gap-[8px]">
            {photos.slice(1).map((src, i) => (
              <div key={i} className="flex-1 h-[120px] rounded-[16px] overflow-hidden">
                <img
                  alt=""
                  className="w-full h-full object-cover"
                  src={src}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.background =
                      ["#f8bfab", "#d3c5d8", "#de7a63", "#cd85db"][i % 4];
                  }}
                />
              </div>
            ))}
          </div>

          {/* Photo count */}
          <p
            className="text-[#7b7b7b] text-[14px] mt-[8px]"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300 }}
          >
            5 photos · Mother's Day 2025
          </p>
        </div>

        {/* Action buttons */}
        <div className="absolute flex flex-wrap gap-[13px] items-center left-[24px] top-[740px] w-[432px]">
          <button
            className="bg-[#504a58] flex items-center justify-center overflow-clip px-[24px] py-[16px] rounded-[100px] shrink-0"
            onClick={() => navigate("/agentic/finale")}
          >
            <p
              className="font-normal leading-[20px] text-[18px] text-white whitespace-nowrap"
              style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif" }}
            >
              Share with family
            </p>
          </button>
          <button
            className="flex items-center justify-center overflow-clip px-[24px] py-[16px] rounded-[100px] shrink-0"
            style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(0,0,0,0.08)" }}
          >
            <p
              className="font-normal leading-[20px] text-[#5c5a5a] text-[18px] whitespace-nowrap"
              style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif" }}
            >
              Edit reel
            </p>
          </button>
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

      {/* Voice button */}
      <button
        className="-translate-x-1/2 absolute overflow-clip rounded-[90px] size-[72px] top-[936px] left-[calc(50%+6px)] z-10"
        style={{ background: "white" }}
        onClick={() => navigate("/agentic/finale")}
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
  );
}
