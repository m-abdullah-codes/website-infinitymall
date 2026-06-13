"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { DEV_MODAL_EVENT } from "./devModalBus";

/**
 * Site-wide "Under Development" dialog, themed to the Infinity design system
 * (obsidian glass panel, muted-bronze accents, technical-mono detailing).
 * Mounted once in the root layout; opens when any element dispatches
 * `DEV_MODAL_EVENT` via `openDevModal()`.
 */
export default function UnderDevelopmentDialog() {
  // `render` keeps the node mounted through the exit transition; `open` drives
  // the enter/exit animation via the data-open attribute.
  const [render, setRender] = useState(false);
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    window.setTimeout(() => setRender(false), 320);
  }, []);

  // Listen for open requests from anywhere on the site.
  useEffect(() => {
    const onOpen = () => {
      setRender(true);
      // Next frame so the enter transition runs from the closed state.
      requestAnimationFrame(() => requestAnimationFrame(() => setOpen(true)));
    };
    window.addEventListener(DEV_MODAL_EVENT, onOpen);
    return () => window.removeEventListener(DEV_MODAL_EVENT, onOpen);
  }, []);

  // Lock scroll, wire up Escape, and move focus while open.
  useEffect(() => {
    if (!render) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    if (open) closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [render, open, close]);

  if (!render) return null;

  return (
    <div
      className="dev-modal"
      data-open={open}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dev-modal-title"
      onClick={close}
    >
      <div className="dev-modal__backdrop" />

      <div className="dev-modal__panel glass-panel" onClick={(e) => e.stopPropagation()}>
        {/* Blueprint corner detailing */}
        <span className="dev-modal__corner dev-modal__corner--tl" aria-hidden />
        <span className="dev-modal__corner dev-modal__corner--br" aria-hidden />

        <button
          ref={closeButtonRef}
          type="button"
          onClick={close}
          aria-label="Close"
          className="dev-modal__close"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div className="dev-modal__icon" aria-hidden>
          <span className="material-symbols-outlined">engineering</span>
        </div>

        <span className="dev-modal__eyebrow font-technical-mono">
          STATUS // IN PROGRESS
        </span>

        <h2 id="dev-modal-title" className="dev-modal__title font-headline-lg">
          Under Development
        </h2>

        <p className="dev-modal__body font-body-md">
          This feature is being meticulously crafted and will be unveiled soon.
          Thank you for your patience as we perfect every detail of the Infinity
          experience.
        </p>

        <div className="dev-modal__divider" />

        <div className="dev-modal__credit">
          <span className="dev-modal__credit-label font-technical-mono">
            DEVELOPED BY
          </span>
          <span className="dev-modal__credit-name font-headline-md">
            TurboSystems
          </span>
        </div>

        <button
          type="button"
          onClick={close}
          className="dev-modal__action font-label-caps"
        >
          Acknowledged
        </button>
      </div>
    </div>
  );
}
