import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社Arboris（アーボリス）の会社概要。2025年設立、東京都新宿区。DX推進・AI導入・業務システム開発で製造・物流・建設・飲食業界を支援。",
  alternates: { canonical: "https://arboris.jp/about" },
  openGraph: {
    title: "会社概要 | 株式会社Arboris",
    description: "株式会社Arborisの会社概要・企業情報。2025年設立のDX推進・AI導入支援スタートアップ。",
    url: "https://arboris.jp/about",
  },
};

export default function AboutPage() {
  return <AboutSection />;
}
