import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const imgCity = "/agentic-assets/2fdf9486fb83b215f5480f884135a96c08112f2e.png";
const imgClockTexture = "/agentic-assets/66d7f2a78e502db6ab429f4d52c6cd398d6d9291.png";
const imgGlassTexture = "/agentic-assets/552ea12888d2f3fc11c5468aa567db6c7535068d.png";
const imgEllipse2 = "/agentic-assets/903217877c18ec8f02ab079111bdbc9209e3d35e.svg";
const imgEllipse1 = "/agentic-assets/7570b907a9cae6a7f4a85ae17ee13adb386d802e.svg";
const imgMomCircle = "/agentic-assets/73b9efb858068e485af35eeb97ba4badf8f35437.png";
const imgVoice = "/agentic-assets/9eb8e13fcff6e5772ea5d056d1f31510baa20721.png";

export default function Screen02_AgentGreeting() {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<"home" | "suggestion">("home");

  useEffect(() => {
    const t = setTimeout(() => setPhase("suggestion"), 3500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="overflow-clip relative rounded-[50px] size-full"
      style={{
        backgroundImage:
          "linear-gradient(204.533deg, rgb(248, 191, 171) 0.35511%, rgb(253, 182, 158) 8.0639%, rgb(211, 197, 216) 61.743%, rgb(204, 207, 221) 99.467%)",
      }}
    >
      {/* Clock texture — always visible */}
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
          <img alt="" className="absolute inset-0 size-full object-bottom pointer-events-none" src={imgClockTexture} />
        </div>
      </div>

      {/* Clock — always visible */}
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
        00
      </p>
      <p
        className="absolute left-[24px] text-[#d14a41] text-[18px] top-[216px] whitespace-nowrap select-none"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1 }}
      >
        Monday, May 4
      </p>

      {/* Switching content — waits for exit before entering */}
      <AnimatePresence mode="wait">
        {phase === "home" ? (
          <motion.div
            key="home"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeIn" } }}
            className="absolute inset-0"
          >
            <p
              className="absolute left-[24px] text-[#262626] text-[56px] top-[266px] w-[404px]"
              style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1.2 }}
            >
              Good morning, Michelle
            </p>

            <div className="absolute flex flex-col items-start justify-center left-[24px] p-[32px] rounded-[56px] top-[456px] w-[175px]">
              <img
                alt=""
                className="absolute inset-0 max-w-none object-bottom opacity-25 pointer-events-none rounded-[56px] size-full"
                src={imgGlassTexture}
              />
              <div className="flex flex-col items-start justify-center relative shrink-0 w-full whitespace-nowrap">
                <p className="leading-[1.2] text-[#262626] text-[60px]"
                  style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300 }}>
                  60°
                </p>
                <p className="font-normal leading-[1.2] text-[#5c5a5a] text-[18px]"
                  style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif" }}>
                  New York, NY
                </p>
              </div>
            </div>

            <div className="absolute h-[287px] left-[30px] top-[530px] w-[432px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[107.83%] left-[-16.8%] max-w-none top-[-3.61%] w-[131.16%]" src={imgCity} />
              </div>
            </div>
            <div className="absolute left-[279px] size-[36px] top-[616px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse2} />
            </div>
            <div className="absolute left-[293px] size-[8px] top-[630px]">
              <div className="absolute inset-[-87.5%_-137.5%_-187.5%_-137.5%]">
                <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="suggestion"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }}
            className="absolute inset-0"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.5 } }}
              className="absolute left-[24px] text-[#262626] text-[60px] top-[294px] w-[404px]"
              style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1.2 }}
            >
              Mother's Day is this Sunday.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.5 } }}
              className="absolute left-[24px] text-[#5c5a5a] text-[28px] top-[454px] w-[344px]"
              style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400, lineHeight: 1.2 }}
            >
              Want to plan something with Mom?
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
              className="absolute h-[180px] left-[20px] rounded-[500px] top-[548px] w-[181px]"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-bottom opacity-90 pointer-events-none rounded-[500px] size-full"
                src={imgMomCircle}
              />
            </motion.div>


            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.7, duration: 0.5 } }}
              className="-translate-x-1/2 absolute bg-white overflow-clip rounded-[90px] size-[72px] top-[936px] left-[calc(50%+6px)]"
              onClick={() => navigate("/agentic/restaurant")}
            >
              <img src={imgVoice} alt="Voice" className="absolute inset-0 size-full object-cover pointer-events-none" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Secret invisible tap — advances immediately */}
      {phase === "home" && (
        <div className="absolute inset-0 z-50" onClick={() => setPhase("suggestion")} />
      )}
    </div>
  );
}
