"use client"
import HeroButtons from "./HeroButtons";
import Terminal from "./Terminal";

import FadeUp from "../animations/FadeUp";
import ScaleIn from "../animations/ScaleIn";

export default function HeroContent() {
  return (
    <div>

      <FadeUp>

        <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm mb-6">
          SOFTWARE ENGINEERING · LAHORE, PK
        </p>

      </FadeUp>

      <FadeUp delay={0.1}>

        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">

          Mahzil Sohail

          <br />

          I engineer

          <span className="text-cyan-400"> full-stack </span>

          systems that ship.

        </h1>

      </FadeUp>

      <FadeUp delay={0.2}>

        <p className="text-slate-400 mt-8 leading-8 max-w-xl">

          A detail-oriented Full Stack Web & Mobile Developer
          building with React, NestJS, Flutter and React Native,
          fluent in turning a database schema into a product
          someone actually wants to use. Building the future
          through code.

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