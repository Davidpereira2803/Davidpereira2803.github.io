import type { NextConfig } from "next";


const repoName = "Davidpereira2803.github.io";
const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: `/${repoName}`,
  basePath: `/${repoName}`,
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
