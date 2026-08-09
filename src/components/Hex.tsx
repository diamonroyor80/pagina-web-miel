function hexPoints(cx: number, cy: number, r: number, pointyTop: boolean) {
  return Array.from({ length: 6 }, (_, i) => {
    const deg = pointyTop ? -90 + 60 * i : 60 * i;
    const rad = (deg * Math.PI) / 180;
    return `${(cx + r * Math.cos(rad)).toFixed(2)},${(cy + r * Math.sin(rad)).toFixed(2)}`;
  }).join(" ");
}

type HexBadgeProps = {
  size?: number;
  fill?: string;
  outerStroke?: string;
  innerStroke?: string;
  strokeWidth?: number;
  gap?: number;
  pointyTop?: boolean;
  className?: string;
  children?: React.ReactNode;
};

/** Double-outline hexagon badge, the site's signature high-impact icon frame. */
export function HexBadge({
  size = 64,
  fill = "var(--color-navy-950)",
  outerStroke = "var(--color-gold-400)",
  innerStroke = "var(--color-gold-400)",
  strokeWidth = 3.5,
  gap = 11,
  pointyTop = false,
  className = "",
  children,
}: HexBadgeProps) {
  const outerR = 46;
  const innerR = outerR - gap;

  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        <polygon
          points={hexPoints(50, 50, outerR, pointyTop)}
          fill={fill}
          stroke={outerStroke}
          strokeWidth={strokeWidth}
        />
        <polygon
          points={hexPoints(50, 50, innerR, pointyTop)}
          fill="none"
          stroke={innerStroke}
          strokeWidth={strokeWidth * 0.55}
          opacity={0.85}
        />
      </svg>
      <span className="relative z-10 flex items-center justify-center">{children}</span>
    </span>
  );
}

/** Large portrait hexagon frame (used for Mielina) with a double-line outline and a diffused gold glow behind it. */
export function HexPortrait({
  className = "",
  glow = true,
  children,
}: {
  className?: string;
  glow?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className={`relative ${className}`}>
      {glow ? (
        <div className="glow-gold absolute -inset-10 animate-pulse-glow" aria-hidden />
      ) : null}
      <div className="hex-tall relative h-full w-full bg-gradient-to-br from-teal-500/30 via-gold-500/15 to-sky-300/20 p-[3px]">
        <div className="hex-tall h-full w-full bg-navy-900/40 backdrop-blur-sm flex items-center justify-center overflow-hidden">
          {children}
        </div>
      </div>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      >
        <polygon
          points="50,0 100,25 100,75 50,100 0,75 0,25"
          fill="none"
          stroke="var(--color-gold-400)"
          strokeWidth={1.6}
        />
        <polygon
          points="50,11 88,30.5 88,69.5 50,89 12,69.5 12,30.5"
          fill="none"
          stroke="var(--color-gold-400)"
          strokeWidth={1}
          opacity={0.75}
        />
      </svg>
    </div>
  );
}
