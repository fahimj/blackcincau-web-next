import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: __dirname },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Every page lives under a language prefix; English is the default.
    return [{ source: "/", destination: "/en", permanent: false }];
  },
};

export default nextConfig;
