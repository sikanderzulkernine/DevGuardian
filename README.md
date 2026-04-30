# DevGuardian Website

Production Next.js 15 App Router site for DevGuardian.

## Stack

- Next.js 15, React 19, TypeScript
- Tailwind CSS 4 and PostCSS
- Radix/shadcn-style UI primitives
- next-themes in forced-dark mode
- Three.js / React Three Fiber for the deferred hero WebGL effect
- Resend contact email
- Cloudflare Turnstile bot protection
- Vercel deployment

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run type-check
npm run build
npm run knip
npm run analyze
```

`npm run analyze` sets `ANALYZE=true` and runs a production build with `@next/bundle-analyzer`.

## Vercel Environment Variables

Public browser variables:

```bash
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAACJLIE4--smjvroQ
NEXT_PUBLIC_SITE_URL=https://devguardian.site
NEXT_PUBLIC_GTM_ID=GTM-T5MJ5MRQ
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/dev-guardian/30min?hide_gdpr_banner=1
```

Private server-only variables:

```bash
TURNSTILE_SECRET_KEY=
RESEND_API_KEY=
RESEND_FROM_EMAIL="DevGuardian <team@devguardian.site>"
CONTACT_TO_EMAIL="team@devguardian.site"
RATE_LIMIT_MAX=5
RATE_LIMIT_WINDOW_MS=3600000
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
RATE_LIMIT_REDIS_PREFIX=contact
```

Upstash Redis is recommended on Vercel so contact form rate limiting is shared across serverless instances. Without it, the app falls back to an in-memory per-instance limiter.

Optional local/serverless temp-file fallbacks:

```bash
RATE_FILE_PATH=
LOG_PATH=
```

## Deployment Notes

Deploy with Vercel's Next.js preset. The app uses framework-native `next.config.ts` redirects and security headers; no custom build wrapper is required.

PWA service worker generation is intentionally not enabled. The site keeps its web app manifest and icons, but avoids a service worker for this marketing/contact site to prevent stale content and analytics/contact-form caching issues.
