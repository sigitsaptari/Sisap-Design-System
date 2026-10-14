import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import radiusTokens from "../../../tokens/base/border-radius.json";

const meta: Meta = {
  title: "Tokens/03. Radius (11 Variables)",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Koleksi `2. Radius` dari Figma Sisap DS (Total 11 variabel radius).",
      },
    },
  },
};

export default meta;

function RadiusCard({ name, value }: { name: string; value: string }) {
  const [copied, setCopied] = useState(false);
  const cssVar = `--ds-radius-${name}`;

  const copy = () => {
    navigator.clipboard.writeText(`var(${cssVar})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      onClick={copy}
      className="group flex flex-col items-center justify-between p-5 rounded-xl border border-neutral-300 bg-white shadow-xs hover:shadow-md hover:border-violet-400 transition-all cursor-pointer"
    >
      {/* Visual Box with Radius */}
      <div className="relative h-28 w-28 flex items-center justify-center bg-neutral-50 rounded-lg p-2 border border-neutral-200 mb-3">
        <div
          className="h-20 w-20 border-3 border-[#7F56D9] bg-[#F4EBFF] flex items-center justify-center shadow-xs transition-all group-hover:scale-105"
          style={{ borderRadius: value }}
        >
          <span className="text-xs font-bold text-[#6941C6] font-mono">
            {value}
          </span>
        </div>
      </div>

      {/* Label and Info */}
      <div className="text-center w-full">
        <div className="text-sm font-semibold text-neutral-900 group-hover:text-violet-600 transition-colors">
          {name}
        </div>
        <div className="text-[11px] font-mono text-neutral-500 mt-0.5">
          {value}
        </div>
        <div className="mt-2 text-[10px] font-mono text-neutral-400 bg-neutral-100 rounded px-2 py-0.5 truncate">
          {copied ? (
            <span className="text-emerald-600 font-semibold">Copied!</span>
          ) : (
            cssVar
          )}
        </div>
      </div>
    </div>
  );
}

export const AllRadius: StoryObj = {
  name: "Radius Scale (11 Variables)",
  render: () => {
    const list = Object.entries(radiusTokens.radius);

    return (
      <div className="space-y-8 font-sans max-w-5xl mx-auto">
        <header className="border-b border-neutral-200 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
                Border Radius (11 Variables)
              </h1>
              <p className="mt-1 text-sm text-neutral-500">
                Tingkat kelengkungan sudut komponen dari 0px (`radius-none`) hingga 9999px (`radius-full`).
                Klik kartu mana saja untuk menyalin variabel CSS.
              </p>
            </div>
            <div className="rounded-lg bg-emerald-50 border border-emerald-200 px-3 py-1.5 text-xs text-emerald-800 font-medium">
              ☀️ Mode Tampilan: Light Mode Aktif
            </div>
          </div>
        </header>

        {/* Grid of Radius Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {list.map(([name, data]) => (
            <RadiusCard key={name} name={name} value={data.$value} />
          ))}
        </div>

        {/* Live UI Component Examples */}
        <section className="space-y-4 pt-4 border-t border-neutral-200">
          <h2 className="text-lg font-semibold text-neutral-900">
            Contoh Penerapan pada Komponen UI
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-neutral-300 bg-white">
              <span className="text-xs text-neutral-500 font-medium">Button / Input (radius-md: 8px)</span>
              <button
                type="button"
                className="mt-2 w-full py-2.5 px-4 text-sm font-medium text-white bg-[#7F56D9] shadow-xs cursor-pointer"
                style={{ borderRadius: "var(--ds-radius-radius-md, 8px)" }}
              >
                Button 8px Radius
              </button>
            </div>

            <div className="p-4 rounded-xl border border-neutral-300 bg-white">
              <span className="text-xs text-neutral-500 font-medium">Card / Modal (radius-2xl: 16px)</span>
              <div
                className="mt-2 p-3 bg-neutral-50 border border-neutral-200 text-xs text-neutral-700"
                style={{ borderRadius: "var(--ds-radius-radius-2xl, 16px)" }}
              >
                Card dengan sudut melengkung 16px
              </div>
            </div>

            <div className="p-4 rounded-xl border border-neutral-300 bg-white">
              <span className="text-xs text-neutral-500 font-medium">Pill Badge / Tag (radius-full: 9999px)</span>
              <div className="mt-2 flex items-center justify-center">
                <span
                  className="px-4 py-1 text-xs font-semibold text-violet-700 bg-violet-100 border border-violet-200"
                  style={{ borderRadius: "var(--ds-radius-radius-full, 9999px)" }}
                >
                  Status Active (Pill 9999px)
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  },
};
