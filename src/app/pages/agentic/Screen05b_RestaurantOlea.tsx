import { useNavigate } from "react-router";
import { VoiceButton } from "../../components/AgenticShared";

const imgBgOuter = "/agentic-assets/284a94f7cf61bfdbb9bfceebbc6f727384c44aea.png";
const imgBgInner = "/agentic-assets/82ef667a4677b5058801419e722cfb083b1268f9.png";
const imgMom = "/agentic-assets/dfd1786f5e5a8052a4fb42be2ba5b470db4b021b.png";
const imgUser = "/agentic-assets/58ce9b58c093882775509f5a54f680857549b19f.png";
const imgAaron = "/agentic-assets/f47d24f1011002db3657c4ebc0ad4b61adbac0cc.png";
const imgMic = "/agentic-assets/6672c983de5a780011f8d6a9ff244867b2a9aaa1.svg";
const imgRestaurantBg = "/agentic-assets/1260a7e312c0451a2224aea0630a58f5042a0bc7.png";
const imgRestaurantFg = "/agentic-assets/b1098a98247336891417e99ee8ebfc6d64b89277.png";
const imgAgent = "/agentic-assets/51f0f8de2ceb5c96556af6e5766a2ee8bc691291.png";
const imgStar = "/agentic-assets/a6debb33a244c16b6c449d5d15e14ac0b457c484.svg";

