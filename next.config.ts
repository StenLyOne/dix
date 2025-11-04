import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "localhost", port: "1337" },
      { protocol: "https", hostname: "*.strapiapp.com" },
    ],
    minimumCacheTTL: 31536000,
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
