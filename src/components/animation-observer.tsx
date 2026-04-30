"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal], .reveal-up";
const STAGGER_SELECTOR = "[data-reveal-stagger]";

export function AnimationObserver() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

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

    prepareStaggerGroups();

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      showAll();
      return;
    }

    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.14,
      }
    );

    document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((element) => {
      observer.observe(element);
    });

    const handleMotionChange = () => {
      if (reduceMotion.matches) {
        observer.disconnect();
        showAll();
      }
    };

    reduceMotion.addEventListener("change", handleMotionChange);

    return () => {
      observer.disconnect();
      reduceMotion.removeEventListener("change", handleMotionChange);
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
