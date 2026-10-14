import type { Meta, StoryObj } from "@storybook/react";
import typoTokens from "../../../tokens/base/typography.json";

const meta: Meta = {
  title: "Tokens/06. Typography (32 Variables)",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Koleksi `6. Typography` dari Figma Sisap DS (Total 32 variabel: Font Family, Font Weight, Font Size, Line Height).",
      },
    },
  },
};

export default meta;

export const AllTypography: StoryObj = {
  name: "Typography System",
  render: () => {
    const families = Object.entries(typoTokens.fontFamily);
    const weights = Object.entries(typoTokens.fontWeight);
    const sizes = Object.entries(typoTokens.fontSize);
    const lineHeights = typoTokens.lineHeight as Record<string, { $value: string }>;

    return (
      <div className="space-y-8 font-sans">
        <header className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Typography System (32 Variables)
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Hierarki tipografi lengkap dari Figma: Font Family (Inter), 8 Bobot Huruf, 11 Ukuran Font, dan 11 Line Height.
          </p>
        </header>

        {/* Font Families */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            Font Families ({families.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {families.map(([name, data]) => (
              <div
                key={name}
                className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs"
              >
                <div className="text-xs text-neutral-400 font-mono">
                  --ds-font-family-{name}
                </div>
                <div className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mt-1 capitalize">
                  {name}: {data.$value}
                </div>
                <div className="text-xs text-neutral-500 mt-2 font-mono">
                  The quick brown fox jumps over the lazy dog.
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Font Weights */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            Font Weights ({weights.length})
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {weights.map(([name, data]) => (
              <div
                key={name}
                className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs"
              >
                <div className="text-[11px] font-mono text-neutral-400">
                  {name}
                </div>
                <div
                  className="text-base text-neutral-900 dark:text-neutral-100 mt-1"
                  style={{
                    fontWeight: data.$value.includes("Bold")
                      ? 700
                      : data.$value.includes("Semi")
                      ? 600
                      : data.$value.includes("Medium")
                      ? 500
                      : 400,
                    fontStyle: data.$value.includes("Italic") ? "italic" : "normal",
                  }}
                >
                  {data.$value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Font Sizes & Line Heights */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            Font Scale ({sizes.length} Sizes & Line Heights)
          </h2>
          <div className="space-y-3">
            {sizes.map(([name, data]) => {
              const lh = lineHeights[name]?.$value || "normal";
              const cssVar = `--ds-font-size-${name}`;

              return (
                <div
                  key={name}
                  className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs"
                >
                  <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-2 mb-2">
                    <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                      {name}
                    </span>
                    <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
                      <span>Size: {data.$value}</span>
                      <span>Line-Height: {lh}</span>
                      <span className="text-neutral-400">{cssVar}</span>
                    </div>
                  </div>
                  <div
                    className="text-neutral-900 dark:text-neutral-100 truncate"
                    style={{ fontSize: data.$value, lineHeight: lh }}
                  >
                    Design system yang kuat untuk produk Sisap.
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  },
};
