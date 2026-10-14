import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "relative overflow-hidden inline-flex items-center justify-center font-semibold transition-all duration-200 active:scale-[0.97] ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-[#7F56D9] text-white hover:bg-[#6941C6] active:bg-[#53389E] focus-visible:ring-4 focus-visible:ring-[#9E77ED]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white shadow-xs",
        secondary:
          "bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-50 hover:text-neutral-800 active:bg-neutral-100 focus-visible:ring-4 focus-visible:ring-neutral-200 focus-visible:ring-offset-2 shadow-xs",
        tertiary:
          "bg-transparent text-neutral-600 hover:bg-neutral-50 hover:text-neutral-800 active:bg-neutral-100 focus-visible:ring-4 focus-visible:ring-neutral-200 shadow-none",
        "link-color":
          "bg-transparent text-[#6941C6] hover:text-[#53389E] p-0 h-auto shadow-none focus-visible:underline focus-visible:ring-0 active:text-[#42307D]",
        "link-gray":
          "bg-transparent text-neutral-600 hover:text-neutral-900 p-0 h-auto shadow-none focus-visible:underline focus-visible:ring-0 active:text-neutral-950",
        "destructive-primary":
          "bg-[#DC2626] text-white hover:bg-[#B91C1C] active:bg-[#991B1B] focus-visible:ring-4 focus-visible:ring-[#FDA29B]/40 focus-visible:ring-offset-2 shadow-xs",
        "destructive-secondary":
          "bg-white text-[#DC2626] border border-[#FCA5A5] hover:bg-[#FEF2F2] hover:text-[#B91C1C] active:bg-[#FEE2E2] focus-visible:ring-4 focus-visible:ring-[#FECDCA] focus-visible:ring-offset-2 shadow-xs",
        "destructive-tertiary":
          "bg-transparent text-[#DC2626] hover:bg-[#FEF2F2] hover:text-[#B91C1C] active:bg-[#FEE2E2] focus-visible:ring-4 focus-visible:ring-[#FECDCA] shadow-none",
        "destructive-link":
          "bg-transparent text-[#DC2626] hover:text-[#B91C1C] p-0 h-auto shadow-none focus-visible:underline focus-visible:ring-0 active:text-[#991B1B]",
      },
      size: {
        xs: "h-8 px-2.5 py-1.5 text-sm leading-sm rounded-md gap-1 [&_svg]:h-4 [&_svg]:w-4",
        sm: "h-9 px-3 py-2 text-sm leading-sm rounded-md gap-1 [&_svg]:h-5 [&_svg]:w-5",
        md: "h-10 px-3.5 py-2.5 text-sm leading-sm rounded-md gap-1 [&_svg]:h-5 [&_svg]:w-5",
        lg: "h-11 px-4 py-2.5 text-md leading-md rounded-md gap-1.5 [&_svg]:h-5 [&_svg]:w-5",
        xl: "h-12 px-4.5 py-3 text-md leading-md rounded-md gap-1.5 [&_svg]:h-5 [&_svg]:w-5",
      },
      iconOnly: {
        true: "p-0 aspect-square justify-center",
        false: "",
      },
    },
    compoundVariants: [
      { iconOnly: true, size: "xs", className: "w-8 h-8 px-0 py-0" },
      { iconOnly: true, size: "sm", className: "w-9 h-9 px-0 py-0" },
      { iconOnly: true, size: "md", className: "w-10 h-10 px-0 py-0" },
      { iconOnly: true, size: "lg", className: "w-11 h-11 px-0 py-0" },
      { iconOnly: true, size: "xl", className: "w-12 h-12 px-0 py-0" },
      { variant: "link-color", className: "h-auto px-0 py-0 shadow-none active:scale-100" },
      { variant: "link-gray", className: "h-auto px-0 py-0 shadow-none active:scale-100" },
      { variant: "destructive-link", className: "h-auto px-0 py-0 shadow-none active:scale-100" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      iconOnly: false,
    },
  }
);

export const buttonCloseXVariants = cva(
  "inline-flex items-center justify-center transition-all duration-150 active:scale-90 active:duration-75 focus-visible:outline-none select-none cursor-pointer",
  {
    variants: {
      size: {
        sm: "h-9 w-9 p-2 rounded-md [&_svg]:h-5 [&_svg]:w-5",
        md: "h-10 w-10 p-2 rounded-md [&_svg]:h-5 [&_svg]:w-5",
        lg: "h-11 w-11 p-2 rounded-md [&_svg]:h-6 [&_svg]:w-6",
      },
      darkBg: {
        false: "text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-neutral-200",
        true: "text-white/70 hover:text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/30",
      },
    },
    defaultVariants: {
      size: "md",
      darkBg: false,
    },
  }
);

export const buttonUtilityVariants = cva(
  "inline-flex items-center justify-center transition-all duration-150 active:scale-95 active:duration-75 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer",
  {
    variants: {
      size: {
        xs: "h-7 w-7 p-1.5 rounded-md [&_svg]:h-4 [&_svg]:w-4",
        sm: "h-8 w-8 p-1.5 rounded-md [&_svg]:h-5 [&_svg]:w-5",
      },
      variant: {
        secondary:
          "bg-white text-neutral-600 border border-neutral-300 hover:bg-neutral-50 hover:text-neutral-800 active:bg-neutral-100 shadow-xs focus-visible:ring-2 focus-visible:ring-neutral-200",
        tertiary:
          "bg-transparent text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800 active:bg-neutral-200 shadow-none focus-visible:ring-2 focus-visible:ring-neutral-200",
      },
    },
    defaultVariants: {
      size: "xs",
      variant: "secondary",
    },
  }
);
