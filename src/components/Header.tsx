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
    <header className="sticky top-0 z-50 bg-[#0a0f1a]/80 backdrop-blur-xl border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="gradient-text">Arboris</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#94a3b8] hover:text-white transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm !py-2 !px-5">
            DX無料診断
          </Link>
        </div>
      </nav>
    </header>
  );
}
