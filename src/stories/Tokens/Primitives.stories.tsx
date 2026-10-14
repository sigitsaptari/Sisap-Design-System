import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import colorTokens from "../../../tokens/base/color.json";
import spacingTokens from "../../../tokens/base/spacing.json";

const meta: Meta = {
  title: "Tokens/01. Primitives (112 Variables)",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Koleksi `_Primitives` dari Figma Sisap DS (Total 112 variabel: 80 Warna Dasar + 32 Skala Spacing).",
      },
    },
  },
};

export default meta;

function ColorSwatch({
  name,
  hex,
  cssVar,
}: {
  name: string;
  hex: string;
  cssVar: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(`var(${cssVar})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      onClick={copy}
      className="group relative flex flex-col rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-2.5 shadow-xs transition hover:shadow-md cursor-pointer"
    >
      <div
        className="h-16 w-full rounded-md border border-neutral-200/50 dark:border-neutral-700/50 mb-2 transition group-hover:scale-[1.02]"
        style={{ backgroundColor: hex }}
      />
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
          {name}
        </span>
        <span className="text-[10px] font-mono text-neutral-500 uppercase">
          {hex}
        </span>
      </div>
      <div className="mt-1 text-[10px] font-mono text-neutral-400 truncate">
        {cssVar}
      </div>
      {copied && (
        <span className="absolute top-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-[9px] text-white">
          Copied!
        </span>
      )}
    </div>
  );
}

export const Colors: StoryObj = {
  name: "Colors (80 Variables)",
  render: () => {
    const categories = Object.entries(colorTokens.color);

    return (
      <div className="space-y-8 font-sans">
        <header className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Primitive Colors
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Total 80 variabel warna dari Figma: Base (3), Neutral (11), Neutral Alpha (11), Brand (11), Error (11), Warning (11), Information (11), Success (11).
            Klik swatch mana saja untuk menyalin nama variabel CSS.
          </p>
        </header>

        {categories.map(([category, shades]) => (
          <section key={category} className="space-y-3">
            <h2 className="text-lg font-semibold capitalize text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-brand-500" />
              {category} ({Object.keys(shades).length})
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {Object.entries(shades as Record<string, { $value: string }>).map(
                ([shade, data]) => {
                  const cssVar = `--ds-color-${category}-${shade}`;
                  return (
                    <ColorSwatch
                      key={shade}
                      name={shade}
                      hex={data.$value}
                      cssVar={cssVar}
                    />
                  );
                }
              )}
            </div>
          </section>
        ))}
      </div>
    );
  },
};

export const SpacingPrimitives: StoryObj = {
  name: "Spacing Primitives (32 Variables)",
  render: () => {
    // Filter primitive spacing (numbered ones)
    const items = Object.entries(spacingTokens.spacing).filter(([k]) =>
      /^[0-9]/.test(k)
    );

    return (
      <div className="space-y-6 font-sans">
        <header className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Spacing Primitives (0px – 1,920px)
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Skala ukuran jarak dan dimensi dasar Figma (32 variabel).
          </p>
        </header>

        <div className="space-y-2">
          {items.map(([key, data]) => {
            const val = data.$value;
            const pxNum = parseInt(val, 10) || 0;
            const barWidth = Math.min(pxNum, 400);

            return (
              <div
                key={key}
                className="flex items-center gap-4 rounded-md border border-neutral-200 dark:border-neutral-800 p-2 bg-white dark:bg-neutral-900"
              >
                <div className="w-20 text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                  Scale: {key}
                </div>
                <div className="w-20 font-mono text-xs text-neutral-500">
                  {val}
                </div>
                <div className="flex-1">
                  <div
                    className="h-4 rounded bg-brand-500/80 transition-all"
                    style={{ width: `${barWidth}px` }}
                  />
                </div>
                <div className="text-[11px] font-mono text-neutral-400">
                  --ds-spacing-{key.replace(".", "-")}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
};
