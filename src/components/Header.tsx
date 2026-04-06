import Link from "next/link";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "会社概要" },
  { href: "/services", label: "事業内容" },
  { href: "/cases", label: "開発実績" },
  { href: "/contact", label: "お問い合わせ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900">
          Arboris
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors"
          >
            DX無料診断
          </Link>
        </div>
      </nav>
    </header>
  );
}
