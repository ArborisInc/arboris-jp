"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, LineChart, Layers } from "lucide-react";

const services = [
  {
    icon: <Code2 size={32} />,
    title: "受託開発",
    subtitle: "Custom Development",
    items: ["基幹・業務システム", "Webアプリケーション", "モバイルアプリ"],
    description:
      "現場の業務フローを深く理解した上で、保守性・拡張性に優れたシステムを構築します。スクラッチ開発からリプレイスまで幅広く対応します。",
    color: "#64FFDA",
  },
  {
    icon: <LineChart size={32} />,
    title: "コンサルティング",
    subtitle: "Consulting",
    items: ["業務改善・プロセス設計", "DX推進支援", "AI導入・活用支援"],
    description:
      "ツール選定から導入後の定着まで一貫してサポート。「どこから手をつければいいかわからない」という段階からご相談いただけます。",
    color: "#82AAFF",
  },
  {
    icon: <Layers size={32} />,
    title: "自社プロダクト",
    subtitle: "Own Products",
    items: ["業界特化型プラットフォーム", "次世代業界標準の構築", "SaaS開発"],
    description:
      "特定業界に深く刺さるプロダクトを自社で開発・展開します。現場の課題から生まれたソリューションで、業界の新しいスタンダードを目指します。",
    color: "#C792EA",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-32 px-6 bg-[#112240]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[#64FFDA] font-mono text-sm mb-3 tracking-widest">Services</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#CCD6F6] flex items-center gap-4"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            事業内容
            <span className="flex-1 h-px bg-[#233554] max-w-xs hidden md:block" />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative flex flex-col p-8 bg-[#0A192F] border border-[#233554] rounded-lg hover:border-opacity-60 transition-all hover:-translate-y-1"
              style={{ "--hover-border": service.color } as React.CSSProperties}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(to right, transparent, ${service.color}, transparent)` }}
              />

              <div className="mb-5" style={{ color: service.color }}>
                {service.icon}
              </div>

              <h3
                className="text-[#CCD6F6] text-xl font-bold mb-1"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                {service.title}
              </h3>
              <p className="font-mono text-xs mb-5" style={{ color: service.color }}>
                {service.subtitle}
              </p>

              <ul className="mb-6 space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#8892B0]">
                    <span style={{ color: service.color }} className="text-xs">▹</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-[#8892B0] text-sm leading-relaxed mt-auto">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
