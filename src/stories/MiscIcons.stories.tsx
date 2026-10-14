import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SocialIcon, type SocialPlatform } from "../components/SocialIcon";
import { PaymentIcon, type PaymentMethod } from "../components/PaymentIcon";
import { FeaturedIcon } from "../components/FeaturedIcon";
import { FileTypeIcon, type FileTypeVariant } from "../components/FileTypeIcon";
import { Icon } from "../components/Icon";

const meta: Meta = {
  title: "Components/Misc Icons",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Koleksi Misc Icons dari Figma mencakup Social Icons, Payment Icons, Featured Icon Badges (node 1025:31781), serta File Type Icons lengkap (node 4916:411695).",
      },
    },
  },
};

export default meta;

const socialPlatforms: SocialPlatform[] = [
  "Google",
  "Apple",
  "Facebook",
  "X (Twitter)",
  "Twitter",
  "Instagram",
  "LinkedIn",
  "GitHub",
  "Figma",
  "Slack",
  "WhatsApp",
  "YouTube",
  "TikTok",
];

const paymentMethods: PaymentMethod[] = [
  "Visa",
  "Mastercard",
  "AMEX",
  "PayPal",
  "ApplePay",
  "GooglePay",
  "Stripe",
  "Discover",
  "JCB",
  "Alipay",
];

