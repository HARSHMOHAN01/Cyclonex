---
name: Atmospheric Intelligence
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006398'
  on-secondary: '#ffffff'
  secondary-container: '#5bb8fe'
  on-secondary-container: '#00476e'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#00174b'
  on-tertiary-container: '#497cff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#93ccff'
  on-secondary-fixed: '#001d31'
  on-secondary-fixed-variant: '#004b73'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003ea8'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.025em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0em
  label-data-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: -0.01em
  label-data-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.02em
  caption:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system embodies the clinical precision, authoritative clarity, and calm urgency required for mission-critical meteorological intelligence. Built specifically for operational meteorologists, disaster response directors, and maritime logistics coordinators, the UI eliminates visual noise in favor of high-legibility telemetry, spatial precision, and immediate risk comprehension.

The aesthetic fuses modern high-density SaaS minimalism with scientific telemetry displays. The emotional signature is calm, sober, and unyielding in its fidelity: an anchor of stability amid severe weather events. Surfaces feel pristine and atmospheric—defined by crisp white canvases, slate structural lines, deep oceanic navies, and restrained warning indicators that illuminate only when human intervention is required.

## Colors

The palette operates under an uncompromising pure light-mode mandate. The canvas background relies on `#f8fafc` (slate-50) paired with `#f1f5f9` (slate-100) for structural card groupings and telemetry wells, anchored by `#ffffff` for active foreground tiles.

- **Primary (`#0f172a` / `#1e293b`)**: Midnight naval slate. Delivers maximum contrast for critical vector data, wind speed readouts, barometric labels, and high-priority controls.
- **Secondary (`#0284c7`) & Tertiary (`#2563eb`)**: Atmospheric and maritime blues. Used for standard cyclone trajectories, isobar fills, radar swath contours, interactive links, and focused input indicators. Accent highlights utilize `#38bdf8` for active sensor tracking pings.
- **Neutral (`#64748b` base, `#94a3b8` muted, `#e2e8f0` border)**: Architectural gray slates providing low-friction structural demarcations without introducing visual weight.
- **Functional Semantics**: Strict situational indicators that reject ambient saturation:
  - **Critical / Hurricane Hazard (`#ef4444`)**: Category 4/5 threats, storm surge alerts, evacuation thresholds.
  - **Severe Advisory / Warning (`#f59e0b`)**: Tropical storm watches, gale warnings, rapid intensification triggers.
  - **Nominal / Operational (`#10b981`)**: Normalized telemetry, sea-surface temperature baseline, sensor operational status.

## Typography

Typography prioritizes tabular uniformity, speed of scan, and absolute clarity. The hierarchy splits responsibilities across two typefaces:

- **Inter**: Drives all administrative navigation, system headers, narrative meteorological briefings, and analytical body text. Tabular numerals (`tnum`) must be activated globally to guarantee vertical alignment in lists and timelines.
- **JetBrains Mono**: Serves as the dedicated telemetry engine. Used exclusively for latitude/longitude coordinates, Saffir-Simpson classifications, central barometric pressures (hPa/mb), sustained wind speeds (kts/mph), and ensemble model run identifiers.
- **Scalability**: Headlines contract proportionately on compact viewports to prevent line-wrapping on critical cyclone identification labels. All metadata captions and micro-labels maintain uppercase transformations with subtle tracking (`0.04em`) to ensure instant legibility against pale slate backdrops.

## Layout & Spacing

The layout utilizes a dynamic fluid grid system bounded by operational console rules:
- **Grid Architecture**: 12-column structure on desktop viewports (`≥ 1280px`) with `1.5rem` gutters; 8-column layout on tablet (`768px - 1279px`) with `1rem` gutters; 4-column flow on mobile viewports (`< 768px`).
- **Dashboard Canvas**: Uses a structured shell model. A collapsible high-density navigation sidebar (64px mini / 240px expanded) anchors the left plane, while the primary viewport hosts an operational split-pane: real-time geospatial/GIS canvas on one axis and modular telemetry cards on the other.
- **Rhythm**: Spacing follows a 4px geometric sub-grid. Card internals use compact padding (`space-md` or `1rem`) for dense sensor clusters and generous spacing (`space-lg` or `1.5rem`) for macro-level synoptic summaries. Element margins strictly separate orthogonal analytical clusters to prevent cognitive fatigue during prolonged analysis.

## Elevation & Depth

This design system strictly rejects heavy skeuomorphism and muddy drop shadows. Visual depth is engineered through structural planar layers, clean 1px hairline separators, and calibrated ambient luminescence:

