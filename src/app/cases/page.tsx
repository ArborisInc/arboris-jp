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
    solution: "クラウド型WMS（倉庫管理システム）を導入。バーコードスキャンによるリアルタイム在庫管理と、作業指示のデジタル化を実現。",
    results: ["作業効率30%向上", "在庫差異ほぼゼロ", "出荷遅延の解消"],
    tags: ["物流", "WMS", "在庫管理", "業務効率化"],
    stat: "30%",
    statLabel: "作業効率向上",
  },
  {
    industry: "Manufacturing DX",
    title: "デジタル指示書・図面管理システム",
    challenge: "紙の指示書管理が属人化。担当者不在時に作業が止まり、引き継ぎコストが膨大だった。",
    solution: "図面・指示書のデジタル管理システムを構築。検索機能、バージョン管理、承認ワークフローを実装。",
    results: ["ペーパーレス達成", "引き継ぎ工数50%削減", "図面検索時間の大幅短縮"],
    tags: ["製造", "ペーパーレス", "図面管理", "業務改善"],
    stat: "50%",
    statLabel: "引き継ぎ工数削減",
  },
  {
    industry: "Construction AI",
    title: "現場特化型AIチャットボット",
    challenge: "熟練者の暗黙知が属人化。新人の質問対応に時間を取られ、現場の生産性が低下していた。",
    solution: "社内マニュアル・過去のQ&Aデータを学習させたAIチャットボットを開発。現場からスマホで即座に回答を取得可能に。",
    results: ["問い合わせ対応時間70%削減", "新人の自己解決率向上", "熟練者の負担軽減"],
    tags: ["建設", "AI", "チャットボット", "ナレッジ管理"],
    stat: "70%",
    statLabel: "対応時間削減",
  },
  {
    industry: "Food & Service",
    title: "経営ダッシュボード",
    challenge: "複数店舗のデータが散在。月次報告の作成に膨大な時間がかかり、リアルタイムな経営判断ができなかった。",
    solution: "POS・会計・予約データを統合した経営ダッシュボードを構築。店舗別・日別の売上・原価・人件費をリアルタイムで可視化。",
    results: ["月次報告工数80%削減", "リアルタイム経営判断が可能に", "店舗間比較による改善施策の迅速化"],
    tags: ["飲食", "ダッシュボード", "データ統合", "経営管理"],
    stat: "80%",
    statLabel: "報告工数削減",
  },
];

export default function CasesPage() {
  return (
    <>
      <section className="py-24 sm:py-32 relative grid-pattern">
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-[#00e87b]/5 rounded-full blur-[120px]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#00e87b] text-sm font-bold tracking-widest uppercase mb-3">Cases</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            開発実績
          </h1>
          <p className="mt-4 text-[#94a3b8]">
            物流・製造・建設・飲食、幅広い業界でDX推進を支援しています
          </p>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {cases.map((c) => (
            <article key={c.title} className="card-dark rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-8 py-4 border-b border-white/5">
                <span className="text-[#00e87b] text-sm font-bold tracking-widest uppercase">
                  {c.industry}
                </span>
                <div className="text-right">
                  <span className="text-[#00e87b] text-2xl font-bold">{c.stat}</span>
                  <span className="text-[#94a3b8] text-xs ml-2">{c.statLabel}</span>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-xl font-bold text-white mb-6">{c.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xs font-bold text-[#00e87b] tracking-widest uppercase mb-2">Challenge</h3>
                    <p className="text-sm text-[#94a3b8] leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#00e87b] tracking-widest uppercase mb-2">Solution</h3>
                    <p className="text-sm text-[#94a3b8] leading-relaxed">{c.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#00e87b] tracking-widest uppercase mb-2">Results</h3>
                    <ul className="space-y-1">
                      {c.results.map((r) => (
                        <li key={r} className="text-sm text-[#e2e8f0] flex items-start gap-2">
                          <span className="text-[#00e87b] mt-1">&#8226;</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {c.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#0d2818] to-[#0a0f1a]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00e87b]/5 rounded-full blur-[150px]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            貴社のDX推進もお任せください
          </h2>
          <Link href="/contact" className="btn-primary text-lg">
            無料相談する
          </Link>
        </div>
      </section>
    </>
  );
}
