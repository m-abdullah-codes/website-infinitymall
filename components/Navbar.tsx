"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import OutlineButton from "./OutlineButton";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/delivered-projects", label: "Delivered" },
  { href: "/ongoing-projects", label: "Ongoing" },
  { href: "/insights", label: "Blog" },
];

/**
 * Unified top navigation with a polished full-screen mobile menu.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const showOverlay = scrolled || menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b ${
          showOverlay
            ? "bg-obsidian/95 backdrop-blur-xl border-platinum/10"
            : "bg-transparent backdrop-blur-none border-transparent lg:bg-obsidian/80 lg:backdrop-blur-xl lg:border-platinum/10"
        }`}
      >
        <nav
          className={`flex justify-between items-center px-safe-margin w-full mx-auto transition-all duration-500 ease-in-out ${
            scrolled ? "py-3 sm:py-4" : "py-4 sm:py-6"
          }`}
        >
          <Link
            href="/"
            className="font-headline-md text-lg sm:text-headline-md tracking-widest text-soft-ivory z-50 relative"
            onClick={closeMenu}
          >
            INFINITY
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden lg:flex gap-8 xl:gap-10 items-center">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`font-label-caps text-label-caps transition-colors duration-300 ${
                    pathname === href ||
                    (href === "/insights" && pathname.startsWith("/insights/"))
                      ? "text-soft-ivory border-b border-muted-bronze pb-1"
                      : "text-platinum/60 hover:text-soft-ivory"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 sm:gap-4 z-50 relative">
            <OutlineButton className="hidden sm:inline-flex px-6 lg:px-8 py-3 min-h-[44px]">
              Request a Call
            </OutlineButton>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="lg:hidden flex flex-col justify-center items-center w-11 h-11 border border-platinum/20 hover:border-platinum/40 transition-colors"
            >
              <span
                className={`block w-5 h-px bg-soft-ivory transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[3px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-soft-ivory my-1.5 transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-soft-ivory transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden mobile-nav-overlay transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto mobile-nav-open"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-safe-margin">
          {/* Decorative architectural line */}
          <div className="absolute top-20 inset-x-safe-margin h-px bg-platinum/10" />

          <nav className="flex-1 flex flex-col justify-center">
            <ul className="space-y-1">
              {NAV_LINKS.map(({ href, label }, i) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={closeMenu}
                    className={`mobile-nav-link block py-4 border-b border-platinum/5 font-headline-md text-2xl sm:text-3xl tracking-wide transition-colors ${
                      pathname === href ||
                      (href === "/insights" && pathname.startsWith("/insights/"))
                        ? "text-soft-ivory"
                        : "text-platinum/50 hover:text-soft-ivory"
                    }`}
                    style={{ transitionDelay: menuOpen ? `${i * 60 + 100}ms` : "0ms" }}
                  >
                    <span className="font-technical-mono text-[10px] text-muted-bronze mr-4 align-middle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className="mobile-nav-link space-y-4 pt-8 border-t border-platinum/10"
            style={{ transitionDelay: menuOpen ? "500ms" : "0ms" }}
          >
            <p className="font-technical-mono text-technical-mono text-platinum/40 uppercase tracking-widest text-[10px]">
              Direct Inquiry
            </p>
            <OutlineButton
              className="w-full py-4 min-h-[52px] text-center justify-center"
              onClick={closeMenu}
            >
              Request a Call
            </OutlineButton>
          </div>
        </div>
      </div>
    </>
  );
}
