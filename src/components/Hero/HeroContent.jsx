"use client";
import HeroButtons from "./HeroButtons";
import Terminal from "./Terminal";

import FadeUp from "../animations/FadeUp";
import ScaleIn from "../animations/ScaleIn";

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center">
      <FadeUp>
        <p className="font-mono uppercase tracking-[0.25em] text-cyan-400 text-xs sm:text-sm mb-5">
          SOFTWARE ENGINEERING · LAHORE, PK
        </p>
      </FadeUp>

      <FadeUp delay={0.1}>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white">
          Mahzil Sohail
          <br />
          I engineer{" "}
          <span className="text-cyan-400 relative inline-block">
            full-stack
          </span>{" "}
          systems that ship.
        </h1>
      </FadeUp>

      <FadeUp delay={0.2}>
        <p className="font-mono text-slate-400 text-[14px] sm:text-[15px] mt-6 leading-relaxed max-w-xl">
          A detail-oriented Full Stack Web & Mobile Developer building with
          React, NestJS, Flutter and React Native. Fluent in turning a database
          schema into a product someone actually wants to use. Building the
          future through code.
        </p>
      </FadeUp>

      <FadeUp delay={0.3}>
        <HeroButtons />
      </FadeUp>

      <ScaleIn delay={0.45}>
        <Terminal />
      </ScaleIn>
    </div>
  );
}