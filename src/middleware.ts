import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(_request: NextRequest) {
    const isDev = process.env.NODE_ENV === 'development';
    const scriptSrc = [
        "'self'",
        "'unsafe-inline'",
        'https://challenges.cloudflare.com',
        'https://www.googletagmanager.com',
        'https://www.google-analytics.com',
        'https://assets.calendly.com',
    ];

    if (isDev) {
        scriptSrc.push("'unsafe-eval'");
    }

    // CSP: Allow Cloudflare Turnstile, Resend, Vercel, and self
    // frame-src https://challenges.cloudflare.com is CRITICAL for Turnstile
    const cspHeader = [
        "default-src 'self';",
        `script-src ${scriptSrc.join(' ')};`,
        "style-src 'self' 'unsafe-inline' https://assets.calendly.com https://fonts.googleapis.com;",
        "img-src 'self' blob: data: https://res.cloudinary.com https://www.googletagmanager.com https://assets.calendly.com https://assets.vercel.com https://cdn.jsdelivr.net https://upload.wikimedia.org https://placehold.co https://www.google-analytics.com https://stats.g.doubleclick.net;",
        "font-src 'self' https://fonts.gstatic.com;",
        "object-src 'none';",
        "base-uri 'self';",
        "form-action 'self';",
        "frame-ancestors 'none';",
        "frame-src 'self' https://challenges.cloudflare.com https://www.googletagmanager.com https://calendly.com;",
        "connect-src 'self' https://challenges.cloudflare.com https://www.googletagmanager.com https://analytics.google.com https://www.google-analytics.com https://region1.google-analytics.com https://stats.g.doubleclick.net https://calendly.com https://api.calendly.com;",
    ].join(' ').replace(/\s{2,}/g, ' ').trim();

    const response = NextResponse.next();

    // Security Headers
    response.headers.set('Content-Security-Policy', cspHeader);
    response.headers.set('X-DNS-Prefetch-Control', 'on');
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), browsing-topics=()');

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        {
            source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
            missing: [
                { type: 'header', key: 'next-router-prefetch' },
                { type: 'header', key: 'purpose', value: 'prefetch' },
            ],
        },
    ],
};
