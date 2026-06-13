import type { Metadata } from "next";
import Image from "next/image";
import DevOutlineButton from "@/components/DevOutlineButton";
import InnerPageHero from "@/components/InnerPageHero";

const HERO_IMAGE = 'https://res.cloudinary.com/djnnc4xvt/image/upload/q_auto/f_auto/v1781337694/ongoing_ye5rva.png';
export const metadata: Metadata = {
  title: "Ongoing Projects",
  description:
    "Our diversified portfolio represents a paradigm shift in urban architecture, blending commercial utility with ultra-luxury living.",
};

const DEVELOPMENT_INDEX = [
  { category: "HOSPITALITY", count: "04 PROJECTS" },
  { category: "RESIDENTIAL", count: "03 PROJECTS" },
  { category: "COMMERCIAL", count: "02 PROJECTS" },
];

const FLAGSHIP_STATS = [
  { number: "01", label: "PROJECT VALUE", value: "40 Billion PKR" },
  { number: "02", label: "CAPACITY", value: "700+ Suites" },
  { number: "03", label: "STATUS", value: "5-Star Hospitality" },
];

const CASE_STUDIES = [
  {
    name: "Golden Tulip",
    subtitle: "J7 Solitaire",
    tagline: "Signature hospitality redefining the city skyline.",
    badge: "HOSPITALITY",
    number: "01",
    colClass: "md:col-span-2",
    aspectClass: "aspect-video",
    sizes: "(min-width: 768px) 66vw, 100vw",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJejlggjLC5Gc9B1uxQLtNepxQg3IBKPg_-r0mNDsAJYUur0EjAePw6UQvVza1tSWmgWRvis12eHMudQc8UpWx_6WFka51STTlGTw8TdD7zYRa9U_jZqY2L_DykIn0zFT7SGrNYCpyLVAoUWon2w68t2JkItIYLn5A1WeI1EBaPzWrsz033ErbzMd49ZXEAJ2neXgvs_rzKbC9fzE2FTcYMXKiAvGzXRHOailSasokArBTOCLxCd_Zd2G1ZDbInbpIFBo8o7rwNA",
    alt: "Golden Tulip luxury hotel exterior at dusk",
    featured: true,
  },
  {
    name: "J7 Emporium",
    subtitle: "",
    tagline: "The evolution of mixed-use excellence.",
    badge: "MIXED USE",
    number: "02",
    colClass: "",
    aspectClass: "aspect-[4/5]",
    sizes: "(min-width: 768px) 33vw, 100vw",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmgx-WnboFTEQGh2YfqI4LVUSoyHF_mZ1-3yvlUXUiU--tw3f64uxG7J-hDNmiluOQy9zebg47CB4gBi1CySx9Z_jU4H09lp8oIq3owvrUtb9aMSwQcr-QLby67E2UeTxJwVEUAG2WVRvo1aonvv6lG3l_Vihz3x2r2yKD_9E8J3s1l8S4FSbw-0s5rS2w1xBjuMBbgv0vvfyAWfyu4U-F1jisY8VbYS8GL_OzIr7P3pGczCV_9Cxi2ty3tGb9KNXLNdl0SGIwiQ",
    alt: "J7 Emporium facade with cantilevered glass balconies",
    featured: false,
  },
  {
    name: "Signature Hotel",
    subtitle: "",
    tagline: "Bespoke service meet architectural grace.",
    badge: "BOUTIQUE",
    number: "03",
    colClass: "",
    aspectClass: "aspect-[4/5]",
    sizes: "(min-width: 768px) 33vw, 100vw",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPbpT6-Kk7piSv6AiJ3cn4ycZtUuosP5VNPof4C5awUVavJJYzKeuAqEdxLtcT3G1JbzhMQn3_2VBps0QQXYfTooqpIgLIZVy8Qv-FzN18dKcfPUhfb5HjXR2CZUtMawoAzFZ7w0IGwWc9QlJv4gKcoWQKfi7lUPlVYJPGwfpdTf5PKJLyKH4n7-FN448cOCrkRMXIyx19INdRy7L4H7R5h3JYXrsL0F4apBl6yGjSEhWuay-e6-CbRJDb-kAzNd8mFCUD1cLTJQ",
    alt: "Luxury hotel penthouse terrace overlooking the city at night",
    featured: false,
  },
  {
    name: "Radisson Blu",
    subtitle: "J7 Global",
    tagline: "International standards in local context.",
    badge: "GLOBAL STANDARD",
    number: "04",
    colClass: "md:col-span-2",
    aspectClass: "aspect-video",
    sizes: "(min-width: 768px) 66vw, 100vw",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAG9CBaYXWkdAgLJIozZEJTC674_qzq5InxMNvakj60W4Unzdnh1O4UdxamfFRa9r3DUwRSflasLgrzc5nrnnW7KVa-tljobjjwmpfH0crU8weVNsLEKwFigojXVGOxXxrSNCoLGjLIZbAgDoNBlLKs8MQqwX7PGeirkAGEcDP6aa_RV8T1kxga8kfTZB3mkqroHpEHXKsgcwp2L2GoTG_TpGLrtoEOSrUx4VC3GabbVcjzAdUMm-1Mhk27uW48RCuI8falMJ2saA",
    alt: "Expansive luxury hotel lobby with layered gallery lighting",
    featured: true,
  },
];

