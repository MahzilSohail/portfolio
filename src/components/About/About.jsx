import AboutStats from "./AboutStats";
import FadeLeft from "../animations/FadeLeft";
import FadeRight from "../animations/FadeRight";


export default function About() {
    return (
        <section id="about" className="py-35">
            <div className="max-w-295 mx-auto px-8 grid lg:grid-cols-[0.9fr_1.4fr] gap-15">

                {/* Left Side */}
                <FadeLeft>
                    <div>

                        <div className="flex items-center gap-2.5 mb-4.5">

                            <div className="w-7 h-px bg-cyan-400"></div>

                            <span className="uppercase tracking-[0.18em] text-[12px] text-cyan-400 font-(--font-mono)]">
                                ABOUT
                            </span>

                        </div>

                        <h2 className="font-(--font-display) text-[32px] leading-tight">

                            Engineering systems that
                            hold up under real use.

                        </h2>

                    </div>
                </FadeLeft>
                {/* Right Side */}
                <FadeRight>
                    <div>

                        <p className="text-[14.5px] leading-[1.9] text-[#7E96A3] mb-4 font-(--font-mono)]">

                            I work across the full surface of a product, not just one
                            layer of it. That habit of going end-to-end is what&apos;s shaped
                            how I approach every build, from the database up to the interface.

                        </p>

                        <p className="text-[14.5px] leading-[1.9] text-[#7E96A3] mb-4 font-(--font-mono)">

                            Today I build across the full surface of a product:
                            <span className="text-white font-medium">
                                {" "}React + Tailwind
                            </span>
                            {" "}on the front,
                            <span className="text-white font-medium">
                                {" "}NestJS
                            </span>
                            {" "}APIs on the back,
                            schemas in
                            <span className="text-white font-medium">
                                {" "}PostgreSQL / MySQL / Firestore
                            </span>
                            , and native-feeling mobile apps in
                            <span className="text-white font-medium">
                                {" "}Flutter
                            </span>
                            {" "}and
                            <span className="text-white font-medium">
                                {" "}React Native
                            </span>
                            .

                        </p>

                        <p className="text-[14.5px] leading-[1.9] text-[#7E96A3] mb-6 font-(--font-mono)]">

                            I care about systems that hold up under real use, GPS-locked QR
                            codes that can&apos;t be spoofed, booking flows that don&apos;t double-book
                            a room, and applications built with attention to detail.

                        </p>

                        <AboutStats />

                    </div>
                </FadeRight>
            </div>
        </section >
    );
}