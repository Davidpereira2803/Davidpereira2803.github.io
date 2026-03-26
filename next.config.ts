import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Davidpereira2803.github.io",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
