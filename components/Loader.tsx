"use client";

import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

/**
 * Premium full-screen brand loader.
 *
 * The infinity mark is animated from a single sprite sheet (`/logo-sprite.png`,
 * 30 frames) via a pure-CSS `steps()` animation — so the draw begins on the very
 * first paint, before React hydrates, and stays smooth even while the page's
 * heavy assets (video, images, fonts) are still downloading.
 *
 * It runs:
 *  - on the initial / hard load of any page — waits for the window `load` event
 *    AND `document.fonts.ready`, with a minimum on-screen time so the full draw
 *    always plays at least once (even on a warm cache); and
 *  - on every in-site navigation — replays a slightly quicker version, covering
 *    the incoming route before it paints so the transition feels branded.
 *
 * A hard cap force-dismisses the loader if `load` never fires, so a user is
 * never stuck.
 */

const FIRST_MIN = 2200; // ms — cold load: guarantees a full draw + brief hold
const NAV_MIN = 1600; // ms — in-site navigation: just enough for one draw
const MAX_VISIBLE = 9000; // ms — hard safety cap if `load` never fires
const EXIT_DURATION = 900; // ms — must match the CSS exit transition

// useLayoutEffect warns during SSR; fall back to useEffect on the server.
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Loader() {
  const pathname = usePathname();

  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(6);
  const [runId, setRunId] = useState(0);

  const firstRunStarted = useRef(false);
  const rafRef = useRef<number | undefined>(undefined);
  const timersRef = useRef<number[]>([]);
  const assetsReadyRef = useRef(false);
  const exitingRef = useRef(false);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((t) => window.clearTimeout(t));
    timersRef.current = [];
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  const beginExit = useCallback(() => {
    if (exitingRef.current) return;
    exitingRef.current = true;
    setExiting(true);
    setProgress(100);
    document.body.style.overflow = ""; // restore scroll the moment we commit
    const t = window.setTimeout(() => setVisible(false), EXIT_DURATION);
    timersRef.current.push(t);
  }, []);

  const startRun = useCallback(
    (mode: "initial" | "nav") => {
      clearTimers();
      exitingRef.current = false;
      assetsReadyRef.current = false;
      const startedAt = Date.now();
      const minVisible = mode === "initial" ? FIRST_MIN : NAV_MIN;

      setExiting(false);
      setProgress(6);
      setVisible(true);
      // Bump the key on navigation so the CSS draw restarts cleanly; the initial
      // run keeps key 0 so the pre-hydration draw continues without a jump.
      if (mode === "nav") setRunId((n) => n + 1);
      document.body.style.overflow = "hidden";

      // Determinate-ish progress: ease toward the target, faster at first.
      const tick = () => {
        setProgress((p) => {
          const target = assetsReadyRef.current ? 96 : 90;
          if (p >= target) return p;
          return p + Math.max(0.4, (target - p) * 0.02);
        });
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);

      const tryExit = () => {
        const wait = Math.max(0, minVisible - (Date.now() - startedAt));
        timersRef.current.push(window.setTimeout(beginExit, wait));
      };

      const onReady = () => {
        if (assetsReadyRef.current) return;
        assetsReadyRef.current = true;
        tryExit();
      };

      // On a cold load, wait for everything; on navigation `readyState` is
      // already "complete", so dismissal is governed purely by NAV_MIN.
      const whenLoaded =
        document.readyState === "complete"
          ? Promise.resolve()
          : new Promise<void>((resolve) =>
              window.addEventListener("load", () => resolve(), { once: true }),
            );
      const whenFonts = document.fonts?.ready ?? Promise.resolve();
      Promise.all([whenLoaded, whenFonts]).then(onReady);

      timersRef.current.push(window.setTimeout(beginExit, MAX_VISIBLE));
    },
    [beginExit, clearTimers],
  );

  // Kick off a run on first mount and on every route change.
  useIsoLayoutEffect(() => {
    startRun(firstRunStarted.current ? "nav" : "initial");
    firstRunStarted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(
    () => () => {
      clearTimers();
      document.body.style.overflow = "";
    },
    [clearTimers],
  );

  if (!visible) return null;

  return (
    <div
      key={runId}
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
