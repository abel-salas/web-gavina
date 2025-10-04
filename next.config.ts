import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ensure TypeScript compilation is strict
    tsconfigPath: './tsconfig.json',
  },
  // Moved from experimental to main config
  typedRoutes: true,
};

export default nextConfig;
