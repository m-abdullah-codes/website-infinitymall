"use client";

import type { AnchorHTMLAttributes } from "react";
import { openDevModal } from "./devModalBus";

/**
 * An <a> for links with no real destination yet (social icons, prev/next
 * article cards). Keeps its given className/children, suppresses navigation,
 * and opens the site-wide "Under Development" dialog on click.
 */
export default function DevLink({
  children,
  href = "#",
  onClick,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault();
        onClick?.(event);
        openDevModal();
      }}
      {...props}
    >
      {children}
    </a>
  );
}
