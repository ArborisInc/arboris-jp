import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "事業内容",
  description:
    "株式会社Arborisの事業内容。受託開発（基幹・業務システム、Web/モバイルアプリ）、DXコンサルティング（業務改善・AI導入支援）、自社プロダクト開発。",
  alternates: { canonical: "https://arboris.jp/services" },
  openGraph: {
    title: "事業内容 | 株式会社Arboris",
    description: "受託開発・DXコンサルティング・AI導入支援・自社プロダクト開発。",
    url: "https://arboris.jp/services",
  },
};

const services = [
  {
    num: "01",
    category: "受託開発",
    description:
      "お客様の業務課題に合わせたシステムをゼロから設計・開発。現場を理解したエンジニアが要件定義から運用まで一貫して担当します。",
    items: [
      { title: "基幹・業務システム", detail: "在庫管理、生産管理、受発注管理など、業務の中核を支えるシステムを構築。" },
      { title: "Webアプリケーション", detail: "社内ツール、顧客向けポータル、ダッシュボードなど用途に応じたWebアプリを開発。" },
      { title: "モバイルアプリ", detail: "現場作業員向けのモバイルアプリで、リアルタイムなデータ入力・確認を実現。" },
    ],
  },
  {
    num: "02",
    category: "DXコンサルティング",
    description:
      "デジタル化の推進をゴールではなく手段として捉え、本質的な業務改善を実現するための戦略策定と実行支援を行います。",
    items: [
      { title: "業務改善・プロセス設計", detail: "現場のヒアリングから課題を特定し、最適な業務フローを設計。" },
      { title: "DX推進支援", detail: "DXロードマップの策定から、ツール選定、社内定着まで伴走支援。" },
      { title: "AI導入・活用支援", detail: "業務データを活用したAIモデルの構築・導入で、意思決定の高速化と自動化を支援。" },
    ],
  },
  {
    num: "03",
    category: "自社プロダクト",
    description:
      "受託開発とコンサルティングで培った業界知見を活かし、業界特化型のプロダクトを開発・提供しています。",
    items: [
      { title: "業界特化型プラットフォーム", detail: "物流・製造・建設・飲食それぞれの業界課題に特化したSaaSプロダクト。" },
      { title: "次世代業界標準の構築", detail: "業界全体の効率化を目指し、標準化されたデジタルインフラを提案。" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-24 sm:py-32 relative grid-pattern">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#00c9ff]/5 rounded-full blur-[120px]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#00e87b] text-sm font-bold tracking-widest uppercase mb-3">Services</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            事業内容
          </h1>
          <p className="mt-4 text-[#94a3b8]">
            受託開発・DXコンサルティング・自社プロダクトの3軸で事業を展開
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {services.map((service) => (
        <div key={service.category}>
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-[#00e87b]/30 text-4xl font-mono font-bold">{service.num}</span>
                <h2 className="text-2xl font-bold text-white">{service.category}</h2>
              </div>
              <p className="text-[#94a3b8] mb-8 max-w-2xl">{service.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.items.map((item) => (
                  <div key={item.title} className="card-dark rounded-xl p-6">
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-[#94a3b8] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className="section-divider" />
        </div>
      ))}

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#0d2818] to-[#0a0f1a]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00e87b]/5 rounded-full blur-[150px]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-[#94a3b8] mb-8">
            貴社の課題に最適なソリューションをご提案します
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            お問い合わせ
          </Link>
        </div>
      </section>
    </>
  );
}
