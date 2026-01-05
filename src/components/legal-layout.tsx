
import React from 'react';
import Link from 'next/link';

export default function LegalLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto px-6 py-12 md:py-24">
            <div className="flex flex-col md:flex-row gap-12">
                <aside className="w-full md:w-64 flex-shrink-0">
                    <nav className="sticky top-32 space-y-2">
                        <h3 className="font-semibold text-white mb-4 px-3">Legal & Security</h3>
                        {[
                            { href: '/legal/privacy', label: 'Privacy Policy' },
                            { href: '/legal/terms', label: 'Terms of Service' },
                            { href: '/legal/security', label: 'Security Policy' },
                            { href: '/legal/responsible-disclosure', label: 'Responsible Disclosure' },
                            { href: '/legal/report-issue', label: 'Report a Vulnerability' },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </aside>
                <div className="flex-grow max-w-3xl prose prose-invert prose-zinc">
                    {children}
                </div>
            </div>
        </div>
    );
}
