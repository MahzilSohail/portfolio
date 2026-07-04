export default function Timeline({ education }) {
  return (
    <div className="relative pl-8">

      {/* Vertical Line */}
      <div className="absolute left-1.25 top-1.5 bottom-1.5 w-px bg-cyan-500/20"></div>
      {education.map((item) => (
        <div
          key={item.degree}
          className="relative pb-10.5 last:pb-0"
        >

          {/* Circle */}

          <div className="absolute -left-8 top-1 w-2.75 h-2.75 rounded-full bg-[#0B1929] border-2 border-cyan-400"></div>
          <div className="text-[11px] tracking-[0.06em] text-[#2C5A66] mb-1.5 font-(--font-mono)">
            {item.duration}
          </div>

          <h3 className="text-[17px] font-semibold text-white mb-1">
            {item.degree}
          </h3>

          <div className="text-[13px] text-[#7E96A3] font-(--font-mono)">
            {item.institute}
          </div>
        </div>
      ))}
    </div>
  );
}