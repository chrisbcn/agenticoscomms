import { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

const imgBg = "/agentic-assets/be22207c5b81f3ba4c374f3f73b8a7f9cd70b3cc.png";

export default function Screen01_HomeScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate("/agentic/greeting"), 2200);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div
      className="bg-[#f0f0f2] overflow-clip relative rounded-[50px] size-full cursor-pointer"
      onClick={() => navigate("/agentic/greeting")}
    >
      <div className="absolute inset-0">
        <img
          alt=""
          className="absolute inset-0 object-cover pointer-events-none size-full opacity-15"
          src={imgBg}
        />
      </div>

      {/* Animated loading orb */}
      <div className="absolute h-[281px] left-[68px] top-[324px] w-[343px] flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 120 + i * 60,
                height: 120 + i * 60,
                background: `radial-gradient(circle, rgba(222,122,99,${0.22 - i * 0.06}) 0%, rgba(204,133,219,${0.12 - i * 0.03}) 60%, transparent 80%)`,
              }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.4, delay: i * 0.35, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
          <motion.div
            className="relative w-[100px] h-[100px] rounded-full"
            style={{ background: "linear-gradient(135deg, #de7a63 0%, #cd85db 100%)" }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      <p
        className="absolute left-1/2 -translate-x-1/2 text-[#b5b5b5] text-[44px] text-center top-[605px] w-[378px]"
        style={{ fontFamily: "'One UI Sans APP VF', system-ui, sans-serif", fontWeight: 600, lineHeight: 1.4 }}
      >
        Checking your locations...
      </p>
    </div>
  );
}
