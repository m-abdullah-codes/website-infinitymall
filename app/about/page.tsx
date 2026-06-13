import type { Metadata } from "next";
import Image from "next/image";
import OutlineButton from "@/components/OutlineButton";
import InnerPageHero from "@/components/InnerPageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Infinity Mall & Residence is a manifestation of architectural precision and uncompromising luxury in the heart of Islamabad.",
};

const HERO_IMAGE = "https://res.cloudinary.com/djnnc4xvt/image/upload/q_auto/f_auto/v1781337578/about_gau3v3.png";

const BRAND_PILLARS = [
  { label: "Luxury Shopping", icon: "storefront" },
  { label: "Great Food", icon: "restaurant" },
  { label: "Entertainment", icon: "theater_comedy" },
  { label: "Smart Investment", icon: "trending_up" },
];

const VALUE_PROPS = [
  {
    number: "01",
    title: "Best Mix of Shopping",
    description:
      "Curating a selection of global flagship stores and local artisan boutiques to create a retail ecosystem that caters to the discerning few.",
    colClass: "col-span-2 md:col-span-6 md:mb-0",
    paddingClass: "p-6 sm:p-8 md:p-12",
  },
  {
    number: "02",
    title: "High-end Experience",
    description:
      "From valet services to private lounges, every touchpoint is designed to evoke a sense of quiet luxury and absolute comfort.",
    colClass: "col-span-1 md:col-span-5 md:mt-24",
    paddingClass: "p-5 sm:p-8 md:p-12",
  },
  {
    number: "03",
    title: "Prime Location",
    description:
      "Situated at the epicenter of Islamabad's growth corridor, offering unrivaled accessibility and prestige.",
    colClass: "col-span-1 md:col-span-5 md:mb-0",
    paddingClass: "p-5 sm:p-8 md:p-12",
  },
  {
    number: "04",
    title: "Future Growth",
    description:
      "An investment designed for longevity, blending sustainable technology with architectural design that will define the city's future.",
    colClass: "col-span-2 md:col-span-6 md:mt-32",
    paddingClass: "p-6 sm:p-8 md:p-12",
  },
];

const FEATURED_LEADERS = [
  {
    role: "CHAIRMAN",
    name: "Mr. Maqbool Hussain",
    quote:
      "Infinity is not a destination, but a standard of excellence we uphold in every square foot of our vision.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAl6711XAgQ4YXus2FjzLIs6HlfmqOt9eKWQ8yVjLWJ34VQ4w0ZR-QX-u4CtNaZmrJk77CyhKXfWmhHgm3m8WYY3eQfqAfik2yfqKqdCM41m9JeKIROOsY9VzbtHRYXpZIcKjOv2WKJmOaQHNWMKdrDOH0MesITPZQYU6kdnAw3MdE4ygmweNARCqYV-j4en0Yv2CfMrvH0ATP1NO69NIHD-x5ViMhnpM3RPbVdXNQIBDAU9q-4Agxbr5ejgvwViA9x77jPsgmE5w",
    verticalTag: "EXECUTIVE CHAIR",
    reversed: false,
    mobileVariant: "overlap" as const,
  },
  {
    role: "MANAGING DIRECTOR",
    name: "Mr. Salman Shahid",
    quote:
      "We bridge the gap between engineering possibility and lifestyle reality.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB8fOesXylrAmULRd4vbP_ZSB2fZ3opEInv3NI5PeT1zOXIPr85Ot6nEyDMKLsAjvjx13IV9dfsEPGYNRHCszlfk5vuiO7MqewJV3_cw5EYZeu3Q0jG-1pg55RIfkOjQBwuwNwbWDWWad6zf40SB0iV0blYUAaQVGJzbNDERDQhhRfcQlL0y6dQ7dejfEphQO-0PJE4Ei4N1iRmFb7hHkC3VGYhMcvRGdA8CWLxg8b1x6BPcqTm86IDgu3fanjxZ7kDVm7Y4HMlbw",
    verticalTag: null,
    reversed: true,
    mobileVariant: "quote-first" as const,
  },
  {
    role: "CHIEF ARCHITECT",
    name: "Mr. Dr Syed Ateeq Zaman",
    quote:
      "Design is the silent ambassador of our brand's relentless pursuit of perfection.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-UNGfrvPotBBTh79cmi3wyQgDdDRDUpLLgL5bGovs0F6rjkmlzXep4HdYV-JRcSykUFBLNra3dp3v3a-GMcHoJjIpe8gPQtwAOdgHO-zHoMbPxLshuc7w9bzxW00oZIXAM8jEOLfx5D7Zp_PDf3VPisVWbG2n4Q4bbeUjVfV73SvRcBgiYSIO2y7fRKlanSfucu6XaHll3521RCCi0BnIIUE0xbwwsaJSr-0Whux7_ZuRybm4HC397LVs_S6kzfatFJJZEl1xaA",
    verticalTag: null,
    reversed: false,
    mobileVariant: "inset" as const,
  },
];

