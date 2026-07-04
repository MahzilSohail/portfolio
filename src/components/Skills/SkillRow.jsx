import FadeUp from "../animations/FadeUp";
export default function SkillRow({ title, description }) {
  return (
       <FadeUp>
    <div className="border-b border-cyan-500/20 py-3.5 transition-all duration-300 hover:pl-3">

      <div className="grid lg:grid-cols-[260px_1fr] gap-7.5">

        <h3 className="font-(--font-display) text-[20px] text-white">
          {title}
        </h3>

        <p className="font-(--font-mono) text-[14px] leading-[1.9] text-[#7E96A3]">
          {description}
        </p>

      </div>

    </div>
    </FadeUp>
  );
}