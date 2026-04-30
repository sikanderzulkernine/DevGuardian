"use client";

import { useEffect, useRef } from "react";

export function GoogleTagManager({ gtmId, delay = 5000 }: { gtmId: string; delay?: number }) {
    const hasLoadedRef = useRef(false);

    useEffect(() => {
        if (!gtmId) {
            return;
        }

        let timerId: number | null = null;

        const loadGtm = () => {
            if (hasLoadedRef.current) {
                return;
            }

            hasLoadedRef.current = true;

            const script = document.createElement("script");
            script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
            script.async = true;

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                "gtm.start": Date.now(),
                event: "gtm.js",
            });

            document.head.appendChild(script);
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
        dataLayer: Array<Record<string, unknown>>;
    }
}
