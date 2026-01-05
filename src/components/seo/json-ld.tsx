import React from 'react';
import { headers } from 'next/headers';

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * Generic component to inject any JSON-LD schema
 */
export async function JsonLd({ data }: JsonLdProps) {
  const nonce = (await headers()).get('x-nonce') ?? undefined;

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
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
    logo: 'https://devguardian.site/logo.png',
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
