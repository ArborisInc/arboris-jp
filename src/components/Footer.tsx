import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#060a12] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">
              <span className="gradient-text">Arboris</span>
            </h3>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              現場に寄り添い、本質的課題を解決する
              <br />
              システムとAIを届けます。
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-4">メニュー</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-[#94a3b8] hover:text-[#00e87b] transition-colors duration-300">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#94a3b8] hover:text-[#00e87b] transition-colors duration-300">
                  事業内容
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-[#94a3b8] hover:text-[#00e87b] transition-colors duration-300">
                  開発実績
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#94a3b8] hover:text-[#00e87b] transition-colors duration-300">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-4">会社情報</h4>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              <li>東京都新宿区四谷坂町</li>
              <li>設立: 2025年11月5日</li>
              <li>代表: 井上 大樹</li>
            </ul>
          </div>
        </div>
        <div className="section-divider mt-8 mb-6" />
        <div className="text-center text-sm text-[#64748b]">
          &copy; {new Date().getFullYear()} Arboris Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
