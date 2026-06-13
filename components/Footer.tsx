import Link from "next/link";

const EXPLORE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/insights", label: "Blog" },
];

const PORTFOLIO_LINKS = [
  { href: "/delivered-projects", label: "Delivered Projects" },
  { href: "/ongoing-projects", label: "Ongoing Projects" },
  { href: "/insights/top-luxury-projects", label: "Editorial Feature" },
];

/**
 * Unified site footer with responsive column layout.
 */
export default function Footer() {
  return (
    <footer className="relative w-full pt-16 sm:pt-20 md:pt-section-gap pb-8 sm:pb-technical-grid bg-obsidian border-t border-platinum/10 font-body-md text-body-md overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 px-safe-margin gap-10 sm:gap-8 lg:gap-gutter max-w-[1600px] mx-auto">
        {/* Brand column */}
        <div className="sm:col-span-2 lg:col-span-4">
          <div className="font-headline-lg text-4xl sm:text-headline-lg text-soft-ivory opacity-20 mb-6 sm:mb-10 lg:mb-12">
            INFINITY
          </div>
          <p className="text-platinum/50 max-w-sm mb-8 sm:mb-10 lg:mb-12 text-base leading-relaxed">
            Architectural Excellence Defined. Building the future of luxury
            living and commercial success across the region.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a
              className="w-11 h-11 sm:w-10 sm:h-10 border border-platinum/10 flex items-center justify-center hover:bg-muted-bronze active:scale-95 transition-all group"
              href="#"
              aria-label="Share"
            >
              <span className="material-symbols-outlined text-sm text-platinum group-hover:text-soft-ivory">
                share
              </span>
            </a>
            <a
              className="w-11 h-11 sm:w-10 sm:h-10 border border-platinum/10 flex items-center justify-center hover:bg-muted-bronze active:scale-95 transition-all group"
              href="#"
              aria-label="Website"
            >
              <span className="material-symbols-outlined text-sm text-platinum group-hover:text-soft-ivory">
                public
              </span>
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="space-y-1 sm:space-y-4 pt-2 sm:pt-0 border-t border-platinum/5 sm:border-t-0">
          <h4 className="font-label-caps text-label-caps text-soft-ivory mb-4 sm:mb-6 pt-6 sm:pt-0">
            EXPLORE
          </h4>
          {EXPLORE_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block font-body-md text-body-md text-platinum/50 hover:text-muted-bronze active:text-soft-ivory transition-colors py-1 min-h-[44px] sm:min-h-0 flex items-center"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="space-y-1 sm:space-y-4 pt-2 sm:pt-0 border-t border-platinum/5 sm:border-t-0">
          <h4 className="font-label-caps text-label-caps text-soft-ivory mb-4 sm:mb-6 pt-6 sm:pt-0">
            PORTFOLIO
          </h4>
          {PORTFOLIO_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block font-body-md text-body-md text-platinum/50 hover:text-muted-bronze active:text-soft-ivory transition-colors py-1 min-h-[44px] sm:min-h-0 flex items-center"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Headquarters */}
        <div className="sm:col-span-2 lg:col-span-4 pt-2 sm:pt-0 border-t border-platinum/5 sm:border-t-0">
          <h4 className="font-label-caps text-label-caps text-soft-ivory mb-4 sm:mb-6 pt-6 sm:pt-0">
            HEADQUARTERS
          </h4>
          <p className="text-platinum/50 mb-6 sm:mb-8 text-base leading-relaxed">
            Plot #42, Luxury District, Blue Area
            <br />
            Islamabad, Pakistan
          </p>
          <div className="p-6 sm:p-8 border border-platinum/10 glass-panel">
            <span className="font-technical-mono text-[11px] sm:text-technical-mono text-muted-bronze mb-2 block">
              DIRECT LINE
            </span>
            <span className="font-headline-md text-xl sm:text-headline-md text-soft-ivory">
              +92 51 000 0000
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 sm:mt-20 lg:mt-24 px-safe-margin border-t border-platinum/5 py-8 sm:py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8 max-w-[1600px] mx-auto">
        <span className="font-label-caps text-platinum/30 tracking-widest text-[11px] sm:text-[10px] leading-relaxed max-w-md">
          © 2024 INFINITY MALL &amp; RESIDENCE. ARCHITECTURAL EXCELLENCE
          DEFINED.
        </span>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 lg:gap-12 font-label-caps text-platinum/30 text-[10px] tracking-widest">
          <span>ALL RIGHTS RESERVED</span>
          <span>ISO 9001 CERTIFIED</span>
        </div>
      </div>
    </footer>
  );
}
