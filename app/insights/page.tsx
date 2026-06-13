import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import OutlineButton from "@/components/OutlineButton";
import InnerPageHero from "@/components/InnerPageHero";

export const metadata: Metadata = {
  title: { absolute: "INFINITY | Blog" },
  description:
    "Stories on luxury living and smart investment — the Infinity Mall editorial journal.",
};

const EDITORIAL_HREF = "/insights/top-luxury-projects";

const FILTERS = ["Investment", "Architecture", "Lifestyle", "Retail Trends"];

const FEATURED = {
  href: EDITORIAL_HREF,
  eyebrow: "Featured Intelligence",
  title:
    "Unlocking Lucrative Investment Opportunities in Islamabad with Infinity Mall",
  excerpt:
    "An in-depth analysis of capital city dynamics and why vertical integration in commercial real estate remains the premier hedge against inflation.",
  author: "ILYAS",
  role: "Executive Strategy Lead",
  readTime: "12 Min Read",
  image:
    'https://res.cloudinary.com/djnnc4xvt/image/upload/q_auto/f_auto/v1781337579/insights_s2jk6z.png',
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCuW5kgOf-vzVTens_TwunBOV1uJT3HkJVe7UhcdU0SsqSVpFXrBRpXcBDZWDcLAYIL5vLHenR-2fm231eTi-VZRK3D6XV9i1nKvdbTWiDJrNnw7CyeF31b2oFFc862OrmpXSTITUPlwmvhs27RzxtSsNICHHtUbmdHgakUVtm2bNsMwqLOnJ34xcM8p4RPX4N9abcUP9b4uIPRLdsRk-0mjiI3tkGl8-wYwlM0XlOnm_TqFaHYnDq28RybAR56GXDJDgSk2E0lbQ",
};

