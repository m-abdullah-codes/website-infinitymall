---
name: Infinity Monolith
colors:
  surface: '#111415'
  surface-dim: '#111415'
  surface-bright: '#373a3b'
  surface-container-lowest: '#0c0f10'
  surface-container-low: '#191c1d'
  surface-container: '#1d2021'
  surface-container-high: '#272a2b'
  surface-container-highest: '#323536'
  on-surface: '#e1e3e4'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e1e3e4'
  inverse-on-surface: '#2e3132'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c9c6c5'
  primary: '#c9c6c5'
  on-primary: '#313030'
  primary-container: '#0c0c0c'
  on-primary-container: '#7b7a79'
  inverse-primary: '#5f5e5e'
  secondary: '#c8c6c2'
  on-secondary: '#30312d'
  secondary-container: '#474743'
  on-secondary-container: '#b6b5b0'
  tertiary: '#d5c4ad'
  on-tertiary: '#392f1f'
  tertiary-container: '#120b02'
  on-tertiary-container: '#867865'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e4e2dd'
  secondary-fixed-dim: '#c8c6c2'
  on-secondary-fixed: '#1b1c19'
  on-secondary-fixed-variant: '#474743'
  tertiary-fixed: '#f2e0c8'
  tertiary-fixed-dim: '#d5c4ad'
  on-tertiary-fixed: '#231a0c'
  on-tertiary-fixed-variant: '#504534'
  background: '#111415'
  on-background: '#e1e3e4'
  surface-variant: '#323536'
  obsidian: '#0C0C0C'
  soft-ivory: '#E8E6E1'
  graphite: '#2A2D2E'
  platinum: '#D1D5D8'
  muted-bronze: '#8C7E6A'
  emerald-accent: '#062E27'
typography:
  display-xl:
    fontFamily: EB Garamond
    fontSize: 120px
    fontWeight: '400'
    lineHeight: 110px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '300'
    lineHeight: 40px
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 28px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.2em
  technical-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
spacing:
  safe-margin: 80px
  gutter: 32px
  section-gap: 160px
  technical-grid: 8px
---

## Brand & Style

The design system is engineered to evoke the atmosphere of a high-end architectural studio and a premier investment opportunity. The brand personality is **iconic, cinematic, and authoritative**, targeting high-net-worth individuals who value precision and exclusivity. 

The aesthetic blends **Minimalism** with **Glassmorphism**, utilizing "blueprint-style" technical details to ground the luxury in engineering excellence. The UI feels like an immersive digital brochure: expansive, atmospheric, and intentionally paced. High-contrast layouts, layered architectural shapes, and soft spotlight gradients create a sense of physical depth and "quiet luxury" without relying on traditional gold accents.

## Colors

The palette is anchored in **Obsidian Black** for a cinematic, high-contrast foundation. **Soft Ivory** serves as the primary text color, providing a softer, more sophisticated contrast than pure white. 

**Muted Bronze** and **Platinum** are used for technical details, borders, and secondary labels, echoing architectural materials. **Deep Emerald** is utilized sparingly as an accent for success states, interactive highlights, or "Investment Opportunity" badges, reinforcing the "Green" architectural focus without breaking the monochromatic elegance. Surfaces should leverage gradients from Obsidian to Graphite to simulate spotlighting on expensive materials.

## Typography

This design system employs a high-contrast typographic pairing. **EB Garamond** provides a timeless, editorial serif for massive headlines and pull-quotes, conveying history and prestige. **Hanken Grotesk** offers a sharp, modern counterpoint for body copy and navigation, ensuring the interface feels contemporary and functional.

A third, "technical" font (**JetBrains Mono**) is used for small data points, floor plan dimensions, and unit numbers, mimicking the aesthetic of architectural blueprints. Large tracking (letter-spacing) should be applied to all uppercase labels to enhance the feeling of space and luxury.

## Layout & Spacing

The layout philosophy is based on an **asymmetric editorial grid**. Instead of standard balanced columns, elements are often offset to create visual tension and interest, much like a modern architectural structure.

- **Desktop:** A 12-column grid with generous 80px margins and 32px gutters. Large sections of whitespace (or "Obsidian space") are encouraged to let imagery breathe.
- **Asymmetry:** Content modules should frequently span uneven column ranges (e.g., an image spanning columns 1-7 while text resides in columns 9-11).
- **Blueprint Lines:** Use thin (1px) lines in Platinum or Muted Bronze to define sections or create "bounding boxes" around key data, mimicking CAD software.
- **Mobile:** Reflows to a single column with 24px margins, maintaining the oversized typography for headlines.

## Elevation & Depth

Hierarchy is achieved through **Glassmorphism and Tonal Layering** rather than traditional drop shadows.

1.  **Base Layer:** Solid Obsidian (#0C0C0C).
2.  **Raised Layer:** Translucent Graphite (#2A2D2E at 60% opacity) with a 20px backdrop blur, simulating frosted glass panels.
3.  **Spotlights:** Radial gradients (from #1A1A1A to #0C0C0C) are used behind primary cards to create a "gallery lighting" effect.
4.  **Outlines:** Instead of shadows, use 1px "Ghost Borders" in Platinum at 10% opacity to define the edges of interactive elements.

## Shapes

The design system utilizes a **Sharp (0px)** shape language. All buttons, cards, and image containers must have hard 90-degree corners to reflect the precision of modern architecture and the structural integrity of a skyscraper. 

Exceptions: Circular "play" buttons or floating action buttons may be used for video content to provide a singular point of focus against the rectilinear grid.

## Components

- **Buttons:** Primary buttons are outlined in Soft Ivory with a 1px border, utilizing the `label-caps` typography. On hover, they fill with Soft Ivory and transition text to Obsidian. There are no rounded corners.
- **Input Fields:** Bottom-border only (1px Platinum). Labels use the `technical-mono` style and sit above the line.
- **Cards:** Glassmorphic panels with a subtle "blueprint" grid background (10% opacity) visible through the glass. Content is padded heavily (40px+).
- **Chips/Status:** Small rectangular tags using `technical-mono`. "Available" units use a Deep Emerald border; "Sold" units use Graphite.
- **Lists:** Separated by thin, full-width horizontal lines. Each list item features a large "index number" (e.g., 01, 02) in EB Garamond at 20% opacity.
- **Interactive Floorplans:** Use vector lines in Platinum with Soft Ivory highlights for the selected unit.