import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const imgBg = "/agentic-assets/be22207c5b81f3ba4c374f3f73b8a7f9cd70b3cc.png";
const imgGlassTexture = "/agentic-assets/552ea12888d2f3fc11c5468aa567db6c7535068d.png";
const imgMom = "/agentic-assets/58ce9b58c093882775509f5a54f680857549b19f.png";
const imgAaron = "/agentic-assets/dfd1786f5e5a8052a4fb42be2ba5b470db4b021b.png";
const imgPhoto1 = "/agentic-assets/6ae4b142ab8951f8a345ac1e8725a1fa929d9ad1.png";
const imgPhoto2 = "/agentic-assets/257f178049721907e7434a1524818ac674d164d7.png";
const imgPhoto3 = "/agentic-assets/d7304c964863691d6aed6b1a427a701906bd08d2.png";
const imgVoice = "/agentic-assets/9eb8e13fcff6e5772ea5d056d1f31510baa20721.png";

const REACTIONS = [
  { name: "Mum", src: imgMom, text: "This is the most beautiful thing 😭💕", time: "15:22" },
  { name: "Aaron", src: imgAaron, text: "Best Mother's Day ever!! 🎉", time: "15:23" },
  { name: "Mum", src: imgMom, text: "Thank you both so much ❤️🥹", time: "15:23" },
];

export default function Screen11_Finale() {
  const navigate = useNavigate();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="overflow-clip relative rounded-[50px] size-full"
      style={{
        backgroundImage:
          "linear-gradient(204.533deg, rgb(248, 191, 171) 0.35511%, rgb(253, 182, 158) 8.0639%, rgb(211, 197, 216) 61.743%, rgb(204, 207, 221) 99.467%)",
      }}
    >
      <div className="absolute h-[1040px] left-0 top-0 w-[480px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full opacity-60"
          src={imgBg}
        />
      </div>

      {/* Celebration particles */}
      {phase >= 1 &&
        Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full pointer-events-none"
            style={{
              left: `${10 + (i * 7.2) % 80}%`,
              top: `${5 + (i * 11) % 35}%`,
              background: ["#de7a63", "#cd85db", "#f8bfab", "#5c9bd6", "#f4eef6"][i % 5],
            }}
            initial={{ y: 0, opacity: 0, scale: 0 }}
            animate={{ y: [0, -60, 160], opacity: [0, 1, 0], scale: [0, 1, 0.4] }}
            transition={{ delay: (i * 0.08), duration: 1.8 }}
          />
        ))}

      {/* Sent confirmation */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 16 }}
        className="absolute top-[80px] left-0 right-0 flex flex-col items-center"
      >
        <div className="relative w-[90px] h-[90px] mx-auto mb-[16px]">
          <div
            className="absolute inset-0 rounded-full blur-[16px]"
            style={{ background: "rgba(222,122,99,0.3)" }}
          />
          <div
            className="relative w-full h-full rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #de7a63 0%, #cd85db 100%)" }}
          >
            <span className="text-[40px]">💌</span>
          </div>
        </div>
        <p
          className="text-[#262626] text-[28px] font-bold mb-[4px]"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif" }}
        >
          Memories Shared!
        </p>
        <p
          className="text-[#5c5a5a] text-[14px]"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400 }}
        >
          Shared with Family Group
        </p>
      </motion.div>

      {/* Photo strip */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute top-[240px] left-[24px] right-[24px]"
      >
        <div className="flex gap-[8px] overflow-hidden rounded-[20px] h-[110px]">
          {[imgPhoto1, imgPhoto2, imgPhoto3].map((src, i) => (
            <div
              key={i}
              className="flex-1 relative overflow-hidden"
              style={{
                background: ["linear-gradient(135deg,#78350f,#92400e)", "linear-gradient(135deg,#831843,#9d174d)", "linear-gradient(135deg,#1e3a8a,#312e81)"][i],
              }}
            >
              <img
                src={src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Family reactions glass card */}
      <div
        className="absolute left-[24px] right-[24px] top-[376px] p-[24px] rounded-[40px] flex flex-col gap-[16px]"
        style={{ border: "1px solid rgba(255,255,255,0.7)" }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-bottom opacity-30 pointer-events-none rounded-[40px] size-full"
          src={imgGlassTexture}
        />
        <p
          className="relative text-[#7a7a7a] text-[11px] font-medium tracking-widest"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif" }}
        >
          FAMILY REACTIONS
        </p>
        {REACTIONS.slice(0, phase).map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-start gap-[10px] relative"
          >
            <div className="rounded-full shrink-0 size-[32px] overflow-hidden">
              <img alt={r.name} className="w-full h-full object-cover" src={r.src} />
            </div>
            <div
              className="rounded-[20px] rounded-tl-[6px] px-[14px] py-[10px]"
              style={{
                background:
                  r.name === "Mum"
                    ? "rgba(248,191,171,0.5)"
                    : "rgba(204,207,221,0.5)",
                border: "1px solid rgba(255,255,255,0.5)",
              }}
            >
              <p
                className="text-[#262626] text-[13px] leading-snug"
                style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif" }}
              >
                {r.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Day summary */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 10 }}
        transition={{ duration: 0.4 }}
        className="absolute left-[24px] right-[24px] top-[650px] p-[24px] rounded-[40px]"
        style={{ background: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.6)" }}
      >
        <p
          className="text-[#7a7a7a] text-[11px] font-medium tracking-widest mb-[12px]"
          style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif" }}
        >
          TODAY'S SUMMARY
        </p>
        {[
          { icon: "🍝", text: "Booked Tasca at 6:30pm" },
          { icon: "🚗", text: "Waymo arrived on time" },
          { icon: "📸", text: "5 memories shared" },
          { icon: "💕", text: "Mum had an amazing day" },
        ].map(({ icon, text }) => (
          <div key={text} className="flex items-center gap-[10px] mb-[8px]">
            <span className="text-[16px]">{icon}</span>
            <p
              className="text-[#5c5a5a] text-[14px]"
              style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif" }}
            >
              {text}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Back to home button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 3 ? 1 : 0 }}
        className="absolute bottom-[32px] left-[24px] right-[24px]"
      >
        <button
          onClick={() => navigate("/agentic")}
          className="w-full flex items-center justify-center py-[18px] rounded-[100px]"
          style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.9)" }}
        >
          <p
            className="text-[#262626] text-[18px]"
            style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 400 }}
          >
            Back to home
          </p>
        </button>
      </motion.div>
    </div>
  );
}
