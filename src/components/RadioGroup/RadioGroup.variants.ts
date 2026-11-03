import { cva } from "class-variance-authority";

export const radioCircleVariants = cva(
  "relative shrink-0 flex items-center justify-center rounded-full transition-all duration-150 border focus-visible:outline-none",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
      },
      state: {
        unchecked:
          "bg-bg-primary border-border-primary group-hover:bg-bg-secondary group-hover:border-border-primary",
        checked:
          "bg-bg-brand-solid border-bg-brand-solid text-text-white group-hover:bg-bg-brand-solid_hover group-hover:border-bg-brand-solid_hover",
        error:
          "bg-bg-primary border-border-error group-hover:border-border-error",
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

export const radioItemCardVariants = cva(
  "group relative flex border transition-all duration-150 select-none cursor-pointer focus-visible:outline-none",
  {
    variants: {
      type: {
        radio: "items-start gap-3 rounded-xl p-4 bg-bg-primary",
        "icon-simple": "items-start gap-4 rounded-xl p-4 bg-bg-primary",
        "icon-card": "flex-col gap-3 rounded-xl p-4 bg-bg-primary",
        avatar: "items-start gap-4 rounded-xl p-4 bg-bg-primary",
        payment: "items-start gap-4 rounded-xl p-4 bg-bg-primary",
      },
      selected: {
        true: "border-border-brand bg-bg-primary",
        false: "border-border-secondary bg-bg-primary hover:bg-bg-secondary hover:border-border-secondary",
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
    defaultVariants: {
      type: "radio",
      selected: false,
      focused: false,
      disabled: false,
    },
  }
);
