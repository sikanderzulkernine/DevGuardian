import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/'],
            crawlDelay: 2, // Protect server resources
        },
        sitemap: 'https://devguardian.site/sitemap.xml',
        host: 'https://devguardian.site',
    };
}
