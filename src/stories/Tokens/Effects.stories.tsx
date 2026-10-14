import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import effectTokens from "../../../tokens/base/shadow.json";

const meta: Meta = {
  title: "Tokens/07. Effect Styles (Shadows, Focus & Blurs)",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Halaman Figma `↳ Effect styles` (node 1030:33573) mencakup elevation shadows, subtle skeuomorphic effects, accessible focus rings, dan backdrop blurs.",
      },
    },
  },
};

export default meta;

function ShadowCard({
  name,
  cssVar,
  desc,
}: {
  name: string;
  cssVar: string;
  desc: string;
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
      className="group flex flex-col justify-between p-5 rounded-xl border border-neutral-200 bg-white transition-all hover:scale-[1.01] cursor-pointer"
      style={{ boxShadow: `var(${cssVar})` }}
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-neutral-900 group-hover:text-violet-600 transition-colors">
            {name}
          </span>
          <span className="text-[10px] font-mono text-neutral-400 bg-neutral-100 rounded px-1.5 py-0.5">
            {copied ? (
              <span className="text-emerald-600 font-semibold">Copied!</span>
            ) : (
              cssVar
            )}
          </span>
        </div>
        <p className="text-xs text-neutral-500 mt-2 line-clamp-2">{desc}</p>
      </div>

      <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
        <span>Click to copy var</span>
        <span className="text-violet-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Copy CSS →
        </span>
      </div>
    </div>
  );
}

export const ElevationShadows: StoryObj = {
  name: "Elevation Shadows (8 Levels)",
  render: () => {
    const list = Object.entries(effectTokens.shadow);

    return (
      <div className="space-y-8 font-sans max-w-5xl mx-auto">
        <header className="border-b border-neutral-200 pb-4">
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
            Figma Elevation Shadows (Node 1030:33573)
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Sistem bayangan berlapis (z-axis depth) dari `shadow-xs` hingga `shadow-3xl` termasuk varian `skeuomorphic` untuk button/tab.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {list.map(([name, data]) => {
            const cssVar = `--ds-shadow-${name}`;
            return (
              <ShadowCard
                key={name}
                name={name}
                cssVar={cssVar}
                desc={data.$description}
              />
            );
          })}
        </div>
      </div>
    );
  },
};

export const FocusRings: StoryObj = {
  name: "Focus Rings (Brand & Error)",
  render: () => {
    const list = Object.entries(effectTokens.focusRing);

    return (
      <div className="space-y-8 font-sans max-w-5xl mx-auto">
        <header className="border-b border-neutral-200 pb-4">
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
            Accessible Focus Rings (7 Styles)
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Gaya outline/ring untuk navigasi keyboard (a11y) dengan brand purple (#9e77ed) dan destructive error (#ef4444).
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {list.map(([name, data]) => {
            const cssVar = `--ds-focus-ring-${name}`;
            const isError = name.includes("error");

            return (
              <div
                key={name}
                className="p-5 rounded-xl border border-neutral-200 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-neutral-900">
                      {name}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      {cssVar}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">{data.$description}</p>
                </div>

                <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center gap-3">
                  <button
                    type="button"
                    className="px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer"
                    style={{
                      backgroundColor: isError ? "#ef4444" : "#7f56d9",
                      color: "#ffffff",
                      boxShadow: `var(${cssVar})`,
                    }}
                  >
                    Simulasi Active Focus
                  </button>
                  <span className="text-[11px] text-neutral-400 font-mono">
                    box-shadow: var({cssVar})
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
};

export const BackdropBlurs: StoryObj = {
  name: "Backdrop Blurs (4 Scales)",
  render: () => {
    const list = Object.entries(effectTokens.blur);

    return (
      <div className="space-y-8 font-sans max-w-5xl mx-auto">
        <header className="border-b border-neutral-200 pb-4">
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
            Backdrop Blurs (Glassmorphism)
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Efek background blur untuk modal backdrop, sticky header, dan floating navbar dari `8px` hingga `40px`.
          </p>
        </header>

        {/* Colorful background container to prove backdrop blur */}
        <div className="relative rounded-2xl p-8 overflow-hidden bg-gradient-to-tr from-violet-600 via-pink-500 to-amber-400 shadow-lg">
          {/* Decorative geometric shapes */}
          <div className="absolute top-4 left-10 w-32 h-32 rounded-full bg-white/30 blur-xs" />
          <div className="absolute bottom-4 right-10 w-48 h-48 rounded-full bg-indigo-900/40" />

          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {list.map(([name, data]) => {
              const cssVar = `--ds-blur-${name}`;
              return (
                <div
                  key={name}
                  className="rounded-xl p-5 border border-white/40 bg-white/20 text-white shadow-md flex flex-col justify-between"
                  style={{ backdropFilter: `blur(${data.$value})` }}
                >
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold opacity-90">
                      {name}
                    </div>
                    <div className="text-2xl font-bold mt-1 font-mono">
                      {data.$value}
                    </div>
                  </div>
                  <div className="mt-4 text-[10px] font-mono opacity-80 bg-black/20 rounded px-1.5 py-0.5">
                    backdrop-filter: blur(var({cssVar}))
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  },
};
