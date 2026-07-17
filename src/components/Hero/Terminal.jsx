"use client";

import { useState } from "react";

const commands = [
  {
    name: "whoami",
    output: "mahzil-sohail · superior university · bsse · 3.75 cgpa",
  },
  {
    name: "stack --core",
    output: "react · nest.js · flutter · firebase · postgresql",
  },
  {
    name: "contact --info",
    output: "email: mahzilsohail1@gmail.com · phone: +92 323 8451415",
  },
];

export default function Terminal() {
  const [selectedCommand, setSelectedCommand] = useState(0);

  return (
    <div className="mt-8 border border-cyan-500/20 rounded-lg px-5 py-4 bg-[#071220]/75 text-[13px] leading-[1.85] max-w-xl font-mono shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-sm relative overflow-hidden group hover:border-cyan-400/30 transition-all duration-300 select-none">
      
      {/* Title Bar */}
      <div className="flex justify-between items-center border-b border-cyan-500/10 pb-2.5 mb-3.5">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#EF4444]/80"></div>
          <div className="w-2 h-2 rounded-full bg-[#F59E0B]/80"></div>
          <div className="w-2 h-2 rounded-full bg-[#10B981]/80"></div>
        </div>
        <div className="text-[10px] text-cyan-500/40 uppercase tracking-widest font-semibold">
          shell // interactive_inspector
        </div>
      </div>

      {/* Terminal Content */}
      <div className="space-y-2">
        {commands.map((cmd, idx) => {
          const isSelected = selectedCommand === idx;
          return (
            <div
              key={cmd.name}
              onClick={() => setSelectedCommand(idx)}
              className={`cursor-pointer p-2.5 rounded border transition-all duration-300 ${
                isSelected
                  ? "bg-cyan-500/5 border-cyan-400/40 shadow-[inset_0_1px_8px_rgba(34,211,238,0.05)]"
                  : "bg-transparent border-transparent hover:bg-cyan-500/5 hover:border-cyan-500/10"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold select-none">$</span>
                <span className={`font-semibold tracking-wide ${isSelected ? "text-cyan-300" : "text-slate-400"}`}>
                  {cmd.name}
                </span>
                {isSelected && (
                  <span className="w-1.5 h-3.5 bg-cyan-400 animate-[pulse_1s_infinite] inline-block"></span>
                )}
              </div>
              
              {/* Output container */}
              <div
                className={`mt-2 text-slate-300 pl-4 border-l border-cyan-500/20 overflow-hidden transition-all duration-300 ease-in-out ${
                  isSelected ? "max-h-20 opacity-100 py-1" : "max-h-0 opacity-0"
                }`}
              >
                {cmd.output}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}