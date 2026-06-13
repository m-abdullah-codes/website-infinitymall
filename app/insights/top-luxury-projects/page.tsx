import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InnerPageHero from "@/components/InnerPageHero";

export const metadata: Metadata = {
  title: "Top Luxury Projects in Islamabad",
  description:
    "Editorial feature: the top luxury projects redefining modern living in Islamabad — Infinity Mall, Royal Swiss J7 ICON, J7 Emporium and Radisson Blu.",
};

const INDEX_LINKS = [
  { number: "01", label: "Infinity Mall", href: "#infinity-mall" },
  { number: "02", label: "Royal Swiss", href: "#royal-swiss" },
  { number: "03", label: "J7 Emporium", href: "#j7-emporium" },
  { number: "04", label: "Radisson Blu", href: "#radisson" },
  { number: "05", label: "Investment Insights", href: "#investment" },
];

const INVESTMENT_STATS = [
  { value: "12%", label: "Annual Appreciation", span: false },
  { value: "2027", label: "Market Peak", span: false },
  { value: "AAA", label: "Credit Rating", span: true },
];

const PREV_ARTICLE = {
  href: "#",
  label: "Previous",
  title: "Sustainable Skyscrapers: The 2024 Audit",
};

const NEXT_ARTICLE = {
  href: "#",
  label: "Next Article",
  title: "Digital Twins: The Future of Property Management",
};

