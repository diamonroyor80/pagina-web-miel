import { marqueeItems } from "@/lib/content";

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative bg-gold-500 py-4 overflow-hidden border-y-2 border-navy-950">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center shrink-0">
            {items.map((item, i) => (
              <span
                key={`${dup}-${i}`}
                className="flex items-center gap-6 px-6 font-display text-sm sm:text-base font-bold uppercase tracking-wide text-navy-950"
              >
                {item}
                <span className="hex h-2.5 w-2.5 bg-navy-950/70" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