- **Base Layer (Level 0)**: Canvas background (`#f8fafc`). Non-interactive, expansive, absorbing glare.
- **Sub-Containers (Level 1)**: Telemetry wells, data-grid rows, and inactive module groups utilize `#f1f5f9` with a subtle 1px border (`#e2e8f0`). Completely flat without shadow.
- **Elevated Tiles & Cards (Level 2)**: Crisp `#ffffff` surfaces resting above the canvas. Outlined with `1px solid #e2e8f0` and paired with an ultra-light ambient feather shadow: `box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)`.
- **Floating Overlays & Menus (Level 3)**: Radar tooltips, floating map legends, coordinate pickers, and context menus. Background is `#ffffff` with a hairline border (`#cbd5e1`) and an expanded soft drop: `box-shadow: 0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.03)`.
- **Active Focus & Risk Highlights**: Depth is emphasized using colored outline rings rather than vertical elevation. An active cyclone card glows with a `2px` offset ring in `#0284c7` or `#ef4444` rather than raising off the canvas.

## Shapes

The system implements a refined, utilitarian corner philosophy (`roundedness: 1`). Radii remain subtle and tight to maximize visible data real estate and preserve the disciplined look of laboratory and aerospace instrumentation:

- **Standard Elements (0.25rem / 4px)**: Checkboxes, telemetry micro-badges, input fields, control chips, table rows, and tooltips.
- **Medium Panels & Groupings (0.5rem / 8px)**: Standard analytical dashboard cards, modal frames, GIS map viewport viewports, and timeline modules.
- **Pill Exceptions**: Reserved strictly for transient operational status badges (e.g., `CAT 5`, `WATCH`, `STATIONARY`) to distinguish status metadata from functional interaction buttons.

## Components

### Buttons
- **Primary Action**: Solid `#0f172a` fill with `#ffffff` text. Hover shifts to `#1e293b`. Active state sets `transform: scale(0.99)`.
- **Secondary Action**: Background `#ffffff`, border `1px solid #e2e8f0`, text `#0f172a`. Hover transitions border to `#cbd5e1` and background to `#f8fafc`.
- **Tactical Meteorological**: Solid `#0284c7` fill for simulation run actions, track extrapolations, and GIS layer toggles. Hover triggers `#0369a1`.
- **Destructive/Emergency**: Red outline (`#ef4444`) with transparent background, shifting to solid `#ef4444` with `#ffffff` text on intent confirmation.

### Chips & Badges
- **Telemetry Chips**: `#f1f5f9` background, `1px solid #e2e8f0`, JetBrains Mono text (`11px`).
- **Severity Badges**:
  - Hurricane/Extreme: `#fef2f2` fill, `1px solid #fecaca`, `#dc2626` bold monospaced text.
  - Advisory/Warning: `#fffbeb` fill, `1px solid #fde68a`, `#b45309` bold monospaced text.
  - Nominal/Baseline: `#ecfdf5` fill, `1px solid #a7f3d0`, `#047857` bold monospaced text.

### Cards & Telemetry Tiles
- **Dashboard Metric Card**: Pure `#ffffff` surface, `1px solid #e2e8f0`, `0.5rem` radius. Header displays a muted Inter title (`11px uppercase tracking-wider`) with an adjacent unit indicator. The primary value uses Inter or JetBrains Mono (`24px` to `32px` bold), underlined by a delta sparkline or trajectory rate indicator.
- **GIS Floating Control Card**: Minimalist glass-neutral card (`#ffffff` with `95%` opacity, backdrop blur `8px`), containing map layer toggles, wind shear filters, and time-scrub controls.

### Form Inputs & Controls
- **Text & Numeric Inputs**: Height `36px`, background `#ffffff`, border `1px solid #cbd5e1`, font `14px Inter`. Focus state triggers border `#0284c7` with a 3px ring (`rgba(2, 132, 199, 0.15)`).
- **Checkboxes & Radios**: 16px geometry with `0.25rem` radius for checkboxes; full circular for radios. Inactive border `#cbd5e1`; checked state fills `#0284c7` with a crisp white tick mark.
- **Segmented Range Toggles**: Integrated within an `#f1f5f9` rail. Selected item receives an elevated `#ffffff` badge with `1px solid #e2e8f0` and deep navy text.

### Lists & Telemetry Tables
- **Data Grids**: Compact 36px row height. Header uses `#f8fafc`, uppercase `11px` Inter with subtle vertical divider strokes. Row borders use `1px solid #f1f5f9`. Zebra striping is omitted in favor of gentle row-level highlight on hover (`#f8fafc`). Numerics are right-aligned and set in JetBrains Mono.

### Specialized Weather Domain Components
- **Ensemble Model Track Scrubber**: Horizontal scrub bar with discrete timestamp notches, model flags (GFS, ECMWF, UKMET), and pressure profile mini-graphs.
- **Wind Radii Quadrant Matrix**: Circular cardinal indicator (NE, SE, SW, NW) split into clean quadrants displaying 34kt, 50kt, and 64kt nautical-mile extensions in crisp slate and blue demarcations.