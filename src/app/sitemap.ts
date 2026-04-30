import { MetadataRoute } from 'next';
import { caseStudies } from '@/data/case-studies';
import { absoluteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    // Define route groups with specific SEO settings
    const routeConfig = [
        // Core & High Priority (Weekly)
        { path: '', priority: 1.0, freq: 'weekly' },
        { path: '/services/ai-agents', priority: 0.9, freq: 'weekly' },
        { path: '/services/cybersecurity', priority: 0.9, freq: 'weekly' },
        { path: '/services/web-development', priority: 0.9, freq: 'weekly' },
        { path: '/services/web-security', priority: 0.9, freq: 'weekly' },

        // Content & Medium-High Priority (Monthly)
        { path: '/case-studies', priority: 0.8, freq: 'monthly' },
        { path: '/about', priority: 0.8, freq: 'monthly' },
        { path: '/contact', priority: 0.8, freq: 'monthly' },
        { path: '/careers', priority: 0.7, freq: 'monthly' },

        // Legal & Low Priority (Yearly)
        { path: '/privacy-policy', priority: 0.3, freq: 'yearly' },
        { path: '/terms-of-service', priority: 0.3, freq: 'yearly' },
        { path: '/security', priority: 0.3, freq: 'yearly' },
        { path: '/responsible-disclosure', priority: 0.3, freq: 'yearly' },
    ] as const;

    const staticRoutes = routeConfig.map(({ path, priority, freq }) => ({
        url: absoluteUrl(path || '/'),
        lastModified,
        changeFrequency: freq as 'weekly' | 'monthly' | 'yearly',
        priority,
    }));

    const caseStudyRoutes = caseStudies.map((study) => ({
        url: absoluteUrl(`/case-studies/${study.slug}`),
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticRoutes, ...caseStudyRoutes];
}
