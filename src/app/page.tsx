import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ヒーロー */}
      <section className="relative overflow-hidden py-28 sm:py-40 grid-pattern">
        {/* 背景装飾 */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00e87b]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00c9ff]/5 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#00e87b]/20 bg-[#00e87b]/5 text-[#00e87b] text-sm font-medium">
            DX・AI導入支援
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
            土台を育て、深く根を張る
            <br />
            <span className="gradient-text">事業の大樹を育てる</span>
          </h1>
          <p className="mt-6 text-lg text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
            製造・物流・建設・飲食業界のDX推進・AI導入・業務システム開発を支援。
            <br className="hidden sm:inline" />
            表面的な解決策ではなく、本質的課題に向き合います。
          </p>
          <div className="mt-10 flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary text-lg">
              DX無料診断
            </Link>
            <Link href="/services" className="btn-outline text-lg">
              事業内容を見る
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* コンセプト */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#00e87b] text-sm font-bold tracking-widest uppercase mb-3">Concept</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              コンセプト
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-dark rounded-xl p-8">
              <div className="text-[#00e87b] text-sm font-bold tracking-widest uppercase mb-3">Mission</div>
              <p className="text-[#e2e8f0] text-lg leading-relaxed">
                現場に寄り添い、本質的課題を解決するシステムとAIを届けること。
              </p>
            </div>
            <div className="card-dark rounded-xl p-8">
              <div className="text-[#00e87b] text-sm font-bold tracking-widest uppercase mb-3">Vision</div>
              <p className="text-[#e2e8f0] text-lg leading-relaxed">
                すべての産業に、テクノロジーの根を張る。
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "現場第一", icon: "01" },
              { label: "本質直視", icon: "02" },
              { label: "共創", icon: "03" },
              { label: "誠実", icon: "04" },
            ].map((v) => (
              <div
                key={v.label}
                className="card-dark rounded-xl p-5 text-center"
              >
                <div className="text-[#00e87b]/40 text-xs font-mono mb-2">{v.icon}</div>
                <span className="text-sm font-bold text-white">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 強み */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#00e87b] text-sm font-bold tracking-widest uppercase mb-3">Strengths</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Arborisの強み
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "現場実装力",
                description:
                  "アナログ現場を深く理解し、実際に動く仕組みを構築。物流・製造・建設の現場経験を活かした実装力が強みです。",
              },
              {
                num: "02",
                title: "ズレない定義",
                description:
                  "プロトタイプによる迅速な合意形成。要件定義のズレを最小化し、手戻りのない開発を実現します。",
              },
              {
                num: "03",
                title: "AI×実務",
                description:
                  "生産性向上に直結するAI設計。流行りの技術ではなく、現場で本当に使えるAIソリューションを提供します。",
              },
            ].map((item) => (
              <div key={item.title} className="card-dark rounded-xl p-8">
                <div className="text-[#00e87b] text-3xl font-mono font-bold mb-4 opacity-40">
                  {item.num}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 実績プレビュー */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-[#00e87b] text-sm font-bold tracking-widest uppercase mb-3">Cases</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            開発実績
          </h2>
          <p className="text-[#94a3b8] mb-10 max-w-lg mx-auto">
            物流・製造・建設・飲食、幅広い業界でDX推進を支援しています。
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: "物流DX", stat: "効率30%↑" },
              { label: "製造DX", stat: "工数50%↓" },
              { label: "建設AI", stat: "対応70%↓" },
              { label: "飲食DX", stat: "工数80%↓" },
            ].map((c) => (
              <div key={c.label} className="card-dark rounded-xl p-6 text-center">
                <div className="text-[#00e87b] text-2xl font-bold mb-1">{c.stat}</div>
                <div className="text-[#94a3b8] text-sm">{c.label}</div>
              </div>
            ))}
          </div>
          <Link href="/cases" className="btn-outline">
            実績を見る
          </Link>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#0d2818] to-[#0a0f1a]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00e87b]/5 rounded-full blur-[150px]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            まずは無料でご相談ください
          </h2>
          <p className="text-[#94a3b8] mb-10 max-w-lg mx-auto">
            初回相談無料・全国対応（オンライン可）・2営業日以内にご返信
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            お問い合わせ
          </Link>
        </div>
      </section>
    </>
  );
}
