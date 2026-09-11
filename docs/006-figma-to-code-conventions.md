# Converting Figma sections to code

Practices for turning a Figma frame (via `get_design_context`) into a
component in this codebase, beyond what `figma-design-to-code` already
covers.

## Mobile vs. desktop breakpoint: use `lg:`

Sections are typically handed to us as two separate Figma mockups — a
mobile frame and a desktop frame — not a single responsive spec. When
implementing a section from both, treat the mobile mockup's values as the
base (unprefixed) classes and gate the desktop mockup's values behind
Tailwind's `lg:` breakpoint (1024px), not `sm:`/`md:`. This keeps every
section switching between "mobile mockup" and "desktop mockup" at the same
consistent point, rather than each component picking its own breakpoint.
If a component only ever needs one differing property, it still gets its
own `lg:` variant (e.g. `gap-16 lg:gap-20`) — don't reach for `md:` just
because the change is small.

## Don't carry over fixed widths/heights from the Figma frame

The reference code from `get_design_context` bakes in the exact pixel/rem
size of whatever frame you selected (e.g. `max-w-[85rem]`, `w-[150%]`,
`h-[42.5rem]`). Those numbers describe one artboard at one viewport, not the
section's actual layout intent — carrying them over verbatim makes the
section rigid and wrong at other viewport widths.

The Nantucket designs are built on a **12-column grid with gaps** at the page
level. When a Figma element's width/position looks like it's tracking that
grid (check the element's x position and width against the column/gutter
math for the frame, not just its raw pixel size), express it as a grid
placement instead of a static size:

- Wrap the section in a `grid grid-cols-12 gap-*` container (matching the
  page's column gap token), not a flex row with hardcoded widths.
- Give each element `col-span-N` for how many columns it occupies, and
  `col-start-M` if it doesn't start at column 1 — instead of `w-[...]`/
  `ml-[...]`/`max-w-[...]` derived from the frame's pixel geometry.
- This is what makes the section reflow correctly at other breakpoints
  (e.g. `col-span-12 md:col-span-6`) instead of just scaling one fixed
  layout down.

For anything that isn't clearly tracking the column grid, don't guess and
don't carry the pixel/rem value over — not even for a "looks like a line
length cap" max-width. There's no `grid-cols-12` wrapper built in this
codebase yet to verify the column math against, so a static `max-w-[...]`
copied from the Figma frame is unverified either way. Instead:

- Use `w-full` (or `flex-1`, `max-w-full`) with no width constraint, so the
  element just fills its container.
- Add a note to `docs/deferred-work.md` naming the component/element and
  the max-width Figma showed, so it gets revisited once the 12-column grid
  wrapper exists and the value can be expressed as a real `col-span`/
  `col-start` (or confirmed as a genuine line-length cap, converted to a
  proper `rem` value at that point).
- Fixed heights on content-bearing containers (cards, text blocks) should
  almost always become `min-h-*`, `aspect-*`, or no explicit height at all,
  so content and different viewport sizes don't get clipped or awkwardly
  padded.

**Exception: decorative SVGs** (background line flourishes, etc.). These are
fine to size relative to their container (e.g. `w-[150%]`,
`inset-x-[-60%]`), since they're meant to bleed off the edges — but even
here, use a relative unit (`%`) tied to the container, never a static pixel
or rem value. A decorative SVG sized in `px`/`rem` will be the wrong size
the moment the container isn't exactly the Figma artboard's width.

When in doubt: ask "does this number represent a real design constraint
(an intentional aspect ratio, an icon's fixed size), or is it a width/max-width
that might be tracking the grid?" Fixed sizes for things like icons are fine
to keep. Any width or max-width is guilty until proven innocent — default to
`w-full` and a `deferred-work.md` note rather than carrying over the number.

## Section-level spacing: inline padding and block spacing

Every top-level section (`VideoBand`, `MissionStatement`, the FAQ page
sections, etc.) has two outer spacing concerns, and both are driven by
tokens in `css/tokens.css` — never a one-off arbitrary value, even a fluid
one built by hand for that section:

- **Inline padding** (the left/right edge padding of the section) must
  always use the `tf-px` utility class (`css/globals.css`). Don't write
  `px-5 md:px-10` or a bespoke `clamp()` — `tf-px` is that fluid 20px→40px
  scale already, applied consistently everywhere.
- **Block spacing** (the section's top/bottom padding — its vertical
  rhythm) must always be one of the responsive `--spacing-s1`..`--spacing-s9`
  tokens in `css/tokens.css` (used as `py-s1`, `py-s9`, etc., since they're
  exposed via `@theme inline`). Check the section's Figma mobile and
  desktop frames for its actual top/bottom padding values, then:
  - If an existing `--spacing-sN` already scales between that same
    mobile/desktop pair (or close to it), use it.
  - If none is a close match, add a new `--spacing-sN` (next unused
    number) following the exact pattern the others use — a fluid `clamp()`
    between two named `--spacing-*` tokens, scaling 375px→1440px like
    `--spacing-s9` does — and give it a comment naming the section it's
    for (e.g. `/* Home - Mission */`).
  - Don't invent an arbitrary `py-[...]`/`clamp(...)` inline in the
    component. The whole point of the `--spacing-sN` scale is that every
    section's vertical rhythm traces back to a small shared set of steps
    instead of each section growing its own bespoke value.
