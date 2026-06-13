"use client";

import type { ButtonHTMLAttributes } from "react";
import OutlineButton from "./OutlineButton";
import { openDevModal } from "./devModalBus";

/**
 * The signature OutlineButton wired to open the "Under Development" dialog.
 * Used for placeholder CTAs (e.g. "Request a Call", "View Floorplans") so they
 * stay visually identical while becoming functional.
 */
export default function DevOutlineButton({
  children,
  onClick,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <OutlineButton
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) openDevModal();
      }}
      {...props}
    >
      {children}
    </OutlineButton>
  );
}
