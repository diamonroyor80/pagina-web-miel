type Hexagon = {
  top: string;
  left: string;
  size: number;
  color: string;
  opacity: number;
  delay: string;
  rotate: number;
  blur?: boolean;
  gold?: boolean;
};

const DEFAULT_FIELD: Hexagon[] = [
  { top: "8%", left: "6%", size: 90, color: "var(--color-gold-500)", opacity: 0.18, delay: "0s", rotate: 12 },
  { top: "18%", left: "88%", size: 140, color: "var(--color-sky-300)", opacity: 0.14, delay: "1.2s", rotate: -8 },
  { top: "62%", left: "4%", size: 120, color: "var(--color-teal-400)", opacity: 0.16, delay: "0.6s", rotate: 6 },
  { top: "78%", left: "82%", size: 70, color: "var(--color-gold-400)", opacity: 0.22, delay: "2s", rotate: -18 },
  { top: "38%", left: "46%", size: 340, color: "var(--color-gold-500)", opacity: 0.16, delay: "0.4s", rotate: 0, blur: true, gold: true },
  { top: "5%", left: "45%", size: 50, color: "var(--color-sky-300)", opacity: 0.25, delay: "1.6s", rotate: 20 },
  { top: "85%", left: "40%", size: 60, color: "var(--color-teal-400)", opacity: 0.2, delay: "0.9s", rotate: -10 },
  { top: "30%", left: "12%", size: 180, color: "var(--color-gold-500)", opacity: 0.12, delay: "0.8s", rotate: 0, blur: true, gold: true },
];

export default function HexField({
  variant = "dark",
  items = DEFAULT_FIELD,
}: {
  variant?: "dark" | "light";
  items?: Hexagon[];
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {items.map((h, i) =>
        h.gold ? (
          <span
            key={i}
            className="glow-gold absolute animate-float-slow"
            style={{
              top: h.top,
              left: h.left,
              width: h.size,
              height: h.size,
              opacity: h.opacity * 3,
              animationDelay: h.delay,
            }}
          />
        ) : (
          <span
            key={i}
            className={`hex absolute animate-float ${h.blur ? "blur-2xl" : ""}`}
            style={{
              top: h.top,
              left: h.left,
              width: h.size,
              height: h.size,
              backgroundColor: h.color,
              opacity: h.opacity,
              animationDelay: h.delay,
              transform: `rotate(${h.rotate}deg)`,
            }}
          />
        )
      )}
      {variant === "dark" ? (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(252,207,7,0.14),_transparent_55%)]" />
      ) : null}
    </div>
  );
}
