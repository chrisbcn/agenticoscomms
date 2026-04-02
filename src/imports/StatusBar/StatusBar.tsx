import svgPaths from "./svg-uabto2h0w6";

export default function StatusBar() {
  return (
    <div className="bg-white relative size-full" data-name="StatusBar">
      <div className="-translate-x-1/2 absolute contents left-[calc(16.67%-12.5px)] top-[13px]" data-name="Left Side">
        <div className="-translate-x-1/2 absolute h-[21px] left-[calc(16.67%-12.5px)] rounded-[24px] top-[13px] w-[54px]" data-name="_StatusBar-time">
          <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[21px] left-[20px] not-italic text-[#404040] text-[14px] text-center top-px tracking-[-0.32px] w-[54px]">9:41</p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[13px] left-[calc(83.33%+0.2px)] top-[18px] w-[77.401px]" data-name="Right Side">
        <div className="absolute inset-[-3.53%_-0.13%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82.9392 14.4039">
            <g id="Right Side">
              <g id="_StatusBar-battery">
                <path d={svgPaths.p35d43bf2} id="Outline" opacity="0.35" stroke="var(--stroke-0, #404040)" strokeWidth="1.0702" />
                <path d={svgPaths.pc931b00} fill="var(--fill-0, #404040)" id="Battery End" opacity="0.4" />
                <path d={svgPaths.p32eed000} fill="var(--fill-0, #404040)" id="Fill" />
              </g>
              <path d={svgPaths.p21db2080} fill="var(--fill-0, #404040)" id="Wifi" />
              <g id="Icon / Mobile Signal">
                <path d={svgPaths.p334c5500} fill="var(--fill-0, #404040)" />
                <path d={svgPaths.p37f0e200} fill="var(--fill-0, #404040)" />
                <path d={svgPaths.p115599f0} fill="var(--fill-0, #404040)" />
                <path d={svgPaths.pbe46700} fill="var(--fill-0, #404040)" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}