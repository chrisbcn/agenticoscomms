import { motion } from "motion/react";
import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  src?: string;
  poster?: string;
  className?: string;
  muted?: boolean;
}

export default function VideoPlayer({ src, poster, className = "", muted = true }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // React doesn't properly apply the `muted` attribute to video elements (known bug).
  // We must set it via the DOM ref to ensure Chrome's autoplay policy is satisfied.
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  }, []);

  // Play immediately if it's rendered, sometimes mobile browsers need an explicit play call
  useEffect(() => {
    if (videoRef.current && src) {
      videoRef.current.play().catch(e => console.log("Video auto-play prevented:", e));
    }
  }, [src]);

  // When no video src is provided, show the elegant placeholder
  if (!src) {
    return (
      <div className={`relative bg-[#f6f3ef] overflow-hidden flex items-center justify-center ${className}`}>
        {poster && (
          <img 
            src={poster} 
            className="absolute inset-0 w-full h-full object-cover object-top opacity-60 blur-md scale-110" 
            alt="Video poster fallback" 
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
        
        {/* Animated Placeholder Indicator */}
        <motion.div 
          className="relative z-10 flex flex-col items-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: "reverse", 
            ease: "easeInOut" 
          }}
        >
          <div className="w-[54px] h-[54px] rounded-full bg-white/10 backdrop-blur-lg border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.1)] flex items-center justify-center">
            <svg width="18" height="22" viewBox="0 0 18 22" fill="none" className="ml-1">
              <path d="M16.5 9.13397C17.8333 9.90377 17.8333 11.8282 16.5 12.5981L3 20.3923C1.66667 21.1621 0 20.2016 0 18.6603L0 3.0718C0 1.5304 1.66667 0.56985 3 1.33965L16.5 9.13397Z" fill="white"/>
            </svg>
          </div>
          <p className="text-white/90 text-[10px] uppercase tracking-[0.2em] font-medium drop-shadow-md">
            Video Rendering
          </p>
        </motion.div>

        {/* Fake timeline to look like a player */}
        <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-md">
          <motion.div 
            className="h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    );
  }

  // The actual video player when the asset is ready
  return (
    <div className={`relative bg-black overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted={muted}
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}