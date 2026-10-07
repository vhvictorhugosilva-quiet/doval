# doval — Design System

**doval** is a Brazilian *marmiteria*: a neighbourhood kitchen that cooks fresh lunch portions in the morning, freezes them the same day and delivers them to people's doors, sold both à-la-carte and as a weekly subscription. The brand's personality is the opposite of "meal-prep tech": it is hand-drawn, loud with primary colour, warm, and speaks like a friend who cooks for you. Copy is Brazilian Portuguese.

## Sources given for this system

This system was built from a brand-asset drop only — no codebase, Figma file, repository or live site was provided.

| Source | Path as delivered |
|---|---|
| Horizontal wordmark (crayon lettering + smile) | `uploads/logohorizontal.png` → trimmed to `assets/logo-horizontal.png`; mono versions derived by alpha recolour: `assets/logo-horizontal-black.png`, `assets/logo-horizontal-white.png` |
| Crayon illustration sheet (≈300 marks) | `uploads/ilustracoes.png` → `assets/illustrations/doodle-sheet.png` + 24 cut-out marks |
| Baloo 2 — 5 weights (TTF) | `uploads/Baloo2-*.ttf` → `assets/fonts/` |
| Quicksand — 5 weights (TTF) | `uploads/Quicksand-*.ttf` → `assets/fonts/` |
| Koara & Koara Wild by Rosario Nocera (OTF) | `uploads/Rosario Nocera - Koara*.otf` → `assets/fonts/Koara*.otf` |

Everything else in this repository — colour scales, spacing, component inventory, screens, social templates and all product copy — was authored here as a reasonable first system for the brand, not extracted from an existing product. **Product surfaces are proposals, not recreations.** If doval already has a site, app or ordering flow, send it over and the UI kits should be rebuilt against it.

No design-system definition, no icon set, no food photography and no product screens were provided. See CAVEATS at the end.

---

## Index

| Path | What it is |
|---|---|
| `styles.css` | The single entry point consumers link. `@import`s only. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css`. |
| `components/components.css` | Class-level component styling, all values from tokens. |
| `components/core/` | Button, IconButton, Card, Badge, Tag, Logo, Doodle, Icon |
| `components/forms/` | Input, Textarea, Select, Checkbox, Radio, Switch, Stepper |
| `components/feedback/` | Dialog, Toast, Tooltip |
| `components/navigation/` | Tabs |
| `components/commerce/` | MealCard |
| `guidelines/` | Foundation specimen cards (colour, type, spacing, brand, motion). |
| `ui_kits/site/` | Interactive marketing + ordering site. Open `index.html`. |
| `ui_kits/app/` | Mobile ordering + subscription app. Open `index.html`. |
| `social/` | Instagram feed, carousel-cover and story templates at export size. |
| `templates/landing-page/` | Starting-point template: doval landing page (Design Component). |
| `templates/social-post/` | Starting-point template: 1080×1350 feed post (Design Component). |
| `assets/` | `logo-horizontal.png` + `-black` / `-white` mono versions, `fonts/`, `illustrations/` (sheet + 24 cut marks). |
| `thumbnail.html` | Homepage tile. |
| `SKILL.md` | Agent-Skill wrapper so this folder can be used from Claude Code. |

### Components

Core: **Button**, **IconButton**, **Card**, **Badge**, **Tag**, **Logo**, **Doodle**, **Icon**.
Forms: **Input**, **Textarea**, **Select**, **Checkbox**, **Radio**, **Switch**, **Stepper**.
Feedback: **Dialog**, **Toast**, **Tooltip**.
Navigation: **Tabs**.
Commerce: **MealCard**.

Each has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when + usage example).

#### Intentional additions
No source defined a component inventory, so the set above is the standard primitive list sized to doval's needs, plus:
- **Logo** — so the provided wordmark is always used as-is instead of being re-typed; `tone` picks the colour, black or white file.
- **Doodle** — the brand's decoration is a bitmap illustration set; a wrapper stops people hand-drawing substitutes.
- **Icon** — a Lucide wrapper (see ICONOGRAPHY); doval provided no icons.
- **Stepper** and **MealCard** — a marmiteria's ordering flow needs a quantity control and a menu unit; without them every consumer would invent their own.

---

## CONTENT FUNDAMENTALS

**Language.** Brazilian Portuguese, always. Never mix English into customer-facing copy ("plano", not "plan"; "carrinho", not "cart"). Loan words only where Brazilians actually use them ("low carb", "fit", "delivery", "micro-ondas").

**Person.** "A gente" for doval, "você" for the customer. Never "nós" (too formal), never "o cliente". *"A gente cozinha de manhã e entrega no mesmo dia. Você esquenta e come."*

**Casing.** Sentence case everywhere — headlines, buttons, labels. Uppercase is reserved for micro-labels and eyebrows at 11–12px with wide tracking ("MENU DA SEMANA", "SEU WHATSAPP"). Never uppercase a headline; the display font is already loud.

**Tone.** Warm, plain, a little funny, never cute-for-cute's-sake. Short sentences. Contractions and spoken rhythm are welcome ("Bora escolher o almoço?"). The brand is allowed to admit effort and imperfection — *"um molho que a gente demorou três semanas pra acertar"* — and that honesty is the voice.

**Never.** Corporate wellness vocabulary ("jornada", "solução", "experiência gastronômica"), diet moralising ("comida limpa", "sem culpa"), fake scarcity, exclamation stacking, ALL-CAPS shouting.

**Buttons** are verbs in the first person of the customer's intent: "Montar minha marmita", "Pedir agora", "Fechar pedido", "Assinar este plano". Never "Enviar", "Submit", "Saiba mais".

**Numbers.** Prices as `R$ 26,90` (comma decimal, non-breaking space after R$). Weekdays spelled out, lowercase in body ("chega segunda"), capitalised as labels ("Segunda"). Times as `12h–16h` with an en dash.

**Emoji.** No. The doodle set is doval's emoji — use `<Doodle>` where an emoji would be tempting. The only exception is a customer's own message quoted verbatim.

**Handwriting copy** (Koara) is 3–5 words, lowercase, sitting next to a headline like a margin note: *"feito hoje cedo"*, *"testado na cozinha"*, *"bom demais"*, *"direto da cozinha"*. Never a sentence, never a button, never body copy. **Koara and Koara Wild have no accented glyphs**, so the phrase must contain no accented word at all — write *"feito hoje cedo"*, never *"feito hoje de manhã"*. Never strip an accent to fit the font (no "manha", no "serio"): rewrite the phrase, or set it in Baloo 2.

---

## VISUAL FOUNDATIONS

**The idea.** Everything looks like it was drawn with a wax crayon on white paper, then set in the friendliest sans available. The four logo colours do all the work; nothing is grey-blue, nothing is gradient, nothing is glossy.

**Colour.** Four brand hues sampled straight from the logo: red `#E93209`, yellow `#FAC800`, blue `#0D86E0`, green `#089030`. Each has a 100→800 scale for tints and text-safe darks. Roles: red = primary action and urgency on page surfaces, blue = secondary action and links, yellow = highlight and celebration (**always with ink text, never white**), green = success, diet labels, confirmations. **Inside a dialog the pairing flips and is fixed: the confirming button is blue and the dismissing button is black (ink outline) — never red**, which in a modal reads as a warning rather than a confirmation. Neutrals are deliberately warm — paper `#FFFDF7` through ink `#26231E` — never a cool grey. Rule: **one flat brand colour per surface as the field, the other three only as small marks.** Two saturated fields never touch.

