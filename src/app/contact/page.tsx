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
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            お問い合わせ
          </h1>
          <p className="mt-4 text-gray-600 text-center">
            初回相談無料・全国対応（オンライン可）・2営業日以内にご返信
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <form className="space-y-6">
            <div>
              <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-1">
                会社名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="株式会社○○"
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="山田 太郎"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="info@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">
                ご相談内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="ご相談内容をお書きください"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-md font-bold hover:bg-green-800 transition-colors"
            >
              送信する
            </button>
          </form>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              お問い合わせについて
            </h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>ご返信は2営業日以内にメールにてお送りします</li>
              <li>初回のご相談は無料です</li>
              <li>全国対応しています（オンラインミーティング可）</li>
              <li>具体的なご要件が未定でもお気軽にご相談ください</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
