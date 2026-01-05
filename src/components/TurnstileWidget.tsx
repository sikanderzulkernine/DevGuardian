'use client';

import { useEffect, useRef } from 'react';

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

    useEffect(() => {
        onVerifyRef.current = onVerify;
    }, [onVerify]);

    useEffect(() => {
        onErrorRef.current = onError;
    }, [onError]);

    useEffect(() => {
        let isCancelled = false;

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
                sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '',
                theme,
                callback: (token) => onVerifyRef.current(token),
                'error-callback': () => onErrorRef.current?.(),
                'expired-callback': () => onErrorRef.current?.(),
            });
        };

        ensureTurnstile()
            .then(renderWidget)
            .catch(() => onErrorRef.current?.());

        return () => {
            isCancelled = true;
            if (widgetIdRef.current && window.turnstile) {
                window.turnstile.remove(widgetIdRef.current);
                widgetIdRef.current = null;
            }
        };
    }, [theme]);

    return <div ref={containerRef} className="min-h-[65px] min-w-[300px]" />;
}
