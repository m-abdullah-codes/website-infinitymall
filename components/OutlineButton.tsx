import type { ButtonHTMLAttributes } from "react";

/**
 * Signature CTA button: 1px Soft Ivory outline, label-caps typography,
 * fills with ivory on hover (per DESIGN.md). Sizing/extra styles come in
 * through className since the exports varied padding per context.
 */
export default function OutlineButton({
  className = "",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`border border-soft-ivory font-label-caps text-label-caps text-soft-ivory hover:bg-soft-ivory hover:text-obsidian transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
