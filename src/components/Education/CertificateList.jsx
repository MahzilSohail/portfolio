export default function CertificateList({ certificates }) {
  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <div className="font-mono uppercase tracking-[0.08em] text-[11px] sm:text-[12px] text-cyan-400 mb-5">
          CERTIFICATIONS
        </div>

        {/* Certificates */}
        <div className="flex flex-wrap gap-3">
          {certificates.map((item) => (
            <a
              key={item.title}
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2.5
                border
                border-cyan-500/15
                bg-[#071220]/20
                rounded-full
                px-4
                py-2
                text-[12.5px]
                text-slate-300
                font-mono
                transition-all
                duration-300
                hover:border-cyan-400
                hover:text-white
                hover:bg-cyan-500/5
                hover:-translate-y-0.5
              "
            >
              <span className="text-amber-400 text-xs">✓</span>
              {item.title}
            </a>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="mt-8 text-[13.5px] sm:text-[14px] leading-relaxed text-slate-300 font-mono max-w-xl border-t border-cyan-500/10 pt-6">
        The pre-medical-to-engineering pivot meant building foundations
        fast. These certifications were the first formal bricks under
        what&apos;s now a full-stack skill set.
      </p>
    </div>
  );
}