export default function InsightsPage() {
  return (
    <div
      className="page-insights text-platinum antialiased"
      data-reveal-margin="-50px"
    >
      {/* ── Hero — full-bleed cinematic ── */}
      <InnerPageHero
        variant="insights"
        eyebrow="Volume IV | Blog"
        eyebrowFlanked
        title={
          <>
            Luxury Living{" "}
            <em className="iph__title-italic">&amp; Smart Investment</em>
          </>
        }
        backgroundImage={FEATURED.image}
        backgroundImageAlt="Luxury real estate investment editorial"
        backgroundImageClassName="object-cover object-center"
        showScroll
        bottomSlot={
          <div className="insights-filter-rail">
            <div className="insights-filter-scroll scrollbar-hide">
              <button
                type="button"
                className="insights-filter-pill bg-soft-ivory text-obsidian"
              >
                All Intelligence
              </button>
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className="insights-filter-pill border border-platinum/20 text-platinum hover:border-soft-ivory active:bg-platinum/5"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        }
      />

      <main className="relative z-10">
        {/* Featured Insight — mobile editorial cover */}
        <section className="px-safe-margin py-12 sm:py-16 md:py-section-gap border-t border-platinum/10 bg-obsidian">
          {/* Mobile: magazine cover card */}
          <Link
            href={FEATURED.href}
            className="md:hidden block insights-featured-cover reveal-on-scroll group"
          >
            <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden image-hover-zoom">
              <Image
                src={FEATURED.image}
                alt="Infinity Architecture"
                fill
                priority
                sizes="100vw"
                className="object-cover grayscale opacity-90 group-active:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/75 to-obsidian/20 z-10" />
              <div className="absolute top-6 left-6 right-6 z-20">
                <span className="insights-metadata text-muted-bronze uppercase tracking-widest">
                  {FEATURED.eyebrow}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-8">
                <h2 className="insights-article-title--feature text-soft-ivory mb-4">
                  {FEATURED.title}
                </h2>
                <p className="insights-excerpt text-platinum/70 mb-6 line-clamp-3">
                  {FEATURED.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-platinum/20 shrink-0">
                    <Image
                      src={FEATURED.avatar}
                      alt={FEATURED.author}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="insights-metadata text-soft-ivory block uppercase">
                      By {FEATURED.author}
                    </span>
                    <span className="insights-metadata text-muted-bronze">
                      {FEATURED.role} • {FEATURED.readTime}
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-3 font-label-caps text-label-caps text-soft-ivory">
                  READ FULL ANALYSIS
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop: split editorial layout */}
          <div className="hidden md:grid grid-cols-12 gap-gutter items-center">
            <Link
              href={FEATURED.href}
              className="col-span-5 reveal-on-scroll block group"
            >
              <span className="font-label-caps text-label-caps text-muted-bronze mb-4 block">
                {FEATURED.eyebrow}
              </span>
              <h2 className="font-headline-lg text-headline-lg text-soft-ivory mb-8 leading-tight">
                {FEATURED.title}
              </h2>
              <p className="font-body-lg text-body-lg text-platinum/70 mb-10 max-w-md">
                {FEATURED.excerpt}
              </p>
              <div className="flex items-center gap-6 mb-12">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-platinum/20">
                  <Image
                    src={FEATURED.avatar}
                    alt={FEATURED.author}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="font-technical-mono text-technical-mono text-soft-ivory block uppercase">
                    By {FEATURED.author}
                  </span>
                  <span className="font-technical-mono text-technical-mono text-muted-bronze">
                    {FEATURED.role} • {FEATURED.readTime}
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center gap-4 font-label-caps text-label-caps text-soft-ivory">
                READ FULL ANALYSIS
                <span className="material-symbols-outlined transform group-hover:translate-x-2 transition-transform duration-300">
                  arrow_forward
                </span>
              </span>
            </Link>
            <div className="col-span-7 reveal-on-scroll">
              <Link href={FEATURED.href} className="block">
                <div className="aspect-[4/5] relative overflow-hidden image-hover-zoom">
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10" />
                <Image
                  src={FEATURED.image}
                  alt="Infinity Architecture"
                  fill
                  priority
                  sizes="58vw"
                  className="object-cover grayscale opacity-80"
                />
                <div className="absolute top-10 left-10 w-24 h-24 border-t border-l border-platinum/30 z-20" />
                <div className="absolute bottom-10 right-10 w-24 h-24 border-b border-r border-platinum/30 z-20" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Investment Intelligence: Bento Grid */}
        <section className="px-safe-margin py-12 sm:py-16 md:py-section-gap bg-[#0E0E0E]">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-10 sm:mb-12 md:mb-16 reveal-on-scroll">
            <div>
              <span className="insights-metadata text-muted-bronze block mb-3 sm:mb-4">
                Core Intelligence
              </span>
              <h2 className="insights-section-headline text-soft-ivory">
                Investment Strategies
              </h2>
            </div>
            <div className="insights-metadata text-platinum/40 hidden sm:block">
              [REF_NO: INV_ST_2024]
            </div>
          </div>

          <div className="bento-grid bento-grid--insights-intelligence">
            {/* Large Feature Card */}
            <Link
              href={EDITORIAL_HREF}
              className="bento-insights--feature group reveal-on-scroll block"
            >
              <div className="glass-panel bento-card bento-card--feature p-6 sm:p-8 md:p-12 h-full flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:border-platinum/30">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                  <div
                    className="w-full h-full border-l border-b border-platinum/20"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #D1D5D8 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                </div>
                <div className="relative z-10">
                  <span className="font-label-caps text-label-caps text-muted-bronze block mb-4 sm:mb-6">
                    Market Leader
                  </span>
                  <h3 className="insights-article-title text-soft-ivory mb-4 sm:mb-6 max-w-lg">
                    Smart Money Moves: Why Pakistan&apos;s Luxury Vertical
                    Sector is Growing at 14% Annually
                  </h3>
                  <p className="insights-excerpt text-platinum/60 max-w-md line-clamp-3 sm:line-clamp-none">
                    Discover the macroeconomic factors driving high-net-worth
                    individuals toward secure, amenity-rich vertical
                    developments.
                  </p>
                </div>
                <div className="relative z-10 mt-8 sm:mt-12 flex justify-between items-center">
                  <span className="insights-metadata text-platinum/40">
                    01 / ARCHIVE
                  </span>
                  <span className="material-symbols-outlined text-soft-ivory opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                    arrow_outward
                  </span>
                </div>
              </div>
            </Link>

            {/* Secondary cards — 2-col on mobile when readable */}
            <div className="bento-insights--duo">
              <Link
                href={EDITORIAL_HREF}
                className="glass-panel insights-compact-card insights-compact-card--accent p-5 sm:p-6 md:p-8 reveal-on-scroll transition-all duration-500 hover:bg-soft-ivory group block"
              >
                <h4 className="insights-article-title text-soft-ivory group-hover:text-obsidian mb-3 sm:mb-4 transition-colors">
                  5 Best Investment Opportunities in Capital Sector
                </h4>
                <span className="insights-metadata text-muted-bronze group-hover:text-muted-bronze/60">
                  Nov 12, 2024
                </span>
              </Link>
              <Link
                href={EDITORIAL_HREF}
                className="glass-panel insights-compact-card p-5 sm:p-6 md:p-8 reveal-on-scroll transition-all duration-500 hover:bg-soft-ivory group block"
              >
                <h4 className="insights-article-title text-soft-ivory group-hover:text-obsidian mb-3 sm:mb-4 transition-colors">
                  Best Real Estate Investment: Rental Yield vs. Capital Gains
                </h4>
                <span className="insights-metadata text-muted-bronze group-hover:text-muted-bronze/60">
                  Oct 28, 2024
                </span>
              </Link>
            </div>

            {/* Full Width Signature Feature */}
            <Link
              href={EDITORIAL_HREF}
              className="col-span-full mt-0 md:mt-gutter reveal-on-scroll block"
            >
              <div className="relative group cursor-pointer overflow-hidden aspect-[16/10] sm:aspect-[21/9]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYoypctnWxjUW1TQZDSK42QMMt1ff_TPdJ3iZPp42Onti7mCi563wngrKTET1Ofb5e0FkZ4mLfoo2wnx9w1lM5dOp0x-RDHiLgXbwy1dKU5mG0tjIGadPIi0ZpZHo6QHczei0E5dMFMsRdWI1iNssu-LfRESH2m-CuIOYoDNYrQwYUepUAzWJcMH-MJYopVsTHuPPGpaSZ6x3MCwRSyueGR24PbJfa-WFkHzr1NKOnDvII-WfGLxRLt-Ou03158d3s3kWIehhcdw"
                  alt="Ultimate Luxury"
                  fill
                  sizes="100vw"
                  className="object-cover grayscale opacity-40 group-hover:opacity-60 transition-all duration-1000"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-24">
                  <span className="insights-metadata text-muted-bronze block mb-3 sm:mb-4 uppercase tracking-[0.3em]">
                    Signature Feature
                  </span>
                  <h3 className="insights-signature-headline text-soft-ivory max-w-3xl">
                    Ultimate Luxury Investment
                  </h3>
                </div>
                <div className="absolute bottom-6 right-6 sm:bottom-12 sm:right-12">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-soft-ivory flex items-center justify-center text-soft-ivory group-hover:bg-soft-ivory group-hover:text-obsidian transition-all">
                    <span className="material-symbols-outlined">play_arrow</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Lifestyle & Living */}
        <section className="px-safe-margin py-12 sm:py-16 md:py-section-gap bg-obsidian overflow-hidden">
          <div className="grid grid-cols-12 gap-gutter items-start">
            <div className="col-span-12 md:col-span-4 md:sticky md:top-32 reveal-on-scroll insights-lifestyle-rail mb-4 sm:mb-8 md:mb-0">
              <span className="insights-metadata text-muted-bronze block mb-4 sm:mb-6">
                Lifestyle Editorial
              </span>
              <h2 className="insights-section-headline text-soft-ivory mb-6 sm:mb-8 md:mb-12">
                The Art of Residency
              </h2>
              <p className="insights-excerpt text-platinum/50 mb-8 sm:mb-10 md:mb-12 max-w-sm">
                How space defines mood. Exploring the intersection of
                architectural precision and domestic warmth.
              </p>
              <div className="h-px w-full bg-platinum/10 hidden md:block" />
            </div>

            <div className="col-span-12 md:col-span-8 bento-grid--insights-lifestyle">
              {/* Article 1 — full-bleed image editorial */}
              <Link
                href={EDITORIAL_HREF}
                className="insights-lifestyle-article reveal-on-scroll block group"
              >
                <div className="insights-lifestyle-image relative image-hover-zoom aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] bg-graphite">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBntxt6YEH4agzRsyO79_GzKl9aLdMPEnYHBl-NPQRCDFYNuUkyTyhha93aLxxzOXbC073tghyeM-10YNVTfNpZUdMESMqn0aaOycGWNVD8VAd3Tmg2KBqr1jvjjD8Qnh0V1vKc3oBVWJfek7AeCVS3KO_gsVlBpYxTi-6RjayyjrJRKMgGdR6cKJ2APQ7uch60cjrn371XckrMq0_LzFOmr1Nacvd7NJgP1h-xh5lg44uRMaX0HVv8Jg87iCe9_knQS49Z0poM-A"
                    alt="Home Decor"
                    fill
                    sizes="(min-width: 768px) 42vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="insights-lifestyle-copy pt-4 sm:pt-6 md:pt-8">
                  <span className="insights-metadata text-platinum/40 mb-3 sm:mb-4 block">
                    01 / LIFESTYLE
                  </span>
                  <h3 className="insights-article-title text-soft-ivory mb-4 sm:mb-6">
                    DIY Home Decor Projects for High-End Penthouses
                  </h3>
                  <span className="inline-flex items-center gap-2 font-label-caps text-label-caps text-muted-bronze group-hover:text-soft-ivory transition-colors min-h-[44px]">
                    EXPLORE CURATION
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </Link>

              {/* Article 2 — compact horizontal on mobile */}
              <Link
                href={EDITORIAL_HREF}
                className="insights-lifestyle-article insights-lifestyle-article--reverse reveal-on-scroll block group"
              >
                <div className="insights-lifestyle-copy pt-0 md:pt-8">
                  <span className="insights-metadata text-platinum/40 mb-3 sm:mb-4 block md:text-right">
                    02 / INTERIORS
                  </span>
                  <h3 className="insights-article-title text-soft-ivory mb-4 sm:mb-6 md:text-right">
                    Creating a Cozy Home Atmosphere with Integrated Lighting
                  </h3>
                  <span className="inline-flex items-center gap-2 font-label-caps text-label-caps text-muted-bronze group-hover:text-soft-ivory transition-colors min-h-[44px] md:float-right">
                    READ THE GUIDE
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </span>
                </div>
                <div className="insights-lifestyle-image relative image-hover-zoom aspect-[16/10] sm:aspect-[4/3] bg-graphite">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDAjce7Yso49GPGHX6QxjQ8x1Ozyw9HCnTE5UjpCq3tpMcHPAIWGcbHQALhWfgBSU-7kvmXlKqv5dBi0UuIG279di5C0INPDl9Y9Jn30npGZtpNlGf6B14q4PJ8sjBno1f48yKLOHdYGjYlSyxMguD_9z-eH2NQnAEcis5sCtnHei8tLJZRiMCGt3CrYjmJq_ChFWuS-8s6hgTQtuOX4H-ZmDXz40bWomvoDZ35dS-qLOeAvkRH49-Daf9Jd04Rg5D5hW55hii9g"
                    alt="Lighting"
                    fill
                    sizes="(min-width: 768px) 42vw, 100vw"
                    className="object-cover grayscale"
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Market & Retail Trends: Spotlight */}
        <section className="py-12 sm:py-16 md:py-section-gap bg-[#080808] border-y border-platinum/5">
          <div className="px-safe-margin text-center mb-10 sm:mb-12 md:mb-16 reveal-on-scroll">
            <span className="insights-metadata text-muted-bronze block mb-3 sm:mb-4">
              Market Outlook 2025
            </span>
            <h2 className="insights-section-headline text-soft-ivory">
              The Evolution of Retail Real Estate
            </h2>
          </div>
          <div className="insights-spotlight-stage reveal-on-scroll">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX2V0PCXAArc16fZGgytMJln90G9aAf5o1ygQrc7lx_jO4dzCQZhsA42cj0yCLVvVdnJzMVhvzxiN38uq6XTeenBCO2HC2M_JgEV6R-7HbBgL4HJmIyDdIomoKDikWJoRWMHBJFH6GcTP3VY8Rr8hEJTXGEArpLi6xN_vIiMUjOkwGlS7ZtCi-q5zZh8k7YDBZfgHHxW0a2NNIB04RWeOdDdntfSyTuBCUjAGOK8CMDOP7YnzK8X5fuNvyfTwJx65VaiXCj4rhEw"
                alt="Retail Evolution"
                fill
                sizes="100vw"
                className="object-cover opacity-20 grayscale"
              />
              <div className="absolute inset-0 bg-radial-gradient" />
            </div>
            <div className="relative z-10 w-full max-w-3xl text-center px-safe-margin">
              <div className="glass-panel p-8 sm:p-12 md:p-16 space-y-6 sm:space-y-8 border-soft-ivory/10">
                <p className="insights-excerpt text-platinum italic leading-relaxed">
                  &quot;The traditional mall is dead. Long live the Experience
                  Hub. At Infinity Mall, we are redefining retail as a
                  destination for sensory engagement, merging physical presence
                  with digital seamlessness.&quot;
                </p>
                <div className="w-16 h-px bg-muted-bronze mx-auto" />
                <Link
                  href={EDITORIAL_HREF}
                  className="font-label-caps text-label-caps text-soft-ivory border-b border-soft-ivory/40 pb-2 hover:border-soft-ivory active:border-soft-ivory transition-all min-h-[44px] inline-block"
                >
                  VIEW RETAIL STRATEGY
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-12 sm:py-16 md:py-section-gap px-safe-margin bg-obsidian relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full opacity-15 blueprint-dots-bronze" />
          </div>
          <div className="relative z-10 text-center max-w-4xl mx-auto py-10 sm:py-14 md:py-20 border-y border-platinum/10 reveal-on-scroll">
            <span className="font-label-caps text-[11px] sm:text-label-caps text-muted-bronze mb-5 sm:mb-6 md:mb-8 block tracking-widest">
              STAY INFORMED
            </span>
            <h2 className="insights-closing-headline text-soft-ivory mb-6 sm:mb-8 md:mb-10">
              Intelligence for the
              <br className="sm:hidden" /> Discerning Investor
            </h2>
            <p className="insights-excerpt text-platinum/60 max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12 px-1">
              Receive curated market analysis, architectural insights, and
              investment opportunities from the Infinity editorial desk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center">
              <OutlineButton className="w-full sm:w-auto px-8 sm:px-10 py-4 min-h-[52px] justify-center">
                Request a Call
              </OutlineButton>
              <Link
                href={EDITORIAL_HREF}
                className="btn-outline-luxury w-full sm:w-auto"
              >
                Read Featured Analysis
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