const COMPACT_LEADERS = [
  {
    role: "EXECUTIVE DIRECTOR",
    name: "Mr. Safdar Zaman",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPClhp_KlVmUNqS--KxoVqSYBKLuVZPPS5o8f_52ueaxVx1OBm0vGlAmUpirqtUBvnx9-gGI3Lepsro3eFfdnM8hyxvOhrTp9KNFng9RkSVButU4Fy3LlRIJ2GfUWZjKEML2ENWSeVii4oTqfJ_SLW_uaBbnuocmP7sNdH3iG0ECIui0sZd-PXZ1A5X4U9xQhQQm0W8sTn4mJ55EGK229V9tPA2PeYjmcAFYN35jlmCQCezW_PzqghSiWr3Rba3ZiB9Hh3Af2TCg",
  },
  {
    role: "DIRECTOR OPERATIONS",
    name: "Syed Laeeq Zaman",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCe0_T2Gw_ey1E7gY9r7FHXOgZyOEqwSES0HGNftj5k8zHE-WqQcjnHk6YUvP7MvMdnsMiuyj1pI45jwQGAMZcc9IFKWY-OAxWK1sNOnT5AvrzP-r0jBAgYCoOFkBKFQMmYZQ_Y1ZCQWKh_nPJs-T7Kqd4CH1wjCB_wJrclFSeH9hWDnKqTTf-kgS_mibVdL02a0sT4wq3acwXcYI0VUIA5jE6Sc0m_Cal-thoylx-OrlsZawwo7mrFrMANz-t418I26jpgW5mw5Q",
  },
];

