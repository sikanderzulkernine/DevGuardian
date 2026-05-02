import bundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const scriptSrc = [
  "'self'",
  "'unsafe-inline'",
  "https://challenges.cloudflare.com",
  "https://www.googletagmanager.com",
  "https://www.google-analytics.com",
  "https://assets.calendly.com",
];

if (isDev) {
  scriptSrc.push("'unsafe-eval'");
  scriptSrc.push("https://va.vercel-scripts.com");
}

const baseCsp = [
  "default-src 'self'",
  `script-src ${scriptSrc.join(" ")}`,
  "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
  "img-src 'self' blob: data: https://www.googletagmanager.com https://www.google-analytics.com https://stats.g.doubleclick.net https://assets.calendly.com https://assets.vercel.com https://cdn.jsdelivr.net https://upload.wikimedia.org",
  "font-src 'self' data: https://assets.calendly.com",
  "connect-src 'self' https://challenges.cloudflare.com https://www.googletagmanager.com https://analytics.google.com https://www.google-analytics.com https://region1.google-analytics.com https://stats.g.doubleclick.net https://calendly.com https://api.calendly.com https://assets.calendly.com",
  "frame-src 'self' https://challenges.cloudflare.com https://www.googletagmanager.com https://calendly.com",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: baseCsp,
  },
  {
    key: "Content-Security-Policy-Report-Only",
    value: `${baseCsp}; report-uri /api/csp-report`,
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },
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
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
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

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
