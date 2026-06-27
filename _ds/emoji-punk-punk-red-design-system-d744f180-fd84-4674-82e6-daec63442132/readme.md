# Emoji Punk — PUNK RED Design System

> **Style name:** PUNK RED DIGITAL LUXURY
> **Core emotion:** dark premium + red energy + digital power.

A dark, expensive digital-landing design system with the aggressive energy of **PUNK RED**, cinematic 3D visuals, modern interface elements, deep shadows, soft red glows, and strong geometric **Gilroy** typography.

The product ("Emoji Punk") should feel like a *closed system* — access to a tool, a community, a digital platform that gives a person a result, money, influence, status, or a new role online. Visual associations: premium SaaS, private club, technological product, cinematic digital interface, expensive ad campaign, "for insiders" access.

**Hard rule:** the orange of the original references is fully removed. Every accent, gradient, glow, button and marker is **PUNK RED `#F20D0D`** and its derivatives.

---

## Sources

- **Brandbook:** "БРЕНДБУК САЙТА В СТИЛЕ PUNK RED — обновлённая версия, только шрифты Gilroy" (provided as brief text — the single source of truth for this system).
- **Fonts:** Gilroy family `.ttf` files (uploaded). Shipped weights: Regular 400, Medium 500, SemiBold 600, Bold 700, ExtraBold 800, Heavy 900. Light / Thin / UltraLight are deliberately excluded.
- No codebase or Figma was provided — the system is authored directly from the brandbook.

---

## CONTENT FUNDAMENTALS

**Language:** Russian. Confident, modern, short, declarative. The copy sells a transformation: from *spectator* to *the one who is watched*.

**Voice:** addresses the reader as **"ты"** (informal "you") — direct, peer-to-peer, never corporate "вы". It speaks to ambition: building a system, earning money, gaining influence, joining people who don't want to just be viewers.

**Casing:** Headlines and CTAs are frequently **UPPERCASE** for impact. UPPERCASE is reserved for: CTA buttons, badges, the running marquee, and short punchy single words. Never set long paragraphs or whole body blocks in caps.

**Headlines:** 2–4 lines, dense, emotional, short. One key word per headline is set in **PUNK RED**. Strong contrast: white headline, red accent word, light-gray body. Examples:
- `НЕ ПРОСТО КОНТЕНТ. / ПОСТРОЙ СИСТЕМУ, / КОТОРАЯ РАБОТАЕТ / НА ТЕБЯ.`
- `ТВОЯ АУДИТОРИЯ — / ТВОЙ / ЦИФРОВОЙ АКТИВ.`
- `ТЫ МОЖЕШЬ ОСТАТЬСЯ / ЗРИТЕЛЕМ. // А МОЖЕШЬ СТАТЬ / ТЕМ, КОГО СМОТРЯТ.`

**Words eligible for red emphasis:** ДЕНЬГИ, СИСТЕМА, ДОСТУП, РЕЗУЛЬТАТ, ВЛИЯНИЕ, АУДИТОРИЯ, КОНТЕНТ, СВОБОДА, ЗАРАБОТОК, ВНУТРИ, СЕЙЧАС.

**CTA copy:** ХОЧУ ВНУТРЬ · ПОЛУЧИТЬ ДОСТУП · НАЧАТЬ СЕЙЧАС · ЗАБРАТЬ МЕСТО · ВОЙТИ В КЛУБ · ПОЛУЧИТЬ СИСТЕМУ · ОТКРЫТЬ ДОСТУП.

**Badges:** НОВЫЙ УРОВЕНЬ · ВНУТРИ КЛУБА · СИСТЕМА 2026 · ДОСТУП ОТКРЫТ · ТОЛЬКО ДЛЯ СВОИХ · С ЧЕГО НАЧАТЬ · РЕЗУЛЬТАТЫ УЧАСТНИКОВ · ПРЕМИУМ ДОСТУП.

**Marquee phrases:** `EMOJI PUNK — ЭТО НЕ ПРОСТО КОНТЕНТ — ЭТО СИСТЕМА —` and `КОНТЕНТ • АУДИТОРИЯ • ОХВАТЫ • ДЕНЬГИ • СВОБОДА • ВЛИЯНИЕ •`.

**Emoji:** only polished Apple-style 3D emoji (glossy, dimensional, with realistic light and red reflections) — never flat/childish/cheap-plastic. Approved set: 🔥 💸 🚀 📱 🎥 💬 ⚡ 📈 😎 🧠 👑 ✅. Emoji are decorative accents and icon-objects, not inline punctuation in body copy.

---

## VISUAL FOUNDATIONS

**Color.** Backgrounds are almost always near-black (`#030303` page, `#080808` sections, `#101010` cards). Text is white → soft-white → light-gray. PUNK RED `#F20D0D` is the only accent, used as a *strike* — for CTAs, one headline word, icons, checkmarks, active borders, progress bars, prices, the marquee, and glow. Color ratio is strictly **dark 70% / light 20% / red 10%**. The red must never flood the page. A red *section* (full red gradient background) is allowed in **1–2 strong sections of the whole site, max** — and always carries a large black panel/cards on top of it.

**Type.** Gilroy only — no Inter/Manrope/Montserrat/Helvetica/Arial. ExtraBold for hero H1 and section heads; Heavy as a rare visual strike (1–3 words, prices, key metrics); Bold for H2/H3, numbers, prices, strong CTAs; SemiBold/Medium for subheads, buttons, badges, nav; Regular for all body and legal. Never more than two weights in one short text block. Tight negative tracking on big headlines (−0.01 to −0.03em).

