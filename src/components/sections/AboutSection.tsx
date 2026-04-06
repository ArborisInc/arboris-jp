"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Calendar, MapPin, User, Briefcase } from "lucide-react";

const companyInfo = [
  {
    icon: <Building2 size={16} />,
    label: "社名",
    value: "株式会社Arboris",
    valueEn: "Arboris Inc.",
  },
  {
    icon: <Calendar size={16} />,
    label: "設立",
    value: "2025年11月5日",
  },
  {
    icon: <User size={16} />,
    label: "代表取締役",
    value: "井上 大樹",
  },
  {
    icon: <MapPin size={16} />,
    label: "所在地",
    value: "東京都新宿区四谷坂町",
  },
  {
    icon: <Briefcase size={16} />,
    label: "事業内容",
    value: "受託開発 / DXコンサルティング / AI導入支援 / 自社プロダクト開発",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-32 px-6 bg-[#112240]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[#64FFDA] font-mono text-sm mb-3 tracking-widest">About</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#CCD6F6] flex items-center gap-4"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            会社概要
            <span className="flex-1 h-px bg-[#233554] max-w-xs hidden md:block" />
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="bg-[#0A192F] border border-[#233554] rounded-lg overflow-hidden">
            {companyInfo.map((item, i) => (
              <div
                key={item.label}
                className={`flex gap-0 ${
                  i < companyInfo.length - 1 ? "border-b border-[#233554]" : ""
                }`}
              >
                <div className="w-36 shrink-0 px-6 py-4 bg-[#0D1F3C] flex items-start gap-2 text-[#64FFDA]">
                  <span className="mt-0.5">{item.icon}</span>
                  <span className="text-sm font-medium text-[#A8B2D8]">{item.label}</span>
                </div>
                <div className="flex-1 px-6 py-4">
                  <p className="text-[#CCD6F6] text-sm leading-relaxed">{item.value}</p>
                  {item.valueEn && (
                    <p className="text-[#8892B0] text-xs font-mono mt-0.5">{item.valueEn}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
