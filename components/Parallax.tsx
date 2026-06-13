"use client";

import { useEffect } from "react";

/**
 * Scroll parallax used by the About page (blueprint grids) and the
 * Delivered Projects hero title, ported from the inline page scripts.
 */
export default function Parallax({
  selector,
  speed,
}: {
  selector: string;
  speed: number;
}) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector);
    if (elements.length === 0) return;

    const onScroll = () => {
      const y = window.pageYOffset;
      elements.forEach((el) => {
        el.style.transform = `translateY(${y * speed}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      elements.forEach((el) => {
        el.style.transform = "";
      });
    };
  }, [selector, speed]);

  return null;
}
