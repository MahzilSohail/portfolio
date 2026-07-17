import Image from "next/image";
import FadeRight from "../animations/FadeRight";

export default function ProfileImage() {
  return (
    <div className="flex justify-center items-center">
      <FadeRight delay={0.25}>
        <div className="relative max-w-[380px] sm:max-w-[420px] w-full aspect-square p-3 border border-cyan-500/10 rounded-2xl bg-[#071220]/40 backdrop-blur-sm group transition-all duration-500 hover:border-cyan-400/30">
          
          {/* Blueprint Corner Crops inside the image container */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/40 group-hover:border-cyan-400 transition-colors duration-300"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400/40 group-hover:border-cyan-400 transition-colors duration-300"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400/40 group-hover:border-cyan-400 transition-colors duration-300"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400/40 group-hover:border-cyan-400 transition-colors duration-300"></div>

          {/* Technical drafting metadata labels */}
          <div className="absolute -top-6 left-1 text-[9px] font-mono text-cyan-500/40 uppercase tracking-widest">
            SYS.REF // IMG_405
          </div>
          <div className="absolute -bottom-6 right-1 text-[9px] font-mono text-cyan-500/40 uppercase tracking-widest">
            31.5204° N, 74.3587° E
          </div>

          <div className="relative w-full h-full overflow-hidden rounded-xl border border-cyan-500/20 bg-[#0B1929]">
            {/* Fine grid lines inside the image box */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(rgba(95,216,238,0.15)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
            
            <Image
              src="/images/profile.png"
              alt="Mahzil Sohail"
              width={420}
              height={420}
              className="w-full h-full object-cover transition-all duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
              priority
            />
          </div>
        </div>
      </FadeRight>
    </div>
  );
}