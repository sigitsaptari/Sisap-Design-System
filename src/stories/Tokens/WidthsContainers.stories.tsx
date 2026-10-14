import type { Meta, StoryObj } from "@storybook/react";
import widthTokens from "../../../tokens/base/widths.json";
import containerTokens from "../../../tokens/base/containers.json";

const meta: Meta = {
  title: "Tokens/05. Widths & Containers (15 Variables)",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Koleksi `4. Widths` (12 variabel) & `5. Containers` (3 variabel) dari Figma Sisap DS.",
      },
    },
  },
};

export default meta;

export const AllWidthsAndContainers: StoryObj = {
  name: "Widths & Containers",
  render: () => {
    const widths = Object.entries(widthTokens.width);
    const containers = Object.entries(containerTokens.container);

    return (
      <div className="space-y-8 font-sans">
        <header className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Widths (12) & Containers (3)
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Skala lebar komponen (cards, modals, dropdowns) dan batasan container halaman dari Figma.
          </p>
        </header>

        {/* Containers */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
            5. Containers ({containers.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {containers.map(([name, data]) => {
              const cssVar = `--ds-container-${name}`;
              return (
                <div
                  key={name}
                  className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-xs"
                >
                  <div className="text-xs text-neutral-400 font-mono">
                    {cssVar}
                  </div>
                  <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
                    {name}
                  </div>
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mt-2 font-mono">
                    {data.$value}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Widths */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
            4. Widths ({widths.length})
          </h2>
          <div className="space-y-2">
            {widths.map(([name, data]) => {
              const pxNum = parseInt(data.$value, 10) || 0;
              const barWidth = Math.min(pxNum / 3, 500);
              const cssVar = `--ds-width-${name}`;

              return (
                <div
                  key={name}
                  className="flex items-center gap-4 rounded-lg border border-neutral-200 dark:border-neutral-800 p-3 bg-white dark:bg-neutral-900 shadow-xs"
                >
                  <div className="w-40 text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                    {name}
                  </div>
                  <div className="w-20 font-mono text-xs text-neutral-500">
                    {data.$value}
                  </div>
                  <div className="flex-1">
                    <div
                      className="h-4 rounded bg-indigo-500/80 transition-all"
                      style={{ width: `${Math.max(barWidth, 12)}px` }}
                    />
                  </div>
                  <div className="text-[11px] font-mono text-neutral-400">
                    {cssVar}
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
