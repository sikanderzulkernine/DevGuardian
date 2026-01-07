import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import { BackToTop } from "@/components/back-to-top";
import { GlobalJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  metadataBase: new URL('https://devguardian.site'),
  title: {
    default: "DevGuardian - Your Partner for Secure Online Growth",
    template: "%s | DevGuardian"
  },
  description: "AI agents, secure web apps, and cybersecurity guidance for modern organizations.",
  keywords: ["AI Agents", "Cybersecurity", "Secure Web Development", "Penetration Testing", "AI Automation"],
  authors: [{ name: "DevGuardian Team" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "DevGuardian- Your Partner for Secure Online Growth",
    description: "secure web apps, AI agents, and cybersecurity guidance for modern organizations.",
    url: "https://devguardian.site",
    siteName: "DevGuardian",
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
    title: "DevGuardian- Your Partner for Secure Online Growth",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T5MJ5MRQ');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`font-sans antialiased bg-background text-foreground`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T5MJ5MRQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <GlobalJsonLd />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <BackToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
