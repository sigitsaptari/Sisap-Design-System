import { useState, useMemo } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import * as RawIcons from "@untitledui/icons";
import { Icon } from "../components/Icon";

const meta: Meta = {
  title: "Components/Icons (1,180+ Figma Icons)",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Koleksi 1,180+ icon dari Figma page `↳ Icons` (Untitled UI Icons) yang terdaftar di SisapDS. Kompatibel penuh dengan React 19.",
      },
    },
  },
};

export default meta;

const allIconNames = Object.keys(RawIcons).sort();

export const IconCatalog: StoryObj = {
  name: "Icon Catalog & Search",
  render: () => {
    const [search, setSearch] = useState("");
    const [copiedName, setCopiedName] = useState<string | null>(null);
    const [iconSize, setIconSize] = useState(24);

    const filteredIcons = useMemo(() => {
      if (!search.trim()) return allIconNames.slice(0, 120); // first 120 for instant rendering
      const q = search.toLowerCase();
      return allIconNames.filter((name) => name.toLowerCase().includes(q));
    }, [search]);

    const copyCode = (name: string) => {
      navigator.clipboard.writeText(`<Icon name="${name}" size={${iconSize}} />`);
      setCopiedName(name);
      setTimeout(() => setCopiedName(null), 1500);
    };

    return (
      <div className="space-y-6 font-sans max-w-6xl mx-auto">
        <header className="border-b border-neutral-200 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
                Figma Icons ({allIconNames.length} Icons)
              </h1>
              <p className="mt-1 text-sm text-neutral-500">
                Semua icon dari halaman Figma `↳ Icons` terdaftar langsung sebagai komponen React.
                Klik icon mana saja untuk menyalin kode JSX.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-500 font-medium">Ukuran:</span>
              {[16, 20, 24, 32].map((sz) => (
                <button
                  key={sz}
                  type="button"
                  onClick={() => setIconSize(sz)}
                  className={`px-2.5 py-1 text-xs rounded font-mono font-medium transition cursor-pointer ${
                    iconSize === sz
                      ? "bg-[#7F56D9] text-white"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  {sz}px
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-4 relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari icon (contoh: arrow, check, user, search, mail, edit, bell)..."
              className="w-full px-4 py-2.5 pl-10 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent bg-white shadow-xs"
            />
            <div className="absolute left-3 top-3 text-neutral-400">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-3 top-2.5 text-xs text-neutral-400 hover:text-neutral-700 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          <div className="mt-2 text-xs text-neutral-500 flex items-center justify-between">
            <span>
              Menampilkan {filteredIcons.length} dari {allIconNames.length} icon
              {!search && " (ketik untuk mencari seluruh 1,180+ icon)"}
            </span>
            <span className="font-mono text-[11px] text-neutral-400">
              import &#123; Icon &#125; from "@sisapds/react";
            </span>
          </div>
        </header>

        {/* Icon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredIcons.map((name) => {
            const isCopied = copiedName === name;
            return (
              <div
                key={name}
                onClick={() => copyCode(name)}
                className="group relative flex flex-col items-center justify-center p-3 rounded-xl border border-neutral-200 bg-white hover:border-[#7F56D9] hover:bg-[#F9F5FF] shadow-xs hover:shadow-sm transition-all cursor-pointer"
              >
                <div className="h-12 flex items-center justify-center text-neutral-700 group-hover:text-[#7F56D9] transition-colors">
                  <Icon
                    name={name as keyof typeof RawIcons}
                    size={iconSize}
                    color="currentColor"
                  />
                </div>
                <span className="mt-2 text-[11px] font-medium text-neutral-700 group-hover:text-[#7F56D9] text-center truncate max-w-full">
                  {name}
                </span>

                {isCopied && (
                  <div className="absolute inset-0 bg-[#7F56D9]/95 rounded-xl flex items-center justify-center text-white text-xs font-semibold animate-fade-in">
                    Copied JSX!
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
};

export const UsageExamples: StoryObj = {
  name: "Usage Examples",
  render: () => {
    return (
      <div className="space-y-6 font-sans max-w-3xl">
        <header className="border-b border-neutral-200 pb-3">
          <h2 className="text-xl font-bold text-neutral-900">
            Cara Penggunaan Icon di SisapDS
          </h2>
          <p className="text-sm text-neutral-500 mt-1">
            Dua cara mudah menggunakan icon di aplikasi Anda:
          </p>
        </header>

        {/* Option 1: Generic Icon component */}
        <div className="p-4 rounded-xl border border-neutral-200 bg-white space-y-3">
          <h3 className="text-sm font-semibold text-neutral-900 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#7F56D9]" />
            Cara 1: Menggunakan komponen &lt;Icon name="..." /&gt;
          </h3>
          <p className="text-xs text-neutral-500">
            Sangat fleksibel jika nama icon bersifat dinamis dari API atau konfigurasi JSON.
          </p>
          <div className="p-3 bg-neutral-900 text-neutral-100 rounded-lg font-mono text-xs overflow-x-auto">
            {`import { Icon } from "@sisapds/react";

<Icon name="ArrowRight" size={20} className="text-violet-600" />
<Icon name="CheckCircle" size={24} className="text-emerald-600" />
<Icon name="SearchLg" size={18} />`}
          </div>
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs text-neutral-700">
              <Icon name="ArrowRight" size={20} className="text-violet-600" />
              <span>ArrowRight</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700">
              <Icon name="CheckCircle" size={20} className="text-emerald-600" />
              <span>CheckCircle</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700">
              <Icon name="SearchLg" size={20} className="text-blue-600" />
              <span>SearchLg</span>
            </div>
          </div>
        </div>

        {/* Option 2: Direct Named Import */}
        <div className="p-4 rounded-xl border border-neutral-200 bg-white space-y-3">
          <h3 className="text-sm font-semibold text-neutral-900 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Cara 2: Named Import Langsung
          </h3>
          <p className="text-xs text-neutral-500">
            Bisa di-import langsung untuk performa tree-shaking optimal.
          </p>
          <div className="p-3 bg-neutral-900 text-neutral-100 rounded-lg font-mono text-xs overflow-x-auto">
            {`import { ArrowRight, CheckCircle, Bell01 } from "@sisapds/react/icons";

<ArrowRight width={20} height={20} className="text-violet-600" />
<CheckCircle width={20} height={20} className="text-emerald-600" />
<Bell01 width={20} height={20} className="text-amber-500" />`}
          </div>
        </div>
      </div>
    );
  },
};
