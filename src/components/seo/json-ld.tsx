import React from 'react';
import { absoluteUrl, contactEmail, siteName, siteUrl } from '@/lib/site';

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
    '@id': absoluteUrl('/#organization'),
    name: siteName,
    url: siteUrl,
    logo: absoluteUrl('/logo.webp'),
    email: contactEmail,
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
      email: contactEmail,
      areaServed: 'Worldwide',
      availableLanguage: ['English'],
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': absoluteUrl('/#website'),
    url: siteUrl,
    name: siteName,
    publisher: {
      '@id': absoluteUrl('/#organization'),
    },
  };

  return <JsonLd data={[organizationSchema, websiteSchema]} />;
}
