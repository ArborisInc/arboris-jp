import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arboris.jp"),
  title: {
    default: "株式会社Arboris（アーボリス）| DX・AI導入支援",
    template: "%s | 株式会社Arboris",
  },
  description:
    "製造・物流・建設・飲食業界のDX推進・AI導入・業務システム開発を支援。現場に寄り添い、本質的課題を解決するシステムとAIを届けます。",
  keywords: [
    "DX支援",
    "AI導入",
    "業務システム開発",
    "DXコンサルティング",
    "物流DX",
    "製造DX",
    "建設DX",
    "受託開発",
    "株式会社Arboris",
    "アーボリス",
  ],
  authors: [{ name: "株式会社Arboris" }],
  creator: "株式会社Arboris",
  publisher: "株式会社Arboris",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://arboris.jp",
    siteName: "株式会社Arboris",
    title: "株式会社Arboris（アーボリス）| DX・AI導入支援",
    description:
      "製造・物流・建設・飲食業界のDX推進・AI導入・業務システム開発を支援。",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社Arboris（アーボリス）| DX・AI導入支援",
    description:
      "製造・物流・建設・飲食業界のDX推進・AI導入・業務システム開発を支援。",
  },
  alternates: {
    canonical: "https://arboris.jp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-noto-sans-jp)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
