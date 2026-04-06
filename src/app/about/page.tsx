import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社Arboris（アーボリス）の会社概要。2025年設立、東京都新宿区。DX推進・AI導入・業務システム開発で製造・物流・建設・飲食業界を支援。",
  alternates: { canonical: "https://arboris.jp/about" },
  openGraph: {
    title: "会社概要 | 株式会社Arboris",
    description: "株式会社Arborisの会社概要・企業理念・代表メッセージ。",
    url: "https://arboris.jp/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="py-24 sm:py-32 relative grid-pattern">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#00e87b]/5 rounded-full blur-[120px]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#00e87b] text-sm font-bold tracking-widest uppercase mb-3">About</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            会社概要
          </h1>
          <p className="mt-4 text-[#94a3b8]">
            根本的課題に向き合い、事業の大樹を育てる
          </p>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-[#00e87b] text-sm font-bold tracking-widest uppercase mb-3">Company Info</p>
          <h2 className="text-2xl font-bold text-white mb-8">基本情報</h2>
          <div className="card-dark rounded-xl overflow-hidden">
            {[
              ["会社名", "株式会社Arboris（アーボリス）"],
              ["設立", "2025年11月5日"],
              ["代表取締役", "井上 大樹"],
              ["所在地", "東京都新宿区四谷坂町"],
              ["事業内容", "受託開発 / DXコンサルティング / AI導入支援 / 自社プロダクト開発"],
              ["対応エリア", "全国対応（オンライン可）"],
            ].map(([label, value], i) => (
              <div
                key={label}
                className={`px-8 py-5 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 ${
                  i > 0 ? "border-t border-white/5" : ""
                }`}
              >
                <dt className="text-sm font-bold text-[#00e87b] sm:w-36 shrink-0">{label}</dt>
                <dd className="text-sm text-[#e2e8f0]">{value}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-[#00e87b] text-sm font-bold tracking-widest uppercase mb-3">Philosophy</p>
          <h2 className="text-2xl font-bold text-white mb-8">企業理念</h2>
          <div className="space-y-6">
            <div className="card-dark rounded-xl p-8">
              <div className="text-[#00e87b] text-sm font-bold tracking-widest uppercase mb-3">Mission</div>
              <p className="text-[#e2e8f0] leading-relaxed">
                現場に寄り添い、本質的課題を解決するシステムとAIを届けること。
                表面的な解決策ではなく、根（本質的課題）に向き合い、
                お客様の事業が長期的に成長する基盤を構築します。
              </p>
            </div>
            <div className="card-dark rounded-xl p-8">
              <div className="text-[#00e87b] text-sm font-bold tracking-widest uppercase mb-3">Vision</div>
              <p className="text-[#e2e8f0] leading-relaxed">
                すべての産業に、テクノロジーの根を張る。
                製造・物流・建設・飲食——あらゆる現場にデジタルの力を届け、
                産業の未来を共に創ります。
              </p>
            </div>
            <div>
              <div className="text-[#00e87b] text-sm font-bold tracking-widest uppercase mb-4 px-1">Values</div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "現場第一", desc: "現場を知らずして、良い仕組みは作れない" },
                  { title: "本質直視", desc: "表面的な症状ではなく、根本原因を見る" },
                  { title: "共創", desc: "お客様と共に考え、共に作る" },
                  { title: "誠実", desc: "できないことはできないと言う" },
                ].map((v) => (
                  <div key={v.title} className="card-dark rounded-xl p-6">
                    <h4 className="font-bold text-white mb-1">{v.title}</h4>
                    <p className="text-sm text-[#94a3b8]">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
