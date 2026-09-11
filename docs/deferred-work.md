# Deferred work

Known issues noticed in passing but out of scope for the change that surfaced
them. Not a backlog of feature ideas — just things a future pass should fix.

## Revisit inline-utility vs. `@utility` styling convention

Every component so far (`FaqItem`, `SectionIntro`, `HeroTertiary`, the cards)
uses a semantic class name in the JSX with matching styles defined as an
`@utility` in `css/components/*.css`, rather than inline Tailwind utility
classes. This was a deliberate choice for consistency with the existing
pattern, not a measured decision — Tailwind only emits CSS for classes it
detects as used either way, so the generated-CSS-size tradeoff between the
two approaches hasn't actually been verified. Worth a real look if the
component CSS ever grows large enough to matter.

## Retrofit the 12-column grid convention onto existing sections

`docs/006-figma-to-code-conventions.md` documents using a 12-column grid
(`grid-cols-12` + `col-span-*`/`col-start-*`) for section layout instead of
sizes/positions lifted straight from the Figma frame's pixel geometry. That
convention postdates `HeroTertiary`, `SectionIntro`, and the FAQs page
(`app/faqs/page.tsx`), which still carry frame-derived static values, e.g.
`faq-section-inner`'s `max-w-[85rem]` and `HeroTertiary`'s
`md:h-[42.5rem]`/`md:w-[42.5rem]` card size. Worth revisiting these against
the grid once there's a second section to compare against, to confirm the
column math before converting.

`MissionStatement`'s content column was also dropped to `w-full` (no
max-width) for the same reason — Figma showed it as `max-w-[988px]`, but
that's unverified against real column math with no grid wrapper built yet.
Confirm the column span once the grid exists, rather than guessing a rem
value now.

## VideoBand
This is treatd as the hero on the base landing page and needs an h1 - using the text from the end of the video or we need to make the section that follows, Mission Statement, use an h1, but that secion may be used elsewhere and need to be an h2

## replace section spacing with dynamic utility classes

## Fix --spacing-s1 through --spacing-s8

`css/tokens.css` has `--spacing-s1` .. `--spacing-s8` (and, until just now,
`s9`) defined as `clamp(spacing-N, spacing-M)` — only 2 arguments (invalid;
`clamp()` requires min/preferred/max) and bare identifiers instead of
`var(--spacing-N)`. These are all currently invalid CSS and resolve to
nothing wherever used. `--spacing-s9` was just fixed as a 3-arg fluid clamp
scaling 375px→1440px (see the "Home - Mission" comment); apply the same
fix to s1-s8 using their existing min/max pairs and named use-case comments.