import { cva } from "class-variance-authority";

export const featuredIconVariants = cva(
  "inline-flex items-center justify-center shrink-0 transition-all select-none",
  {
    variants: {
      size: {
        sm: "h-8 w-8 [&_svg]:h-4 [&_svg]:w-4",
        md: "h-10 w-10 [&_svg]:h-5 [&_svg]:w-5",
        lg: "h-12 w-12 [&_svg]:h-6 [&_svg]:w-6",
        xl: "h-14 w-14 [&_svg]:h-7 [&_svg]:w-7",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-lg",
      },
      variant: {
        light: "",
        outline: "border-2 bg-transparent",
        modern: "border shadow-xs",
      },
      color: {
        brand: "",
        gray: "",
        error: "",
        warning: "",
        success: "",
      },
    },
    compoundVariants: [
      // Light variants
      {
        variant: "light",
        color: "brand",
        className: "bg-[#F4EBFF] text-[#7F56D9]",
      },
      {
        variant: "light",
        color: "gray",
        className: "bg-neutral-100 text-neutral-600",
      },
      {
        variant: "light",
        color: "error",
        className: "bg-[#FEE2E2] text-[#DC2626]",
      },
      {
        variant: "light",
        color: "warning",
        className: "bg-[#FEF08A] text-[#CA8A04]",
      },
      {
        variant: "light",
        color: "success",
        className: "bg-[#DCFCE7] text-[#16A34A]",
      },
      // Outline variants
      {
        variant: "outline",
        color: "brand",
        className: "border-[#D6BBFB] text-[#7F56D9]",
      },
      {
        variant: "outline",
        color: "gray",
        className: "border-neutral-300 text-neutral-600",
      },
      {
        variant: "outline",
        color: "error",
        className: "border-[#FCA5A5] text-[#DC2626]",
      },
      {
        variant: "outline",
        color: "warning",
        className: "border-[#FDE047] text-[#CA8A04]",
      },
      {
        variant: "outline",
        color: "success",
        className: "border-[#86EFAC] text-[#16A34A]",
      },
      // Modern variants
      {
        variant: "modern",
        color: "brand",
        className: "bg-white border-[#E9D7FE] text-[#7F56D9]",
      },
      {
        variant: "modern",
        color: "gray",
        className: "bg-white border-neutral-200 text-neutral-700",
      },
      {
        variant: "modern",
        color: "error",
        className: "bg-white border-[#FECACA] text-[#DC2626]",
      },
      {
        variant: "modern",
        color: "warning",
        className: "bg-white border-[#FEF08A] text-[#CA8A04]",
      },
      {
        variant: "modern",
        color: "success",
        className: "bg-white border-[#BBF7D0] text-[#16A34A]",
      },
    ],
    defaultVariants: {
      size: "md",
      shape: "circle",
      variant: "light",
      color: "brand",
    },
  }
);
