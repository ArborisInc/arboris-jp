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
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            会社概要
          </h1>
          <p className="mt-4 text-gray-600 text-center">
            根本的課題に向き合い、事業の大樹を育てる
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">基本情報</h2>
          <dl className="divide-y divide-gray-100">
            {[
              ["会社名", "株式会社Arboris（アーボリス）"],
              ["設立", "2025年11月5日"],
              ["代表取締役", "井上 大樹"],
              ["所在地", "東京都新宿区四谷坂町"],
              [
                "事業内容",
                "受託開発 / DXコンサルティング / AI導入支援 / 自社プロダクト開発",
              ],
              ["対応エリア", "全国対応（オンライン可）"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="py-4 sm:grid sm:grid-cols-3 sm:gap-4"
              >
                <dt className="text-sm font-bold text-gray-900">{label}</dt>
                <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            企業理念
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-green-700 mb-2">MISSION</h3>
              <p className="text-gray-700">
                現場に寄り添い、本質的課題を解決するシステムとAIを届けること。
                表面的な解決策ではなく、根（本質的課題）に向き合い、
                お客様の事業が長期的に成長する基盤を構築します。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-700 mb-2">VISION</h3>
              <p className="text-gray-700">
                すべての産業に、テクノロジーの根を張る。
                製造・物流・建設・飲食——あらゆる現場にデジタルの力を届け、
                産業の未来を共に創ります。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-700 mb-2">VALUES</h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {[
                  { title: "現場第一", desc: "現場を知らずして、良い仕組みは作れない" },
                  { title: "本質直視", desc: "表面的な症状ではなく、根本原因を見る" },
                  { title: "共創", desc: "お客様と共に考え、共に作る" },
                  { title: "誠実", desc: "できないことはできないと言う" },
                ].map((v) => (
                  <div key={v.title} className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-gray-900">{v.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{v.desc}</p>
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
