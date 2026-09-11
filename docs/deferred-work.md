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
