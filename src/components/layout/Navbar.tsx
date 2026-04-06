"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "コンセプト", href: "/" },
  { label: "事業内容", href: "/services" },
  { label: "開発実績", href: "/cases" },
  { label: "会社概要", href: "/about" },
  { label: "お問い合わせ", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A192F]/95 backdrop-blur-md border-b border-[#233554]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 relative">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 28 L16 4"
                stroke="#64FFDA"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M16 14 L8 8"
                stroke="#64FFDA"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.8"
              />
              <path
                d="M16 10 L24 6"
                stroke="#64FFDA"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.8"
              />
              <path
                d="M16 18 L10 14"
                stroke="#64FFDA"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.6"
              />
              <path
                d="M16 16 L22 12"
                stroke="#64FFDA"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.6"
              />
              <circle cx="16" cy="28" r="2" fill="#64FFDA" opacity="0.5" />
            </svg>
          </div>
          <span className="text-[#E6F1FF] font-bold text-lg tracking-wide group-hover:text-[#64FFDA] transition-colors">
            Arboris
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <li key={item.href + item.label}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx + 0.3 }}
              >
                <Link
                  href={item.href}
                  className="text-sm text-[#8892B0] hover:text-[#64FFDA] transition-colors cursor-pointer font-medium"
                >
                  {item.label}
                </Link>
              </motion.div>
            </li>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="https://forms.gle/xh3cYEHpHv55DcoeA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[#64FFDA] text-[#64FFDA] text-sm font-medium rounded hover:bg-[#64FFDA]/10 transition-all"
            >
              DX無料診断
            </a>
          </motion.div>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#64FFDA] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#112240] border-t border-[#233554]"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors text-base w-full text-left block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://forms.gle/xh3cYEHpHv55DcoeA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 border border-[#64FFDA] text-[#64FFDA] text-sm font-medium rounded hover:bg-[#64FFDA]/10 transition-all"
                >
                  DX無料診断
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
