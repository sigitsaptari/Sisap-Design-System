import { cva } from "class-variance-authority";

export const inputContainerVariants = cva("w-full flex flex-col font-sans", {
  variants: {
    size: {
      sm: "gap-1.5",
      md: "gap-1.5",
      lg: "gap-1.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const inputBoxVariants = cva(
  "w-full flex items-center transition-all duration-150 bg-white rounded-md border shadow-xs text-neutral-900",
  {
    variants: {
      size: {
        sm: "h-9 px-3 py-2 text-sm leading-sm gap-2",
        md: "h-10 px-3.5 py-2.5 text-md leading-md gap-2",
        lg: "h-11 px-3.5 py-2.5 text-md leading-md gap-2.5",
      },
      state: {
        default:
          "border-neutral-300 focus-within:border-[#9E77ED] focus-within:ring-4 focus-within:ring-[#9E77ED]/25",
        error:
          "border-[#FCA5A5] text-neutral-900 focus-within:border-[#DC2626] focus-within:ring-4 focus-within:ring-[#FDA29B]/25",
        disabled:
          "bg-neutral-50 border-neutral-200 text-neutral-400 cursor-not-allowed select-none shadow-none",
      },
    },
    defaultVariants: {
      size: "md",
      state: "default",
    },
  }
);

export const textareaBoxVariants = cva(
  "w-full transition-all duration-150 bg-white rounded-md border shadow-xs text-neutral-900 outline-none font-sans",
  {
    variants: {
      size: {
        sm: "min-h-[104px] p-3 text-sm leading-sm",
        md: "min-h-[128px] p-3.5 text-md leading-md",
      },
      state: {
        default:
          "border-neutral-300 focus:border-[#9E77ED] focus:ring-4 focus:ring-[#9E77ED]/25",
        error:
          "border-[#FCA5A5] text-neutral-900 focus:border-[#DC2626] focus:ring-4 focus:ring-[#FDA29B]/25",
        disabled:
          "bg-neutral-50 border-neutral-200 text-neutral-400 cursor-not-allowed resize-none shadow-none",
      },
    },
    defaultVariants: {
      size: "md",
      state: "default",
    },
  }
);
