import { useNavigate } from "react-router";

const imgBg = "/agentic-assets/be22207c5b81f3ba4c374f3f73b8a7f9cd70b3cc.png";
const imgClockTexture = "/agentic-assets/66d7f2a78e502db6ab429f4d52c6cd398d6d9291.png";
const imgGlassTexture = "/agentic-assets/552ea12888d2f3fc11c5468aa567db6c7535068d.png";
const imgMap = "/agentic-assets/954aefce163e793963ad259506c99c23ed16d316.png";
const imgEllipse1 = "/agentic-assets/103acd76be466e4dbf084e168e9641d671ea3a41.svg";
const imgEllipse2 = "/agentic-assets/8f1a4b7878212e9f4227d59a0f6433776a0d96e8.svg";
const imgEllipse3 = "/agentic-assets/985fd62ea75df3764eda05cd6cade38db798d8ee.svg";
const imgEllipse4 = "/agentic-assets/03007465fccf62848dc467a6992e89b22688bf3d.svg";
const imgWaymoCar = "/agentic-assets/155ae683fcc0fa0c21233166ea3175eaf7a14d6b.png";
const imgVoice = "/agentic-assets/dfbc23a26e99b09a2488f9cb15cd58648bc5b695.png";

export default function Screen09_PhotoReel() {
  const navigate = useNavigate();

  return (
    <div className="bg-white overflow-clip relative rounded-[50px] size-full">
      {/* Background photo */}
      <div className="absolute h-[1040px] left-0 top-0 w-[480px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full"
          src={imgBg}
        />
      </div>

      {/* Map background */}
      <div className="absolute h-[400px] left-0 top-[200px] w-[480px] overflow-hidden opacity-60">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgMap}
        />
      </div>

      {/* Waymo tracking rings */}
      <div className="absolute left-[188px] top-[310px]">
        <img alt="" className="absolute block" style={{ left: -80, top: -80, width: 240, height: 240 }} src={imgEllipse4} />
        <img alt="" className="absolute block" style={{ left: -56, top: -56, width: 192, height: 192 }} src={imgEllipse3} />
        <img alt="" className="absolute block" style={{ left: -36, top: -36, width: 152, height: 152 }} src={imgEllipse2} />
        <img alt="" className="absolute block" style={{ left: -20, top: -20, width: 120, height: 120 }} src={imgEllipse1} />
        {/* Waymo car */}
        <div className="absolute overflow-hidden" style={{ left: -30, top: -24, width: 140, height: 90 }}>
          <img
            alt=""
            className="absolute inset-0 max-w-none object-contain size-full pointer-events-none"
            src={imgWaymoCar}
          />
        </div>
      </div>

      {/* Clock texture */}
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

      {/* Tracking info card */}
      <div
        className="absolute flex flex-col gap-[20px] items-start left-[24px] p-[32px] rounded-[56px] top-[500px] w-[432px]"
        style={{ border: "1px solid rgba(255,255,255,0.7)" }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-bottom opacity-25 pointer-events-none rounded-[56px] size-full"
          src={imgGlassTexture}
        />

        <div className="relative shrink-0 w-full">
          <p
            className="font-light leading-[1.2] text-[#262626] text-[32px]"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif" }}
          >
            Your Waymo is on its way
          </p>
          <p
            className="font-normal leading-[1.2] text-[#5c5a5a] text-[18px] mt-[8px]"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif" }}
          >
            ETA 6:22 PM · 7 min away
          </p>
        </div>

        {/* Progress bar */}
        <div className="relative shrink-0 w-full">
          <div className="w-full h-[4px] bg-[rgba(0,0,0,0.08)] rounded-full">
            <div className="h-full w-[65%] rounded-full bg-[#de7a63]" />
          </div>
          <div className="flex justify-between mt-[8px]">
            <p
              className="text-[12px] text-[#262626]"
              style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400 }}
            >
              Your location
            </p>
            <p
              className="text-[12px] text-[#262626]"
              style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400 }}
            >
              Tasca
            </p>
          </div>
        </div>

        {/* Plate number */}
        <div
          className="flex items-center justify-between relative shrink-0 w-full px-[20px] py-[14px] rounded-[24px]"
          style={{ background: "rgba(255,255,255,0.6)" }}
        >
          <p
            className="text-[#262626] text-[16px]"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300 }}
          >
            Waymo · White Jaguar I-Pace
          </p>
          <p
            className="text-[#5c5a5a] text-[16px] font-bold"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif" }}
          >
            7KBJ245
          </p>
        </div>
      </div>

      {/* Voice button */}
      <button
        className="-translate-x-1/2 absolute bg-white overflow-clip rounded-[90px] size-[72px] top-[936px] left-[calc(50%+6px)]"
        onClick={() => navigate("/agentic/share")}
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
