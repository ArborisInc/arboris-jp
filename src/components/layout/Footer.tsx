"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] border-t border-[#233554] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
            <path d="M16 28 L16 4" stroke="#64FFDA" strokeWidth="2" strokeLinecap="round" />
            <path d="M16 14 L8 8" stroke="#64FFDA" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
            <path d="M16 10 L24 6" stroke="#64FFDA" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
            <path d="M16 18 L10 14" stroke="#64FFDA" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            <path d="M16 16 L22 12" stroke="#64FFDA" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          </svg>
          <span className="text-[#CCD6F6] font-semibold">株式会社Arboris</span>
        </div>
        <p className="text-[#8892B0] text-sm font-mono">
          &copy; {new Date().getFullYear()} Arboris Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
