import type { Metadata } from "next";
import CasesSection from "@/components/sections/CasesSection";

export const metadata: Metadata = {
  title: "開発実績",
  description:
    "株式会社Arborisの開発実績。物流DX（WMSリプレイス）、製造DX（デジタル指示書）、建設AI（チャットボット）、飲食DX（経営ダッシュボード）など。",
  alternates: { canonical: "https://arboris.jp/cases" },
  openGraph: {
    title: "開発実績 | 株式会社Arboris",
    description: "物流・製造・建設・飲食業界のDX推進事例をご紹介。",
    url: "https://arboris.jp/cases",
  },
};

export default function CasesPage() {
  return <CasesSection />;
}
