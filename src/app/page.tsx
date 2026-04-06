import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ヒーロー */}
      <section className="relative bg-gradient-to-b from-green-50 to-white py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight">
            土台を育て、深く根を張る
            <br />
            事業の大樹を育てる
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            製造・物流・建設・飲食業界のDX推進・AI導入・業務システム開発を支援。
            表面的な解決策ではなく、本質的課題に向き合います。
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-700 text-white px-8 py-3 rounded-md text-lg hover:bg-green-800 transition-colors"
            >
              DX無料診断
            </Link>
            <Link
              href="/services"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md text-lg hover:bg-gray-50 transition-colors"
            >
              事業内容を見る
            </Link>
          </div>
        </div>
      </section>

      {/* コンセプト */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
            コンセプト
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-bold text-green-700 mb-2">MISSION</h3>
              <p className="text-gray-700">
                現場に寄り添い、本質的課題を解決するシステムとAIを届けること。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-700 mb-2">VISION</h3>
              <p className="text-gray-700">
                すべての産業に、テクノロジーの根を張る。
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {["現場第一", "本質直視", "共創", "誠実"].map((value) => (
              <div
                key={value}
                className="text-center p-4 bg-green-50 rounded-lg"
              >
                <span className="text-sm font-bold text-green-800">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 強み */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
            Arborisの強み
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "現場実装力",
                description:
                  "アナログ現場を深く理解し、実際に動く仕組みを構築。物流・製造・建設の現場経験を活かした実装力が強みです。",
              },
              {
                title: "ズレない定義",
                description:
                  "プロトタイプによる迅速な合意形成。要件定義のズレを最小化し、手戻りのない開発を実現します。",
              },
              {
                title: "AI×実務",
                description:
                  "生産性向上に直結するAI設計。流行りの技術ではなく、現場で本当に使えるAIソリューションを提供します。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 実績プレビュー */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            開発実績
          </h2>
          <p className="text-gray-600 mb-8">
            物流・製造・建設・飲食、幅広い業界でDX推進を支援しています。
          </p>
          <Link
            href="/cases"
            className="inline-block border border-green-700 text-green-700 px-8 py-3 rounded-md hover:bg-green-50 transition-colors"
          >
            実績を見る
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            まずは無料でご相談ください
          </h2>
          <p className="text-green-100 mb-8">
            初回相談無料・全国対応（オンライン可）・2営業日以内にご返信
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-md text-lg font-bold hover:bg-green-50 transition-colors"
          >
            お問い合わせ
          </Link>
        </div>
      </section>
    </>
  );
}
