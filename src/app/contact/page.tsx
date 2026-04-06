import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

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
  return <ContactSection />;
}