export const SocialIconsShowcase: StoryObj = {
  name: "1. Social Icons",
  render: () => {
    const [grayscale, setGrayscale] = useState(false);
    const [size, setSize] = useState(28);
    const [copied, setCopied] = useState<string | null>(null);

    const copy = (platform: string) => {
      navigator.clipboard.writeText(`<SocialIcon platform="${platform}" size={${size}} />`);
      setCopied(platform);
      setTimeout(() => setCopied(null), 1500);
    };

    return (
      <div className="space-y-6 font-sans max-w-5xl mx-auto">
        <header className="border-b border-neutral-200 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
                Social Icons (Figma Node 1025:31781)
              </h1>
              <p className="mt-1 text-sm text-neutral-500">
                Icon logo media sosial dan platform resmi dari Figma dengan dukungan mode warna penuh dan grayscale.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-xs text-neutral-700 font-medium cursor-pointer bg-neutral-100 px-3 py-1.5 rounded-lg">
                <input
                  type="checkbox"
                  checked={grayscale}
                  onChange={(e) => setGrayscale(e.target.checked)}
                  className="rounded text-violet-600"
                />
                Grayscale Mode
              </label>

              <div className="flex items-center gap-1 border border-neutral-200 rounded-lg p-1 bg-white">
                {[20, 24, 28, 36].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={`px-2 py-0.5 text-xs rounded font-mono font-medium transition cursor-pointer ${
                      size === s ? "bg-[#7F56D9] text-white" : "text-neutral-600 hover:bg-neutral-100"
                    }`}
                  >
                    {s}px
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {socialPlatforms.map((platform) => (
            <div
              key={platform}
              onClick={() => copy(platform)}
              className="group relative flex flex-col items-center justify-center p-4 rounded-xl border border-neutral-200 bg-white hover:border-[#7F56D9] hover:bg-[#F9F5FF] transition-all cursor-pointer shadow-xs hover:shadow-sm"
            >
              <div className="h-12 flex items-center justify-center">
                <SocialIcon
                  platform={platform}
                  size={size}
                  grayscale={grayscale}
                />
              </div>
              <span className="mt-2 text-xs font-semibold text-neutral-800 group-hover:text-[#7F56D9] text-center">
                {platform}
              </span>
              <span className="text-[10px] font-mono text-neutral-400 mt-0.5">
                {copied === platform ? (
                  <span className="text-emerald-600 font-semibold">Copied JSX!</span>
                ) : (
                  `platform="${platform}"`
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const PaymentIconsShowcase: StoryObj = {
  name: "2. Payment Method Icons",
  render: () => {
    const [size, setSize] = useState<"sm" | "md">("md");
    const [copied, setCopied] = useState<string | null>(null);

    const copy = (method: string) => {
      navigator.clipboard.writeText(`<PaymentIcon method="${method}" size="${size}" />`);
      setCopied(method);
      setTimeout(() => setCopied(null), 1500);
    };

    return (
      <div className="space-y-6 font-sans max-w-5xl mx-auto">
        <header className="border-b border-neutral-200 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
                Payment Method Icons (Figma Node 1025:31781)
              </h1>
              <p className="mt-1 text-sm text-neutral-500">
                Kartu dan logo metode pembayaran resmi dari Figma dengan rasio aspect standar checkout.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-500 font-medium">Ukuran:</span>
              <button
                type="button"
                onClick={() => setSize("sm")}
                className={`px-3 py-1 text-xs rounded-lg font-medium transition cursor-pointer ${
                  size === "sm" ? "bg-[#7F56D9] text-white" : "bg-neutral-100 text-neutral-600"
                }`}
              >
                Small (34x24)
              </button>
              <button
                type="button"
                onClick={() => setSize("md")}
                className={`px-3 py-1 text-xs rounded-lg font-medium transition cursor-pointer ${
                  size === "md" ? "bg-[#7F56D9] text-white" : "bg-neutral-100 text-neutral-600"
                }`}
              >
                Medium (46x32)
              </button>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {paymentMethods.map((method) => (
            <div
              key={method}
              onClick={() => copy(method)}
              className="group relative flex flex-col items-center justify-center p-4 rounded-xl border border-neutral-200 bg-white hover:border-[#7F56D9] hover:bg-[#F9F5FF] transition-all cursor-pointer shadow-xs hover:shadow-sm"
            >
              <div className="h-12 flex items-center justify-center">
                <PaymentIcon method={method} size={size} />
              </div>
              <span className="mt-2 text-xs font-semibold text-neutral-800 group-hover:text-[#7F56D9] text-center">
                {method}
              </span>
              <span className="text-[10px] font-mono text-neutral-400 mt-0.5">
                {copied === method ? (
                  <span className="text-emerald-600 font-semibold">Copied JSX!</span>
                ) : (
                  `method="${method}"`
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const FeaturedIconsShowcase: StoryObj = {
  name: "3. Featured Icons",
  render: () => {
    const colors: Array<"brand" | "gray" | "error" | "warning" | "success"> = [
      "brand",
      "gray",
      "error",
      "warning",
      "success",
    ];
    const variants: Array<"light" | "outline" | "modern"> = ["light", "outline", "modern"];

    return (
      <div className="space-y-8 font-sans max-w-5xl mx-auto">
        <header className="border-b border-neutral-200 pb-4">
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
            Featured Icon Badges (Figma Node 1025:31781)
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Badge ikon fitur (Featured Icons) dari Untitled UI untuk menonjolkan fitur produk, notifikasi, dan item list.
          </p>
        </header>

        {/* Variants Matrix */}
        {variants.map((variant) => (
          <section key={variant} className="space-y-3">
            <h2 className="text-base font-bold capitalize text-neutral-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#7F56D9]" />
              Variant: {variant}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {colors.map((color) => (
                <div
                  key={color}
                  className="p-4 rounded-xl border border-neutral-200 bg-white flex flex-col items-center justify-center gap-2 shadow-xs"
                >
                  <FeaturedIcon variant={variant} color={color} size="lg" shape="circle">
                    <Icon name="CheckCircle" size={24} />
                  </FeaturedIcon>
                  <span className="text-xs font-semibold text-neutral-800 capitalize mt-1">
                    {color}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">
                    variant="{variant}"
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Shapes & Sizes */}
        <section className="space-y-3 pt-4 border-t border-neutral-200">
          <h2 className="text-base font-bold text-neutral-900">
            Shapes (Circle vs Square) & Sizes (sm, md, lg, xl)
          </h2>
          <div className="flex flex-wrap items-center gap-6 p-6 rounded-xl border border-neutral-200 bg-white">
            <div className="flex items-center gap-3">
              <FeaturedIcon size="sm" shape="circle" color="brand">
                <Icon name="Zap" size={16} />
              </FeaturedIcon>
              <FeaturedIcon size="md" shape="circle" color="brand">
                <Icon name="Zap" size={20} />
              </FeaturedIcon>
              <FeaturedIcon size="lg" shape="circle" color="brand">
                <Icon name="Zap" size={24} />
              </FeaturedIcon>
              <FeaturedIcon size="xl" shape="circle" color="brand">
                <Icon name="Zap" size={28} />
              </FeaturedIcon>
            </div>

            <div className="h-8 w-px bg-neutral-200 mx-2" />

            <div className="flex items-center gap-3">
              <FeaturedIcon size="sm" shape="square" color="success">
                <Icon name="Check" size={16} />
              </FeaturedIcon>
              <FeaturedIcon size="md" shape="square" color="success">
                <Icon name="Check" size={20} />
              </FeaturedIcon>
              <FeaturedIcon size="lg" shape="square" color="success">
                <Icon name="Check" size={24} />
              </FeaturedIcon>
              <FeaturedIcon size="xl" shape="square" color="success">
                <Icon name="Check" size={28} />
              </FeaturedIcon>
            </div>
          </div>
        </section>
      </div>
    );
  },
};

const fileTypeCategories: Record<string, string[]> = {
  "Documents": ["pdf", "doc", "docx", "txt", "csv", "xls", "xlsx", "ppt", "pptx"],
  "Images": ["png", "jpg", "jpeg", "webp", "svg", "gif", "eps", "tiff", "img"],
  "Design": ["fig", "ai", "psd", "indd", "aep"],
  "Media": ["mp4", "mp3", "wav", "avi", "mkv", "mpeg"],
  "Development": ["html", "css", "js", "json", "java", "sql", "xml", "rss", "exe", "dmg"],
  "Archives": ["zip", "rar"],
  "Simple": ["folder", "empty", "image", "video", "audio", "document", "spreadsheet", "code"],
};

export const FileTypeIconsShowcase: StoryObj = {
  name: "4. File Type Icons",
  render: () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [variant, setVariant] = useState<FileTypeVariant>("default");
    const [size, setSize] = useState<number>(40);
    const [copied, setCopied] = useState<string | null>(null);

    const categories = ["All", ...Object.keys(fileTypeCategories)];

    const formatsToShow =
      selectedCategory === "All"
        ? Object.values(fileTypeCategories).flat()
        : fileTypeCategories[selectedCategory] || [];

    const copyCode = (fmt: string) => {
      const code = `<FileTypeIcon format="${fmt}" variant="${variant}" size={${size}} />`;
      navigator.clipboard.writeText(code);
      setCopied(fmt);
      setTimeout(() => setCopied(null), 1500);
    };

    return (
      <div className="space-y-6 font-sans max-w-5xl mx-auto">
        <header className="border-b border-neutral-200 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
                File Type Icons (Figma Node 4916:411695)
              </h1>
              <p className="mt-1 text-sm text-neutral-500">
                Koleksi lengkap 153 varian ikon tipe file (59 ekstensi/format x 3 style: Default, Gray, Solid).
                Klik ikon untuk menyalin kode JSX.
              </p>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Style selector */}
              <div className="flex items-center gap-1 border border-neutral-200 rounded-lg p-1 bg-white">
                {(["default", "gray", "solid"] as FileTypeVariant[]).map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={`px-3 py-1 text-xs rounded-md font-medium capitalize transition cursor-pointer ${
                      variant === v
                        ? "bg-[#7F56D9] text-white shadow-xs"
                        : "text-neutral-600 hover:bg-neutral-100"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>

              {/* Size selector */}
              <div className="flex items-center gap-1 border border-neutral-200 rounded-lg p-1 bg-white">
                {[24, 32, 40, 48].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={`px-2.5 py-1 text-xs rounded-md font-mono font-medium transition cursor-pointer ${
                      size === s
                        ? "bg-[#7F56D9] text-white shadow-xs"
                        : "text-neutral-600 hover:bg-neutral-100"
                    }`}
                  >
                    {s}px
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mt-4 flex flex-wrap items-center gap-1.5 pt-2">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? Object.values(fileTypeCategories).flat().length
                  : fileTypeCategories[cat]?.length ?? 0;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 text-xs rounded-full font-medium transition cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-neutral-900 text-white"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-neutral-200 text-neutral-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </header>

        {/* Grid of File Type Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {formatsToShow.map((fmt) => (
            <div
              key={fmt}
              onClick={() => copyCode(fmt)}
              className="group relative flex flex-col items-center justify-center p-3.5 rounded-xl border border-neutral-200 bg-white hover:border-[#7F56D9] hover:bg-[#F9F5FF] transition-all cursor-pointer shadow-xs hover:shadow-sm"
            >
              <div className="h-14 flex items-center justify-center">
                <FileTypeIcon format={fmt} variant={variant} size={size} />
              </div>
              <span className="mt-2 text-xs font-semibold uppercase text-neutral-800 group-hover:text-[#7F56D9] text-center truncate max-w-full">
                {fmt}
              </span>
              <span className="text-[10px] font-mono text-neutral-400 mt-0.5">
                {copied === fmt ? (
                  <span className="text-emerald-600 font-semibold">Copied!</span>
                ) : (
                  `"${fmt}"`
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Code Example */}
        <div className="p-4 rounded-xl border border-neutral-200 bg-white space-y-2">
          <h3 className="text-sm font-semibold text-neutral-900">Cara Penggunaan:</h3>
          <div className="p-3 bg-neutral-900 text-neutral-100 rounded-lg font-mono text-xs overflow-x-auto">
            {`import { FileTypeIcon } from "@sisapds/react";

<FileTypeIcon format="pdf" variant="default" size={40} />
<FileTypeIcon format="png" variant="solid" size={32} />
<FileTypeIcon format="folder" variant="gray" size={24} />`}
          </div>
        </div>
      </div>
    );
  },
};

