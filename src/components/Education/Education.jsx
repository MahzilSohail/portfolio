import Timeline from "./Timeline";
import CertificateList from "./CertificateList";
import FadeUp from "../animations/FadeUp";
import { education, certificates } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        
        {/* Section Header */}
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <h2 className="font-display text-3xl sm:text-4xl text-white">
            The path so far
          </h2>
          <div className="text-cyan-400 uppercase tracking-[0.08em] text-[11px] sm:text-[12px] font-mono">
            EDUCATION
          </div>
        </div>

        {/* Content */}
        <FadeUp>
          <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-12 lg:gap-16 items-start">
            <Timeline education={education} />
            <CertificateList certificates={certificates} />
          </div>
        </FadeUp>

      </div>
    </section>
  );
}