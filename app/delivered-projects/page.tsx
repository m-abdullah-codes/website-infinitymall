import type { Metadata } from "next";
import Image from "next/image";
import OutlineButton from "@/components/OutlineButton";
import InnerPageHero from "@/components/InnerPageHero";

const HERO_IMAGE = 'https://res.cloudinary.com/djnnc4xvt/image/upload/q_auto/f_auto/v1781337579/delivered_azo6rq.png';
export const metadata: Metadata = {
  title: { absolute: "Delivered Projects | INFINITY" },
  description:
    "A proven portfolio of completed and occupied developments across Islamabad, setting the benchmark for architectural precision and institutional trust.",
};

const TIMELINE = [
  {
    year: "2011",
    title: "Pine Villas Phase I",
    description:
      "The genesis of the Pine Series. Established a new standard for luxury residential living in the capital region.",
    dotColor: "bg-muted-bronze",
    side: "left",
    delay: "0ms",
  },
  {
    year: "2014",
    title: "Pine Villas II & Heights",
    description:
      "Concurrent delivery of high-rise luxury and horizontal expansion, doubling the community footprint.",
    dotColor: "bg-platinum",
    side: "right",
    delay: "100ms",
  },
  {
    year: "2018",
    title: "Phase III & Rehman Square",
    description:
      "Strategic entry into mixed-use commercial hubs, optimizing urban density and accessibility.",
    dotColor: "bg-platinum",
    side: "left",
    delay: "200ms",
  },
  {
    year: "2019",
    title: "J7 Mall",
    description:
      "A vertical milestone. One of Islamabad's most recognizable retail destinations delivered ahead of schedule.",
    dotColor: "bg-muted-bronze",
    side: "right",
    delay: "300ms",
  },
  {
    year: "2021",
    title: "Pine Villas Phase IV",
    description:
      "The final jewel in the Pine Series, cementing a decade-long commitment to premium residential occupancy.",
    dotColor: "bg-platinum",
    side: "left",
    delay: "400ms",
  },
];

const PORTFOLIO_STATS = [
  { value: "13+", label: "Years of Delivery", footnote: "2011 — 2024" },
  { value: "8", label: "Completed Projects", footnote: "All Occupied" },
  { value: "1,200+", label: "Residential Units", footnote: "Across Series" },
  { value: "400k", label: "Sq Ft Delivered", footnote: "Net Built Area" },
];

