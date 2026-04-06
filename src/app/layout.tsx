import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/noto-sans-jp/400.css";
import "@fontsource/noto-sans-jp/500.css";
import "@fontsource/noto-sans-jp/700.css";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "株式会社Arboris（アーボリス）| DX・AI導入支援",
    template: "%s | 株式会社Arboris",
  },
  description:
    "株式会社Arboris（アーボリス）は製造・物流・建設・飲食業界のDX推進・AI導入・業務システム開発を支援するスタートアップです。表面的な解決策ではなく、根本的課題に向き合い、事業の大樹を育てます。まずは無料相談よりお願いします。",
  keywords: [
    "株式会社Arboris",
    "Arboris",
    "アーボリス",
    "arboris",
    "アーボリス DX",
    "Arboris DX",
    "DX支援",
    "AI導入",
    "業務改善",
    "業務システム開発",
    "受託開発",
    "DXコンサルティング",
    "製造業DX",
    "物流DX",
    "建設DX",
    "飲食業DX",
    "スタートアップ",
    "arboris.jp",
  ],
  authors: [{ name: "株式会社Arboris", url: "https://arboris.jp" }],
  creator: "株式会社Arboris",
  publisher: "株式会社Arboris",
  metadataBase: new URL("https://arboris.jp"),
  alternates: {
    canonical: "https://arboris.jp",
  },
  openGraph: {
    title: "株式会社Arboris（アーボリス）| DX・AI導入支援",
    description:
      "株式会社Arboris（アーボリス）は製造・物流・建設・飲食業界のDX推進・AI導入・業務システム開発を支援します。土台を育て、深く根を張る。事業の大樹を育てる。",
    url: "https://arboris.jp",
    siteName: "株式会社Arboris",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社Arboris（アーボリス）| DX・AI導入支援",
    description:
      "株式会社Arboris（アーボリス）は製造・物流・建設・飲食業界のDX推進・AI導入を支援します。土台を育て、深く根を張る。事業の大樹を育てる。",
    site: "@arboris_jp",
    creator: "@arboris_jp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://arboris.jp/#organization",
    name: "株式会社Arboris",
    alternateName: ["Arboris", "アーボリス", "arboris"],
    url: "https://arboris.jp",
    logo: {
      "@type": "ImageObject",
      url: "https://arboris.jp/logo.png",
    },
    description:
      "製造・物流・建設・飲食業界のDX推進・AI導入・業務システム開発を支援するスタートアップ。根本的課題に向き合い、事業の大樹を育てます。",
    address: {
      "@type": "PostalAddress",
      addressCountry: "JP",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "Japanese",
      url: "https://arboris.jp/contact",
    },
    sameAs: ["https://arboris.jp"],
    foundingDate: "2025",
    knowsAbout: [
      "DX推進",
      "AI導入",
      "業務システム開発",
      "製造業デジタル化",
      "業務効率化",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://arboris.jp/#website",
    name: "株式会社Arboris",
    alternateName: "Arboris（アーボリス）",
    url: "https://arboris.jp",
    description:
      "株式会社Arboris（アーボリス）の公式サイト。DX・AI導入支援のスタートアップ。",
    publisher: {
      "@id": "https://arboris.jp/#organization",
    },
    inLanguage: "ja",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
