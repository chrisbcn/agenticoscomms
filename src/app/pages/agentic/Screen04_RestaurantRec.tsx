import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { VoiceButton } from "../../components/AgenticShared";

const imgBgOuter = "/agentic-assets/284a94f7cf61bfdbb9bfceebbc6f727384c44aea.png";
const imgBgInner = "/agentic-assets/8e23fc692b553096ca4782f38eaa7321e20cdc86.png";
const imgMom = "/agentic-assets/58ce9b58c093882775509f5a54f680857549b19f.png";
const imgAaron = "/agentic-assets/dfd1786f5e5a8052a4fb42be2ba5b470db4b021b.png";
const imgUser = "/agentic-assets/f47d24f1011002db3657c4ebc0ad4b61adbac0cc.png";
const imgMic = "/agentic-assets/6672c983de5a780011f8d6a9ff244867b2a9aaa1.svg";

const HELP_TEXT = "How can I help?";
const BLACK_TEXT = "Can you find a cozy, warm restaurant for dinner with Mom and Aaron on Sunday? Something quiet, easy to get to,";
const GRAY_TEXT = " not too far for either of us.";
const FULL_TEXT = BLACK_TEXT + GRAY_TEXT;
const CHAR_SPEED = 28;
const TRANSCRIPT_PAUSE = 500; // pause after "How can I help?" finishes

export default function Screen04_RestaurantRec() {
  const navigate = useNavigate();
  const [helpTyped, setHelpTyped] = useState(0);
  const [charsTyped, setCharsTyped] = useState(0);
  const [transcriptStarted, setTranscriptStarted] = useState(false);

  // Type "How can I help?" first
  useEffect(() => {
    if (helpTyped >= HELP_TEXT.length) return;
    const t = setTimeout(() => setHelpTyped((n) => n + 1), CHAR_SPEED);
    return () => clearTimeout(t);
  }, [helpTyped]);

  // Once help text is done, pause then start transcript
  useEffect(() => {
    if (helpTyped < HELP_TEXT.length) return;
    const delay = setTimeout(() => setTranscriptStarted(true), TRANSCRIPT_PAUSE);
    return () => clearTimeout(delay);
  }, [helpTyped]);

  useEffect(() => {
    if (!transcriptStarted) return;
    if (charsTyped >= FULL_TEXT.length) return;
    const t = setTimeout(() => setCharsTyped((n) => n + 1), CHAR_SPEED);
    return () => clearTimeout(t);
  }, [transcriptStarted, charsTyped]);

  const typed = FULL_TEXT.slice(0, charsTyped);
  const blackVisible = typed.slice(0, BLACK_TEXT.length);
  const grayVisible = typed.length > BLACK_TEXT.length ? typed.slice(BLACK_TEXT.length) : "";

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

        {/* "How can I help?" — typewriters in */}
        <p
          className="absolute left-[27px] text-[#7b7b7b] text-[28px] top-[215px] w-[320px]"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 300, lineHeight: 1.2 }}
        >
          {HELP_TEXT.slice(0, helpTyped)}
          {helpTyped < HELP_TEXT.length && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.5, ease: "steps(1)" }}
            >|</motion.span>
          )}
        </p>

        {/* Typewriter transcript */}
        <p
          className="absolute left-[29px] top-[273px] w-[422px]"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", lineHeight: 1.4 }}
        >
          <span className="text-[#262626] text-[32px] font-bold">{blackVisible}</span>
          <span className="text-[#b5b5b5] text-[32px] font-bold">{grayVisible}</span>
          {charsTyped < FULL_TEXT.length && transcriptStarted && (
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

      <VoiceButton active onClick={() => navigate("/agentic/booking")} />
    </div>
  );
}
