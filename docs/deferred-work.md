# Deferred work

Known issues noticed in passing but out of scope for the change that surfaced
them. Not a backlog of feature ideas — just things a future pass should fix.

## Self-referential font variables break custom fonts site-wide

`css/tokens.css` defines the font primitives as:

```css
--font-serif: var(--font-serif), "EB Garamond", serif;
--font-sans: var(--font-sans), "DM Sans", sans-serif;
--font-mono: var(--font-mono), "DM Mono", monospace;
```

Each variable references itself, which is circular and makes the computed
value invalid — the browser falls back to its default UI font stack instead
of the `next/font`-loaded faces set on `<html>` in `app/layout.tsx`. Confirmed
via computed styles in the browser: `getComputedStyle(document.body).fontFamily`
resolves to the system font stack, not DM Sans.

This affects every component that uses `var(--font-serif)`, `var(--font-sans)`,
or `var(--font-mono)` (all of them), including `SectionIntro`, `FaqItem`, and
the card components — the CSS is otherwise correct, but every custom typeface
in the design system is currently inert.

**Fix:** rename the `next/font` CSS variables (e.g. `--font-serif-loaded`) in
`app/layout.tsx` and reference those from `tokens.css`, or drop the
self-reference and let `@theme inline` do the aliasing instead.
