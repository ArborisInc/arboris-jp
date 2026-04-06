import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "株式会社Arborisへのお問い合わせ。DX推進・AI導入・業務システム開発のご相談は初回無料。2営業日以内にご返信。全国対応（オンライン可）。",
  alternates: { canonical: "https://arboris.jp/contact" },
  openGraph: {
    title: "お問い合わせ | 株式会社Arboris",
    description: "DX推進・AI導入のご相談は初回無料。お気軽にお問い合わせください。",
    url: "https://arboris.jp/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="py-24 sm:py-32 relative grid-pattern">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-[#00e87b]/5 rounded-full blur-[120px]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#00e87b] text-sm font-bold tracking-widest uppercase mb-3">Contact</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            お問い合わせ
          </h1>
          <p className="mt-4 text-[#94a3b8]">
            初回相談無料・全国対応（オンライン可）・2営業日以内にご返信
          </p>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="card-dark rounded-xl p-8 sm:p-10">
            <form className="space-y-6">
              <div>
                <label htmlFor="company" className="block text-sm font-bold text-[#e2e8f0] mb-2">
                  会社名 <span className="text-[#00e87b]">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full bg-[#0a0f1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#64748b] focus:outline-none focus:border-[#00e87b]/50 focus:ring-1 focus:ring-[#00e87b]/50 transition-colors"
                  placeholder="株式会社○○"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-[#e2e8f0] mb-2">
                  お名前 <span className="text-[#00e87b]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-[#0a0f1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#64748b] focus:outline-none focus:border-[#00e87b]/50 focus:ring-1 focus:ring-[#00e87b]/50 transition-colors"
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-[#e2e8f0] mb-2">
                  メールアドレス <span className="text-[#00e87b]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-[#0a0f1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#64748b] focus:outline-none focus:border-[#00e87b]/50 focus:ring-1 focus:ring-[#00e87b]/50 transition-colors"
                  placeholder="info@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-[#e2e8f0] mb-2">
                  ご相談内容 <span className="text-[#00e87b]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full bg-[#0a0f1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#64748b] focus:outline-none focus:border-[#00e87b]/50 focus:ring-1 focus:ring-[#00e87b]/50 transition-colors resize-none"
                  placeholder="ご相談内容をお書きください"
                />
              </div>
              <button type="submit" className="btn-primary w-full text-center text-lg">
                送信する
              </button>
            </form>
          </div>

          <div className="mt-8 card-dark rounded-xl p-8">
            <h2 className="text-lg font-bold text-white mb-4">お問い合わせについて</h2>
            <ul className="space-y-3">
              {[
                "ご返信は2営業日以内にメールにてお送りします",
                "初回のご相談は無料です",
                "全国対応しています（オンラインミーティング可）",
                "具体的なご要件が未定でもお気軽にご相談ください",
              ].map((text) => (
                <li key={text} className="text-sm text-[#94a3b8] flex items-start gap-3">
                  <span className="text-[#00e87b] mt-0.5 shrink-0">&#10003;</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
