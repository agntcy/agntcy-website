import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_GITHUB_SECRET_API_KEY: process.env.NEXT_PUBLIC_GITHUB_SECRET_API_KEY,
  },
  // other config options here
};

export default nextConfig;
