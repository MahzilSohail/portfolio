export default function Timeline({ education }) {
  return (
    <div className="relative pl-8 select-none">
      {/* Vertical Line */}
      <div className="absolute left-1 top-2 bottom-2 w-px bg-cyan-500/20"></div>
      
      <div className="space-y-8">
        {education.map((item) => (
          <div
            key={item.degree}
            className="group relative transition-all duration-300 hover:pl-2"
          >
            {/* Circle Node indicator */}
            <div className="absolute -left-10.5 top-1.5 w-3 h-3 rounded-full bg-[#0B1929] border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_8px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_12px_rgba(34,211,238,0.8)]"></div>
            
            <div className="text-[11px] tracking-wider text-cyan-400/60 font-mono mb-1">
              {item.duration}
            </div>

            <h3 className="font-display text-[17px] sm:text-[18px] font-semibold text-white group-hover:text-cyan-300 transition-colors">
              {item.degree}
            </h3>

            <div className="text-[13px] sm:text-[14px] text-slate-400 font-mono mt-1">
              {item.institute}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}