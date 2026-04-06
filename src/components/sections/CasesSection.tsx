"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { Truck, Factory, HardHat, UtensilsCrossed } from "lucide-react";

interface Case {
  icon: ReactNode;
  industry: string;
  tag: string;
  title: string;
  challenge: string;
  solution: string;
  result: string;
  color: string;
}

const cases: Case[] = [
  {
    icon: <Truck size={24} />,
    industry: "物流",
    tag: "Logistics DX",
    title: "WMSリプレイスによる物流DX",
    challenge: "旧来の紙ベース管理による在庫誤差・作業ミスが常態化",
    solution: "基幹WMSのスクラッチ再開発＋リアルタイム在庫管理システムを構築",
    result: "作業効率 30%向上 / 在庫差異ほぼゼロ",
    color: "#64FFDA",
  },
  {
    icon: <Factory size={24} />,
    industry: "製造",
    tag: "Manufacturing DX",
    title: "デジタル指示書・図面管理でペーパーレス化",
    challenge: "紙の作業指示書・図面管理が属人化し、ミスと工数ロスが発生",
    solution: "デジタル指示書配信・図面管理システムを設計・開発",
    result: "ペーパーレス達成 / 引き継ぎ工数 50%削減",
    color: "#82AAFF",
  },
  {
    icon: <HardHat size={24} />,
    industry: "建設",
    tag: "Construction AI",
    title: "現場特化型AIチャットボットでナレッジ共有",
    challenge: "熟練者の暗黙知が属人化し、若手への技術継承が困難",
    solution: "社内ドキュメント・過去事例を学習したRAGベースのAIチャットボットを構築",
    result: "問い合わせ対応時間 70%削減 / 若手の自己解決率向上",
    color: "#C792EA",
  },
  {
    icon: <UtensilsCrossed size={24} />,
    industry: "飲食・サービス",
    tag: "Food & Service",
    title: "経営ダッシュボードで意思決定を可視化",
    challenge: "複数店舗の経営データが散在し、リアルタイムの判断が困難",
    solution: "POSデータ・在庫・シフトを統合した経営ダッシュボードを開発",
    result: "月次報告工数 80%削減 / リアルタイム経営判断が可能に",
    color: "#FFCB6B",
  },
];

function CaseCard({ c, index }: { c: Case; index: number }) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      className="group relative p-8 bg-[#112240] border border-[#233554] rounded-lg hover:border-[#233554]/80 transition-all hover:-translate-y-1 overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-5 group-hover:opacity-10 transition-opacity"
        style={{ background: c.color }}
      />

      <div className="flex items-start gap-4 mb-6">
        <div
          className="p-2.5 rounded-lg shrink-0"
          style={{ background: `${c.color}15`, color: c.color }}
        >
          {c.icon}
        </div>
        <div>
          <span
            className="font-mono text-xs px-2 py-0.5 rounded-full border"
            style={{ color: c.color, borderColor: `${c.color}40` }}
          >
            {c.tag}
          </span>
          <h3
            className="text-[#CCD6F6] font-bold text-lg mt-2 leading-snug"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            {c.title}
          </h3>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-[#8892B0] text-xs font-mono mb-1">CHALLENGE</p>
          <p className="text-[#A8B2D8] text-sm leading-relaxed">{c.challenge}</p>
        </div>
        <div>
          <p className="text-[#8892B0] text-xs font-mono mb-1">SOLUTION</p>
          <p className="text-[#A8B2D8] text-sm leading-relaxed">{c.solution}</p>
        </div>
        <div
          className="mt-4 pt-4 border-t flex items-center gap-2"
          style={{ borderColor: `${c.color}20` }}
        >
          <span style={{ color: c.color }} className="text-xs">▹</span>
          <p className="text-sm font-medium" style={{ color: c.color }}>
            {c.result}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function CasesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cases" className="py-32 px-6 bg-[#0A192F]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[#64FFDA] font-mono text-sm mb-3 tracking-widest">Case Studies</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#CCD6F6] flex items-center gap-4"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            主な開発実績
            <span className="flex-1 h-px bg-[#233554] max-w-xs hidden md:block" />
          </h2>
          <p className="text-[#8892B0] mt-4 text-sm">
            ※ 案件の性質上、社名・詳細は非公開としています。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <CaseCard key={c.title} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
