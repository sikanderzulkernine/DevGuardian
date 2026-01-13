"use client";

import { useEffect, useRef } from "react";

export function GoogleTagManager({ gtmId, delay = 5000 }: { gtmId: string; delay?: number }) {
    const hasLoadedRef = useRef(false);

    useEffect(() => {
        let timerId: number | null = null;

        const loadGtm = () => {
            if (hasLoadedRef.current) {
                return;
            }

            hasLoadedRef.current = true;

            const script = document.createElement("script");
            script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
            script.async = true;
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            function gtag(...args: any[]) {
                (window.dataLayer as any[]).push(args);
            }
            gtag("js", new Date());
            gtag("config", gtmId);
        };

        const scheduleLoad = () => {
            if (timerId !== null || hasLoadedRef.current) {
                return;
            }
            timerId = window.setTimeout(loadGtm, delay);
        };

        const events: Array<keyof WindowEventMap> = [
            "pointerdown",
            "keydown",
            "touchstart",
            "scroll",
        ];

        function addListeners() {
            events.forEach((event) =>
                window.addEventListener(event, handleInteraction, { passive: true, once: true })
            );
        }

        function removeListeners() {
            events.forEach((event) => window.removeEventListener(event, handleInteraction));
        }

        function handleInteraction() {
            scheduleLoad();
            removeListeners();
        }

        addListeners();

        return () => {
            removeListeners();
            if (timerId !== null) {
                window.clearTimeout(timerId);
            }
        };
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
