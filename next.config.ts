import type { NextConfig } from "next";

const cspHeader = `
  default-src 'self';
  connect-src 'self' https://api.github.com;
  font-src 'self' data: https://*.gstatic.com;
  frame-src 'self' https://players.brightcove.net https://www.youtube.com https://*.hsforms.com https://*.hsforms.net https://*.hubspot.net https://*.hubspot.com https://*.cisco.com http://*.hsforms.net;
  frame-ancestors 'none';
  block-all-mixed-content;
  base-uri 'self';
  style-src 'self' 'unsafe-inline' https://*.googleapis.com;
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  img-src 'self' blob: data: https://*.amazonaws.com https://*.youtube.com https://*.ytimg.com;
`;

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_GITHUB_SECRET_API_KEY: process.env.NEXT_PUBLIC_GITHUB_SECRET_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async headers() {
    return [
      {
      source: "/:path*",
      headers: [
        {
        key: "X-Content-Type-Options",
        value: "nosniff",
        },
        {
        key: "X-Frame-Options",
        value: "SAMEORIGIN",
        },
        {
        key: "Referrer-Policy",
        value: "origin-when-cross-origin",
        },
        {
        key: "X-XSS-Protection",
        value: "1; mode=block",
        },
        {
        key: "Permissions-Policy",
        value: "clipboard-read=*, clipboard-write=*",
        },
        {
        key: "Content-Security-Policy",
        value: cspHeader.replace(/\n/g, '')
        },
      ],
      },

    ];
  },
};

export default nextConfig;
