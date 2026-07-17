const stats = [
  {
    id: "01",
    label: "CGPA / Academics",
    value: "3.75",
  },
  {
    id: "02",
    label: "Core Languages",
    value: "JS / C++ / SQL",
  },
];

export default function AboutStats() {
  return (
    <div className="border-t border-cyan-500/20 mt-6 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="relative border border-cyan-500/10 p-5 rounded-lg bg-[#071220]/30 hover:border-cyan-400/30 transition-all duration-300 group overflow-hidden"
        >
          {/* Tech layout crops inside cards */}
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500/30"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-500/30"></div>
          
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[9px] text-cyan-500/40 tracking-wider">
              [STAT // {item.id}]
            </span>
            <span className="font-mono uppercase tracking-[0.06em] text-[11px] text-slate-400 group-hover:text-white transition-colors duration-300">
              {item.label}
            </span>
            <span className="font-display text-[26px] sm:text-[28px] text-cyan-400 font-bold leading-none mt-1">
              {item.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}