**One doodle treatment per surface, and only one copy of the sheet.** A composition uses *either* the doodle sheet as a single full-bleed field (`cover`, never repeated) *or* individual cut-out doodles — never both, and never a loose doodle sitting on top of the field. If the sheet is behind a block, that block's decoration budget is spent: say the rest with type, an Icon, or nothing.

**Backgrounds.** White or paper by default. Colour blocks are flat and full-bleed with hard edges (heros, footers, social posts). The crayon doodle sheet is the one "texture", and it is used as **a single, non-repeating image** — `center / cover no-repeat`, never tiled: two visible copies of the sheet on one surface is a bug. Four crops ship so `cover` never has to distort or over-zoom: `doodle-sheet.png` (16:9, default field), `-square.png` (1:1 feed posts), `-portrait.png` (9:16 stories), `-band.png` (wide thin headers and footers). Pick the crop whose proportion matches the block. It sits behind type at 14–20% opacity, or ~50% on story backgrounds where there is no long copy. Never a gradient, never a photo behind body copy, never a blur-glass panel.

**Imagery.** Food photography should be warm, daylit, slightly overhead, real plates with a little mess — never cool-toned, never black-and-white, never a styled studio plate on a slate board. No photography was supplied; meal cards fall back to a doodle on a `--surface-sunken` tint, which is a wireframe state, not a shipping one.

**Type.** Baloo 2 (700/800) for everything structural — headlines, buttons, prices, numbers. Quicksand (500) for everything readable, at 16px/1.65. Koara / Koara Wild for handwritten accents only — and only for accent-free words (the families ship no accented glyphs). Scale runs 11 → 80px; display sizes are set tight (1.02–1.05 leading) so the round letterforms lock together. Headline tracking −0.02em; micro-labels +0.1em.

**Spacing.** 4px base. Card padding 20px, content stacks at 12px, grid gutters 24px, vertical section rhythm 80px. Containers 640 / 960 / 1200. Minimum tap target 48px.

**Chips, tabs and badges are single-line, always.** Labels never wrap or break; a crowded row scrolls horizontally instead. Shorten the label ("Veg", not "Vegetariano") rather than letting it run to two lines.

**Corners.** Nothing is square except full-bleed colour blocks. 6 / 10 / 16 / 24 / 32px plus the pill. Buttons and chips are **always** pills. Cards are 24px. Dialogs 32px.

**Borders.** 2px is the default weight, 3px on checkbox/radio/dialog so hand-drawn heaviness reads at small sizes. Subtle borders use warm `--neutral-200`; emphasis borders are full ink. Never a 1px hairline — it looks printed, not drawn.

