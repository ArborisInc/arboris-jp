"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Target, Zap } from "lucide-react";

const strengths = [
  {
    icon: <Target size={28} />,
    title: "現場実装力",
    subtitle: "Field-First Execution",
    description:
      "アナログな現場を深く理解し、泥臭い課題と向き合います。きれいな理論だけでなく、実際に動く仕組みを現場に根付かせることにこだわります。",
  },
  {
    icon: <Zap size={28} />,
    title: "ズレない定義",
    subtitle: "Prototype-Driven Alignment",
    description:
      "プロトタイプによる迅速な合意形成で「思っていたのと違う」を防ぎます。ゴールの解像度を上げ、最短距離で本質的な課題を解決します。",
  },
  {
    icon: <Cpu size={28} />,
    title: "AI×実務",
    subtitle: "AI for Real Work",
    description:
      "流行りのAI活用ではなく、現場の生産性向上に直結するAI設計を行います。「使われないAI」ではなく、毎日の業務に溶け込むAIを構築します。",
  },
];

const values = [
  "現場第一 — 課題は現場にある",
  "本質直視 — 表面でなく根を見る",
  "共創 — ともに育てる",
  "誠実 — 不都合な真実も伝える",
];

function StrengthCard({
  strength,
  index,
}: {
  strength: (typeof strengths)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
      className="group relative p-8 bg-[#112240] border border-[#233554] rounded-lg hover:border-[#64FFDA]/40 transition-all hover:-translate-y-1"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#64FFDA]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg" />

      <div className="text-[#64FFDA] mb-4">{strength.icon}</div>
      <h3 className="text-[#CCD6F6] text-xl font-bold mb-1" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
        {strength.title}
      </h3>
      <p className="text-[#64FFDA] font-mono text-xs mb-4">{strength.subtitle}</p>
      <p className="text-[#8892B0] text-sm leading-relaxed">{strength.description}</p>
    </motion.div>
  );
}

export default function IdentitySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="identity" className="py-32 px-6 bg-[#0A192F]">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-[#CCD6F6] flex items-center gap-4"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            コンセプト
            <span className="flex-1 h-px bg-[#233554] max-w-xs hidden md:block" />
          </h2>
        </motion.div>

        {/* Intro — 引用 + 説明テキスト */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <blockquote className="border-l-2 border-[#64FFDA] pl-6 mb-8">
            <p
              className="text-[#CCD6F6] text-xl md:text-2xl font-light leading-relaxed italic"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              「表面的な解決策ではなく、
              <br />
              <strong className="font-bold not-italic">根(本質的課題)</strong>に向き合う。」
            </p>
          </blockquote>
          <p className="text-[#8892B0] leading-relaxed mb-6">
            Arboris(アーボリス)はラテン語で「大樹」を意味します。どんな大木も、見えない地中の根が支えているように、ビジネスの成長も表面に見えない部分の強化が土台です。
          </p>
          <p className="text-[#8892B0] leading-relaxed">
            私たちはまだまだ若いスタートアップですが、現場に深く根を張り、お客様の事業という大樹が豊かに育つことを使命としています。DXやAIを「流行りのツール」としてではなく、事業の根を強くするための手段として捉え、共に歩みます。
          </p>
        </motion.div>

        {/* MISSION / VISION / VALUE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mb-24"
        >
          {/* MISSION */}
          <div className="border-t border-[#233554]" />
          <div className="grid md:grid-cols-[200px_1fr] gap-6 py-8 items-start">
            <span className="text-[#64FFDA] font-mono text-sm tracking-widest pt-0.5">
              MISSION
            </span>
            <p className="text-[#CCD6F6] leading-relaxed">
              現場に寄り添い、本質的課題を解決するシステムとAIを届けること。流行に左右されず、お客様の事業が長期的に成長し続けるための「根」を共に育てます。
            </p>
          </div>

          {/* VISION */}
          <div className="border-t border-[#233554]" />
          <div className="grid md:grid-cols-[200px_1fr] gap-6 py-8 items-start">
            <span className="text-[#64FFDA] font-mono text-sm tracking-widest pt-0.5">
              VISION
            </span>
            <p
              className="text-[#CCD6F6] text-xl font-bold leading-relaxed"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              すべての産業に、テクノロジーの根を張る。
            </p>
          </div>

          {/* VALUE */}
          <div className="border-t border-[#233554]" />
          <div className="grid md:grid-cols-[200px_1fr] gap-6 py-8 items-start">
            <span className="text-[#64FFDA] font-mono text-sm tracking-widest pt-0.5">
              VALUE
            </span>
            <ul className="space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-center gap-3 text-[#A8B2D8]">
                  <span className="text-[#64FFDA] text-xs shrink-0">▹</span>
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-[#233554]" />
        </motion.div>

        {/* 私たちの強み */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-[#CCD6F6] text-2xl font-bold mb-10 text-center"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            私たちの強み
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {strengths.map((s, i) => (
              <StrengthCard key={s.title} strength={s} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
