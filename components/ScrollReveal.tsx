"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Re-implements the IntersectionObserver scroll-reveal script that every
 * Stitch page shipped inline. Pages can tune the observer's bottom root
 * margin (it varied between exports) via a `data-reveal-margin` attribute
 * on their wrapper element.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const wrapper = document.querySelector<HTMLElement>("[data-reveal-margin]");
    const margin = wrapper?.dataset.revealMargin ?? "-50px";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active", "visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: `0px 0px ${margin} 0px` },
    );

    document
      .querySelectorAll(".scroll-reveal, .reveal-on-scroll, .reveal")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
