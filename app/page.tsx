import Image from "next/image";
import BentoCard from "@/components/BentoCard";
import MilestoneCard from "@/components/MilestoneCard";
import ShaderBackground from "@/components/ShaderBackground";

const MILESTONES = [
  {
    number: "01",
    numberClass: "text-emerald-accent",
    borderClass: "border-t-emerald-accent",
    icon: "architecture",
    title: "Structural Foundation",
    description:
      "Complete. Reinforced seismic-resistant core infrastructure successfully implemented across all sectors.",
    barClass: "bg-emerald-accent w-full",
    progress: "100%",
    desktopOffsetClass: "",
    gridClass: "bento-milestone--featured lg:col-span-1",
  },
  {
    number: "02",
    numberClass: "text-muted-bronze",
    borderClass: "border-t-muted-bronze",
    icon: "apartment",
    title: "Vertical Ascent",
    description:
      "Floor 42 of 72 currently under cast. Core lifts and mechanical shafts progressing simultaneously.",
    barClass: "bg-muted-bronze w-[58%]",
    progress: "58%",
    desktopOffsetClass: "lg:mt-12",
    gridClass: "lg:col-span-1",
  },
  {
    number: "03",
    numberClass: "text-platinum/40",
    borderClass: "border-t-platinum/20",
    icon: "window",
    title: "Glazing & Facade",
    description:
      "Low-E double glazed thermal panels arrival on site. Installation scheduled for Q3 2024.",
    barClass: "bg-platinum w-[15%]",
    progress: "15%",
    desktopOffsetClass: "lg:mt-24",
    gridClass: "bento-milestone--stagger lg:col-span-1",
  },
];

const AMENITIES = [
  {
    title: "Business Center",
    icon: "business_center",
    description: "Private suites for high-level operations.",
    gridClass: "bento-tile--business lg:col-span-4",
    heightClass: "min-h-0 lg:min-h-[400px]",
    size: "feature" as const,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAs9jTepcLwsXNiT1-h9EMyO-LAluxpv_iQjNuzd6WN-bO3L3v9YE5CIg4vkL5ksVsmVSjOyqd8xwdN37B9OOe6awgkvhDo8f7bv7FUbEJAa2k86PQGaUe3I8gmaDpzqbs-b6C6K0H85ipgdctI17k6ZzQ2N0tSy2PSKvmx65TOED1Nh_fK4DCLkPkmXcLM-ixLbNxpOlhxFMLvLXjESecq71HUAmnPWkUdFXroIw0jrb06QWKPztBna29HUON5MRWPXF9YkD5yUA",
  },
  {
    title: "Double Height Shops",
    icon: "storefront",
    description: "Premium flagship retail spaces for iconic brands.",
    gridClass: "bento-tile--shops lg:col-span-8",
    heightClass: "min-h-[180px] sm:min-h-[220px] lg:min-h-[400px]",
    size: "default" as const,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2LMG2YyukEx69yfhPjQgQropv1LXCRH6VP-mCcz9tfo6bVYAGzNlhHxa8WMqWCfh2TIpERnk2qz8xik8icDFzIaPVvlDwPfmFCYeAxsbUtj5naX1JAlWryAcQhPG3omLuFZviNwaMGrr5ENAAKF6cH-bPEsORoZUsimFrLwMmhkVjSSCImVnB0LJN4VtBbAUvlsGeP5Bss89R7_vS-dQ8EkiSPwx6xIPXNpfT0Bc_NHlSmlZ_l6Wpt2CPBiNvHB3BydmhmpxvCw",
  },
  {
    title: "Swimming Pool",
    icon: "pool",
    description: "Infinity edge pool with panoramic city views.",
    gridClass: "bento-tile--pool lg:col-span-3",
    heightClass: "min-h-0 lg:min-h-[400px]",
    size: "compact" as const,
    image: 'https://res.cloudinary.com/djnnc4xvt/image/upload/q_auto/f_auto/v1781337694/pool_hu3bfh.png',
    variant: "accent" as const,
  },
  {
    title: "Fine Dining",
    icon: "restaurant",
    description: null,
    gridClass: "bento-tile--dining lg:col-span-3",
    heightClass: "min-h-0 lg:min-h-[400px]",
    size: "compact" as const,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB49oiZTilMESvBJxoqItQJ2Wu1u74spV3APmtZjZVOT5wyzcdK9Bt-2VbaTgGFBUTe-2L0MpOErCbynMCi_gAlGu8J5MIbLYn7k9-ZqSNaF4sSyL_jmkzinHFD-pq5uE-mkWkYtn4GnreNbRCGaErspjmEqGEd5iZASOnLPflvmM-yFT5dcK9M8NwNH94DDHmEpirS5CY_FVj_NW_ZIKuU_Ye8l610IgVshFWkggD4QilRQqglgqEMdis5g79uQYrVGYLtVc7zfw",
  },
  {
    title: "Rooftop Sitting",
    icon: "roofing",
    description: null,
    gridClass: "bento-tile--rooftop lg:col-span-6",
    heightClass: "min-h-[200px] sm:min-h-[240px] lg:min-h-[400px]",
    size: "default" as const,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_bIjiVCns8ozW71NZYI1ZR9ypsATUVo3EOi3pMRn1MwK6GlCrsHVGz8C0IznlS9bVUCaUI_Z6u_Agr2FpQS4_UydeK0kowYiWQWKUJbTD7eYSjUC3XMkhqOusR7ajVAAXYzNhzUVOSg7ryl7k5mCBfs3vx32eYvQK_BgdC3EFTQF2PktyYrlbO8R8f3BpMUQl9Mqdz-1Xc2GvLVmRfdcwTMvj6gCZq6_ZsJlQC-qS_9AM2BxfxXPtemVA32RF7xZD6aYFvFr3Qg",
  },
];