export default function AboutPage() {
  return (
    <div
      className="page-about font-body-md text-body-md text-platinum"
      data-reveal-margin="0px"
    >
      {/* ── Hero — full-bleed cinematic, outside max-width container ── */}
      <InnerPageHero
        variant="about"
        eyebrow="ESTABLISHED 2024"
        eyebrowFlanked
        title="ABOUT US"
        description="Infinity Mall & Residence is not merely a structure — it is a manifestation of architectural precision and uncompromising luxury in the heart of Islamabad."
        backgroundImage={HERO_IMAGE}
        backgroundImageAlt="Infinity Mall glass facade at dusk"
        backgroundImageClassName="object-cover object-center"
        showScroll
      />

      <main className="w-full max-w-[1600px] mx-auto">

        {/* ── Brand Introduction ── */}
        <section className="py-16 sm:py-20 md:py-section-gap px-safe-margin bg-obsidian relative">
          <div className="absolute left-safe-margin top-0 bottom-0 w-px bg-platinum/5 hidden sm:block" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-gutter items-start">
            <div className="lg:col-span-5 reveal-on-scroll">
              <span className="font-technical-mono text-[11px] sm:text-technical-mono text-muted-bronze mb-3 sm:mb-4 block tracking-widest">
                THE BRAND STORY
              </span>
              <h2 className="text-headline-fluid text-soft-ivory mb-6 sm:mb-8">
                WHERE ARCHITECTURE
                <br />
                <span className="italic text-muted-bronze">MEETS LIFESTYLE</span>
              </h2>
              <div className="border-l-2 border-muted-bronze pl-5 sm:pl-6">
                <p className="text-quote-fluid text-platinum/90 italic leading-snug">
                  &ldquo;A manifestation of architectural precision and
                  uncompromising luxury.&rdquo;
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8 sm:space-y-10 reveal-on-scroll">
              <div className="space-y-5 sm:space-y-6">
                <p className="text-body-fluid text-platinum/70 leading-relaxed">
                  Located in the heart of Islamabad, Infinity Mall &amp;
                  Residence redefines the horizon of modern living through
                  sophisticated design and unparalleled retail experiences.
                </p>
                <p className="text-body-fluid text-platinum/60 leading-relaxed">
                  Every detail — from the façade geometry to the concierge
                  touchpoints — reflects a singular commitment to quiet
                  excellence. We are not building a destination; we are
                  curating an ecosystem of refinement.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-gutter">
                <div className="glass-panel p-5 sm:p-6 border-l-2 border-muted-bronze/50">
                  <span className="font-technical-mono text-[10px] text-muted-bronze mb-2 block tracking-widest">
                    VISION
                  </span>
                  <p className="text-sm sm:text-base text-platinum/70 leading-relaxed">
                    To set a new benchmark for integrated luxury living and
                    iconic retail in Pakistan.
                  </p>
                </div>
                <div className="glass-panel p-5 sm:p-6 border-l-2 border-platinum/20">
                  <span className="font-technical-mono text-[10px] text-muted-bronze mb-2 block tracking-widest">
                    PROMISE
                  </span>
                  <p className="text-sm sm:text-base text-platinum/70 leading-relaxed">
                    Architectural daring that endures — designed for generations,
                    engineered for today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Infinity Mall / Value Proposition ── */}
        <section className="py-16 sm:py-20 md:py-section-gap px-safe-margin bg-obsidian relative">
          <div className="absolute left-1/2 top-0 h-full w-px bg-platinum/10 hidden md:block" />

          <div className="mb-12 sm:mb-16 md:mb-24 reveal-on-scroll">
            <span className="font-technical-mono text-[11px] sm:text-technical-mono text-muted-bronze mb-3 sm:mb-4 block tracking-widest">
              CORE VALUE PROPOSITION
            </span>
            <h2 className="text-headline-fluid text-soft-ivory">
              ENGINEERING EXCELLENCE
            </h2>
            <p className="mt-4 sm:mt-6 text-body-fluid text-platinum/50 max-w-xl md:hidden">
              Four pillars that define our uncompromising standard.
            </p>
          </div>

          <div className="bento-grid bento-grid--about-values gap-3 sm:gap-4 md:gap-gutter">
            {VALUE_PROPS.map((prop, i) => (
              <div
                key={prop.number}
                className={`${prop.colClass} glass-panel ${prop.paddingClass} reveal-on-scroll bento-card`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-display-xl text-3xl sm:text-4xl text-muted-bronze/30 mb-4 sm:mb-6 md:mb-8 block">
                  {prop.number}
                </span>
                <h3 className="text-headline-md-fluid text-soft-ivory mb-3 sm:mb-4 md:mb-6">
                  {prop.title}
                </h3>
                <p className="text-sm sm:text-base text-platinum/60 mb-6 sm:mb-8 md:mb-12 leading-relaxed">
                  {prop.description}
                </p>
                <div className="h-px w-full bg-platinum/10" />
              </div>
            ))}
          </div>
        </section>

        {/* ── Leadership Showcase ── */}
        <section className="py-16 sm:py-20 md:py-section-gap px-safe-margin bg-obsidian">
          <div className="mb-12 sm:mb-20 md:mb-32 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 reveal-on-scroll">
            <div>
              <span className="font-technical-mono text-[11px] sm:text-technical-mono text-muted-bronze mb-3 sm:mb-4 block tracking-widest">
                EXECUTIVE BOARD
              </span>
              <h2 className="text-headline-fluid text-soft-ivory">
                THE VISIONARIES
              </h2>
            </div>
            <p className="font-body-md text-sm sm:text-body-md text-platinum/40 max-w-xs sm:text-right border-l-2 sm:border-l-0 sm:border-r-0 border-muted-bronze/40 pl-5 sm:pl-0 sm:max-w-sm">
              Architectural prowess led by decades of collective industry
              excellence.
            </p>
          </div>

          <div className="space-y-20 sm:space-y-28 md:space-y-40">
            {FEATURED_LEADERS.map((leader) => (
              <article
                key={leader.name}
                className="leader-editorial-panel reveal-on-scroll"
              >
                {/* Mobile editorial layouts */}
                <div className="md:hidden">
                  {leader.mobileVariant === "overlap" && (
                    <div className="relative">
                      <div className="relative aspect-[3/4] w-full overflow-hidden leader-portrait-frame">
                        <Image
                          src={leader.image}
                          alt={`${leader.role}: ${leader.name}`}
                          fill
                          sizes="100vw"
                          className="object-cover grayscale"
                        />
                        {leader.verticalTag && (
                          <span className="absolute top-4 right-4 font-technical-mono text-[9px] tracking-[0.35em] text-platinum/40 uppercase">
                            {leader.verticalTag}
                          </span>
                        )}
                      </div>
                      <div className="leader-quote-panel relative -mt-10 mx-4 p-6 sm:p-8">
                        <h4 className="font-label-caps text-[11px] sm:text-label-caps text-muted-bronze mb-1">
                          {leader.role}
                        </h4>
                        <h3 className="text-headline-md-fluid text-soft-ivory mb-4">
                          {leader.name}
                        </h3>
                        <blockquote className="text-quote-fluid text-platinum italic leading-snug">
                          &ldquo;{leader.quote}&rdquo;
                        </blockquote>
                        <div className="h-px w-16 bg-muted-bronze mt-6" />
                      </div>
                    </div>
                  )}

                  {leader.mobileVariant === "quote-first" && (
                    <div className="space-y-6">
                      <div className="leader-quote-panel p-6 sm:p-8 border-l-2 border-muted-bronze">
                        <span className="font-technical-mono text-[10px] text-platinum/30 mb-4 block tracking-widest">
                          EXECUTIVE MESSAGE
                        </span>
                        <blockquote className="text-quote-display text-platinum italic leading-snug mb-6">
                          &ldquo;{leader.quote}&rdquo;
                        </blockquote>
                        <h4 className="font-label-caps text-[11px] text-muted-bronze mb-1">
                          {leader.role}
                        </h4>
                        <h3 className="text-headline-md-fluid text-soft-ivory">
                          {leader.name}
                        </h3>
                      </div>
                      <div className="relative aspect-[5/4] w-[88%] ml-auto overflow-hidden leader-portrait-frame border-r-2 border-muted-bronze/30">
                        <Image
                          src={leader.image}
                          alt={`${leader.role}: ${leader.name}`}
                          fill
                          sizes="90vw"
                          className="object-cover grayscale"
                        />
                      </div>
                    </div>
                  )}

                  {leader.mobileVariant === "inset" && (
                    <div className="relative">
                      <div className="relative aspect-[4/5] w-full overflow-hidden leader-portrait-frame">
                        <Image
                          src={leader.image}
                          alt={`${leader.role}: ${leader.name}`}
                          fill
                          sizes="100vw"
                          className="object-cover grayscale"
                        />
                      </div>
                      <div className="leader-quote-panel mt-6 p-6 sm:p-8">
                        <div className="flex items-start gap-4">
                          <div className="w-px self-stretch bg-muted-bronze/50 shrink-0" />
                          <div>
                            <h4 className="font-label-caps text-[11px] text-muted-bronze mb-1">
                              {leader.role}
                            </h4>
                            <h3 className="text-headline-md-fluid text-soft-ivory mb-4">
                              {leader.name}
                            </h3>
                            <blockquote className="text-quote-fluid text-platinum italic leading-snug">
                              &ldquo;{leader.quote}&rdquo;
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Desktop layout — unchanged structure */}
                <div className="hidden md:grid grid-cols-12 gap-gutter items-center">
                  <div
                    className={`col-span-5 aspect-[4/5] relative ${
                      leader.reversed ? "order-2" : ""
                    }`}
                  >
                    <Image
                      src={leader.image}
                      alt={`${leader.role}: ${leader.name}`}
                      fill
                      sizes="40vw"
                      className="object-cover grayscale"
                    />
                    {leader.verticalTag && (
                      <div className="absolute -right-8 top-1/2 -translate-y-1/2">
                        <span className="vertical-text font-technical-mono text-[10px] tracking-[0.5em] text-platinum/30">
                          {leader.verticalTag}
                        </span>
                      </div>
                    )}
                  </div>
                  <div
                    className={`col-span-6 ${
                      leader.reversed ? "order-1" : ""
                    }`}
                  >
                    <h4 className="font-label-caps text-label-caps text-muted-bronze mb-2">
                      {leader.role}
                    </h4>
                    <h3 className="font-headline-lg text-headline-lg text-soft-ivory mb-8">
                      {leader.name}
                    </h3>
                    <blockquote className="font-display-xl text-3xl lg:text-5xl text-platinum leading-tight italic mb-8">
                      &ldquo;{leader.quote}&rdquo;
                    </blockquote>
                    <div className="h-px w-24 bg-muted-bronze" />
                  </div>
                </div>
              </article>
            ))}

            {/* Compact leaders — premium duo bento */}
            <div className="bento-grid bento-grid--about-leaders gap-3 sm:gap-4 md:gap-gutter">
              {COMPACT_LEADERS.map((leader, i) => (
                <div
                  key={leader.name}
                  className="col-span-1 md:col-span-6 reveal-on-scroll"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="relative aspect-[3/4] sm:aspect-square mb-4 sm:mb-6 md:mb-8 overflow-hidden leader-portrait-frame group">
                    <Image
                      src={leader.image}
                      alt={`${leader.role}: ${leader.name}`}
                      fill
                      sizes="(min-width: 768px) 50vw, 50vw"
                      className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent md:hidden" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:hidden">
                      <h4 className="font-label-caps text-[10px] text-muted-bronze mb-0.5">
                        {leader.role}
                      </h4>
                      <h3 className="font-headline-md text-base sm:text-lg text-soft-ivory leading-tight">
                        {leader.name}
                      </h3>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <h4 className="font-label-caps text-label-caps text-muted-bronze mb-2">
                      {leader.role}
                    </h4>
                    <h3 className="font-headline-md text-headline-md text-soft-ivory">
                      {leader.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Closing Statement ── */}
        <section className="py-16 sm:py-20 md:py-section-gap px-safe-margin bg-obsidian relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full opacity-20 blueprint-dots-bronze" />
          </div>
          <div className="relative z-10 text-center max-w-5xl mx-auto py-12 sm:py-16 md:py-20 border-y border-platinum/10 reveal-on-scroll">
            <span className="font-label-caps text-[11px] sm:text-label-caps text-muted-bronze mb-6 sm:mb-8 block tracking-widest">
              THE INFINITY LEGACY
            </span>
            <h2 className="about-closing-headline text-soft-ivory mb-8 sm:mb-10 md:mb-12">
              A LANDMARK FOR
              <br className="sm:hidden" /> GENERATIONS
            </h2>
            <p className="text-body-fluid text-platinum/60 max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 px-2 sm:px-0">
              We are building more than a mall. We are constructing a timeless
              icon of Islamabad&apos;s evolution, where architectural daring
              meets the pinnacle of human experience.
            </p>
            <OutlineButton className="w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 min-h-[52px] duration-500 justify-center">
              JOIN THE JOURNEY
            </OutlineButton>
          </div>
        </section>
      </main>
    </div>
  );
}
