import { MetadataRoute } from 'next';
import { absoluteUrl, siteUrl } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/'],
            crawlDelay: 2, // Protect server resources
        },
        sitemap: absoluteUrl('/sitemap.xml'),
        host: siteUrl,
    };
}
