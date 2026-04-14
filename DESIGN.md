# Design Brief

**Tone & Differentiation:** Retro-futuristic sci-fi meets premium minimalism. QA Engineer portfolio styled as a "Quality Assurance System Interface" — every component reflects testing, validation, and system reliability. Feminine yet powerful: geometric precision, elegant typography, confident interactive states.

**Color Palette**

| Token | OKLCH | Visual Purpose |
|-------|-------|---|
| background | 0.06 0 0 | Deep black (#0a0a0a), system primary surface |
| card | 0.11 0.01 280 | Deep purple (#1a0f2e), elevated glassmorphism panels |
| accent | 0.6 0.3 262 | Electric cyan/neon blue (~#00d9ff), interactive highlights |
| primary | 0.65 0.24 257 | Soft purple-blue, CTAs and system validity |
| foreground | 0.92 0 0 | Near white, text maximum contrast |
| muted | 0.18 0.01 280 | Dim purple-gray, subtle elements |

**Typography**

| Role | Font | Usage |
|------|------|-------|
| Display | Space Grotesk (bold, geometric) | H1, H2, hero titles, section headers |
| Body | Lora (elegant serif) | Paragraphs, descriptions, body text |
| Mono | JetBrains Mono | System logs, timestamps, code snippets |

**Structural Zones**

| Zone | Treatment | Purpose |
|------|-----------|---------|
| Header | `bg-background border-b border-border/20` | Navigation, fixed/sticky anchor |
| Hero | `bg-background` + full-width, scan-line animation | Impactful first impression, typing animation |
| Section Headers | `text-accent font-display text-lg` | Visual breaks, system-log metaphor |
| Cards (Skills, Projects) | `glass` class (frosted glass + neon border) | Elevation, glassmorphism aesthetic |
| Experience Timeline | `font-mono text-muted` + system timestamps | Terminal/log-style appearance |
| Footer | `bg-card/30 border-t border-border/20` | Contact, minimal visual weight |

**Component Patterns**

- **Buttons:** `bg-accent text-accent-foreground hover:shadow-glow-lg` with `glow-accent-hover` transition
- **Cards:** `glass` or `glass-dark` base, `glow-accent-hover` on interactive cards, neon borders
- **Skill Bars:** `test-coverage` utility for progress visualization (gradient fill, smooth animation)
- **Project Cards:** `glass` with project image, title, tools as mono badges, `glow-accent-hover` trigger
- **Timeline:** mono font timestamps, left-aligned cards with accent left-border

**Motion & Animation**

- **Page Load:** Scan-line animation (`scan` keyframe) sweeps top-to-bottom, reveals content
- **Hero Typing:** Text types character-by-character, cursor blinks (`typing-cursor` + `blink` keyframes)
- **Card Hover:** `glow-accent-hover` enlarges shadow from 20px to 30px, duration 0.4s cubic-bezier
- **Skill Fill:** `test-coverage-fill` animates width 0–100%, 0.8s smooth
- **Float Effect:** Subtle vertical bob on floating elements (`float` keyframe, 3s cycle)
- **Pulse Glow:** Accent glow pulses (20px → 40px shadow) on attention-grabbing cards

**Spacing & Rhythm**

- **Vertical:** 16px baseline, double for major sections (32px gaps between cards/sections)
- **Horizontal:** 24px card padding, 16px internal gutters, full-width sections on mobile
- **Mobile-first:** `sm:` breakpoint for tablet+, `md:` for desktop refinement

**Signature Detail**

"System Check" progress indicators as visual metaphor — test coverage bars resemble system diagnostics, experience cards timestamped like server logs, projects filed like "test case reports", hover states trigger neon glow as if system validates interaction.

**Anti-Patterns Rejected**

- No shadow-only elevation (all elevated surfaces use `glass` frosted effect)
- No warm/default accent colors (electric cyan chosen deliberately for sci-fi futurism)
- No uniform border-radius (cards 12px, buttons 8px, inputs 6px for visual hierarchy)
- No flat text-only sections (every zone has deliberate background treatment)
