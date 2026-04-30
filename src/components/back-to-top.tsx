"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let frameId: number | null = null;
        const toggleVisibility = () => {
            if (frameId !== null) return;
            frameId = window.requestAnimationFrame(() => {
                frameId = null;
                setIsVisible(window.scrollY > 400);
            });
        };

        window.addEventListener("scroll", toggleVisibility, { passive: true });
        toggleVisibility();

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
            if (frameId !== null) {
                window.cancelAnimationFrame(frameId);
            }
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={cn(
                "fixed bottom-8 right-8 z-50 cursor-pointer rounded-full p-3 shadow-lg",
                "bg-primary text-primary-foreground",
                "hover:bg-primary/90 transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                "md:bottom-12 md:right-12",
                isVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90 pointer-events-none"
            )}
            aria-label="Back to top"
            aria-hidden={!isVisible}
            tabIndex={isVisible ? 0 : -1}
        >
            <ArrowUp className="h-6 w-6" />
        </button>
    );
}