**Shadows.** Two systems. (1) Soft warm drop shadows for real depth: `--shadow-xs` → `--shadow-lg`, all built on `rgba(38,35,30,…)` so they stay warm. (2) The **sticker shadow**: a flat 4px ink offset with zero blur (`--shadow-sticker`) on an ink-bordered element. Sticker is a **modifier, not a colour** — it composes with every button variant (red, blue, yellow, green, outline), so pick the fill by role and add sticker for emphasis. There is no solid black button — `outline` covers the quiet high-contrast case. The treatment is the brand's signature and is rationed — one per viewport, on the thing you want clicked. No inner shadows anywhere; depth comes from borders and offsets, not bevels.

**Animation.** Short and springy. `--ease-bounce` `cubic-bezier(.34,1.56,.64,1)` is the default easing — a small overshoot on anything that appears (dialogs, toasts, switch knobs). Durations 120 / 200 / 340ms; 600ms only for decorative doodle drifts. No parallax, no scroll-jacking, no long fades.

**Hover.** Solid buttons darken one step on the scale (red 600 → 800). Outline and ghost buttons fill with a warm neutral or a brand tint. Cards lift 3px and deepen their shadow; sticker cards slide 2px *toward* the viewer and grow their offset to 6px. Links darken and underline (3px offset). Opacity is never used as a hover state.

**Press.** Everything shrinks: `scale(.97)` on buttons, `.92` on icon buttons, `.9` on checkbox boxes. Sticker elements instead translate 3px down-right *into* their shadow, which collapses to 1px — the paper-press metaphor. 120ms, no bounce on the way in.

**Focus.** Never removed. `:focus-visible` gets a 3px `--blue-200` ring; form fields additionally swap their border to brand blue.

**Transparency & blur.** Almost never. The only sanctioned uses are the dialog overlay (warm ink at 45% with a 3px backdrop blur) and the doodle field at 14–50% opacity. No frosted cards, no translucent navs, no glass.

**Layout rules.** The site header is sticky with a 2px bottom border (never a shadow). The app's tab bar is fixed to the bottom with a 2px top border. Toasts appear bottom-centre, floating. Dialogs are centred, max 480px. Nothing else is fixed.

**Wordmark.** Three approved files, no others: full colour on white or paper only, all black on a light single-colour ground, all white on ink, a brand colour or a photo. The mono files are alpha recolours of the original, so the crayon texture survives. Never tint the mark a brand colour, outline it, or re-set it in Baloo 2.

**Protection.** Type never sits on a busy field unprotected: it gets a white or paper card (ink border + sticker shadow) rather than a protection gradient. doval does not use gradient scrims.

**Cards, concretely.** White surface, 24px radius, 2px warm border, `--shadow-sm`, 20px padding. Interactive variants get a pointer and the 3px lift. `sunken` (tinted, borderless, shadowless) for blocks nested inside another card. `sticker` for the one thing you want clicked.

---

## ICONOGRAPHY

**doval supplied no icon set**, no icon font, no SVG sprite and no PNG glyphs — only the wordmark and the illustration sheet. Two consequences:

1. **Decoration is bitmap, not iconography.** The 24 cut-out crayon marks in `assets/illustrations/` (hearts, crowns, stars, bursts, eyes, flowers, leaves, arrows, squiggles) are the brand's decorative vocabulary, used via `<Doodle name="…" />`. They are always `aria-hidden`, always rotated a few degrees, 2–4 per screen, never used to mean something functional ("save", "delete"), and never layered over the tiled sheet — one doodle treatment per surface. The full sheet `doodle-sheet.png` is the tiled background field.

2. **Functional icons are substituted — FLAGGED.** UI icons come from **Lucide** (CDN, `lucide@0.469.0`) via the `Icon` component, at `strokeWidth` 2.5 with rounded caps, which is the closest available match to the crayon line's weight and roundness. **This is a substitution, not doval's real icon set.** If doval has icons, drop them into `assets/icons/` and rewrite `Icon.jsx` to read from there.

**Emoji are not used as icons**, ever, and neither are Unicode symbols (✓, ★, →) — the only exceptions are the `−`/`+` in the Stepper and the `✕` on dialog closes, where the glyph is the control. Anything else gets a Lucide icon or a doodle.

---

## CAVEATS

- **Product surfaces are invented.** No site, app, screenshots or codebase were provided; `ui_kits/` is a proposal built from the brand assets, and its copy, prices, menu and flows are placeholders.
- **No food photography.** Meal cards fall back to a doodle on a tint. That is a wireframe state.
- **Icons are Lucide, not doval's.** See ICONOGRAPHY.
- **Fonts are complete** — all three families were supplied as binaries, so nothing was substituted from Google Fonts. Koara / Koara Wild are Rosario Nocera's free-for-personal-use releases; confirm the commercial licence before shipping. Both lack accented glyphs, which limits them to accent-free Portuguese phrases.
- **No dark mode, no localisation beyond pt-BR, no accessibility audit** beyond contrast and tap-target rules stated above.
