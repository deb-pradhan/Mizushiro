Design System: "Technical Blueprint"

Version: 2.0 (Dark Red & Charcoal)

Status: Active

Aesthetic Classification: Digital Industrial / High-Fidelity Wireframe / Dark Mode

1. Core Philosophy

This system treats the User Interface as a technical schematic. It eschews modern "soft" UI trends (shadows, blurs, gradients) in favor of absolute clarity, rigid grids, and raw data presentation.

The 3 Laws

The Metaphor: An architectural blueprint marked up with a crimson engineer's pen on carbon paper.

The Rule of Ink: If it doesn't convey data or structure, remove it.

The Rule of Edge: Containers are sharp (0px radius); controls are organic (999px radius).

2. Color System & Harmony

The palette relies on neutral charcoal greys to support the Dark Red accent. The surfaces utilize pure achromatic dark tones to create a high-contrast, industrial atmosphere that lets the red "pop" as the sole chromatic element.

2.1 Accent Token (The "Live Wire")

The accent color is treated as a highlighter pen. It indicates active energy, critical data, or primary interactivity.

Token

Hex

Role

color-accent-main

#9B1C1C

Primary Actions, Active States, Crosshairs (4.5:1 on white)

color-accent-hover

#B52525

Hover states for primary actions

color-accent-subtle

#1A0A0A

Very faint accent wash (dark red tint)

2.2 Surface Tokens (Charcoal Scale)

Theory: We use pure neutral greys to maximize the chromatic impact of the red accent.

Token

Hex

Role

surface-canvas

#0A0A0A

Global background (Near Black)

surface-card

#141414

Primary container background

surface-subtle

#1C1C1C

Internal segmentation

surface-elevated

#242424

Elevated elements, dropdowns

2.3 Ink Tokens (Text & Icons)

Token

Hex

Role

Contrast on surface-card

ink-primary

#F5F5F5

Headlines (Off-white for less harshness)

14.5:1 ✓

ink-secondary

#A3A3A3

Labels, body text

8.2:1 ✓

ink-tertiary

#666666

Placeholders, disabled states

4.6:1 ✓

ink-on-accent

#FFFFFF

Text inside primary buttons

5.1:1 on accent ✓

2.4 Border Tokens

Token

Hex

Role

border-grid

#2A2A2A

Structural lines (Dark Grey)

border-element

#363636

Subtle borders within a card

border-accent

#9B1C1C

Accent-colored borders

2.5 Functional Signals (Semantic)

Theory: High-visibility colors selected for dark backgrounds. Slightly desaturated to prevent visual clash with the red accent.

Token

Hex

Role

Notes

signal-error

#EF4444

Critical Failure

Brighter red for differentiation from accent

signal-warning

#F59E0B

Attention Needed

Warm amber, high visibility

signal-success

#10B981

Operational

Teal-green, distinct from red

3. Typography (Modern Minimalist Refinement)

Typography drives the elegance of the system. We use a Neo-Grotesque approach: tighter headlines, wide micro-labels, and a dedicated mono font for data density.

Primary Font: Geist Sans, Inter, or Suisse Int'l. (Rational, clean, neutral).
Data Font: JetBrains Mono or Geist Mono. (Humanist monospace).

3.1 Type Scale & Dynamics

Refinement Note: We avoid heavy weights (Bold/Black). Hierarchy is achieved through size and casing, not thickness.

Role

Weight

Size

Line Height

Tracking

Case

Display XL

Light (300)

48px

1.0 (Tight)

-2.5%

Sentence

H1 Title

Regular (400)

24px

1.2

-1.0%

Sentence

H2 Subhead

Regular (400)

16px

1.4

-0.5%

Sentence

Body Reading

Regular (400)

14px

1.5

0%

Sentence

Label/Micro

Medium (500)

11px

1.0

+6%

UPPERCASE

Data Numerical

Regular (400)

13px

1.4

0%

Tabular Nums

3.2 Typographic Rules

Tabular Figures: All numbers in data tables or dashboards must use font-variant-numeric: tabular-nums to ensure vertical alignment.

Optical Alignment: For Display XL, allow characters to hang slightly into the margin if possible for optical straightness.

No Italics: This system does not use italics. If emphasis is needed, use color (color-accent-main).

4. Grid Architecture (The "Bento" Logic)

The layout uses a visible modular grid.

Gap: 0px. No transparency between cards.

Separation: Cards are separated by 1px solid lines (border-grid).

Artifacts: The corners where four grid modules meet are marked with a visual artifact.

The Crosshair Artifact (+)

Every major intersection must feature a registration mark.

Symbol: Plus sign (+)

Color: color-accent-main (#9B1C1C)

Position: Absolute, overlapping the border intersection.

5. Component Library

5.1 Containers (Cards)

Shape: Strictly Rectangular.

Border Radius: 0px.

Shadows: None.

Stroke: 1px border-grid outline.

Header: Title (Top Left) + Directional Icon (Top Right, in Accent Color).

5.2 Buttons & Controls

Controls serve as the organic contrast to the rigid grid.

Shape: Full Pill (Capsule). border-radius: 999px.

Primary Action: Solid #9B1C1C background, White text.

Secondary Action: Transparent background, 1px #9B1C1C border, #9B1C1C text.

Toggles: High contrast. #9B1C1C circle thumb on a #2A2A2A track.

5.3 Iconography

Style: Linear / Stroke-based.

Stroke Width: 1.5px (Uniform).

Active State: Rendered in Accent Color.

6. Data Visualization

Data should feel like it is drawn with a plotter pen.

Charts: 1px stroke weight.

Active Data Line: Rendered in Accent #9B1C1C.

Context Lines: Rendered in ink-secondary (#A3A3A3).

Fills: No solid fills. Use vertical hatching or dithering.

7. Imagery & Texture

The "Dither" Mandate: Photographic or 3D content must never be rendered in full gradients. It must be processed to look like 1-bit or grayscale print.

Standard: Grayscale Dither (Light dots on Black).

Featured/Active: Duotone Dithering (Red #9B1C1C dots on Black).

Perspective: Isometric or Orthographic preferred.

8. Developer Handoff (CSS Variables)

:root {
  /* Surface (Charcoal Scale) */
  --surface-canvas:   #0A0A0A;
  --surface-card:     #141414;
  --surface-subtle:   #1C1C1C;
  --surface-elevated: #242424;

  /* Ink (Light on Dark) */
  --ink-primary:   #F5F5F5;
  --ink-secondary: #A3A3A3;
  --ink-tertiary:  #666666;
  --ink-on-accent: #FFFFFF;

  /* Accent (Dark Red) */
  --color-accent-main:   #9B1C1C;
  --color-accent-hover:  #B52525;
  --color-accent-subtle: #1A0A0A;

  /* Functional Signals */
  --signal-error:   #EF4444;
  --signal-warning: #F59E0B;
  --signal-success: #10B981;

  /* Borders */
  --border-grid:    #2A2A2A;
  --border-element: #363636;
  --border-accent:  #9B1C1C;
  
  /* Typography Stack */
  --font-sans: 'Geist Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Geist Mono', 'JetBrains Mono', monospace;
}

/* Utility Class: Grid Intersections */
.grid-cell {
  position: relative;
  background: var(--surface-card);
  border: 1px solid var(--border-grid);
}

.grid-cell::after {
  content: "+";
  position: absolute;
  top: -8px; 
  right: -8px;
  color: var(--color-accent-main);
  font-family: monospace;
  z-index: 10;
  background: transparent;
}
