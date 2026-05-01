"use client";

// type LogoItem = { name: string; sub?: string };
// type LogoInput = string | LogoItem;

// interface LogoMarqueeProps {
//   items: LogoInput[];
//   theme?: "bone" | "ink";
//   duration?: number;
// }

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

// export function LogoMarquee({
//   items,
//   theme = "bone",
//   duration = 40,
// }: LogoMarqueeProps) {
//   const normalised: LogoItem[] = items.map((i) =>
//     typeof i === "string" ? { name: i } : i,
//   );
//   const all = [...normalised, ...normalised];
//   const textColor =
//     theme === "bone"
//       ? "text-bone/60 hover:text-bone"
//       : "text-ink/50 hover:text-ink";
//   const dividerColor = theme === "bone" ? "text-bone/20" : "text-ink/20";

//   return (
//     <div className="overflow-hidden py-8 select-none">
//       <div
//         className="flex w-max items-center gap-0 whitespace-nowrap"
//         style={{ animation: `marquee ${duration}s linear infinite` }}
//       >
//         {all.map((item, i) => (
//           <span key={i} className="flex items-center">
//             <span
//               className={`group flex flex-col items-center justify-center px-10 transition-colors duration-300 ${textColor}`}
//             >
//               <span className="font-display text-xl font-bold tracking-tight leading-none">
//                 {item.name}
//               </span>
//               {item.sub && (
//                 <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.3em] opacity-60">
//                   {item.sub}
//                 </span>
//               )}
//             </span>
//             <span className={`font-mono text-xs ${dividerColor}`}>
//               &#x2014;
//             </span>
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }
