import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false, // Security: Hide Next.js header
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.vercel.com",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  // Disable Next.js hot reload (handled by nodemon for recompilation)
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable webpack's Hot Module Replacement (HMR)
      config.watchOptions = {
        ignored: ["**/*"], // Ignore all file changes
      };
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: "/legal/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/legal/terms",
        destination: "/terms-of-service",
        permanent: true,
      },
      {
        source: "/legal/security",
        destination: "/security",
        permanent: true,
      },
      {
        source: "/legal/responsible-disclosure",
        destination: "/responsible-disclosure",
        permanent: true,
      },
      {
        source: "/legal/report-issue",
        destination: "/responsible-disclosure#report",
        permanent: true,
      },
    ];
  },
};

// @ts-expect-error - next-pwa does not have types
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// @ts-expect-error - next-pwa does not have types
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
  // Important: We use src/app/manifest.ts, so we don't need next-pwa to manage it.
  // We just need the SW generation.
});

export default withBundleAnalyzer(withPWA(nextConfig));
