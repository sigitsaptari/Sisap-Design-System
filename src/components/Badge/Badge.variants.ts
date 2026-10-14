import { cva } from "class-variance-authority";

/**
 * Normalizes user color prop to lowercase token key
 */
export function normalizeBadgeColor(color?: string): string {
  if (!color) return "brand";
  return color.toLowerCase();
}

/**
 * Normalizes user badge type prop to canonical identifier
 */
export function normalizeBadgeType(type?: string): "pill-color" | "badge-color" | "badge-modern" {
  if (!type) return "pill-color";
  const lower = type.toLowerCase().trim();
  if (lower === "pill" || lower === "pill-color" || lower === "pill color") return "pill-color";
  if (lower === "badge" || lower === "badge-color" || lower === "badge color") return "badge-color";
  if (lower === "modern" || lower === "badge-modern" || lower === "badge modern") return "badge-modern";
  return "pill-color";
}

export const badgeVariants = cva(
  "inline-flex items-center font-medium border select-none shrink-0 transition-colors duration-150 leading-none",
  {
    variants: {
      type: {
        "pill-color": "rounded-full",
        "badge-color": "rounded-md",
        "badge-modern": "rounded-md bg-white border-neutral-300 text-neutral-700 shadow-xs",
      },
      size: {
        sm: "h-[22px] text-xs leading-[18px]",
        md: "h-[24px] text-sm leading-[20px]",
        lg: "h-[28px] text-sm leading-[20px]",
      },
      color: {
        gray: "bg-[#FAFAFA] text-[#404040] border-[#E5E5E5]",
        brand: "bg-[#F9F5FF] text-[#6941C6] border-[#E9D7FE]",
        error: "bg-[#FEF2F2] text-[#B91C1C] border-[#FECACA]",
        warning: "bg-[#FEFCE8] text-[#A16207] border-[#FEF08A]",
        success: "bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]",
        slate: "bg-[#F8FAFC] text-[#334155] border-[#E2E8F0]",
        sky: "bg-[#F0F9FF] text-[#0369A1] border-[#BAE6FD]",
        blue: "bg-[#EFF6FF] text-[#1D4ED8] border-[#BFDBFE]",
        indigo: "bg-[#EEF2FF] text-[#4338CA] border-[#C7D2FE]",
        purple: "bg-[#FAF5FF] text-[#7E22CE] border-[#E9D5FF]",
        pink: "bg-[#FDF2F8] text-[#BE185D] border-[#FBCFE8]",
        orange: "bg-[#FFF7ED] text-[#C2410C] border-[#FED7AA]",
      },
      iconOnly: {
        true: "justify-center aspect-square p-0",
        false: "",
      },
    },
    compoundVariants: [
      // Pill padding per size
      { type: "pill-color", size: "sm", iconOnly: false, className: "px-2 py-0.5 gap-1" },
      { type: "pill-color", size: "md", iconOnly: false, className: "px-2.5 py-0.5 gap-1.5" },
      { type: "pill-color", size: "lg", iconOnly: false, className: "px-3 py-1 gap-1.5" },

      // Badge color padding & radius per size
      { type: "badge-color", size: "sm", iconOnly: false, className: "px-1.5 py-0.5 gap-1 rounded-md" },
      { type: "badge-color", size: "md", iconOnly: false, className: "px-2 py-0.5 gap-1.5 rounded-md" },
      { type: "badge-color", size: "lg", iconOnly: false, className: "px-2.5 py-1 gap-1.5 rounded-lg" },

      // Modern badge padding & radius per size
      { type: "badge-modern", size: "sm", iconOnly: false, className: "px-1.5 py-0.5 gap-1 rounded-md" },
      { type: "badge-modern", size: "md", iconOnly: false, className: "px-2 py-0.5 gap-1.5 rounded-md" },
      { type: "badge-modern", size: "lg", iconOnly: false, className: "px-2.5 py-1 gap-1.5 rounded-lg" },

      // Icon only dimensions
      { size: "sm", iconOnly: true, className: "w-[22px] h-[22px]" },
      { size: "md", iconOnly: true, className: "w-[24px] h-[24px]" },
      { size: "lg", iconOnly: true, className: "w-[28px] h-[28px]" },

      // In badge-modern, override color background & border with clean modern style
      { type: "badge-modern", className: "bg-white border-neutral-300 text-neutral-700 shadow-xs" },
    ],
    defaultVariants: {
      type: "pill-color",
      size: "md",
      color: "brand",
      iconOnly: false,
    },
  }
);

/**
 * Dot indicator color classes mapping to Figma SisapDS tokens
 */
export const badgeDotColors: Record<string, string> = {
  gray: "bg-[#737373]",
  brand: "bg-[#9E77ED]",
  error: "bg-[#EF4444]",
  warning: "bg-[#EAB308]",
  success: "bg-[#22C55E]",
  slate: "bg-[#64748B]",
  sky: "bg-[#0EA5E9]",
  blue: "bg-[#3B82F6]",
  indigo: "bg-[#6366F1]",
  purple: "bg-[#A855F7]",
  pink: "bg-[#EC4899]",
  orange: "bg-[#F97316]",
};

