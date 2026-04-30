export function Marquee({ items }: { items: string[] }) {
  const all = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-sun py-2 sm:py-5 text-ink">
      <div className="marquee flex w-max items-center gap-6 md:gap-12 whitespace-nowrap">
        {all.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 md:gap-12 font-display text-lg sm:text-2xl md:text-3xl italic"
          >
            {item}
            <span className="text-ink/60">&#x2756;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
