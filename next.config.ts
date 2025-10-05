import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ensure TypeScript compilation is strict
    tsconfigPath: './tsconfig.json',
  },
  // Moved from experimental to main config
  typedRoutes: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.banyslagavina.cat',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
    qualities: [50, 75, 90, 100],
  },
};

export default nextConfig;
