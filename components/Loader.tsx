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
 * It only dismisses once the page is genuinely *paint-ready*:
 *  - the window `load` event has fired,
 *  - `document.fonts.ready` has resolved, AND
 *  - above-the-fold media is actually displayable — videos have decoded their
 *    first frame (`loadeddata`) and visible images have decoded. This is the
 *    crucial bit: `window.load` does NOT wait for a <video> to have a frame, so
 *    without this the loader would vanish over a still-blank hero.
 *
 * A minimum on-screen time guarantees the draw always plays once (even on a warm
 * cache); a media timeout and a hard cap guarantee a user is never stuck.
 *
 * Runs on the initial load of any page and replays (a touch quicker) on every
 * in-site navigation, covering the incoming route before it paints.
 */

const FIRST_MIN = 2200; // ms — cold load: guarantees a full draw + brief hold
const NAV_MIN = 1600; // ms — in-site navigation: just enough for one draw
const MEDIA_TIMEOUT = 6000; // ms — stop waiting on a slow/broken hero asset
const MAX_VISIBLE = 10000; // ms — hard safety cap if a signal never fires
const EXIT_DURATION = 900; // ms — must match the CSS exit transition

// useLayoutEffect warns during SSR; fall back to useEffect on the server.
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Resolve once the above-the-fold media is ready to paint without a flash of
 * blank space. Never rejects; resolves early after `timeoutMs` regardless.
 */
function waitForMedia(timeoutMs: number): Promise<void> {
  if (typeof document === "undefined") return Promise.resolve();

  const waits: Promise<unknown>[] = [];

  try {
    const vh = window.innerHeight || 0;
    const inViewport = (el: Element) => {
      const r = el.getBoundingClientRect();
      // Within (or spanning) the first viewport, and actually laid out.
      return r.width > 0 && r.height > 0 && r.top < vh && r.bottom > 0;
    };

    // Videos: wait for the first decoded frame (HAVE_CURRENT_DATA = 2).
    document.querySelectorAll("video").forEach((v) => {
      if (v.readyState >= 2) return;
      waits.push(
        new Promise<void>((resolve) => {
          const done = () => {
            v.removeEventListener("loadeddata", done);
            v.removeEventListener("canplay", done);
            v.removeEventListener("error", done);
            resolve();
          };
          v.addEventListener("loadeddata", done, { once: true });
          v.addEventListener("canplay", done, { once: true });
          v.addEventListener("error", done, { once: true });
        }),
      );
    });

    // Decide which images to wait for: every priority / eager image (these are
    // the hero & LCP images the page author flagged as important — next/image
    // `priority` renders them with fetchpriority="high" + loading="eager"), plus
    // anything else currently above the fold.
    const targets = new Set<HTMLImageElement>();
    document
      .querySelectorAll<HTMLImageElement>(
        'img[fetchpriority="high"], img[loading="eager"]',
      )
      .forEach((img) => targets.add(img));
    document
      .querySelectorAll<HTMLImageElement>("img")
      .forEach((img) => {
        if (inViewport(img)) targets.add(img);
      });

    targets.forEach((img) => {
      const decode = () =>
        typeof img.decode === "function"
          ? img.decode().catch(() => undefined)
          : Promise.resolve();
      if (img.complete && img.naturalWidth > 0) {
        waits.push(decode());
        return;
      }
      waits.push(
        new Promise<void>((resolve) => {
          const onLoad = () => decode().then(() => resolve());
          img.addEventListener("load", onLoad, { once: true });
          img.addEventListener("error", () => resolve(), { once: true });
        }),
      );
    });
  } catch {
    return Promise.resolve();
  }

  if (waits.length === 0) return Promise.resolve();

  return Promise.race([
    Promise.all(waits).then(() => undefined),
    new Promise<void>((resolve) => window.setTimeout(resolve, timeoutMs)),
  ]);
}

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
      // already "complete", so this resolves immediately and the media/font
      // gates take over.
      const whenLoaded =
        document.readyState === "complete"
          ? Promise.resolve()
          : new Promise<void>((resolve) =>
              window.addEventListener("load", () => resolve(), { once: true }),
            );
      const whenFonts = document.fonts?.ready ?? Promise.resolve();
      // Give the route a frame to commit its hero before we scan the DOM.
      const whenMedia = new Promise<void>((resolve) => {
        requestAnimationFrame(() => waitForMedia(MEDIA_TIMEOUT).then(resolve));
      });

      Promise.all([whenLoaded, whenFonts, whenMedia]).then(onReady);

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
