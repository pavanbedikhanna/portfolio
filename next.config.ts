import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  // Make sure CSS is processed correctly
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
