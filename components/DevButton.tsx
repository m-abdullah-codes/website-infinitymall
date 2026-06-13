"use client";

import type { ButtonHTMLAttributes } from "react";
import { openDevModal } from "./devModalBus";

/**
 * A drop-in <button> for CTAs that have no destination yet: it keeps whatever
 * className/children it is given (so the visual design is untouched) and opens
 * the site-wide "Under Development" dialog on click.
 */
export default function DevButton({
  children,
  onClick,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) openDevModal();
      }}
      {...props}
    >
      {children}
    </button>
  );
}
