import { cva } from "class-variance-authority";

export const tooltipBubbleVariants = cva(
  "relative z-50 flex flex-col rounded-md bg-bg-primary-solid text-text-white shadow-lg pointer-events-none select-none max-w-xs",
  {
    variants: {
      hasSupportingText: {
        true: "p-3 gap-1",
        false: "px-3 py-2",
      },
    },
    defaultVariants: {
      hasSupportingText: false,
    },
  }
);

