import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'DevGuardian',
        short_name: 'DevGuardian',
        description: 'Secure AI Agents & Cybersecurity Solutions',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        icons: [
            {
                src: '/logo.webp',
                sizes: '192x192',
                type: 'image/webp',
            },
            {
                src: '/logo.webp',
                sizes: '512x512',
                type: 'image/webp',
            },
            {
                src: '/logo.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/logo.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
