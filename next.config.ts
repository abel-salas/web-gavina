import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ensure TypeScript compilation is strict
    tsconfigPath: './tsconfig.json',
  },
  experimental: {
    // Force fresh compilation
    typedRoutes: true,
  },
};

export default nextConfig;
