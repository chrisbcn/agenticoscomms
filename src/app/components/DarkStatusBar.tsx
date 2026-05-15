export default function DarkStatusBar({ light = false }: { light?: boolean }) {
  const color = light ? "#FFFFFF" : "#1a1a2e";
  const opacity = light ? "opacity-90" : "opacity-100";

  return (
    <div className={`relative w-full h-[47px] flex items-center px-6 ${opacity}`}>
      <span
        className="text-[14px] font-semibold tracking-[-0.3px]"
        style={{ color: light ? "rgba(255,255,255,0.9)" : color }}
      >
        9:41
      </span>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-[5px]">
        {/* Signal */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <rect x="0" y="8" width="3" height="4" rx="0.8" fill={light ? "rgba(255,255,255,0.9)" : "#1a1a2e"} />
          <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.8" fill={light ? "rgba(255,255,255,0.9)" : "#1a1a2e"} />
          <rect x="9" y="2.5" width="3" height="9.5" rx="0.8" fill={light ? "rgba(255,255,255,0.9)" : "#1a1a2e"} />
          <rect x="13.5" y="0" width="3" height="12" rx="0.8" fill={light ? "rgba(255,255,255,0.9)" : "#1a1a2e"} />
        </svg>
        {/* WiFi */}
        <svg width="15" height="12" viewBox="0 0 15 12" fill="none">
          <path d="M7.5 9.5C8.05 9.5 8.5 9.95 8.5 10.5C8.5 11.05 8.05 11.5 7.5 11.5C6.95 11.5 6.5 11.05 6.5 10.5C6.5 9.95 6.95 9.5 7.5 9.5Z" fill={light ? "rgba(255,255,255,0.9)" : "#1a1a2e"} />
          <path d="M4.5 7.5C5.5 6.5 6.45 6 7.5 6C8.55 6 9.5 6.5 10.5 7.5" stroke={light ? "rgba(255,255,255,0.9)" : "#1a1a2e"} strokeWidth="1.3" strokeLinecap="round" />
          <path d="M1.5 4.5C3.2 2.8 5.2 2 7.5 2C9.8 2 11.8 2.8 13.5 4.5" stroke={light ? "rgba(255,255,255,0.9)" : "#1a1a2e"} strokeWidth="1.3" strokeLinecap="round" />
        </svg>
        {/* Battery */}
        <div className="flex items-center gap-[1px]">
          <div
            className="w-[22px] h-[11px] rounded-[3px] border"
            style={{
              borderColor: light ? "rgba(255,255,255,0.5)" : "rgba(26,26,46,0.4)",
              padding: "1.5px",
            }}
          >
            <div
              className="h-full rounded-[1.5px] w-[75%]"
              style={{ background: light ? "rgba(255,255,255,0.9)" : "#1a1a2e" }}
            />
          </div>
          <div
            className="w-[2px] h-[5px] rounded-r-[2px]"
            style={{ background: light ? "rgba(255,255,255,0.6)" : "rgba(26,26,46,0.4)" }}
          />
        </div>
      </div>
    </div>
  );
}
