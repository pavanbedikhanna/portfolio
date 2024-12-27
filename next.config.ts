import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio', // your repository name
  assetPrefix: '/portfolio/', // add this line
};

export default nextConfig;