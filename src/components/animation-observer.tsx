"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR = "[data-reveal], .reveal-up";
const STAGGER_SELECTOR = "[data-reveal-stagger]";

export function AnimationObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;
    let frameId: number | null = null;

    const showAll = () => {
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((element) => {
        element.classList.add("is-visible");
      });
      root.classList.remove("reveal-ready");
    };

    const prepareStaggerGroups = () => {
      document.querySelectorAll<HTMLElement>(STAGGER_SELECTOR).forEach((group) => {
        Array.from(group.children).forEach((child, index) => {
          if (!(child instanceof HTMLElement)) {
            return;
          }

          const nestedReveal = child.matches(REVEAL_SELECTOR)
            ? child
            : child.querySelector<HTMLElement>(REVEAL_SELECTOR);
          const target = nestedReveal ?? child;

          if (!target.dataset.reveal && !target.classList.contains("reveal-up")) {
            target.dataset.reveal = "fade-up";
          }

          target.style.setProperty("--reveal-delay", `${Math.min(index * 70, 420)}ms`);
        });
      });
    };

    const scheduleObserve = () => {
      if (!observer || frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        prepareStaggerGroups();
        document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((element) => {
          if (!element.classList.contains("is-visible")) {
            observer?.observe(element);
          }
        });
      });
    };

    prepareStaggerGroups();

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      showAll();
      return;
    }

    root.classList.add("reveal-ready");

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer?.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.14,
      }
    );

    scheduleObserve();

    mutationObserver = new MutationObserver((mutations) => {
      const hasRevealChanges = mutations.some((mutation) =>
        Array.from(mutation.addedNodes).some((node) => {
          if (!(node instanceof HTMLElement)) {
            return false;
          }

          return (
            node.matches(REVEAL_SELECTOR) ||
            node.matches(STAGGER_SELECTOR) ||
            Boolean(node.querySelector(`${REVEAL_SELECTOR}, ${STAGGER_SELECTOR}`))
          );
        })
      );

      if (hasRevealChanges) {
        scheduleObserve();
      }
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    const handleMotionChange = () => {
      if (reduceMotion.matches) {
        observer?.disconnect();
        mutationObserver?.disconnect();
        showAll();
      }
    };

    reduceMotion.addEventListener("change", handleMotionChange);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      observer?.disconnect();
      mutationObserver?.disconnect();
      reduceMotion.removeEventListener("change", handleMotionChange);
      root.classList.remove("reveal-ready");
    };
  }, [pathname]);

  return null;
}
