import AboutStats from "./AboutStats";
import FadeLeft from "../animations/FadeLeft";
import FadeRight from "../animations/FadeRight";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[0.9fr_1.4fr] gap-12 lg:gap-16">
        
        {/* Left Side */}
        <FadeLeft>
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-px bg-cyan-400"></div>
              <span className="font-mono uppercase tracking-[0.18em] text-[11px] sm:text-[12px] text-cyan-400">
                ABOUT
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl leading-[1.15] text-white">
              Engineering systems that
              <br />
              hold up under real use.
            </h2>
          </div>
        </FadeLeft>

        {/* Right Side */}
        <FadeRight>
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-4">
              <p className="font-mono text-[14px] sm:text-[15px] leading-relaxed text-slate-300">
                I work across the full surface of a product, not just one layer
                of it. That habit of going end-to-end is what has shaped how I
                approach every build, from the database up to the interface.
              </p>

              <p className="font-mono text-[14px] sm:text-[15px] leading-relaxed text-slate-300">
                Today I build across the full surface of a product:{" "}
                <span className="text-cyan-400 font-semibold">
                  React + Tailwind
                </span>{" "}
                on the front,{" "}
                <span className="text-cyan-400 font-semibold">
                  NestJS
                </span>{" "}
                APIs on the back, schemas in{" "}
                <span className="text-cyan-400 font-semibold">
                  PostgreSQL / MySQL / Firestore
                </span>
                , and native-feeling mobile apps in{" "}
                <span className="text-cyan-400 font-semibold">
                  Flutter
                </span>{" "}
                and{" "}
                <span className="text-cyan-400 font-semibold">
                  React Native
                </span>
                .
              </p>

              <p className="font-mono text-[14px] sm:text-[15px] leading-relaxed text-slate-300 pb-4">
                I care about systems that hold up under real use: GPS-locked QR
                codes that cannot be spoofed, booking flows that do not double-book
                a room, and applications built with attention to detail.
              </p>
            </div>

            <AboutStats />
          </div>
        </FadeRight>
      </div>
    </section>
  );
}