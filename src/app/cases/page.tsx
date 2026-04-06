import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "開発実績",
  description:
    "株式会社Arborisの開発実績。物流DX（WMSリプレイス）、製造DX（デジタル指示書）、建設AI（チャットボット）、飲食DX（経営ダッシュボード）など。",
  alternates: { canonical: "https://arboris.jp/cases" },
  openGraph: {
    title: "開発実績 | 株式会社Arboris",
    description: "物流・製造・建設・飲食業界のDX推進事例をご紹介。",
    url: "https://arboris.jp/cases",
  },
};

const cases = [
  {
    industry: "Logistics DX",
    title: "WMSリプレイスによる物流DX",
    challenge: "紙ベース管理による在庫誤差・作業ミスが頻発。繁忙期には出荷遅延も発生していた。",
    solution:
      "クラウド型WMS（倉庫管理システム）を導入。バーコードスキャンによるリアルタイム在庫管理と、作業指示のデジタル化を実現。",
    results: ["作業効率30%向上", "在庫差異ほぼゼロ", "出荷遅延の解消"],
    tags: ["物流", "WMS", "在庫管理", "業務効率化"],
  },
  {
    industry: "Manufacturing DX",
    title: "デジタル指示書・図面管理システム",
    challenge: "紙の指示書管理が属人化。担当者不在時に作業が止まり、引き継ぎコストが膨大だった。",
    solution:
      "図面・指示書のデジタル管理システムを構築。検索機能、バージョン管理、承認ワークフローを実装。",
    results: ["ペーパーレス達成", "引き継ぎ工数50%削減", "図面検索時間の大幅短縮"],
    tags: ["製造", "ペーパーレス", "図面管理", "業務改善"],
  },
  {
    industry: "Construction AI",
    title: "現場特化型AIチャットボット",
    challenge: "熟練者の暗黙知が属人化。新人の質問対応に時間を取られ、現場の生産性が低下していた。",
    solution:
      "社内マニュアル・過去のQ&Aデータを学習させたAIチャットボットを開発。現場からスマホで即座に回答を取得可能に。",
    results: ["問い合わせ対応時間70%削減", "新人の自己解決率向上", "熟練者の負担軽減"],
    tags: ["建設", "AI", "チャットボット", "ナレッジ管理"],
  },
  {
    industry: "Food & Service",
    title: "経営ダッシュボード",
    challenge: "複数店舗のデータが散在。月次報告の作成に膨大な時間がかかり、リアルタイムな経営判断ができなかった。",
    solution:
      "POS・会計・予約データを統合した経営ダッシュボードを構築。店舗別・日別の売上・原価・人件費をリアルタイムで可視化。",
    results: ["月次報告工数80%削減", "リアルタイム経営判断が可能に", "店舗間比較による改善施策の迅速化"],
    tags: ["飲食", "ダッシュボード", "データ統合", "経営管理"],
  },
];

export default function CasesPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            開発実績
          </h1>
          <p className="mt-4 text-gray-600 text-center">
            物流・製造・建設・飲食、幅広い業界でDX推進を支援しています
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          {cases.map((c) => (
            <article
              key={c.title}
              className="border border-gray-100 rounded-lg overflow-hidden shadow-sm"
            >
              <div className="bg-green-700 px-6 py-3">
                <span className="text-green-100 text-sm font-bold">
                  {c.industry}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {c.title}
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 mb-1">課題</h3>
                    <p className="text-gray-700">{c.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 mb-1">ソリューション</h3>
                    <p className="text-gray-700">{c.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 mb-1">成果</h3>
                    <ul className="list-disc list-inside text-gray-700">
                      {c.results.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            貴社のDX推進もお任せください
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-md font-bold hover:bg-green-50 transition-colors"
          >
            無料相談する
          </Link>
        </div>
      </section>
    </>
  );
}
