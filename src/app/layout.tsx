import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { BackToTop } from "@/components/back-to-top";
import { GlobalJsonLd } from "@/components/seo/json-ld";
import { GoogleTagManager } from "@/components/google-tag-manager";
import { ThemeProvider } from "@/components/theme-provider";
import { ServiceWorkerCleanup } from "@/components/service-worker-cleanup";
import { AnimationObserver } from "@/components/animation-observer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { gtmId, siteName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DevGuardian - Your Partner for Secure Online Growth",
    template: "%s | DevGuardian"
  },
  description: "AI agents, secure web apps, and cybersecurity guidance for modern organizations.",
  authors: [{ name: "DevGuardian Team" }],
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
  openGraph: {
    title: "DevGuardian - Your Partner for Secure Online Growth",
    description: "secure web apps, AI agents, and cybersecurity guidance for modern organizations.",
    url: siteUrl,
    siteName,
    locale: 'en_US',
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "DevGuardian - Secure AI Agents & Cybersecurity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevGuardian - Your Partner for Secure Online Growth",
    description: "secure web apps, AI agents, and cybersecurity guidance for modern organizations.",
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <GoogleTagManager gtmId={gtmId} />
          <ServiceWorkerCleanup />
          <AnimationObserver />
          <GlobalJsonLd />
          {children}
          <BackToTop />
          <Toaster />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
