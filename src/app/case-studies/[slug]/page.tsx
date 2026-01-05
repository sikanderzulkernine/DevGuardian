import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { caseStudies } from '@/data/case-studies';
import { CaseStudyDetailClient } from '@/components/case-study-detail-client';
import { JsonLd } from '@/components/seo/json-ld';

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;

    const study = caseStudies.find((item) => item.slug === slug);

    if (!study) {
        return {
            title: 'Case Study Not Found | DevGuardian',
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const title = `${study.title} | DevGuardian`;
    const description = study.subtitle || study.situation;
    const canonical = `https://devguardian.site/case-studies/${study.slug}`;

    return {
        title,
        description,
        alternates: {
            canonical,
        },
        openGraph: {
            title,
            description,
            url: canonical,
            type: 'article',
            images: [
                {
                    url: study.image,
                    alt: study.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [study.image],
        },
    };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
    const { slug } = await params;

    const study = caseStudies.find((item) => item.slug === slug);

    if (!study) {
        return notFound();
    }

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'CaseStudy',
        '@id': `https://devguardian.site/case-studies/${study.slug}#case-study`,
        name: study.title,
        description: study.subtitle || study.situation,
        url: `https://devguardian.site/case-studies/${study.slug}`,
        image: `https://devguardian.site${study.image}`,
        about: study.tags,
        provider: {
            '@id': 'https://devguardian.site/#organization',
        },
    };

    return (
        <>
            <JsonLd data={schema} />
            <CaseStudyDetailClient study={study} />
        </>
    );
}
