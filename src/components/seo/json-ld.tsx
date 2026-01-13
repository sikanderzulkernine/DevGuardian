import React from 'react';

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * Generic component to inject any JSON-LD schema
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Global Schema for Organization and WebSite (Site-wide)
 */
export function GlobalJsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://devguardian.site/#organization',
    name: 'DevGuardian',
    url: 'https://devguardian.site',
    logo: 'https://devguardian.site/logo.webp',
    email: 'team@devguardian.site',
    description: 'Premier agency for AI Agents, Cybersecurity audits, and Secure Web Development.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lalmatia Block C',
      addressLocality: 'Dhaka',
      addressRegion: 'Dhaka',
      addressCountry: 'BD',
    },
    sameAs: [
      'https://twitter.com/devguardian',
      'https://linkedin.com/company/devguardian',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'team@devguardian.site',
      areaServed: 'Worldwide',
      availableLanguage: ['English'],
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://devguardian.site/#website',
    url: 'https://devguardian.site',
    name: 'DevGuardian',
    publisher: {
      '@id': 'https://devguardian.site/#organization',
    },
  };

  return <JsonLd data={[organizationSchema, websiteSchema]} />;
}