export default function TopLuxuryProjectsPage() {
  return (
    <div
      className="page-editorial font-body-md antialiased text-soft-ivory"
      data-reveal-margin="0px"
    >
      {/* ── Hero ── */}
      <InnerPageHero
        variant="editorial"
        eyebrow="Editorial Feature"
        eyebrowFlanked
        title="Top Luxury Projects in Islamabad:"
        titleAccent="Redefining Modern Living"
        meta={[
          { icon: "person", text: "By Ilyas" },
          { icon: "calendar_today", text: "July 2, 2025" },
          { icon: "schedule", text: "12 Min Read" },
        ]}
        backgroundImage='https://res.cloudinary.com/djnnc4xvt/image/upload/q_auto/f_auto/v1781337582/editorial_bxqccm.png'
        backgroundImageAlt="Modern skyscraper in Islamabad at dusk"
        showScroll
      />

      <main className="relative bg-obsidian blueprint-grid">
        {/* Intro lede */}
        <section className="px-safe-margin max-w-[1600px] mx-auto">
          <div className="editorial-lede reveal-on-scroll">
            <p className="editorial-lede__text">
              Islamabad&apos;s skyline is entering a new chapter — one defined
              not by volume, but by vision. From glassmorphic retail landmarks
              to internationally branded hospitality towers, these five projects
              represent the capital&apos;s most ambitious statement in luxury
              real estate.
            </p>
          </div>
        </section>

        {/* Mobile / tablet contents */}
        <section className="xl:hidden px-safe-margin max-w-[1600px] mx-auto pb-8 sm:pb-12 reveal-on-scroll">
          <details className="editorial-contents px-5 sm:px-6 py-4 sm:py-5">
            <summary className="flex items-center justify-between gap-4">
              <div>
                <span className="font-technical-mono text-[10px] text-muted-bronze uppercase tracking-[0.35em] block mb-1">
                  In This Feature
                </span>
                <span className="font-headline-md text-base sm:text-lg text-soft-ivory tracking-wide">
                  Article Contents
                </span>
              </div>
              <span
                className="editorial-contents__toggle-icon material-symbols-outlined text-platinum/50"
                aria-hidden
              >
                expand_more
              </span>
            </summary>
            <nav
              className="editorial-contents__list mt-5 pt-5 border-t border-platinum/10"
              aria-label="Article sections"
            >
              {INDEX_LINKS.map((link) => (
                <a
                  key={link.number}
                  href={link.href}
                  className="editorial-contents__link font-label-caps text-[11px] sm:text-xs tracking-widest uppercase text-platinum/60"
                >
                  <span className="editorial-contents__number">
                    {link.number}
                  </span>
                  {link.label}
                </a>
              ))}
            </nav>
          </details>
        </section>

        {/* Desktop sticky index */}
        <aside className="editorial-sticky-index hidden xl:block fixed left-6 2xl:left-10 top-1/2 -translate-y-1/2 z-40">
          <nav
            className="flex flex-col gap-6 border-l border-platinum/10 pl-6"
            aria-label="Article sections"
          >
            {INDEX_LINKS.map((link) => (
              <a
                key={link.number}
                className="group flex items-center gap-4"
                href={link.href}
              >
                <span className="text-technical-mono text-platinum/20 group-hover:text-soft-ivory transition-colors">
                  {link.number}
                </span>
                <span className="font-label-caps text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-all text-soft-ivory uppercase">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>
        </aside>

        {/* Section 1: Infinity Mall */}
        <section
          className="py-section-gap px-safe-margin max-w-[1600px] mx-auto scroll-mt-24"
          id="infinity-mall"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-5 reveal-on-scroll relative">
              <span className="editorial-section-number" aria-hidden>
                01
              </span>
              <div className="glass-panel editorial-glass-panel relative z-10">
                <span className="editorial-section-label block mb-4">
                  Flagship Destination
                </span>
                <h2 className="text-headline-md-fluid text-soft-ivory mb-5 sm:mb-6">
                  Infinity Mall: The New Architectural Pulse
                </h2>
                <p className="editorial-prose editorial-prose--lead mb-6 sm:mb-8">
                  A masterclass in glassmorphic design, Infinity Mall stands as
                  Islamabad&apos;s premier luxury destination. It is more than
                  a commercial hub; it&apos;s a cinematic experience defined by
                  flowing geometries and transparency.
                </p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 border-t border-platinum/10 pt-6 sm:pt-8">
                  <span className="px-3 py-1.5 border border-emerald-accent text-emerald-accent font-technical-mono text-[10px] sm:text-[11px]">
                    OPERATIONAL
                  </span>
                  <span className="font-label-caps text-[10px] sm:text-[11px] text-muted-bronze tracking-widest">
                    GUJAR KHAN JUNCTION
                  </span>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 reveal-on-scroll">
              <div className="relative overflow-hidden group">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD67V2OFFw9qVFjubMs59kokAtVuYggD-t7D-SxlPGnFgIAIfVTtoT_Ao7ha3njX-WkWZOmJeYeay0G0kYRRAZ4rES5vn55utj72SXWtqtrRcuvl9sGia5UMBL-VOrVrJ7p68JkGx5YwaPqvXOYIAWFEKU6NXZGTMtYmPX2jIobTMlAQEXhMN2fFk2wJmW9hHYqKkmHQezlJ8MdkL9oOAnS-Ff-w3b_7vtbLS2Dn6xVVvD2PvXLnC1PQPj-7mCAXhC671EgEG5vw"
                  alt="Infinity Mall glass facade reflecting the blue-hour sky"
                  width={1600}
                  height={600}
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="editorial-feature-image grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Royal Swiss J7 ICON */}
        <section
          className="py-section-gap bg-surface-container-low border-y border-platinum/5 scroll-mt-24"
          id="royal-swiss"
        >
          <div className="px-safe-margin max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row gap-10 md:gap-section-gap">
              <div className="md:w-1/2 flex flex-col justify-center order-2 md:order-1 reveal-on-scroll">
                <div className="w-full max-w-md md:ml-auto md:mr-0 mx-auto md:mx-0">
                  <span className="editorial-section-label block mb-4">
                    Hospitality Landmark
                  </span>
                  <h2 className="text-headline-fluid text-soft-ivory mb-6 sm:mb-8">
                    Royal Swiss J7 ICON
                  </h2>
                  <p className="editorial-prose mb-8 sm:mb-10">
                    Bridging the gap between a 5-star hotel and executive
                    residency, the J7 ICON is Islamabad&apos;s answer to
                    international flagship living. Each detail is engineered
                    for precision, from the double-height atrium to the infinity
                    rooftop pool.
                  </p>
                  <blockquote className="editorial-pull-quote">
                    An icon not just by name, but by sheer architectural
                    defiance.
                  </blockquote>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2 reveal-on-scroll">
                <div className="editorial-portrait-frame">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAglSlwJ27Remnoh4AmTumkz87fYIzo7h56rDOfoX2mM9cWcEAVvs8Zk2boo9QXmA3MjP_PXE5tCoSzsYEgmCdAKyoOa31kplyf7MwwClTmZbHKcf2hUKe2P4HW8FGJ1pSFRKuh_iGLLxKlM6tM0bW029hGXdkRQuWifOEAYr4mpmuwa1k9vDvG3UkqGAraNA0HC5YvR2pyH6yl3R3sDvw1GFHr-3tRbw5RWN5o9j56J9_XW7cRUQHkTGPOlHzG9-LvribVauk06g"
                    alt="Royal Swiss J7 ICON luxury hotel tower at night"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover mix-blend-overlay opacity-80"
                  />
                  <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 text-right z-10">
                    <p className="font-technical-mono text-[10px] text-soft-ivory/40 uppercase tracking-tighter">
                      Phase I Completion: 2026
                    </p>
                    <p className="text-headline-md-fluid text-platinum italic mt-1">
                      Grandeur Reimagined
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 & 4: J7 Emporium & Radisson */}
        <section className="py-section-gap px-safe-margin max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8 reveal-on-scroll scroll-mt-24" id="j7-emporium">
              <div className="glass-panel editorial-emporium-card h-full relative overflow-hidden group">
                <div className="editorial-emporium-card__inner relative z-10 flex flex-col justify-end h-full">
                  <span className="editorial-section-label block mb-3">
                    Mixed-Use Marvel
                  </span>
                  <h3 className="text-headline-fluid text-soft-ivory mb-3 sm:mb-4">
                    J7 Emporium
                  </h3>
                  <p className="editorial-prose max-w-xl">
                    The nexus of retail and lifestyle. This mixed-use marvel
                    integrates a shopping experience with premium corporate
                    suites, creating a seamless urban ecosystem.
                  </p>
                </div>
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxhxXH0UmOSPNAxjCZb3yclw8ehRCLRfXz82IR8ua1SkyjiDtmd-KqUu291a42otq3jJ0vNXF7htq2B7uYMNHFj7iDmQEbsICDHJD-tSOQzELfRV_8hqu9tZNG7Zy5bP6ZE2FnmZXXKq2B5jcuaXZWqvHdAsOFx3nXlEqr7qSPJhzntMHfMUzEPGzH7UowDaDLx3RQVTZmfGbdcGKKeqdCuO_4Qy5Rd_Wp_Kn0IcHlbu_1_-Z9eqJzuG5XmT9C4v4CFb6LiJklwQ"
                  alt="J7 Emporium mixed-use development plaza"
                  fill
                  sizes="(min-width: 768px) 66vw, 100vw"
                  className="object-cover opacity-20 grayscale group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>

            <div
              className="md:col-span-4 reveal-on-scroll scroll-mt-24"
              id="radisson"
            >
              <div className="border border-platinum/10 h-full editorial-stat-panel bg-obsidian flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-muted-bronze text-3xl sm:text-4xl mb-6 sm:mb-8">
                    apartment
                  </span>
                  <span className="editorial-section-label block mb-3">
                    Global Hospitality
                  </span>
                  <h3 className="text-headline-md-fluid text-soft-ivory mb-3 sm:mb-4">
                    Radisson Blu
                  </h3>
                  <p className="editorial-prose">
                    International standards meet local prestige. A signature
                    project representing global hospitality excellence in the
                    heart of the capital.
                  </p>
                </div>
                <div className="mt-8 sm:mt-12">
                  <ul className="flex flex-col gap-3 sm:gap-4">
                    <li className="flex justify-between border-b border-platinum/10 pb-2">
                      <span className="font-technical-mono text-[11px] text-platinum/40">
                        STATUS
                      </span>
                      <span className="font-technical-mono text-[11px] text-soft-ivory">
                        PRE-LAUNCH
                      </span>
                    </li>
                    <li className="flex justify-between border-b border-platinum/10 pb-2">
                      <span className="font-technical-mono text-[11px] text-platinum/40">
                        YIELD
                      </span>
                      <span className="font-technical-mono text-[11px] text-soft-ivory">
                        8.5% PROJECTED
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Insight */}
        <section
          className="py-section-gap bg-obsidian scroll-mt-24"
          id="investment"
        >
          <div className="px-safe-margin max-w-4xl mx-auto editorial-insight-panel reveal-on-scroll">
            <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-obsidian px-4 sm:px-6">
              <span className="font-technical-mono text-muted-bronze tracking-[0.35em] sm:tracking-[0.4em] uppercase text-[10px]">
                Insider Perspective
              </span>
            </div>
            <div className="text-center">
              <h2 className="text-headline-fluid text-soft-ivory mb-6 sm:mb-8">
                The Investment Thesis
              </h2>
              <p className="editorial-prose editorial-prose--lead mb-10 sm:mb-12 italic max-w-2xl mx-auto">
                &quot;Islamabad&apos;s real estate market is maturing from
                speculative growth into value-driven asset creation. Projects
                like Infinity and the J7 portfolio are not just buildings; they
                are infrastructure for the future economy of Pakistan.&quot;
              </p>
              <div className="bento-grid bento-grid--editorial-insight">
                {INVESTMENT_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className={`text-center py-4 sm:py-0 ${
                      stat.span ? "bento-insight-stat--span" : ""
                    }`}
                  >
                    <p className="editorial-insight-stat__value text-outline mb-2">
                      {stat.value}
                    </p>
                    <p className="font-label-caps text-[10px] text-muted-bronze tracking-widest uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final Thoughts */}
        <section className="py-section-gap px-safe-margin max-w-2xl mx-auto text-center reveal-on-scroll">
          <h2 className="text-headline-md-fluid text-soft-ivory mb-6 sm:mb-8">
            Architectural Legacy
          </h2>
          <p className="editorial-prose mb-10 sm:mb-12">
            As Islamabad expands its vertical horizon, the distinction between
            &apos;premium&apos; and &apos;luxury&apos; becomes clear. These five
            projects represent the latter—a commitment to quality that transcends
            market trends and creates lasting value for generations.
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-px bg-platinum/20" />
            <p className="font-technical-mono text-technical-mono text-muted-bronze">
              END OF FEATURE
            </p>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="px-safe-margin pb-section-gap max-w-3xl mx-auto reveal-on-scroll">
          <div className="editorial-closing-cta text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:gap-8">
            <div className="mb-6 sm:mb-0">
              <span className="font-technical-mono text-[10px] text-muted-bronze uppercase tracking-[0.35em] block mb-2">
                Continue Reading
              </span>
              <h3 className="text-headline-md-fluid text-soft-ivory mb-2">
                Explore the Full Blog
              </h3>
              <p className="editorial-prose text-sm sm:text-base max-w-md mx-auto sm:mx-0">
                Investment analysis, architectural commentary, and market
                intelligence from the Infinity editorial desk.
              </p>
            </div>
            <Link
              href="/insights"
              className="btn-outline-luxury shrink-0 w-full sm:w-auto"
            >
              View All Blog
            </Link>
          </div>
        </section>

        {/* Previous / Next */}
        <section className="border-t border-platinum/10" aria-label="Article navigation">
          <div className="bento-grid bento-grid--editorial-nav">
            <a
              className="editorial-nav-card editorial-nav-card--prev group"
              href={PREV_ARTICLE.href}
            >
              <span className="editorial-nav-card__label">
                {PREV_ARTICLE.label}
              </span>
              <h4 className="editorial-nav-card__title group-hover:text-soft-ivory">
                {PREV_ARTICLE.title}
              </h4>
              <span
                className="editorial-nav-card__arrow material-symbols-outlined"
                aria-hidden
              >
                west
              </span>
            </a>
            <a
              className="editorial-nav-card editorial-nav-card--next group"
              href={NEXT_ARTICLE.href}
            >
              <span className="editorial-nav-card__label">
                {NEXT_ARTICLE.label}
              </span>
              <h4 className="editorial-nav-card__title group-hover:text-soft-ivory">
                {NEXT_ARTICLE.title}
              </h4>
              <span
                className="editorial-nav-card__arrow material-symbols-outlined"
                aria-hidden
              >
                east
              </span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
