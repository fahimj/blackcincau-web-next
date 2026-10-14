import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: __dirname },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // The old address moved to blackcincau.com. Keep this first so it wins
      // over the language redirect, and keep it permanent (301) so search
      // engines transfer the old address's ranking.
      {
        source: "/:path*",
        has: [{ type: "host", value: "(www\\.)?blackcincau\\.my\\.id" }],
        destination: "https://blackcincau.com/:path*",
        permanent: true,
      },
      // Every page lives under a language prefix; English is the default.
      { source: "/", destination: "/en", permanent: false },
    ];
  },
};

export default nextConfig;