export default function DeliveredProjectsPage() {
  return (
    <div
      className="page-delivered font-body-md text-on-background overflow-x-clip"
      data-reveal-margin="-100px"
    >
      {/* ── Hero — full-bleed cinematic ── */}
      <InnerPageHero
        variant="delivered"
        eyebrow="Archive 2011 — 2024"
        eyebrowFlanked
        title={
          <>
            DELIVERED
            <br />
            PROJECTS
          </>
        }
        description="A proven portfolio of completed and occupied developments across Islamabad, setting the benchmark for architectural precision and institutional trust."
        chips={["13+ Years", "8 Projects", "1,200+ Occupied Units"]}
        backgroundImage={HERO_IMAGE}
        backgroundImageAlt="J7 Emporium glass facade with cantilevered balconies"
        backgroundImageClassName="object-cover object-center"
        showScroll
      />

      {/* ── Portfolio Overview — Credibility Stats ── */}
      <section className="py-0 bg-surface-container border-y border-platinum/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-platinum/5">
            {PORTFOLIO_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-surface-container p-6 md:p-10 reveal bento-card"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="font-technical-mono text-[10px] text-muted-bronze uppercase tracking-widest mb-3">
                  {stat.footnote}
                </div>
                <div
                  className="font-display-xl text-soft-ivory leading-none mb-2"
                  style={{
                    fontSize: "clamp(1.875rem, 6vw, 3.25rem)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {stat.value}
                </div>
                <div className="font-technical-mono text-[10px] text-platinum/35 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Legacy Timeline ── */}
      <section className="py-section-gap px-safe-margin bg-obsidian relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full blueprint-dots opacity-5 pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-24 reveal">
          <div>
            <span className="font-technical-mono text-muted-bronze text-[10px] uppercase tracking-widest block mb-3">
              Chronological Record
            </span>
            <h2 className="text-headline-fluid text-soft-ivory">
              Delivered Legacy
            </h2>
            <div className="h-px w-24 bg-muted-bronze mt-4" />
          </div>
          <div className="hidden md:block font-technical-mono text-platinum/30 text-right text-[11px] leading-relaxed">
            CHRONOLOGICAL EXECUTION DATA
            <br />
            VERIFIED BY INFRASTRUCTURE BOARD
          </div>
        </div>

        {/* Mobile timeline — editorial vertical rail */}
        <div className="md:hidden">
          {TIMELINE.map((entry, i) => (
            <div
              key={entry.year}
              className="relative pl-9 pb-12 last:pb-0 reveal"
              style={{ transitionDelay: entry.delay }}
            >
              {/* Vertical connector (omitted on last item) */}
              {i < TIMELINE.length - 1 && (
                <div
                  className="absolute left-[6px] top-3 bottom-0 w-px pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(140,126,106,0.55) 0%, rgba(209,213,216,0.06) 100%)",
                  }}
                />
              )}

              {/* Diamond marker */}
              <div
                className={`absolute left-0 top-[5px] w-3.5 h-3.5 rotate-45 ${entry.dotColor} border-2 border-obsidian`}
              />

              {/* Ghost year watermark */}
              <div
                className="font-display-xl text-soft-ivory/[0.07] leading-none select-none -ml-1 mb-2"
                style={{
                  fontSize: "clamp(2.5rem, 11vw, 5rem)",
                  letterSpacing: "-0.04em",
                }}
              >
                {entry.year}
              </div>

              {/* Content card */}
              <div className="glass-panel p-5 bento-card">
                <h3
                  className="font-display-xl text-soft-ivory leading-tight mb-2"
                  style={{ fontSize: "clamp(1.2rem, 4vw, 1.5rem)" }}
                >
                  {entry.title}
                </h3>
                <p className="text-platinum/60 text-sm leading-relaxed">
                  {entry.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop timeline — alternating */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-platinum/10" />
          <div className="space-y-gutter relative">
            {TIMELINE.map((entry) => (
              <div
                key={entry.year}
                className="flex flex-row items-center reveal"
                style={
                  entry.delay === "0ms"
                    ? undefined
                    : { transitionDelay: entry.delay }
                }
              >
                {entry.side === "left" ? (
                  <>
                    <div className="w-1/2 text-right pr-12">
                      <div className="font-display-xl text-headline-lg opacity-20 font-light">
                        {entry.year}
                      </div>
                      <h3 className="font-headline-md text-headline-md text-soft-ivory">
                        {entry.title}
                      </h3>
                      <p className="text-platinum/60 mt-2 max-w-md ml-auto">
                        {entry.description}
                      </p>
                    </div>
                    <div
                      className={`z-10 w-4 h-4 rounded-full ${entry.dotColor} border-4 border-obsidian`}
                    />
                    <div className="w-1/2 pl-12" />
                  </>
                ) : (
                  <>
                    <div className="w-1/2 pr-12" />
                    <div
                      className={`z-10 w-4 h-4 rounded-full ${entry.dotColor} border-4 border-obsidian`}
                    />
                    <div className="w-1/2 pl-12">
                      <div className="font-display-xl text-headline-lg opacity-20 font-light">
                        {entry.year}
                      </div>
                      <h3 className="font-headline-md text-headline-md text-soft-ivory">
                        {entry.title}
                      </h3>
                      <p className="text-platinum/60 mt-2 max-w-md">
                        {entry.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Case Studies (Asymmetric Bento) ── */}
      <section className="py-section-gap px-safe-margin bg-surface-container-lowest">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-section-gap reveal">
          <div>
            <span className="font-technical-mono text-muted-bronze text-[10px] uppercase tracking-widest block mb-3">
              Key Milestones
            </span>
            <h2 className="text-headline-fluid text-soft-ivory">
              Portfolio Case Studies
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter max-w-7xl mx-auto">

          {/* Pine Heights Luxury Apartments */}
          <div className="md:col-span-8 group relative overflow-hidden ghost-border glass-panel p-5 md:p-10 reveal flex flex-col min-h-[360px] md:min-h-0">
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/55 to-transparent opacity-90 z-10" />
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHDNBiuKWCTXawBiL3iqv8CSxdx8VO-F6ei1Qmwx_mu2e10hw7K1uGJU397dWrwPEJstcRsGHEKKc1SmCgZ9dFPf6XnX_zUusXHLCsO0ERwmn1Ee89iAjSy9RfDqfZfD5GegAXPe_BhtWC3d3Yec0-hkSQPIfgyRLKFUtKFL9QDJxLfwNxayGNPMlWq_FZ7VY319JndvnfU6s-B24yZgoDWKPSC3zp0ipjvnyXi-e5s-wc-gDKCLJZM88RODMGqtD-AOSd5lDszA"
              alt="Pine Heights luxury apartment complex at dusk"
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="relative z-20 mt-auto">
              <span className="font-technical-mono text-muted-bronze mb-2 text-[10px] block">
                01 / RESIDENTIAL FLAGSHIP
              </span>
              <h3
                className="font-display-xl text-soft-ivory mb-4 md:mb-6 leading-tight"
                style={{ fontSize: "clamp(1.6rem, 4.5vw, 4rem)" }}
              >
                Pine Heights Luxury Apartments
              </h3>
              <div className="grid grid-cols-3 gap-3 md:gap-8">
                <div>
                  <span className="block font-technical-mono text-platinum/40 text-[9px] uppercase mb-1">
                    Units
                  </span>
                  <span
                    className="font-headline-md text-soft-ivory leading-none"
                    style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)" }}
                  >
                    200+
                  </span>
                </div>
                <div>
                  <span className="block font-technical-mono text-platinum/40 text-[9px] uppercase mb-1">
                    Area
                  </span>
                  <span
                    className="font-headline-md text-soft-ivory leading-none"
                    style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)" }}
                  >
                    400k<span className="text-xs align-baseline ml-0.5">SF</span>
                  </span>
                </div>
                <div>
                  <span className="block font-technical-mono text-platinum/40 text-[9px] uppercase mb-1">
                    Status
                  </span>
                  <span
                    className="font-headline-md text-soft-ivory leading-none"
                    style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)" }}
                  >
                    Occupied
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* J7 Mall */}
          <div
            className="md:col-span-4 ghost-border glass-panel p-5 md:p-10 flex flex-col justify-between reveal bento-card"
            style={{ transitionDelay: "150ms" }}
          >
            <div>
              <span className="font-technical-mono text-muted-bronze mb-3 block text-[10px]">
                02 / COMMERCIAL LANDMARK
              </span>
              <h3
                className="font-display-xl text-soft-ivory mb-4 leading-tight"
                style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}
              >
                J7 Mall
              </h3>
              <p className="text-platinum/70 text-sm md:text-base leading-relaxed">
                Redefining the commercial landscape with an iconic structure
                that integrates global retail brands with local business
                excellence.
              </p>
            </div>
            <div className="mt-6 md:mt-8 border-t border-platinum/10 pt-5 md:pt-8">
              <div className="flex items-center gap-3 text-soft-ivory">
                <span
                  className="material-symbols-outlined text-muted-bronze"
                  style={{ fontSize: "20px" }}
                >
                  analytics
                </span>
                <span className="font-technical-mono text-[11px]">
                  98% Retail Occupancy
                </span>
              </div>
            </div>
          </div>

          {/* Rehman Square */}
          <div
            className="md:col-span-4 ghost-border glass-panel p-5 md:p-10 reveal bento-card"
            style={{ transitionDelay: "200ms" }}
          >
            <span className="font-technical-mono text-muted-bronze mb-3 block text-[10px]">
              03 / MIXED-USE
            </span>
            <h3
              className="font-display-xl text-soft-ivory mb-4 leading-tight"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}
            >
              Rehman Square
            </h3>
            <p className="text-platinum/70 mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
              Speed and precision. Delivered in record time, Rehman Square
              serves as a vital community hub for dining and professional
              services.
            </p>
            <div className="h-32 md:h-40 w-full spotlight relative overflow-hidden">
              <div className="absolute inset-0 blueprint-dots opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-muted-bronze text-4xl">
                  architecture
                </span>
              </div>
            </div>
          </div>

          {/* Pine Villas Series */}
          <div
            className="md:col-span-8 group relative overflow-hidden ghost-border glass-panel p-5 md:p-10 reveal flex flex-col min-h-[340px] md:min-h-0"
            style={{ transitionDelay: "250ms" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent z-10" />
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAthHPFXieOJeTs1Xbl7SoGLToF92SUDE-9v8Z048QUAhwrbps1CFFYXIMmKIK3uPpWrXhK88Q4c1Z2KFGCyKcDUhsdOShwRJ-AGz56BvaoeLH11kQ-pi8nlD8slpl7aS4aC_RsQ3a9ioyvFgSlvuB9u7809qOs66OU29Ip5Hixi_nbgr7e4Gq9z48uA0veHNFKDJ-DjTAMggAMkIh2uf5s5qbQQO7u36Ba54WG5pIgOdyOpopSe8j9kQNMaDNVNaxuk2-rqHiGrg"
              alt="Panoramic view of the Pine Villas luxury community at blue hour"
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="relative z-20 mt-auto max-w-lg">
              <span className="font-technical-mono text-muted-bronze mb-2 text-[10px] block">
                04 / EVOLUTIONARY TRUST
              </span>
              <h3
                className="font-display-xl text-soft-ivory mb-3 md:mb-4 leading-tight"
                style={{ fontSize: "clamp(1.6rem, 4.5vw, 4rem)" }}
              >
                Pine Villas Series I–IV
              </h3>
              <p className="text-platinum/70 mb-5 md:mb-8 text-sm md:text-base leading-relaxed">
                Four phases. One singular vision. The Pine Villas series
                represents our unwavering commitment to creating sustainable,
                secure, and prestigious gated communities over the last 13
                years.
              </p>
              <div className="flex flex-wrap gap-2 md:gap-4">
                <div className="px-3 py-1.5 md:px-4 md:py-2 border border-platinum/20 text-platinum text-[9px] md:text-[10px] font-technical-mono uppercase">
                  2011–2021
                </div>
                <div className="px-3 py-1.5 md:px-4 md:py-2 border border-platinum/20 text-platinum text-[9px] md:text-[10px] font-technical-mono uppercase">
                  1,200+ Residents
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Closing ── */}
      <section className="py-section-gap px-safe-margin bg-obsidian relative">
        <div className="max-w-4xl mx-auto text-center reveal">
          <span className="material-symbols-outlined text-muted-bronze text-5xl mb-8 block">
            verified_user
          </span>
          <h2 className="text-headline-fluid text-soft-ivory mb-8 md:mb-12 mx-auto max-w-3xl">
            Our delivered portfolio reflects a consistent commitment to
            planning, execution, occupancy, and long-term value.
          </h2>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-platinum/20 to-transparent mb-8 md:mb-12" />
          <OutlineButton className="px-10 md:px-12 py-4 md:py-5 duration-500">
            Schedule a Private Tour
          </OutlineButton>
        </div>
      </section>
    </div>
  );
}
