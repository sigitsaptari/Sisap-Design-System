# Sisap Design System (SisapDS) Rules

## 1. No Arbitrary Classes (STRICT)
- **NEVER** use arbitrary Tailwind utility classes such as hex values (`bg-[#7F56D9]`, `text-[#171717]`, `border-[#E5E5E5]`, `ring-[#9E77ED]/40`), arbitrary pixel dimensions (`h-[22px]`, `w-[14px]`, `gap-[10px]`, `p-[12px]`), or arbitrary border radii (`rounded-[3px]`, `rounded-[6px]`).
- **ALWAYS** use the semantic class names and design system tokens generated from W3C DTCG variables:
  - **Text colors**: `text-semantic-color-text-text-primary`, `text-semantic-color-text-text-secondary`, `text-semantic-color-text-text-tertiary`, `text-semantic-color-text-text-placeholder`, `text-semantic-color-text-text-white`, `text-semantic-color-text-text-brand-primary`, `text-semantic-color-text-text-brand-secondary`, `text-semantic-color-text-text-error-primary`, etc.
  - **Background colors**: `bg-semantic-color-background-bg-primary`, `bg-semantic-color-background-bg-secondary`, `bg-semantic-color-background-bg-tertiary`, `bg-semantic-color-background-bg-brand-solid`, `bg-semantic-color-background-bg-brand-solid_hover`, `bg-semantic-color-background-bg-primary_hover`, `bg-semantic-color-background-bg-secondary_hover`, `bg-semantic-color-background-bg-error-primary`, etc.
  - **Border colors**: `border-semantic-color-border-border-primary`, `border-semantic-color-border-border-secondary`, `border-semantic-color-border-border-brand`, `border-semantic-color-border-border-error`, `border-semantic-color-border-border-tertiary`, etc.
  - **Focus rings**: `focus-visible:ring-4 focus-visible:ring-color-brand-100` / `focus-visible:ring-semantic-color-effects-focus-rings-focus-ring/40` with `focus-visible:ring-offset-2`.
  - **Border radius**: `rounded-xs` (4px), `rounded-sm` (6px), `rounded-md` (8px), `rounded-lg` (10px), `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-full` (9999px) — mapping directly to `--ds-radius-*`.
  - **Spacing & sizing**: `gap-1`, `gap-1.5`, `gap-2`, `gap-2.5`, `gap-3`, `gap-4`, `p-2`, `p-3`, `p-4`, etc., matching the Figma token spacing scale (`spacing-xxs` to `spacing-11xl`).
  - **Shadows**: `shadow-xs`, `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`, `shadow-3xl`.

## 2. Perfect Pixel & Figma Fidelity
- Components must be pixel perfect, accurate, and match Figma specifications without omission.
- Preserve exact layout structures (AutoLayout `layoutMode`, `primaryAxisAlignItems`, `counterAxisAlignItems`, `itemSpacing`, `paddingLeft/Right/Top/Bottom`).
- Implement all component variants: sizes, types, states (`default`, `hover`, `focused`, `disabled`, `checked`, `indeterminate`, `selected`, `pressed`), and optional slots/subcomponents.
- Implement accessible keyboard navigation, ARIA attributes (`aria-checked`, `role="checkbox"`, `role="radio"`, `role="radiogroup"`, `aria-describedby`), and focus-visible indicators.

## 3. Clean Storybook Titles & Labels
- Do NOT include raw Figma node numbers (e.g. `(Figma Node 25051:35916)`) or variable count suffixes (e.g. `(139 Variables)`, `(1,180+ Figma Icons)`) in Storybook `title:` or story `name:` fields.
- Use clean, professional hierarchy names:
  - `Components/Button`, `Components/Avatar`, `Components/Badge`, `Components/Checkbox`, `Components/RadioGroup`, `Components/Toggle`, `Components/Tooltip`, `Components/TextEditor`
  - `Tokens/01. Primitives`, `Tokens/02. Color Modes`, `Tokens/03. Radius`, `Tokens/04. Spacing`, etc.

