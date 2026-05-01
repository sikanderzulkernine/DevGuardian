"use client";

import { useEffect } from "react";

export function ServiceWorkerCleanup() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    let timeoutId: number | null = null;
    let idleId: number | null = null;
    const requestIdle = (window as Window & {
      requestIdleCallback?: (cb: () => void, options?: { timeout: number }) => number;
    }).requestIdleCallback;
    const cancelIdle = (window as Window & {
      cancelIdleCallback?: (id: number) => void;
    }).cancelIdleCallback;

    const cleanup = () => {
      navigator.serviceWorker
        .getRegistrations()
        .then((registrations) => {
          registrations.forEach((registration) => {
            registration.unregister().catch(() => undefined);
          });
        })
        .catch(() => undefined);
    };

    if (requestIdle) {
      idleId = requestIdle(cleanup, { timeout: 5000 });
    } else {
      timeoutId = window.setTimeout(cleanup, 5000);
    }

    return () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
      if (idleId !== null) {
        cancelIdle?.(idleId);
      }
    };
  }, []);

  return null;
}
