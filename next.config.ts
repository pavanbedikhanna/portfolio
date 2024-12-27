import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  // Ensure static files are handled correctly
  distDir: 'out',
  cleanDistDir: true,
};

export default nextConfig;