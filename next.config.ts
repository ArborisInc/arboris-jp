import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 旧ハッシュURLからのリダイレクト
  async redirects() {
    return [
      { source: "/#about", destination: "/about", permanent: true },
      { source: "/#services", destination: "/services", permanent: true },
      { source: "/#cases", destination: "/cases", permanent: true },
      { source: "/#contact", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