export default function OngoingProjectsPage() {
  return (
    <div
      className="page-ongoing font-body-md text-body-md text-platinum antialiased"
      data-reveal-margin="-50px"
    >
      {/* ── HERO — full-bleed cinematic ── */}
      <InnerPageHero
        variant="ongoing"
        eyebrow="Portfolio in Development"
        eyebrowFlanked
        title={
          <>
            ONGOING
            <br />
            PROJECTS
          </>
        }
        backgroundImage={HERO_IMAGE}
        backgroundImageAlt="Golden Tulip luxury hotel exterior at dusk"
        backgroundImageClassName="object-cover object-center"
        showScroll
      />

      {/* ── Pipeline stat strip — sits immediately below the hero ── */}
      <div className="bg-surface-container border-b border-platinum/5">
        <div className="max-w-7xl mx-auto px-safe-margin">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-platinum/5">
            <div className="py-6 px-6 md:py-8 md:px-10">
              <span className="font-technical-mono text-[10px] text-muted-bronze uppercase tracking-widest block mb-1">
                Total Volume
              </span>
              <span className="font-headline-md text-xl md:text-2xl text-soft-ivory">120B PKR</span>
            </div>
            <div className="py-6 px-6 md:py-8 md:px-10">
              <span className="font-technical-mono text-[10px] text-muted-bronze uppercase tracking-widest block mb-1">
                Active Projects
              </span>
              <span className="font-headline-md text-xl md:text-2xl text-soft-ivory">09</span>
            </div>
            <div className="py-6 px-6 md:py-8 md:px-10">
              <span className="font-technical-mono text-[10px] text-muted-bronze uppercase tracking-widest block mb-1">
                Pipeline Status
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-accent shadow-[0_0_8px_#062E27]" />
                <span className="font-technical-mono text-[11px] text-soft-ivory uppercase tracking-widest">Live</span>
              </div>
            </div>
            <div className="py-6 px-6 md:py-8 md:px-10">
              <span className="font-technical-mono text-[10px] text-muted-bronze uppercase tracking-widest block mb-1">
                Enterprise Value
              </span>
              <span className="font-headline-md text-xl md:text-2xl text-soft-ivory">2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── DEVELOPMENT INDEX ── */}
      <section className="py-section-gap px-safe-margin bg-obsidian">
        <div className="grid grid-cols-12 gap-gutter items-start">

          {/* Left column */}
          <div className="col-span-12 md:col-span-4 md:sticky md:top-32">
            <h2 className="font-headline-lg text-headline-lg text-soft-ivory mb-8">
              Development Index
            </h2>
            <p className="font-body-lg text-body-lg text-platinum/60 max-w-sm mb-12">
              Our diversified portfolio represents a paradigm shift in urban
              architecture, blending commercial utility with ultra-luxury
              living.
            </p>

            {/* Desktop list (original) */}
            <div className="hidden md:flex flex-col gap-4 border-l border-muted-bronze pl-6">
              {DEVELOPMENT_INDEX.map((item) => (
                <div
                  key={item.category}
                  className="flex justify-between items-center py-2 group cursor-pointer"
                >
                  <span className="font-label-caps text-label-caps text-soft-ivory group-hover:text-muted-bronze transition-colors">
                    {item.category}
                  </span>
                  <span className="font-technical-mono text-technical-mono text-platinum/30">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>

            {/* Mobile category bento */}
            <div className="md:hidden op-cat-bento">
              {DEVELOPMENT_INDEX.map((item, i) => (
                <div key={item.category} className="op-cat-tile reveal-on-scroll" style={{ animationDelay: `${i * 80}ms` }}>
                  <span className="font-technical-mono text-[9px] text-muted-bronze uppercase tracking-[0.2em] block mb-2">
                    {item.category}
                  </span>
                  <span className="font-headline-md text-xl font-light text-soft-ivory">
                    {item.count.split(" ")[0]}
                  </span>
                  <span className="font-technical-mono text-[9px] text-platinum/25 block mt-0.5 uppercase tracking-[0.15em]">
                    PROJECTS
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right image mosaic (original, untouched) */}
          <div className="col-span-12 md:col-span-8 grid grid-cols-2 gap-gutter mt-12 md:mt-0">
            <div className="col-span-2 md:col-span-1 aspect-[4/5] relative overflow-hidden group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY2hs7gAABGaoHvvNOZ4FP8in_QGUheHocSbCTa0h45QsyHjLNujKcfi14ZkQ5SjsXCaKrdaRc3l2JD7jLN690ZYKmm7qoPzZEE5VIzUCEKigH6P9s_UeXqQ2RkCISN0-2duiPQRx-diqI5X2gYFInOvD_mMB9il06bOSJ6lGcpMrpb0pDi9FmRfFLrhiA_BX5U5FFkfksuCnZCVm5QTKD7qlIpVuc-zM_6hfKl1RGw9wfTFKUj2a9Dlxb5cj-4sDSQv3VsthogA"
                alt="High-rise construction site at twilight"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60"></div>
              {/* Mobile: stronger bottom fade so the gap below is seamless */}
              <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-obsidian to-transparent md:hidden"></div>
              <div className="absolute bottom-8 left-8">
                <span className="font-technical-mono text-technical-mono text-muted-bronze">
                  ENGINEERING PHASE
                </span>
                <h4 className="font-headline-md text-headline-md text-soft-ivory">
                  Structural Integrity
                </h4>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 aspect-[4/5] relative overflow-hidden group md:mt-16">
              {/* Mobile blur seam — fades top edge of this image into the gap */}
              <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-obsidian to-transparent z-10 pointer-events-none md:hidden"></div>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnF0arDNaXE-a4fWxff_XBm-lOYA1Tx2uzdGoXF-kwH0lPNAF0QAKq87TWZbLcz1Zuo9jvxulel6VeXLX-XlGb4JIjugJ9fbYQdkvIlNlohmYQ1HXswePN9Ba4c2dLhHxnWLWbQK6487MPv49MxKR7pjqEkxlzRdiRsHgAplEh1kUjK76Mk3IDg7MdUq3Z11rIOYqtIvF5VbgBj8KPpV6wiQoPkbhY7Aj_kwbIbLLgn-c4dc25n_GCVWPph1E4hSPIlqt9QKZu3A"
                alt="Sleek glass skyscraper with minimalist facade"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8">
                <span className="font-technical-mono text-technical-mono text-muted-bronze">
                  FACADE DESIGN
                </span>
                <h4 className="font-headline-md text-headline-md text-soft-ivory">
                  Aesthetic Finish
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FLAGSHIP: Royal Swiss J7 ICON ── */}
      <section className="relative py-section-gap bg-obsidian overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#1A1A1A_0%,_#0C0C0C_100%)]"></div>

        {/* ── Mobile flagship panel (md:hidden) ── */}
        <div className="md:hidden px-safe-margin relative z-10">
          <span className="font-label-caps text-label-caps text-muted-bronze mb-3 block">
            FLAGSHIP DEVELOPMENT
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile text-soft-ivory mb-6 leading-tight">
            Royal Swiss<br />
            <em className="not-italic text-muted-bronze">J7 ICON</em>
          </h2>

          {/* Full-bleed cinematic image */}
          <div className="op-flagship-img -mx-safe-margin reveal-on-scroll">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxxiuq9aegoQAIAj4fAPxFqEJz1blrAzkx-0skjiFgNckTEQqv2pgTDK-0h8V8IN0d69vpgBOkFKmfeR0JXfFqigigiR-ilaLtnEnqNGCWvo93KQQP-2YJGX3m0NFv_9ej5Y9KPlAVzG5vPWWFxpHf8mzxLzBq3d7oUM0b_Kq9dhucrgT1C5UWxgLPlVRZw5bbnWW6Lu2mq82uyPSqFWMcB685q4wDla0VSRFDJjdCWkkY0x4pZ-Ynz2fe3o0wjncW0FZaAT7IqA"
              alt="Royal Swiss J7 ICON tower rendering at night"
              fill
              sizes="100vw"
              className="object-cover object-top"
            />
            <div className="op-flagship-img__overlay">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-[1px] w-6 bg-muted-bronze/60"></div>
                <span className="font-technical-mono text-[9px] text-muted-bronze uppercase tracking-[0.25em]">
                  5-Star Hospitality · Islamabad
                </span>
              </div>
            </div>
          </div>

          {/* Stats bento */}
          <div className="op-flagship-stats reveal-on-scroll">
            {FLAGSHIP_STATS.map((stat) => (
              <div key={stat.number} className={`op-flagship-stat${stat.number === "01" ? " op-flagship-stat--wide" : ""}`}>
                <span className="font-display-xl text-3xl text-muted-bronze/20 block leading-none mb-1.5">
                  {stat.number}
                </span>
                <span className="font-technical-mono text-[9px] text-muted-bronze uppercase tracking-[0.2em] block mb-1">
                  {stat.label}
                </span>
                <span className="font-headline-md text-lg font-light text-soft-ivory leading-snug">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Engineering strip */}
          <div className="op-eng-strip reveal-on-scroll">
            <span className="font-technical-mono text-[9px] text-muted-bronze uppercase tracking-[0.25em] block mb-2">
              ENGINEERING HIGHLIGHTS
            </span>
            <div className="grid grid-cols-2 gap-y-1.5 gap-x-3">
              {[
                "ANTI-SEISMIC REINFORCEMENT",
                "SMART ENERGY ECOSYSTEM",
                "DOUBLE-GLAZED THERMAL PANELS",
                "INTEGRATED HELIPAD",
              ].map((h) => (
                <span key={h} className="font-technical-mono text-[9px] text-platinum/35 leading-snug">
                  · {h}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 reveal-on-scroll">
            <DevOutlineButton className="w-full py-4">VIEW FLOORPLANS</DevOutlineButton>
          </div>
        </div>

        {/* ── Desktop layout (original, untouched) ── */}
        <div className="hidden md:block px-safe-margin relative z-10">
          <div className="grid grid-cols-12 gap-gutter items-center">
            <div className="col-span-12 md:col-span-5 reveal-on-scroll">
              <span className="font-label-caps text-label-caps text-muted-bronze mb-4 block">
                FLAGSHIP DEVELOPMENT
              </span>
              <h2 className="font-headline-lg text-headline-lg text-soft-ivory mb-8">
                Royal Swiss J7 ICON
              </h2>
              <div className="space-y-12 mb-12">
                {FLAGSHIP_STATS.map((stat, index) => (
                  <div
                    key={stat.number}
                    className={`flex items-start gap-6 ${
                      index < FLAGSHIP_STATS.length - 1
                        ? "border-b border-platinum/10 pb-8"
                        : ""
                    }`}
                  >
                    <span className="font-display-xl text-headline-lg text-muted-bronze opacity-30">
                      {stat.number}
                    </span>
                    <div>
                      <h4 className="font-label-caps text-label-caps text-soft-ivory mb-2">
                        {stat.label}
                      </h4>
                      <p className="font-headline-md text-headline-md text-soft-ivory">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <DevOutlineButton className="w-full md:w-auto px-12 py-4">
                VIEW FLOORPLANS
              </DevOutlineButton>
            </div>
            <div className="col-span-12 md:col-span-7 relative reveal-on-scroll">
              <div className="aspect-[3/4] relative overflow-hidden shadow-2xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxxiuq9aegoQAIAj4fAPxFqEJz1blrAzkx-0skjiFgNckTEQqv2pgTDK-0h8V8IN0d69vpgBOkFKmfeR0JXfFqigigiR-ilaLtnEnqNGCWvo93KQQP-2YJGX3m0NFv_9ej5Y9KPlAVzG5vPWWFxpHf8mzxLzBq3d7oUM0b_Kq9dhucrgT1C5UWxgLPlVRZw5bbnWW6Lu2mq82uyPSqFWMcB685q4wDla0VSRFDJjdCWkkY0x4pZ-Ynz2fe3o0wjncW0FZaAT7IqA"
                  alt="Royal Swiss J7 ICON tower rendering at night"
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute top-12 -left-12 glass-panel p-10 hidden lg:block border-l-4 border-muted-bronze">
                  <h5 className="font-technical-mono text-technical-mono text-soft-ivory mb-4">
                    ENGINEERING HIGHLIGHTS
                  </h5>
                  <ul className="space-y-3 font-technical-mono text-technical-mono text-platinum/50 text-xs">
                    <li>• ANTI-SEISMIC REINFORCEMENT</li>
                    <li>• SMART ENERGY ECOSYSTEM</li>
                    <li>• DOUBLE-GLAZED THERMAL PANELS</li>
                    <li>• INTEGRATED HELIPAD</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INFINITY MALL ── */}
      <section className="py-section-gap px-safe-margin bg-obsidian border-y border-platinum/10">
        <div className="max-w-4xl mx-auto text-center mb-24 reveal-on-scroll">
          <span className="font-label-caps text-label-caps text-muted-bronze tracking-[0.5em] mb-4 block">
            A NEW GRAVITY
          </span>
          <h2 className="font-display-xl text-headline-lg text-soft-ivory">
            INFINITY MALL
          </h2>
          <p className="text-platinum/60 mt-8 font-body-lg text-body-lg">
            The definitive retail destination in the region. Combining global
            luxury brands with architectural majesty, the Infinity Mall is an
            anchor of prosperity.
          </p>
        </div>

        {/* ── Mobile Infinity Mall layout (md:hidden) ── */}
        <div className="md:hidden reveal-on-scroll">
          <div className="op-mall-img -mx-safe-margin">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTFUO7jqfn61J-eWoQbsSjbzEd8FVIDcmmJtL9gfgX297SJ2RkJBjvbYLAvvpqkf5hdGdyikPNySJgbItRS7rJW4C10V60R4m8uD8c5x3GgXdve5miIxz5kgV9fUK9B4Y_UovgqifSSXRJVBgPDE4zMrwijbDUqNDtVPMK_BoMDhD5WB67A8wFM1z76-rAWQcIq3C1ZtYHdk2G_g7iP-XAIt8TrFMdxVBzEm5otkyUjLBGw43a0pHUdz-YjOWP6c7dj3Z0jR24UA"
              alt="Grand atrium interior of the Infinity Mall with glass dome"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent"></div>
            <div className="absolute top-4 left-4">
              <span className="font-technical-mono text-[9px] text-soft-ivory border border-soft-ivory/40 px-2.5 py-1 uppercase tracking-[0.2em]">
                RETAIL LANDMARK
              </span>
            </div>
          </div>
          <p className="text-platinum/50 mt-5 mb-4 text-sm leading-relaxed">
            Curated retail spaces designed for maximum visibility and flow. A
            hub for international brands and premium dining experiences.
          </p>
          <div className="op-mall-stats">
            <div className="op-mall-stat">
              <span className="font-technical-mono text-[9px] text-muted-bronze block mb-1.5 uppercase tracking-[0.2em]">
                RETAIL UNITS
              </span>
              <span className="font-headline-md text-2xl font-light text-soft-ivory">250+</span>
            </div>
            <div className="op-mall-stat">
              <span className="font-technical-mono text-[9px] text-muted-bronze block mb-1.5 uppercase tracking-[0.2em]">
                PARKING
              </span>
              <span className="font-headline-md text-2xl font-light text-soft-ivory">1200+</span>
            </div>
          </div>
        </div>

        {/* ── Desktop layout (original, untouched) ── */}
        <div className="hidden md:grid grid-cols-12 gap-gutter items-center">
          <div className="col-span-12 md:col-span-8 reveal-on-scroll">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTFUO7jqfn61J-eWoQbsSjbzEd8FVIDcmmJtL9gfgX297SJ2RkJBjvbYLAvvpqkf5hdGdyikPNySJgbItRS7rJW4C10V60R4m8uD8c5x3GgXdve5miIxz5kgV9fUK9B4Y_UovgqifSSXRJVBgPDE4zMrwijbDUqNDtVPMK_BoMDhD5WB67A8wFM1z76-rAWQcIq3C1ZtYHdk2G_g7iP-XAIt8TrFMdxVBzEm5otkyUjLBGw43a0pHUdz-YjOWP6c7dj3Z0jR24UA"
              alt="Grand atrium interior of the Infinity Mall with glass dome"
              width={1600}
              height={384}
              sizes="(min-width: 768px) 66vw, 100vw"
              className="w-full h-96 object-cover border border-platinum/10"
            />
          </div>
          <div className="col-span-12 md:col-span-4 glass-panel p-12 -ml-0 md:-ml-24 relative z-10 reveal-on-scroll">
            <h3 className="font-headline-md text-headline-md text-soft-ivory mb-6">
              Lifestyle Anchor
            </h3>
            <p className="text-platinum/50 mb-8">
              Curated retail spaces designed for maximum visibility and flow. A
              hub for international brands and premium dining experiences.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-platinum/10">
                <span className="font-technical-mono text-technical-mono text-muted-bronze block">
                  RETAIL UNITS
                </span>
                <span className="font-headline-md text-headline-md text-soft-ivory">
                  250+
                </span>
              </div>
              <div className="p-4 border border-platinum/10">
                <span className="font-technical-mono text-technical-mono text-muted-bronze block">
                  PARKING
                </span>
                <span className="font-headline-md text-headline-md text-soft-ivory">
                  1200+
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDY GRID ── */}
      <section className="py-section-gap px-safe-margin bg-obsidian">
        <h2 className="font-label-caps text-label-caps text-muted-bronze mb-16 tracking-[0.3em]">
          SELECT DEVELOPMENTS
        </h2>

        {/* ── Desktop grid (original, untouched) ── */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {CASE_STUDIES.map((project) => (
            <div
              key={project.name}
              className={`${project.colClass} group reveal-on-scroll`}
            >
              <div className={`relative overflow-hidden ${project.aspectClass}`}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes={project.sizes}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-obsidian/40 group-hover:bg-obsidian/20 transition-all"></div>
                <div className="absolute top-8 right-8 font-technical-mono text-technical-mono text-soft-ivory border border-soft-ivory px-4 py-1">
                  {project.badge}
                </div>
              </div>
              <div className="mt-8 flex justify-between items-end border-b border-platinum/10 pb-8">
                <div>
                  <h3 className="font-headline-md text-headline-md text-soft-ivory">
                    {project.name}
                  </h3>
                  <p className="text-platinum/50 mt-2">{project.tagline}</p>
                </div>
                <span className="font-display-xl text-headline-lg text-platinum/10">
                  {project.number}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Mobile editorial panels (md:hidden) ── */}
        <div className="md:hidden flex flex-col gap-10">
          {CASE_STUDIES.map((project) => (
            <div key={project.name} className="op-case-panel reveal-on-scroll">
              {/* Image */}
              <div className={`op-case-img ${project.featured ? "op-case-img--featured" : ""} relative overflow-hidden`}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="font-technical-mono text-[9px] text-soft-ivory border border-soft-ivory/50 px-2.5 py-1 uppercase tracking-[0.15em]">
                    {project.badge}
                  </span>
                </div>
                <span className="op-ghost-num">{project.number}</span>
              </div>

              {/* Meta row */}
              <div className="pt-3 flex items-baseline gap-3">
                <div className="flex-1">
                  <h3 className="font-headline-md text-lg font-light text-soft-ivory leading-tight">
                    {project.name}
                  </h3>
                  {project.subtitle && (
                    <span className="font-technical-mono text-[9px] text-muted-bronze uppercase tracking-[0.2em]">
                      {project.subtitle}
                    </span>
                  )}
                </div>
                <div className="h-[1px] flex-1 bg-platinum/10 self-center"></div>
              </div>
              <p className="text-platinum/45 text-sm leading-relaxed mt-1.5">
                {project.tagline}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
