"use client";

import { useEffect, useRef } from "react";

interface CountUpProps {
  value: string | number;
  duration?: number;
  className?: string;
}

export function CountUp({ value, duration = 3600, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const stringValue = value.toString();
  const numberMatch = stringValue.match(/(\d+(?:\.\d+)?)/);
  const number = numberMatch ? Number.parseFloat(numberMatch[0]) : 0;
  const numberText = numberMatch?.[0] ?? "0";
  const index = stringValue.indexOf(numberText);
  const prefix = index > -1 ? stringValue.slice(0, index) : "";
  const suffix = index > -1 ? stringValue.slice(index + numberText.length) : "";
  const decimals = numberText.includes(".") ? numberText.split(".")[1].length : 0;

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      node.textContent = stringValue;
      return;
    }

    let frameId: number | null = null;
    let startTime = 0;

    const render = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = number * eased;
      node.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`;

      if (progress < 1) {
        frameId = window.requestAnimationFrame(render);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        observer.disconnect();
        frameId = window.requestAnimationFrame(render);
      },
      { rootMargin: "40px" }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [decimals, duration, number, prefix, stringValue, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {number === 0 ? numberText : "0"}
      {suffix}
    </span>
  );
}
