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
