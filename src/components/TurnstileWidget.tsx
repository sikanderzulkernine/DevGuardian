'use client';

import { useEffect, useRef, useState } from 'react';
import { AlertCircle } from 'lucide-react';

declare global {
    interface Window {
        turnstile?: {
            render: (
                container: string | HTMLElement,
                options: {
                    sitekey: string;
                    theme?: 'light' | 'dark' | 'auto';
                    callback?: (token: string) => void;
                    'error-callback'?: () => void;
                    'expired-callback'?: () => void;
                }
            ) => string;
            remove: (widgetId: string) => void;
        };
    }
}

interface TurnstileWidgetProps {
    onVerify: (token: string) => void;
    onError?: () => void;
    theme?: 'light' | 'dark' | 'auto';
}

export function TurnstileWidget({ onVerify, onError, theme = 'auto' }: TurnstileWidgetProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);
    const onVerifyRef = useRef(onVerify);
    const onErrorRef = useRef(onError);
    const [loadError, setLoadError] = useState(false);
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

    useEffect(() => {
        onVerifyRef.current = onVerify;
    }, [onVerify]);

    useEffect(() => {
        onErrorRef.current = onError;
    }, [onError]);

    useEffect(() => {
        let isCancelled = false;

        if (!siteKey) {
            setLoadError(true);
            onErrorRef.current?.();
            return;
        }

        setLoadError(false);

        const ensureTurnstile = () =>
            new Promise<void>((resolve, reject) => {
                if (window.turnstile) {
                    resolve();
                    return;
                }

                const existingScript = document.querySelector(
                    'script[src^="https://challenges.cloudflare.com/turnstile/v0/api.js"]'
                );

                if (existingScript) {
                    existingScript.addEventListener('load', () => resolve(), { once: true });
                    existingScript.addEventListener('error', () => reject(new Error('Turnstile failed to load')), { once: true });
                    return;
                }

                const script = document.createElement('script');
                script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
                script.async = true;
                script.defer = true;
                script.addEventListener('load', () => resolve(), { once: true });
                script.addEventListener('error', () => reject(new Error('Turnstile failed to load')), { once: true });
                document.head.appendChild(script);
            });

        const renderWidget = () => {
            if (isCancelled || !window.turnstile || !containerRef.current) {
                return;
            }

            if (widgetIdRef.current) {
                window.turnstile.remove(widgetIdRef.current);
                widgetIdRef.current = null;
            }

            containerRef.current.innerHTML = '';
            widgetIdRef.current = window.turnstile.render(containerRef.current, {
                sitekey: siteKey,
                theme,
                callback: (token) => {
                    setLoadError(false);
                    onVerifyRef.current(token);
                },
                'error-callback': () => {
                    setLoadError(true);
                    onErrorRef.current?.();
                },
                'expired-callback': () => onErrorRef.current?.(),
            });
        };

        ensureTurnstile()
            .then(renderWidget)
            .catch(() => {
                setLoadError(true);
                onErrorRef.current?.();
            });

        return () => {
            isCancelled = true;
            if (widgetIdRef.current && window.turnstile) {
                window.turnstile.remove(widgetIdRef.current);
                widgetIdRef.current = null;
            }
        };
    }, [siteKey, theme]);

    if (!siteKey) {
        return (
            <div className="flex min-h-[65px] max-w-full items-center gap-2 rounded-md border border-amber-400/30 bg-amber-950/30 px-3 py-2 text-sm text-amber-100">
                <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Cloudflare Turnstile is not configured. Set NEXT_PUBLIC_TURNSTILE_SITE_KEY.</span>
            </div>
        );
    }

    if (loadError) {
        return (
            <div className="flex min-h-[65px] max-w-full items-center gap-2 rounded-md border border-amber-400/30 bg-amber-950/30 px-3 py-2 text-sm text-amber-100">
                <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Cloudflare Turnstile could not load. Check the site key domain and browser blockers.</span>
            </div>
        );
    }

    return <div ref={containerRef} className="min-h-[65px] min-w-[300px] max-w-full overflow-hidden" />;
}
