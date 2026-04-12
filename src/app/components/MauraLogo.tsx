import { mauraM, mauraA, mauraU, mauraR, mauraA2 } from "../lib/iconPaths";

interface MauraLogoProps {
  className?: string;
  fill?: string;
}

export default function MauraLogo({ className = "w-[64px] h-[8.56px]", fill = "#1E1E1E" }: MauraLogoProps) {
  return (
    <svg
      className={className}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 64.1307 8.56158"
      aria-label="Maura"
    >
      <path d={mauraM} fill={fill} />
      <path d={mauraA} fill={fill} />
      <path d={mauraU} fill={fill} />
      <path d={mauraR} fill={fill} />
      <path d={mauraA2} fill={fill} />
    </svg>
  );
}
