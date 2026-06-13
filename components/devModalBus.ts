/**
 * Tiny event bus that lets any element (including those rendered from server
 * components, which cannot receive function props) request the global
 * "Under Development" dialog. The dialog itself lives in
 * `components/UnderDevelopmentDialog.tsx`, mounted once in the root layout.
 */
export const DEV_MODAL_EVENT = "infinity:under-development";

/** Opens the site-wide "Under Development" dialog. */
export function openDevModal(): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(DEV_MODAL_EVENT));
  }
}
