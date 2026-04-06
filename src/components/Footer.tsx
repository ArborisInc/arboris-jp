import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">株式会社Arboris</h3>
            <p className="text-sm leading-relaxed">
              現場に寄り添い、本質的課題を解決する
              <br />
              システムとAIを届けます。
            </p>
          </div>
          <div>
            <h4 className="text-white text-sm font-bold mb-4">メニュー</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">会社概要</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">事業内容</Link></li>
              <li><Link href="/cases" className="hover:text-white transition-colors">開発実績</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-bold mb-4">会社情報</h4>
            <ul className="space-y-2 text-sm">
              <li>東京都新宿区四谷坂町</li>
              <li>設立: 2025年11月5日</li>
              <li>代表: 井上 大樹</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          &copy; {new Date().getFullYear()} Arboris Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
