"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Premium full-screen brand loader.
 *
 * The infinity mark is animated from a single sprite sheet (`/logo-sprite.png`,
 * 30 frames) via a pure-CSS `steps()` animation — so the draw begins on the very
 * first paint, before React hydrates, and stays smooth even while the page's
 * heavy assets (video, images, fonts) are still downloading.
 *
 * Dismissal rules:
 *  - waits until the window `load` event AND `document.fonts.ready`, and
 *  - always plays the full draw at least once (MIN_VISIBLE), even on a warm
 *    cache, and
 *  - force-dismisses after MAX_VISIBLE as a safety net so a user is never stuck.
 */

const MIN_VISIBLE = 2200; // ms — guarantees one full draw + a brief hold
const MAX_VISIBLE = 9000; // ms — hard safety cap if `load` never fires
const EXIT_DURATION = 900; // ms — must match the CSS exit transition

export default function Loader() {
  const [mounted, setMounted] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(6);

  const startRef = useRef<number>(Date.now());
  const rafRef = useRef<number | undefined>(undefined);

  const beginExit = useCallback(() => {
    setExiting((already) => {
      if (already) return already;
      // Snap the bar to 100% as the curtain lifts.
      setProgress(100);
      window.setTimeout(() => setMounted(false), EXIT_DURATION);
      return true;
    });
  }, []);

  useEffect(() => {
    startRef.current = Date.now();
    let assetsReady = false;

    // ── Determinate-ish progress: ease toward 90% while loading ──────────
    const tick = () => {
      setProgress((p) => {
        const target = assetsReady ? 96 : 90;
        if (p >= target) return p;
        // Ease-out: faster at first, slowing as it approaches the target.
        return p + Math.max(0.4, (target - p) * 0.018);
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    // ── Decide when we're allowed to leave ───────────────────────────────
    const tryExit = () => {
      const elapsed = Date.now() - startRef.current;
      const wait = Math.max(0, MIN_VISIBLE - elapsed);
      window.setTimeout(beginExit, wait);
    };

    const onAssetsReady = () => {
      if (assetsReady) return;
      assetsReady = true;
      tryExit();
    };

    // window `load` = all images / video / iframes have finished.
    const whenLoaded =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((resolve) =>
            window.addEventListener("load", () => resolve(), { once: true }),
          );

    // Fonts settle independently of `load`.
    const whenFonts = document.fonts?.ready ?? Promise.resolve();

    Promise.all([whenLoaded, whenFonts]).then(onAssetsReady);

    // Safety net.
    const hardCap = window.setTimeout(beginExit, MAX_VISIBLE);

    // Lock scroll while the loader owns the screen.
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.clearTimeout(hardCap);
      document.body.style.overflow = overflow;
    };
  }, [beginExit]);

  // Restore scroll the moment we commit to leaving (don't wait for unmount).
  useEffect(() => {
    if (exiting) document.body.style.overflow = "";
  }, [exiting]);

  if (!mounted) return null;

  return (
    <div
      className={`loader${exiting ? " loader--exit" : ""}`}
      role="progressbar"
      aria-label="Loading Infinity Mall & Residence"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
    >
      {/* Ambient depth */}
      <div className="loader__grid" aria-hidden="true" />
      <div className="loader__glow" aria-hidden="true" />

      {/* Architectural corner ticks — brand cohesion */}
      <span className="loader__tick loader__tick--tl" aria-hidden="true" />
      <span className="loader__tick loader__tick--tr" aria-hidden="true" />
      <span className="loader__tick loader__tick--bl" aria-hidden="true" />
      <span className="loader__tick loader__tick--br" aria-hidden="true" />

      <div className="loader__stage">
        <div className="loader__logo" aria-hidden="true" />

        <div className="loader__wordmark">INFINITY&nbsp;MALL &amp; RESIDENCE</div>

        <div className="loader__meter" aria-hidden="true">
          <span
            className="loader__meter-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="loader__caption">
          <span className="loader__caption-label">
            {exiting ? "Welcome" : "Preparing the experience"}
          </span>
          <span className="loader__caption-pct">
            {String(Math.round(progress)).padStart(3, "0")}
            <span className="loader__caption-unit">%</span>
          </span>
        </div>
      </div>
    </div>
  );
}
