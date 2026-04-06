import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: "事業内容",
  description:
    "株式会社Arborisの事業内容。受託開発（基幹・業務システム、Web/モバイルアプリ）、DXコンサルティング（業務改善・AI導入支援）、自社プロダクト開発。",
  alternates: { canonical: "https://arboris.jp/services" },
  openGraph: {
    title: "事業内容 | 株式会社Arboris",
    description: "受託開発・DXコンサルティング・AI導入支援・自社プロダクト開発。",
    url: "https://arboris.jp/services",
  },
};

export default function ServicesPage() {
  return <ServicesSection />;
}
