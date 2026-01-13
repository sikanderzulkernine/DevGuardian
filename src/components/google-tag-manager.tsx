"use client";

import { useEffect } from "react";
import Script from "next/script";

export function GoogleTagManager({ gtmId, delay = 5000 }: { gtmId: string; delay?: number }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            const script = document.createElement("script");
            script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
            script.async = true;
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            function gtag(...args: any[]) {
                (window.dataLayer as any).push(args);
            }
            gtag("js", new Date());
            gtag("config", gtmId);
        }, delay);

        return () => clearTimeout(timer);
    }, [gtmId, delay]);

    return (
        <noscript>
            <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
            />
        </noscript>
    );
}

declare global {
    interface Window {
        dataLayer: any[];
    }
}
