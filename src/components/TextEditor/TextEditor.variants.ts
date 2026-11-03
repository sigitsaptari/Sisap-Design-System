import { cva } from "class-variance-authority";

export const textEditorContainerVariants = cva(
  "flex flex-col gap-2 font-sans w-full",
  {
    variants: {
      size: {
        sm: "max-w-xl",
        md: "max-w-3xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const textEditorBoxVariants = cva(
  "relative flex flex-col rounded-xl border border-border-primary bg-bg-primary shadow-xs transition-colors duration-150 focus-within:border-border-brand focus-within:ring-4 focus-within:ring-color-brand-100",
  {
    variants: {
      hasError: {
        true: "border-border-error focus-within:border-border-error focus-within:ring-color-error-100",
        false: "",
      },
      disabled: {
        true: "opacity-50 pointer-events-none bg-bg-secondary",
        false: "",
      },
    },
    defaultVariants: {
      hasError: false,
      disabled: false,
    },
  }
);

export const textEditorButtonVariants = cva(
  "inline-flex items-center justify-center rounded-xs transition-colors duration-150 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-color-brand-100",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-9 w-9",
      },
      active: {
        true: "bg-bg-secondary text-text-primary font-semibold shadow-xs",
        false: "bg-transparent text-text-tertiary hover:bg-bg-secondary hover:text-text-primary",
      },
    },
    defaultVariants: {
      size: "sm",
      active: false,
    },
  }
);

