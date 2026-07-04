export default function CertificateList({ certificates }) {
  return (
    <div>

      <div className="uppercase tracking-[0.08em] text-[12px] text-cyan-400 mb-6 font-(--font-mono)">
        CERTIFICATIONS
      </div>

      {/* Certificates */}

      <div className="flex flex-wrap gap-3.5">

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
              border-cyan-500/20
              rounded-[30px]
              px-4.5
              py-2.5
              text-[12.5px]
              text-[#7E96A3]
              font-(--font-mono)
              transition-all
              duration-300
              hover:border-cyan-400
              hover:text-white
            "
          >
            <span className="text-amber-400">✓</span>

            {item.title}
          </a>

        ))}

      </div>

      {/* Description */}

      <p className="mt-7 text-[13.5px] leading-[1.9] text-[#7E96A3] font-(--font-mono) max-w-155">

        The pre-medical-to-engineering pivot meant building foundations
        fast. These certifications were the first formal bricks under
        what&apos;s now a full-stack skill set.

      </p>

    </div>
  );
}