import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname, '../'),
  serverExternalPackages: [],
};

// Next.js 16.3.5 turbopack configuration
// @ts-ignore
nextConfig.turbopack = {
  root: path.join(__dirname, '../'),
};

export default nextConfig;