const BRAND_CATEGORIES = ["Shopping", "Residence", "Dining", "Leisure"];

export default function Home() {
  return (
    <div
      className="page-home font-body-md text-body-md text-soft-ivory"
      data-reveal-margin="-50px"
    >
      <ShaderBackground />
      <main>
        {/* HERO */}
        <section className="relative min-h-[100dvh] flex flex-col justify-center pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-section-gap px-safe-margin overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-gutter items-center w-full max-w-[1600px] mx-auto">
            {/* Copy */}
            <div className="lg:col-span-5 xl:col-span-6 space-y-5 sm:space-y-6 lg:space-y-8 z-10 order-2 lg:order-1">
              <div className="space-y-2 sm:space-y-3">
                <span className="font-technical-mono text-[11px] sm:text-technical-mono text-muted-bronze uppercase tracking-[0.25em] sm:tracking-[0.3em]">
                  Signature Development
                </span>
                <h1 className="text-display-fluid text-soft-ivory">
                  INFINITY MALL{" "}
                  <br className="hidden sm:block" />
                  <span className="font-headline-lg italic">&amp; Residence</span>
                </h1>
              </div>
              <p className="text-body-fluid text-platinum max-w-lg">
                Where luxury meets convenience. A paradigm shift in urban
                architecture, meticulously engineered for the elite.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button
                  type="button"
                  className="btn-primary-luxury bg-muted-bronze text-soft-ivory hover:bg-soft-ivory hover:text-obsidian w-full sm:w-auto"
                >
                  Request a Call
                </button>
                <button
                  type="button"
                  className="btn-outline-luxury w-full sm:w-auto"
                >
                  View Brochure
                  <span className="material-symbols-outlined text-[18px]">
                    download
                  </span>
                </button>
              </div>
            </div>

            {/* Visual */}
            <div className="lg:col-span-7 xl:col-span-6 relative order-1 lg:order-2">
              <div className="relative h-[42vh] min-h-[280px] sm:h-[48vh] md:h-[55vh] lg:h-[72vh] lg:max-h-[720px]">
                <div className="absolute inset-0 mask-architectural overflow-hidden">
                  <video
                    src="https://res.cloudinary.com/djnnc4xvt/video/upload/q_auto/f_auto/v1781337392/hero-video_ir6ayj.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label="Architectural visualization of the Infinity Mall building"
                    className="absolute inset-0 h-full w-full object-cover scale-105 lg:scale-110 lg:hover:scale-100 transition-transform duration-[3s] ease-out"
                  />
                </div>

                {/* Blueprint detail — repositioned for all breakpoints */}
                <div className="absolute -bottom-4 right-4 sm:-bottom-6 sm:-left-6 sm:right-auto lg:-bottom-8 lg:-left-8 glass-panel p-5 sm:p-6 lg:p-8 max-w-[200px] sm:max-w-[240px] z-10">
                  <div className="font-technical-mono text-[10px] text-platinum/40 mb-2 uppercase tracking-widest">
                    Elevation A.04
                  </div>
                  <div className="h-px w-full bg-platinum/20 mb-3 sm:mb-4" />
                  <div className="font-headline-md text-3xl sm:text-headline-md text-soft-ivory">
                    72
                  </div>
                  <div className="font-label-caps text-[10px] text-muted-bronze">
                    Luxury Floors
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRESS */}
        <section
          className="py-section-gap px-safe-margin bg-obsidian relative overflow-hidden"
          id="progress"
        >
          <div className="absolute inset-0 blueprint-line opacity-5" />
          <div className="relative z-10 max-w-[1600px] mx-auto">
            {/* Header bento row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-gutter mb-12 sm:mb-16 lg:mb-20">
              <div className="lg:col-span-8 scroll-reveal">
                <span className="font-technical-mono text-[11px] sm:text-technical-mono text-muted-bronze mb-3 sm:mb-4 block">
                  LIVE UPDATES // PHASE II
                </span>
                <h2 className="text-headline-fluid text-soft-ivory max-w-4xl">
                  INFINITY MALL CONSTRUCTION IS PROGRESSING AT AN{" "}
                  <span className="italic text-muted-bronze">
                    ACCELERATED PACE.
                  </span>
                </h2>
              </div>
              <div className="lg:col-span-4 lg:self-end scroll-reveal">
                <p className="font-body-md text-body-md text-platinum/70 italic border-l-2 border-muted-bronze pl-5 sm:pl-6 text-sm sm:text-base">
                  &quot;Precision is our only standard. We are currently 12 weeks
                  ahead of the projected structural milestone for the residential
                  towers.&quot;
                </p>
              </div>
            </div>

            {/* Milestone bento grid */}
            <div className="bento-grid bento-grid--milestones">
              {MILESTONES.map((milestone, i) => (
                <div key={milestone.number} className={milestone.gridClass}>
                  <MilestoneCard {...milestone} index={i} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AMENITIES */}
        <section
          className="py-section-gap px-safe-margin bg-surface-container-lowest"
          id="amenities"
        >
          <div className="text-center mb-12 sm:mb-16 lg:mb-24 scroll-reveal max-w-3xl mx-auto">
            <span className="font-label-caps text-[10px] sm:text-label-caps text-muted-bronze tracking-[0.35em] sm:tracking-[0.5em] uppercase block mb-3 sm:mb-4">
              Exclusivity Defined
            </span>
            <h2 className="text-headline-fluid text-soft-ivory">
              WORLD CLASS AMENITIES
            </h2>
          </div>

          <div className="bento-grid bento-grid--amenities max-w-[1600px] mx-auto">
            {AMENITIES.map((amenity, i) => (
              <BentoCard
                key={amenity.title}
                title={amenity.title}
                icon={amenity.icon}
                description={amenity.description}
                image={amenity.image}
                className={amenity.gridClass}
                heightClass={amenity.heightClass}
                variant={amenity.variant}
                size={amenity.size}
                index={i}
              />
            ))}
          </div>
        </section>

        {/* TIMELINE */}
        <section
          className="py-section-gap px-safe-margin relative overflow-hidden bg-obsidian"
          id="timeline"
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 sm:mb-16 lg:mb-20 scroll-reveal">
              <span className="font-technical-mono text-[11px] sm:text-technical-mono text-platinum/40 mb-2 block uppercase">
                Roadmap to Reality
              </span>
              <h2 className="text-headline-fluid text-soft-ivory">
                ARCHITECTURAL TIMELINE
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-platinum/10 hidden md:block" />

              <div className="space-y-16 sm:space-y-20 md:space-y-28 lg:space-y-32">
                {/* 2022 */}
                <div className="grid grid-cols-1 md:grid-cols-2 relative scroll-reveal timeline-rail">
                  <div className="md:text-right md:pr-12 lg:pr-16 order-2 md:order-1 pl-6 md:pl-0">
                    <div className="timeline-marker bg-muted-bronze md:hidden" />
                    <div className="text-headline-fluid text-muted-bronze leading-none mb-3 sm:mb-4">
                      2022
                    </div>
                    <h3 className="text-headline-md-fluid text-soft-ivory mb-2">
                      Ground Breaking
                    </h3>
                    <p className="text-platinum/50 text-sm sm:text-base max-w-sm md:ml-auto">
                      Initial excavation and geotechnical stabilization.
                      Foundation work commenced for the landmark structure.
                    </p>
                  </div>
                  <div className="flex items-center justify-center order-1 md:order-2">
                    <div className="w-4 h-4 bg-muted-bronze rotate-45 z-10 mb-6 md:mb-0" />
                  </div>
                </div>

                {/* 2024 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter relative scroll-reveal timeline-rail">
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-4 h-4 bg-soft-ivory rotate-45 z-10" />
                  </div>
                  <div className="pl-6 md:pl-12 lg:pl-16">
                    <div className="timeline-marker bg-soft-ivory md:hidden" />
                    <div className="text-headline-fluid text-soft-ivory leading-none mb-3 sm:mb-4">
                      2024
                    </div>
                    <h3 className="text-headline-md-fluid text-soft-ivory mb-2">
                      Under Construction
                    </h3>
                    <p className="text-platinum/50 text-sm sm:text-base max-w-sm">
                      Vertical development of towers reaching peak elevation.
                      Commercial sectors nearing facade enclosure.
                    </p>
                  </div>
                </div>

                {/* 2026 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter relative scroll-reveal timeline-rail">
                  <div className="md:text-right md:pr-12 lg:pr-16 order-2 md:order-1 pl-6 md:pl-0">
                    <div className="timeline-marker border border-platinum/40 bg-transparent md:hidden" />
                    <div className="text-headline-fluid text-platinum/20 leading-none mb-3 sm:mb-4">
                      2026
                    </div>
                    <h3 className="text-headline-md-fluid text-soft-ivory mb-2">
                      Project Closure
                    </h3>
                    <p className="text-platinum/50 text-sm sm:text-base max-w-sm md:ml-auto">
                      Grand handover of residential units and commercial
                      launch. Defining a new era for urban living.
                    </p>
                  </div>
                  <div className="flex items-center justify-center order-1 md:order-2">
                    <div className="w-4 h-4 border border-platinum/40 rotate-45 z-10 mb-6 md:mb-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BRAND / LIFESTYLE */}
        <section className="py-section-gap relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4padt-A_SbJYkMrB-mVw7DCKm_Ikwa1RvaH2qXAOY37jRrLvLVmd-AaAUh8Q8GOTToaqlHqN4K-9zgrI96T6FynwJuzjnRdU3LYwFkmDDI_10kgTHJuI8GI47MiPzGYiIJhcDdCh-a3YK822aYQ2YJl5Z9y9UEiDXqwb_BGH2yM9MY0KxHDNoEX16CU3IgvsZX3Qwvj4O-ReS37vX5LAQ83GBHP4FiAUewWYaMSSS4rsTQkz9sxm4rcaVJctbx8jRNQD3beU58g"
              alt="Luxury Retail"
              fill
              sizes="100vw"
              className="object-cover opacity-30 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-obsidian via-obsidian/85 to-obsidian/60 sm:to-transparent" />
          </div>

          <div className="px-safe-margin relative z-10 max-w-4xl w-full">
            <div className="scroll-reveal">
              <span className="font-label-caps text-[10px] sm:text-label-caps text-muted-bronze mb-4 sm:mb-6 block tracking-widest">
                CURATED EXCELLENCE
              </span>
              <h2 className="text-headline-fluid text-soft-ivory leading-tight mb-6 sm:mb-8">
                COOL &amp; CHIC BRANDS:
                <br />
                <span className="italic">LIVE THE UNUSUAL.</span>
              </h2>

              {/* Lifestyle highlights bento */}
              <div className="bento-grid bento-grid--highlights gap-3 sm:gap-gutter mb-8 sm:mb-10 lg:mb-12">
                {BRAND_CATEGORIES.map((category, index) => (
                  <div
                    key={category}
                    className="bento-card glass-panel p-4 sm:p-5 lg:p-6 group cursor-default"
                  >
                    <div className="font-technical-mono text-[10px] sm:text-label-caps text-muted-bronze mb-2">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="font-headline-md text-base sm:text-lg lg:text-[20px] uppercase tracking-tighter text-platinum/70 group-hover:text-soft-ivory transition-colors">
                      {category}
                    </div>
                    <div className="h-px w-8 bg-muted-bronze/40 mt-3 group-hover:w-full transition-all duration-500" />
                  </div>
                ))}
              </div>

              <p className="text-body-fluid text-platinum/80 mb-8 sm:mb-10 max-w-2xl">
                Infinity Mall &amp; Residence isn&apos;t just a destination;
                it&apos;s an ecosystem of refinement. From Michelin-star dining
                to bespoke designer labels, every square meter is designed to
                cater to the unusual.
              </p>
              <button
                type="button"
                className="border-b border-soft-ivory pb-2 font-label-caps text-label-caps hover:text-muted-bronze hover:border-muted-bronze transition-all min-h-[44px]"
              >
                DISCOVER THE EXPERIENCE
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
