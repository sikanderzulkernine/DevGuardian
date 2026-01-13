"use client";

import { useEffect, useRef, useState } from "react";

type LazyMountProps = {
  children: React.ReactNode;
  rootMargin?: string;
  minHeight?: number | string;
  className?: string;
};

export function LazyMount({
  children,
  rootMargin = "300px 0px",
  minHeight,
  className,
}: LazyMountProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      return;
    }

    const node = containerRef.current;
    if (!node) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    let observer: IntersectionObserver | null = null;

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setIsVisible(true);
        observer?.disconnect();
        observer = null;
      }
    };

    observer = new IntersectionObserver(handleIntersect, { rootMargin });
    observer.observe(node);

    return () => observer?.disconnect();
  }, [isVisible, rootMargin]);

  const style = minHeight ? { minHeight } : undefined;

  return (
    <div ref={containerRef} className={className} style={style}>
      {isVisible ? children : null}
    </div>
  );
}
