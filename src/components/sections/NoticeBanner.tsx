"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function NoticeBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="pt-28 px-6 bg-[#0A192F]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto rounded-lg border border-amber-400/40 bg-[#112240] px-5 py-3"
      >
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#CCD6F6]">
          <AlertTriangle size={16} className="shrink-0 text-amber-400" />
          <span className="text-amber-400 font-medium">重要なお知らせ（2026年10月22日）：</span>
          <span>
            当社名義の求人情報および「arboris-jet.vercel.app」は当社と一切関係ありません。
          </span>
          <Link href="/about" className="text-[#64FFDA] hover:underline whitespace-nowrap">
            詳しくはこちら →
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
