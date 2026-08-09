type Rhombus = {
  top: string;
  left: string;
  size: number;
  color: string;
  opacity: number;
  delay: string;
  rotate: number;
  blur?: boolean;
};

const DEFAULT_FIELD: Rhombus[] = [
  { top: "8%", left: "6%", size: 90, color: "var(--color-gold-500)", opacity: 0.18, delay: "0s", rotate: 12 },
  { top: "18%", left: "88%", size: 140, color: "var(--color-sky-300)", opacity: 0.14, delay: "1.2s", rotate: -8 },
  { top: "62%", left: "4%", size: 120, color: "var(--color-teal-400)", opacity: 0.16, delay: "0.6s", rotate: 6 },
  { top: "78%", left: "82%", size: 70, color: "var(--color-gold-400)", opacity: 0.22, delay: "2s", rotate: -18 },
  { top: "40%", left: "48%", size: 220, color: "var(--color-gold-500)", opacity: 0.06, delay: "0.4s", rotate: 0, blur: true },
  { top: "5%", left: "45%", size: 50, color: "var(--color-sky-300)", opacity: 0.25, delay: "1.6s", rotate: 20 },
  { top: "85%", left: "40%", size: 60, color: "var(--color-teal-400)", opacity: 0.2, delay: "0.9s", rotate: -10 },
];

export default function RhombusField({
  variant = "dark",
  items = DEFAULT_FIELD,
}: {
  variant?: "dark" | "light";
  items?: Rhombus[];
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {items.map((r, i) => (
        <span
          key={i}
          className={`rhombus absolute animate-float ${r.blur ? "blur-2xl" : ""}`}
          style={{
            top: r.top,
            left: r.left,
            width: r.size,
            height: r.size,
            backgroundColor: r.color,
            opacity: r.opacity,
            animationDelay: r.delay,
            transform: `rotate(${r.rotate}deg)`,
          }}
        />
      ))}
      {variant === "dark" ? (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(252,207,7,0.10),_transparent_55%)]" />
      ) : null}
    </div>
  );
}
