import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import lightTokens from "../../../tokens/semantic/light.json";
import darkTokens from "../../../tokens/semantic/dark.json";

const meta: Meta = {
  title: "Tokens/02. Color Modes (139 Variables)",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Koleksi `1. Color modes` dari Figma (Total 139 variabel semantik). Menampilkan perbandingan nilai Light Mode vs Dark Mode secara interaktif.",
      },
    },
  },
};

export default meta;

interface TokenNode {
  $type: string;
  $value: string;
  $alias?: string;
  $description?: string;
}

function flattenGroup(obj: Record<string, unknown>, prefix = ""): Array<{ path: string; node: TokenNode }> {
  let list: Array<{ path: string; node: TokenNode }> = [];
  for (const [key, val] of Object.entries(obj)) {
    const curPath = prefix ? `${prefix}.${key}` : key;
    if (val && typeof val === "object") {
      if ("$value" in val) {
        list.push({ path: curPath, node: val as TokenNode });
      } else {
        list = list.concat(flattenGroup(val as Record<string, unknown>, curPath));
      }
    }
  }
  return list;
}

function SemanticRow({
  path,
  lightVal,
  darkVal,
  lightAlias,
  darkAlias,
}: {
  path: string;
  lightVal: string;
  darkVal: string;
  lightAlias?: string;
  darkAlias?: string;
}) {
  const [copied, setCopied] = useState(false);
  const cssVar = `--ds-semantic-color-${path.replace(/\./g, "-")}`;

  const copy = () => {
    navigator.clipboard.writeText(`var(${cssVar})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <tr
      onClick={copy}
      className="group border-b border-neutral-100 dark:border-neutral-800 hover:bg-neutral-50/80 dark:hover:bg-neutral-800/50 cursor-pointer transition text-xs"
    >
      <td className="py-2.5 px-3 font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
        <div
          className="h-5 w-5 rounded border border-neutral-300 dark:border-neutral-700 shrink-0"
          style={{ backgroundColor: `var(${cssVar})` }}
        />
        <span className="font-mono">{path}</span>
      </td>
      <td className="py-2.5 px-3">
        <div className="flex items-center gap-2">
          <span
            className="inline-block h-3.5 w-3.5 rounded border border-neutral-300"
            style={{ backgroundColor: lightVal }}
          />
          <span className="font-mono text-neutral-700 dark:text-neutral-300">{lightVal}</span>
          {lightAlias && (
            <span className="text-[10px] text-neutral-400 truncate max-w-[120px]">
              ({lightAlias.replace("Colors/", "")})
            </span>
          )}
        </div>
      </td>
      <td className="py-2.5 px-3">
        <div className="flex items-center gap-2">
          <span
            className="inline-block h-3.5 w-3.5 rounded border border-neutral-700"
            style={{ backgroundColor: darkVal }}
          />
          <span className="font-mono text-neutral-700 dark:text-neutral-300">{darkVal}</span>
          {darkAlias && (
            <span className="text-[10px] text-neutral-400 truncate max-w-[120px]">
              ({darkAlias.replace("Colors/", "")})
            </span>
          )}
        </div>
      </td>
      <td className="py-2.5 px-3 font-mono text-[11px] text-neutral-400 truncate">
        {copied ? (
          <span className="text-emerald-500 font-semibold">Copied!</span>
        ) : (
          cssVar
        )}
      </td>
    </tr>
  );
}

function SemanticTable({
  title,
  groupKey,
  count,
}: {
  title: string;
  groupKey: string;
  count: number;
}) {
  const lightGroup = ((lightTokens.semantic.color as Record<string, unknown>)[groupKey] || {}) as Record<string, unknown>;
  const darkGroup = ((darkTokens.semantic.color as Record<string, unknown>)[groupKey] || {}) as Record<string, unknown>;

  const lightList = flattenGroup(lightGroup);
  const darkMap = new Map(flattenGroup(darkGroup).map((item) => [item.path, item.node]));

  return (
    <section className="space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />
          {title} ({count})
        </h3>
        <span className="text-xs text-neutral-400 font-mono">
          prefix: --ds-semantic-color-{groupKey}-*
        </span>
      </div>

      <div className="overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50 text-[11px] text-neutral-500 font-medium uppercase tracking-wider">
              <th className="py-2 px-3">Semantic Token</th>
              <th className="py-2 px-3">Light Mode</th>
              <th className="py-2 px-3">Dark Mode</th>
              <th className="py-2 px-3">CSS Variable</th>
            </tr>
          </thead>
          <tbody>
            {lightList.map(({ path, node: lNode }) => {
              const dNode = darkMap.get(path);
              return (
                <SemanticRow
                  key={path}
                  path={`${groupKey}.${path}`}
                  lightVal={lNode.$value}
                  darkVal={dNode?.$value || lNode.$value}
                  lightAlias={lNode.$alias}
                  darkAlias={dNode?.$alias}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export const AllSemanticColors: StoryObj = {
  name: "All 139 Color Modes (Light & Dark)",
  render: () => {
    return (
      <div className="space-y-8 font-sans">
        <header className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                Semantic Color Modes (139 Variables)
              </h1>
              <p className="mt-1 text-sm text-neutral-500">
                Pilih tema Light/Dark di toolbar atas untuk melihat preview warna live yang berubah secara otomatis.
              </p>
            </div>
            <div className="rounded-lg bg-violet-50 dark:bg-violet-950/50 border border-violet-200 dark:border-violet-900 p-2.5 text-xs text-violet-700 dark:text-violet-300">
              💡 139 Semantic tokens dari Figma Sisap DS
            </div>
          </div>
        </header>

        <SemanticTable title="Text Colors" groupKey="text" count={21} />
        <SemanticTable title="Background Colors" groupKey="background" count={28} />
        <SemanticTable title="Border Colors" groupKey="border" count={8} />
        <SemanticTable title="Foreground Colors" groupKey="foreground" count={19} />
        <SemanticTable title="Component Colors" groupKey="components" count={20} />
        <SemanticTable title="Alpha Transparency" groupKey="alpha" count={20} />
        <SemanticTable title="Effects & Shadows" groupKey="effects" count={23} />
      </div>
    );
  },
};
