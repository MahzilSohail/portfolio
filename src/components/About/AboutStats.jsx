const stats = [
  {
    label: "CGPA",
    value: "3.75",
  },
  {
    label: "Core Languages",
    value: "JS / C++ / SQL",
  },
];

export default function AboutStats() {
  return (
    <div className="border-t border-cyan-500/20">

      {stats.map((item) => (

        <div
          key={item.label}
          className="flex justify-between items-end py-4.5 border-b border-cyan-500/20"
        >

          <span className="uppercase tracking-[0.06em] text-[11px] text-[#7E96A3] font-(--font-mono)">

            {item.label}

          </span>

          <span className="font-(--font-display) text-[30px] text-cyan-400">

            {item.value}

          </span>

        </div>

      ))}
    </div>
  );
}