export default function Screen05b_RestaurantOlea() {
  const navigate = useNavigate();

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
      </div>

      {/* Background calendar card — top (Gym with Layla) */}
      <div className="absolute bg-white h-[156px] left-[24px] overflow-clip rounded-[40px] top-[176px] w-[432px] whitespace-nowrap"
        style={{ boxShadow: "0px 10px 10px 0px rgba(164,164,164,0.25)" }}>
        <p className="absolute left-[158px] text-[#909090] text-[16px] top-[20px]"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 600, lineHeight: 1 }}>
          Gym with Layla
        </p>
        <p className="absolute left-[171px] text-[#a2a2a2] text-[12px] top-[40px]"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1.2 }}>
          Sunday 2:30 pm
        </p>
      </div>

      {/* Background calendar card — bottom (Aunt May) */}
      <div className="absolute bg-white h-[156px] left-[24px] overflow-clip rounded-[40px] top-[698px] w-[432px] whitespace-nowrap"
        style={{ boxShadow: "2px 2px 5px 0px rgba(202,202,202,0.25)" }}>
        <p className="absolute left-[122px] text-[#909090] text-[16px] top-[102px]"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 600, lineHeight: 1 }}>
          Get together at aunt May
        </p>
        <p className="absolute left-[168px] text-[#a2a2a2] text-[12px] top-[122px]"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1.2 }}>
          Sunday 10:00 pm
        </p>
      </div>

      {/* Main restaurant card — white backing */}
      <div className="absolute bg-white h-[529px] left-[24px] overflow-clip rounded-[40px] top-[246px] w-[432px] whitespace-nowrap"
        style={{ boxShadow: "2px 2px 10px 5px rgba(164,164,164,0.25)" }}>
        <p className="absolute left-[152px] text-[#4c4c4c] text-[14px] top-[28px]"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1.2 }}>
          Available at 7:00 pm
        </p>
        <p className="absolute left-[151px] text-[#504a58] text-[24px] top-[53px]"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 700, lineHeight: 1 }}>
          Near to you
        </p>
      </div>

      {/* Photo + info card — overlays the white card */}
      <div className="absolute h-[428px] left-[24px] overflow-clip rounded-[20px] top-[347px] w-[432px]">
        {/* Restaurant photo background */}
        <div className="absolute h-[509px] left-[-140px] rounded-tl-[20px] rounded-tr-[20px] top-[-81px] w-[711px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[20px] rounded-tr-[20px]">
            <img alt="" className="absolute h-[113.72%] left-[-12.12%] max-w-none top-[-13.7%] w-[124.23%]" src={imgRestaurantBg} />
          </div>
        </div>
        {/* Restaurant photo foreground (Olea) */}
        <div className="absolute h-[646px] left-0 top-[-212px] w-[432px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRestaurantFg} />
        </div>

        {/* Photo top gradient overlay with name + carousel dots */}
        <div className="absolute h-[180px] left-0 overflow-clip rounded-tl-[20px] rounded-tr-[20px] top-0 w-[432px]"
          style={{ backgroundImage: "linear-gradient(-1.42607deg, rgba(0,0,0,0) 2.7614%, rgb(0,0,0) 97.138%)" }}>
          {/* Carousel dots — second dot active */}
          <div className="absolute flex gap-[8px] items-center left-[199px] top-[14px]">
            <div className="bg-[rgba(255,255,255,0.4)] rounded-[100px] size-[6px]" />
            <div className="bg-[rgba(255,255,255,0.8)] rounded-[100px] size-[6px]" />
            <div className="bg-[rgba(255,255,255,0.4)] rounded-[100px] size-[6px]" />
          </div>
        </div>

        {/* Restaurant name + cuisine */}
        <p className="absolute left-[184px] text-[32px] text-white top-[42px] whitespace-nowrap"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 700, lineHeight: 1 }}>
          Olea
        </p>
        <p className="absolute left-[139px] text-[14px] text-white top-[82px] whitespace-nowrap"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, lineHeight: 1.2 }}>
          Mediterranean · Modern
        </p>

        {/* Dark content panel */}
        <div className="absolute h-[204px] left-0 overflow-clip rounded-tl-[20px] rounded-tr-[20px] top-[224px] w-[432px]"
          style={{ backdropFilter: "blur(2px)", background: "rgba(57,38,8,0.75)" }}>
          {/* Rating row */}
          <div className="absolute left-[14px] size-[14px] top-[18px]">
            <img alt="" className="block max-w-none size-full" src={imgStar} />
          </div>
          <p className="absolute left-[37px] text-[14px] text-white top-[16px] whitespace-nowrap"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 500, lineHeight: 1.2 }}>
            4.0
          </p>
          <p className="absolute left-[73px] text-[#b4b4b4] text-[14px] top-[16px] whitespace-nowrap"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 500, lineHeight: 1.2 }}>
            15min
          </p>
          <p className="absolute text-[14px] text-right text-white top-[16px] whitespace-nowrap"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, lineHeight: 1.2, right: 20 }}>
            423 Marlborough Rd, Brooklyn
          </p>

          {/* Agent icon + reasoning */}
          <div className="absolute left-[28px] rounded-[500px] size-[24px] top-[56px] overflow-hidden">
            <img alt="" className="absolute h-[144.62%] left-[-47.04%] max-w-none top-[-20%] w-[193.81%]" src={imgAgent} />
          </div>
          <p className="absolute left-[66px] text-[14px] text-white top-[56px] w-[300px]"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1.2 }}>
            This is where you celebrated your birthday with Mom last October. She loved it.
          </p>

          {/* Action buttons */}
          <div className="absolute flex gap-[16px] items-center justify-center left-[20px] top-[132px] w-[392px]">
            <button
              className="bg-white flex items-center justify-center overflow-clip px-[24px] py-[16px] rounded-[100px] shrink-0"
              onClick={() => navigate("/agentic/messages")}
            >
              <p className="leading-[20px] text-[#504a58] text-[18px] whitespace-nowrap"
                style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400 }}>
                Book
              </p>
            </button>
            <button
              className="flex items-center justify-center overflow-clip px-[24px] py-[16px] rounded-[100px] shrink-0"
              style={{ background: "rgba(255,255,255,0.25)" }}
              onClick={() => navigate("/agentic/booking")}
            >
              <p className="leading-[20px] text-[18px] text-white whitespace-nowrap"
                style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400 }}>
                Choose another time
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Header with avatars */}
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

      <VoiceButton onClick={() => navigate("/agentic/messages")} />
    </div>
  );
}
