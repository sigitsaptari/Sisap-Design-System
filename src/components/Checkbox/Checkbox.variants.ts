import { cva } from "class-variance-authority";

export const checkboxContainerVariants = cva(
  "group relative flex items-start select-none transition-colors duration-150 cursor-pointer",
  {
    variants: {
      size: {
        sm: "gap-2",
        md: "gap-3",
      },
      disabled: {
        true: "opacity-50 pointer-events-none cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      size: "sm",
      disabled: false,
    },
  }
);

export const checkboxBoxVariants = cva(
  "relative shrink-0 flex items-center justify-center transition-all duration-150 border focus-visible:outline-none",
  {
    variants: {
      size: {
        sm: "h-4 w-4 rounded-xs",
        md: "h-5 w-5 rounded-sm",
      },
      state: {
        unchecked:
          "bg-bg-primary border-border-primary group-hover:bg-bg-secondary group-hover:border-border-primary",
        checked:
          "bg-bg-brand-solid border-bg-brand-solid text-text-white group-hover:bg-bg-brand-solid_hover group-hover:border-bg-brand-solid_hover",
        indeterminate:
          "bg-bg-brand-solid border-bg-brand-solid text-text-white group-hover:bg-bg-brand-solid_hover group-hover:border-bg-brand-solid_hover",
        error:
          "bg-bg-primary border-border-error text-text-white group-hover:border-border-error",
      },
      focused: {
        true: "ring-4 ring-color-brand-100 ring-offset-2 ring-offset-bg-primary",
        false: "",
      },
    },
    defaultVariants: {
      size: "sm",
      state: "unchecked",
      focused: false,
    },
  }
);

export const checkboxLabelVariants = cva(
  "font-medium text-text-secondary transition-colors duration-150 group-hover:text-text-primary",
  {
    variants: {
      size: {
        sm: "text-sm leading-sm",
        md: "text-md leading-md",
      },
      error: {
        true: "text-text-error-primary",
        false: "",
      },
    },
    defaultVariants: {
      size: "sm",
      error: false,
    },
  }
);

export const checkboxSupportingTextVariants = cva(
  "font-normal text-text-tertiary transition-colors duration-150",
  {
    variants: {
      size: {
        sm: "text-sm leading-sm mt-0.5",
        md: "text-md leading-md mt-0.5",
      },
      error: {
        true: "text-text-error-primary",
        false: "",
      },
    },
    defaultVariants: {
      size: "sm",
      error: false,
    },
  }
);

