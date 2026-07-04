import Timeline from "./Timeline";
import CertificateList from "./CertificateList";
import FadeUp from "../animations/FadeUp";
import { education, certificates } from "@/data/education";

export default function Education() {
  return (
    <FadeUp>
    <section id="education" className="py-30">

      <div className="max-w-295 mx-auto px-8 relative">

        {/* Section Header */}

        <div className="flex items-end justify-between flex-wrap gap-4 mb-13.5">

          <h2 className="font-(--font-display) text-[36px] leading-[1.1]">
            The path so far
          </h2>

          <div className="text-cyan-400 uppercase tracking-[0.08em] text-[12px] font-(--font-mono)">
            EDUCATION
          </div>

        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-15 items-start">

          <Timeline education={education} />

          <CertificateList certificates={certificates} />

        </div>

      </div>

    </section>
    </FadeUp>
  );
}