import type { Meta, StoryObj } from "@storybook/react";
import spacingTokens from "../../../tokens/base/spacing.json";

const meta: Meta = {
  title: "Tokens/04. Spacing (17 Variables)",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Koleksi `3. Spacing` dari Figma Sisap DS (17 variabel semantik).",
      },
    },
  },
};

export default meta;

export const SemanticSpacing: StoryObj = {
  name: "Semantic Spacing Scale",
  render: () => {
    // Filter items starting with "spacing-"
    const list = Object.entries(spacingTokens.spacing).filter(([k]) =>
      k.startsWith("spacing-")
    );

    return (
      <div className="space-y-6 font-sans">
        <header className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Semantic Spacing (17 Variables)
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Skala jarak semantik untuk layout, gap, dan padding komponen dari `spacing-none` hingga `spacing-11xl`.
          </p>
        </header>

        <div className="space-y-2.5">
          {list.map(([name, data]) => {
            const pxNum = parseInt(data.$value, 10) || 0;
            const barWidth = Math.min(pxNum * 2, 500);
            const cssVar = `--ds-spacing-${name}`;

            return (
              <div
                key={name}
                className="flex items-center gap-4 rounded-lg border border-neutral-200 dark:border-neutral-800 p-3 bg-white dark:bg-neutral-900 shadow-xs"
              >
                <div className="w-28 text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                  {name}
                </div>
                <div className="w-16 font-mono text-xs text-neutral-500">
                  {data.$value}
                </div>
                <div className="flex-1">
                  <div
                    className="h-5 rounded bg-violet-500/80 transition-all flex items-center justify-end pr-1 text-[10px] text-white"
                    style={{ width: `${Math.max(barWidth, 8)}px` }}
                  />
                </div>
                <div className="text-[11px] font-mono text-neutral-400">
                  {cssVar}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
};
