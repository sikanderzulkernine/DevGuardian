'use client';

import React, { useState } from 'react';
import { Button, ButtonProps } from './ui/button';
import { Loader2 } from 'lucide-react';

export function CalendlyButton({ children, ...props }: ButtonProps) {
    const [isLoading, setIsLoading] = useState(false);

    const loadCalendly = (): Promise<void> => {
        return new Promise((resolve, reject) => {
            // If already loaded, resolve immediately
            // @ts-ignore
            if (window.Calendly) {
                resolve();
                return;
            }

            // Check if script is already appending but not ready
            if (document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
                // Poll for readiness
                const interval = setInterval(() => {
                    // @ts-ignore
                    if (window.Calendly) {
                        clearInterval(interval);
                        resolve();
                    }
                }, 100);
                return;
            }

            // Inject CSS
            if (!document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')) {
                const link = document.createElement('link');
                link.href = 'https://assets.calendly.com/assets/external/widget.css';
                link.rel = 'stylesheet';
                document.head.appendChild(link);
            }

            // Inject JS
            const script = document.createElement('script');
            script.src = 'https://assets.calendly.com/assets/external/widget.js';
            script.async = true;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error('Failed to load Calendly'));
            document.body.appendChild(script);
        });
    };

    const handleClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await loadCalendly();
            // @ts-ignore
            window.Calendly.initPopupWidget({ url: 'https://calendly.com/dev-guardian/30min?hide_gdpr_banner=1' });
        } catch (error) {
            console.error("Failed to load Calendly:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Button onClick={handleClick} disabled={isLoading} {...props}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            {children}
        </Button>
    );
}
