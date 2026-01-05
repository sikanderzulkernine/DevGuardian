import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { caseStudies } from '@/data/case-studies';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/json-ld';
import { CaseStudiesList } from '@/components/case-studies-list';

export const metadata: Metadata = {
    title: 'Case Studies | DevGuardian - Success Stories & ROI',
    description: 'Explore how DevGuardian delivers value. Real-world case studies in AI Agents, Cybersecurity audits, and Secure Web Development.',
};

export default function CaseStudiesPage() {
    // SEO: ItemList Schema for the collection
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'DevGuardian Case Studies',
        description: 'A collection of our successful projects in AI and Security.',
        mainEntity: {
            '@type': 'ItemList',
            itemListElement: caseStudies.map((study, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                url: `https://devguardian.site/case-studies/${study.slug}`,
                name: study.title,
                description: study.subtitle || study.situation,
            })),
        },
    };

    return (
        <div className="min-h-screen bg-black text-foreground relative overflow-hidden">
            <JsonLd data={schema} />
            <CaseStudiesList />
        </div>
    );
}
