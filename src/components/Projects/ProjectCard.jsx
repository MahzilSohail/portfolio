export default function ProjectCard({
  id,
  title,
  description,
  stack,
  full,
}) {
  return (
    <div
      className={`
        relative overflow-hidden
        border border-cyan-500/20
        rounded-md
        px-7.5
        py-7.5
        bg-[linear-gradient(160deg,rgba(95,216,238,0.05),transparent_60%)]
        transition-all duration-300
        hover:-translate-y-1.5
        hover:border-[#2C5A66]
        hover:bg-[linear-gradient(160deg,rgba(95,216,238,0.10),transparent_60%)]
        ${full ? "md:col-span-2" : ""}
      `}
    >
      {/* Corner Line */}

      <div className="absolute top-0 right-0 w-11.5 h-11.5 border-t border-r border-cyan-400 opacity-0 group-hover:opacity-100"></div>

      <span className="block mb-4.5 text-[11px] tracking-widest uppercase text-[#2C5A66] font-(--font-mono)">
        {id}
      </span>

      <h3 className="font-(--font-display) text-[20px] text-white mb-3">
        {title}
      </h3>

      <p className="text-[13.5px] leading-[1.8] text-[#7E96A3] font-(--font-mono) mb-4.5">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">

        {stack.map((item) => (
          <span
            key={item}
            className="text-[10.5px] px-2.5 py-1.25 border border-cyan-500/20 rounded-full text-cyan-400 tracking-[0.04em] font-(--font-mono)"
          >
            {item}
          </span>
        ))}

      </div>

    </div>
  );
}