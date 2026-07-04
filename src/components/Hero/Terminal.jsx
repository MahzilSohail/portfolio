export default function Terminal() {
  return (
    <div className="mt-10 border border-cyan-500/20 rounded-md px-5.5 py-5 bg-cyan-400/5 text-[13px] leading-[1.85] max-w-130">

      <div className="flex gap-1.5 mb-3.5">

        <div className="w-2.25 h-2.25 rounded-full bg-orange-400"></div>

        <div className="w-2.25 h-2.25 rounded-full bg-cyan-400"></div>

        <div className="w-2.25 h-2.25 rounded-full bg-slate-500"></div>

      </div>

      <p className="text-cyan-400 font-(--font-mono)">
        $ whoami
      </p>

      <p className="text-slate-400 mb-2.5 font-(--font-mono)">
        mahzil-sohail · superior university · bsse · 3.75 cgpa
      </p>

      <p className="text-cyan-400 font-(--font-mono)">
        $ stack --core
      </p>

      <p className="text-slate-400 font-(--font-mono)">
        react · nest.js · flutter · firebase · postgresql
      </p>

    </div>
  );
}