**Backgrounds.** Deep near-black with a soft radial glow at top-center (`radial-gradient(circle at 50% 20%, #151010, #030303)`). Texture is *very* light: micro digital grain / noise, barely-visible dark lines, blurred red light blooms, rare dark-red reflections. Texture exists only so the dark doesn't look dead — it must never distract. No busy patterns, no photographic backgrounds behind text.

**Glow & light.** Red reads as *light reflecting on a dark surface*, not flat neon: soft red glow pools behind CTAs and 3D objects, thin red light lines, dark gradients with red depth, soft red haze near important elements, faint glow behind an active card. Forbidden: harsh acid neon, blinking/flashing glow, casino effect, too many light spots, glow that hurts readability.

**Cards.** Base card = `linear-gradient(145deg, #131313, #080808)`, thin light border `rgba(255,255,255,0.12)`, soft deep shadow, subtle inner light, radius 16–20px, generous inner space, **one main accent per card**. Active card: border `rgba(242,13,13,0.55)`. Dark glass variant: `rgba(18,18,18,0.72)` + `backdrop-filter: blur(18px)` + `border rgba(255,255,255,0.08)` — glass is **always dark**, never milky-white/blue/light.

**Hover (cards).** Lift 4–8px (`translateY(-6px)`), red border becomes more visible, soft PUNK RED glow appears (`box-shadow: 0 18px 45px rgba(242,13,13,0.18)`), inner image may scale slightly; text never jumps or shifts geometry.

**Buttons.** Primary CTA = pill (`border-radius: 999px`), red gradient `linear-gradient(90deg, #F20D0D, #FF3D3D)`, white Bold/SemiBold text 13–15px, generous horizontal padding, soft red glow. Hover: slight lift, stronger glow, small brightness bump, optional micro-arrow drifting right. Secondary button: `#101010` fill, thin white border, white SemiBold text; on hover the border turns PUNK RED. No tiny buttons.

**Radii.** Big blocks 20–28px, cards 16–20px, small UI 10–14px, badges & CTAs `999px`. Sharp rectangles only for thin lines / technical details.

**Shadows.** Deep, soft, dark depth shadows for cards/panels; red glow shadows reserved for CTAs and active/hover states. No huge dirty shadows, no acid glow.

**Borders.** Thin only. Light hairline `rgba(255,255,255,0.08–0.12)`; structural `#2A2A2A`; active red `rgba(242,13,13,0.55–0.65)`. Never thick borders.

**Spacing & layout.** Max content width 1240–1320px (system uses 1280). Desktop side padding 48–72px, mobile 16–22px. 12-col desktop grid, 6–8 tablet, 1 mobile. Big section gaps 120–180px. The site must **breathe** — never a dense wall of cards and text.

**Animation.** Smooth, expensive, confident, almost invisible: soft block reveals, gentle card lift, slow glow pulse, slow 3D-object rotation, continuous marquee, icon micro-animations, light parallax, soft image zoom on hover. Easing `cubic-bezier(0.22, 1, 0.36, 1)`. Forbidden: hard fly-ins, jumps, bounce, aggressive flashing, fast spins, acid effects, casino aesthetic.

**Imagery.** Looks like an expensive ad campaign for a modern tech product — not random stock. Smartphones, laptops, TVs, interfaces, dashboards, notifications, digital cards, charts, messages, 3D objects, badges, shields, coins, play buttons, keys. Dark, contrasty, dimensional, deep shadow, red rim-light, white highlights, cinematic depth of field, clean. People (when used): confident modern creators/entrepreneurs, night city / tech studio, light accent on the face, red rim-light, dark background — never corporate stock smiles.

**Running marquee.** A signature element: full PUNK RED `#F20D0D` strip, white Bold/SemiBold uppercase, compact repeating text, smooth continuous motion, 38–52px tall. Placed between large sections, at the bottom of the hero, in the final CTA, as a dynamic divider.

---

## ICONOGRAPHY

No icon library was provided in the brief, so the system standardizes on **Lucide** (loaded from CDN) as the line-icon set — simple, dense, even stroke weight — which matches the brand's call for "simple, dense" icons. **This is a substitution; flag to the brand if a specific icon set is required.**

Brand rules for icons:
- Key icons are **red** and carry visual weight. A red square plate with 8–12px radius behind a white/red glyph is the signature treatment.
- White line-icons (Lucide default) are allowed only as **secondary** elements.
- The most important icon-objects should be **dimensional** — polished Apple-style 3D emoji (🔥 💸 🚀 📱 🎥 💬 ⚡ 📈 😎 🧠 👑 ✅) rather than flat glyphs.
- Sizes: small icons 18–22px, card icons 34–46px, large 3D objects 80–280px.
- No old Windows-style icons, no childish illustrations, no hand-drawn SVG mascots.

Emoji are rendered with the system/native emoji font; treat them as glossy 3D objects, sized large, with a soft red glow behind important ones.

---

## INDEX — what's in this system

**Root**
- `styles.css` — global entry (consumers link this). `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — portable Agent-Skill wrapper.

**`tokens/`** — `fonts.css` (Gilroy @font-face), `colors.css`, `typography.css`, `spacing.css`, `effects.css`.

**`assets/fonts/`** — Gilroy `.ttf` weights 400–900.

**`guidelines/`** — foundation specimen cards (Type, Colors, Spacing, Effects).

**`components/`** — reusable primitives:
- `core/` — `Button`, `Badge`, `Tag`, `Card`, `StatNumber`, `SectionHeading`, `Marquee`.

**`ui_kits/landing/`** — the Emoji Punk PUNK RED landing page recreation (hero → who-it's-for → what's-inside → benefits → pricing → guarantee → final CTA → footer).

> Components are consumed via `window.EmojiPunkPUNKREDDesignSystem_d744f1.<Name>` after loading `_ds_bundle.js`.
