import Image from "next/image";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";

/* ─────────────────────────────────────────────────────────────────────────
   InnerPageHero — unified architectural hero system for all inner pages.

   Variant controls:
     • background gradient tint
     • blueprint texture style
     • typography scale
     • ghost symbol size / position

   Slots:
     rightColumn  — visual panel to the right of the text (About portrait,
                    Ongoing desktop stats). Hidden at bottom on mobile.
     bottomSlot   — full-width block anchored below content (filter rail).
     children     — appended inside iph__inner (mobile bentos, stat rows).
   ───────────────────────────────────────────────────────────────────────── */

export type InnerHeroVariant =
  | "default"
  | "about"
  | "delivered"
  | "ongoing"
  | "insights"
  | "editorial";

export interface InnerHeroMeta {
  icon: string;
  text: string;
}

export interface InnerPageHeroProps {
  variant?: InnerHeroVariant;

  /* Content */
  eyebrow?: string;
  /** When true, thin lines flank the eyebrow text on both sides (editorial style) */
  eyebrowFlanked?: boolean;
  /** Primary headline — accepts full JSX for line-breaks / italic spans */
  title: ReactNode;
  /** Second line of headline, rendered as italic/accent block */
  titleAccent?: ReactNode;
  description?: string;
  /** Small mono tags beneath description */
  chips?: string[];
  /** Author / date / read-time strip (editorial) */
  meta?: InnerHeroMeta[];
  cta?: { label: string; href: string };

  /* Scroll cue */
  showScroll?: boolean;

  /* Background */
  backgroundImage?: string;
  backgroundImageAlt?: string;
  /** Tailwind classes appended to the <Image> — e.g. "object-top" for tall buildings */
  backgroundImageClassName?: string;

  /* Decorative — huge faint character in background */
  ghostSymbol?: string;

  /* Layout slots */
  rightColumn?: ReactNode;
  bottomSlot?: ReactNode;
  children?: ReactNode;

  className?: string;
}

export default function InnerPageHero({
  variant = "default",
  eyebrow,
  eyebrowFlanked = false,
  title,
  titleAccent,
  description,
  chips,
  meta,
  cta,
  showScroll = true,
  backgroundImage,
  backgroundImageAlt = "",
  backgroundImageClassName = "object-cover",
  ghostSymbol,
  rightColumn,
  bottomSlot,
  children,
  className = "",
}: InnerPageHeroProps) {
  const isEditorial = variant === "editorial";
  const hasSplit = !!rightColumn && !isEditorial;

  /* About + Delivered use Parallax on .blueprint-dots-bronze */
  const textureCls =
    variant === "about" || variant === "delivered"
      ? "iph__bg-texture blueprint-dots-bronze"
      : "iph__bg-texture";

  return (
    <section className={`iph iph--${variant}${className ? ` ${className}` : ""}`}>

      {/* ── Background layers ──────────────────────────────────────── */}
      <div className="iph__bg" aria-hidden>
        <div className="iph__bg-gradient" />
        <div className={textureCls} />
        {backgroundImage && (
          <div className="iph__bg-image">
            <Image
              src={backgroundImage}
              alt={backgroundImageAlt}
              fill
              priority
              sizes="100vw"
              className={backgroundImageClassName}
            />
            <div className="iph__bg-overlay" />
          </div>
        )}
      </div>

      {/* ── Architectural decoration ────────────────────────────────── */}
      <div aria-hidden>
        <div className="iph__decor-h" />
        <div className="iph__decor-v" />
        {ghostSymbol && (
          <span className="iph__ghost" aria-hidden>
            {ghostSymbol}
          </span>
        )}
      </div>

      {/* ── Main content ─────────────────────────────────────────────── */}
      <div className="iph__inner">
        <div className={`iph__layout${hasSplit ? " iph__layout--split" : ""}`}>

          {/* Left / main copy column */}
          <div className="iph__col-main">

            {eyebrow && (
              <div className={`iph__eyebrow${eyebrowFlanked ? " iph__eyebrow--flanked" : ""}`}>
                <span className="iph__eyebrow-line" aria-hidden />
                <span className="iph__eyebrow-text">{eyebrow}</span>
                {eyebrowFlanked && <span className="iph__eyebrow-line" aria-hidden />}
              </div>
            )}

            <h1 className="iph__title reveal">
              {title}
              {titleAccent && (
                <span className="iph__title-accent">{titleAccent}</span>
              )}
            </h1>

            {description && (
              <p className="iph__desc reveal" style={{ transitionDelay: "120ms" }}>
                {description}
              </p>
            )}

            {chips && chips.length > 0 && (
              <div className="iph__chips reveal" style={{ transitionDelay: "200ms" }}>
                {chips.map((chip) => (
                  <span key={chip} className="iph__chip">{chip}</span>
                ))}
              </div>
            )}

            {meta && meta.length > 0 && (
              <div className="iph__meta reveal" style={{ transitionDelay: "200ms" }}>
                {meta.map((item, i) => (
                  <Fragment key={i}>
                    {i > 0 && <span className="iph__meta-sep" aria-hidden />}
                    <span className="iph__meta-item">
                      <span
                        className="material-symbols-outlined iph__meta-icon"
                        aria-hidden
                      >
                        {item.icon}
                      </span>
                      {item.text}
                    </span>
                  </Fragment>
                ))}
              </div>
            )}

            {cta && (
              <div className="iph__ctas reveal" style={{ transitionDelay: "280ms" }}>
                <Link href={cta.href} className="btn-outline-luxury">
                  {cta.label}
                </Link>
              </div>
            )}
          </div>

          {/* Right column — visual / stat panel */}
          {hasSplit && (
            <div className="iph__col-right">{rightColumn}</div>
          )}
        </div>

        {/* Below-layout slot: mobile bentos, stat rows */}
        {children}
      </div>

      {/* Bottom slot — anchored to bottom, outside iph__inner (filter rail) */}
      {bottomSlot && (
        <div className="iph__bottom-slot">{bottomSlot}</div>
      )}

      {/* Scroll cue */}
      {showScroll && (
        <div className="iph__scroll-chevron animate-bounce" aria-hidden>
          <span className="material-symbols-outlined text-soft-ivory/40 font-thin">
            expand_more
          </span>
        </div>
      )}

      {/* Bottom section connector */}
      <div className="iph__divider" aria-hidden />
    </section>
  );
}