/**
 * Close X hover tint classes per color
 */
export const badgeCloseXVariants = cva(
  "inline-flex items-center justify-center shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-none",
  {
    variants: {
      type: {
        square: "rounded-[3px]",
        rounded: "rounded-full",
      },
      size: {
        sm: "w-3.5 h-3.5 p-0.5",
        md: "w-4 h-4 p-0.5",
        lg: "w-4 h-4 p-0.5",
      },
      color: {
        gray: "text-[#737373] hover:bg-[#F5F5F5] hover:text-[#404040] active:bg-[#E5E5E5]",
        brand: "text-[#7F56D9] hover:bg-[#F4EBFF] hover:text-[#6941C6] active:bg-[#E9D7FE]",
        error: "text-[#EF4444] hover:bg-[#FEE2E2] hover:text-[#B91C1C] active:bg-[#FECACA]",
        warning: "text-[#EAB308] hover:bg-[#FEF9C3] hover:text-[#A16207] active:bg-[#FEF08A]",
        success: "text-[#22C55E] hover:bg-[#DCFCE7] hover:text-[#15803D] active:bg-[#BBF7D0]",
        slate: "text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#334155] active:bg-[#E2E8F0]",
        sky: "text-[#0EA5E9] hover:bg-[#E0F2FE] hover:text-[#0369A1] active:bg-[#BAE6FD]",
        blue: "text-[#3B82F6] hover:bg-[#DBEAFE] hover:text-[#1D4ED8] active:bg-[#BFDBFE]",
        indigo: "text-[#6366F1] hover:bg-[#E0E7FF] hover:text-[#4338CA] active:bg-[#C7D2FE]",
        purple: "text-[#A855F7] hover:bg-[#F3E8FF] hover:text-[#7E22CE] active:bg-[#E9D5FF]",
        pink: "text-[#EC4899] hover:bg-[#FCE7F3] hover:text-[#BE185D] active:bg-[#FBCFE8]",
        orange: "text-[#F97316] hover:bg-[#FFEDD5] hover:text-[#C2410C] active:bg-[#FED7AA]",
      },
    },
    defaultVariants: {
      type: "square",
      size: "md",
      color: "brand",
    },
  }
);

/**
 * Badge Group container variants
 */
export const badgeGroupVariants = cva(
  "inline-flex items-center rounded-full border transition-all duration-150 select-none group font-medium",
  {
    variants: {
      size: {
        md: "h-[30px] p-1 gap-2 text-xs leading-[18px]",
        lg: "h-[34px] p-1 gap-2.5 text-sm leading-[20px]",
      },
      type: {
        "pill-color": "",
        "badge-modern": "bg-white border-neutral-300 text-neutral-700 shadow-xs hover:bg-neutral-50",
      },
      color: {
        gray: "bg-[#FAFAFA] border-[#E5E5E5] text-[#404040] hover:bg-[#F5F5F5]",
        brand: "bg-[#F9F5FF] border-[#E9D7FE] text-[#6941C6] hover:bg-[#F4EBFF]",
        error: "bg-[#FEF2F2] border-[#FECACA] text-[#B91C1C] hover:bg-[#FEE2E2]",
        warning: "bg-[#FEFCE8] border-[#FEF08A] text-[#A16207] hover:bg-[#FEF9C3]",
        success: "bg-[#F0FDF4] border-[#BBF7D0] text-[#15803D] hover:bg-[#DCFCE7]",
        slate: "bg-[#F8FAFC] border-[#E2E8F0] text-[#334155] hover:bg-[#F1F5F9]",
        sky: "bg-[#F0F9FF] border-[#BAE6FD] text-[#0369A1] hover:bg-[#E0F2FE]",
        blue: "bg-[#EFF6FF] border-[#BFDBFE] text-[#1D4ED8] hover:bg-[#DBEAFE]",
        indigo: "bg-[#EEF2FF] border-[#C7D2FE] text-[#4338CA] hover:bg-[#E0E7FF]",
        purple: "bg-[#FAF5FF] border-[#E9D5FF] text-[#7E22CE] hover:bg-[#F3E8FF]",
        pink: "bg-[#FDF2F8] border-[#FBCFE8] text-[#BE185D] hover:bg-[#FCE7F3]",
        orange: "bg-[#FFF7ED] border-[#FED7AA] text-[#C2410C] hover:bg-[#FFEDD5]",
      },
    },
    compoundVariants: [
      {
        type: "badge-modern",
        className: "bg-white border-neutral-300 text-neutral-700 shadow-xs hover:bg-neutral-50",
      },
    ],
    defaultVariants: {
      size: "md",
      type: "pill-color",
      color: "brand",
    },
  }
);
