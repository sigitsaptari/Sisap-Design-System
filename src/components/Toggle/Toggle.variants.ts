import { cva } from "class-variance-authority";

export const toggleTrackVariants = cva(
  "relative inline-flex shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus-visible:outline-none select-none",
  {
    variants: {
      variantType: {
        default: "p-0.5",
        slim: "p-0 items-center",
      },
      size: {
        sm: "",
        md: "",
      },
      pressed: {
        true: "bg-bg-brand-solid hover:bg-bg-brand-solid_hover",
        false: "bg-bg-tertiary hover:bg-bg-secondary_hover",
      },
      focused: {
        true: "ring-4 ring-color-brand-100 ring-offset-2 ring-offset-bg-primary",
        false: "",
      },
      disabled: {
        true: "opacity-50 pointer-events-none cursor-not-allowed",
        false: "",
      },
    },
    compoundVariants: [
      // Default type track dimensions
      { variantType: "default", size: "sm", className: "h-5 w-9" },
      { variantType: "default", size: "md", className: "h-6 w-11" },

      // Slim type track dimensions
      { variantType: "slim", size: "sm", className: "h-4 w-8" },
      { variantType: "slim", size: "md", className: "h-5 w-10" },
    ],
    defaultVariants: {
      variantType: "default",
      size: "sm",
      pressed: false,
      focused: false,
      disabled: false,
    },
  }
);

export const toggleKnobVariants = cva(
  "pointer-events-none inline-block rounded-full bg-color-base-white shadow-sm ring-0 transition duration-200 ease-in-out shrink-0",
  {
    variants: {
      variantType: {
        default: "",
        slim: "shadow-xs",
      },
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
      },
      pressed: {
        true: "",
        false: "translate-x-0",
      },
    },
    compoundVariants: [
      // Default type translations
      { variantType: "default", size: "sm", pressed: true, className: "translate-x-4" },
      { variantType: "default", size: "md", pressed: true, className: "translate-x-5" },

      // Slim type translations
      { variantType: "slim", size: "sm", pressed: true, className: "translate-x-4" },
      { variantType: "slim", size: "md", pressed: true, className: "translate-x-5" },
    ],
    defaultVariants: {
      variantType: "default",
      size: "sm",
      pressed: false,
    },
  }
);
