import { cva } from "class-variance-authority";
import type { AvatarSize, AvatarGroupSize, AvatarLabelGroupSize } from "./Avatar.types";

/**
 * Avatar Container CVA definition
 */
export const avatarVariants = cva(
  "relative inline-flex items-center justify-center shrink-0 rounded-full select-none overflow-hidden transition-all duration-150 font-semibold bg-neutral-100 border border-neutral-200 text-neutral-600",
  {
    variants: {
      size: {
        xs: "w-6 h-6 text-[12px] leading-none",
        sm: "w-8 h-8 text-[14px] leading-none",
        md: "w-10 h-10 text-[16px] leading-none",
        lg: "w-12 h-12 text-[18px] leading-none",
        xl: "w-14 h-14 text-[20px] leading-none",
        "2xl": "w-16 h-16 text-[24px] leading-none",
      },
      border: {
        true: "ring-2 ring-white shadow-xs",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      border: false,
    },
  }
);

/**
 * Avatar Group Overlapping Spacing
 */
export const avatarGroupVariants = cva("inline-flex items-center isolate", {
  variants: {
    size: {
      xs: "-space-x-1",
      sm: "-space-x-2",
      md: "-space-x-3",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

/**
 * Status indicator size & position
 */
export const avatarStatusVariants = cva(
  "absolute bottom-0 right-0 rounded-full flex items-center justify-center z-10 box-content select-none",
  {
    variants: {
      size: {
        xs: "w-2.5 h-2.5",
        sm: "w-3 h-3",
        md: "w-3.5 h-3.5",
        lg: "w-4 h-4",
        xl: "w-[18px] h-[18px]",
        "2xl": "w-5 h-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

/**
 * Returns icon size in px according to Figma spec for Avatar
 */
export function getAvatarIconSize(size: AvatarSize = "md"): number {
  switch (size) {
    case "xs":
      return 16;
    case "sm":
      return 20;
    case "md":
      return 24;
    case "lg":
      return 28;
    case "xl":
      return 32;
    case "2xl":
      return 32;
    default:
      return 24;
  }
}

/**
 * Returns add button dimensions in px
 */
export function getAvatarAddButtonSize(size: AvatarGroupSize = "md"): {
  buttonClass: string;
  iconSize: number;
} {
  switch (size) {
    case "xs":
      return { buttonClass: "w-6 h-6", iconSize: 14 };
    case "sm":
      return { buttonClass: "w-8 h-8", iconSize: 16 };
    case "md":
    default:
      return { buttonClass: "w-10 h-10", iconSize: 20 };
  }
}

/**
 * Typography scale for AvatarLabelGroup
 */
export function getAvatarLabelGroupTypography(size: AvatarLabelGroupSize = "md") {
  switch (size) {
    case "sm":
      return {
        avatarSize: "sm" as const,
        titleClass: "text-sm font-semibold text-neutral-900 leading-5",
        subtitleClass: "text-xs font-normal text-neutral-600 leading-[18px]",
      };
    case "lg":
      return {
        avatarSize: "lg" as const,
        titleClass: "text-base font-semibold text-neutral-900 leading-6",
        subtitleClass: "text-base font-normal text-neutral-600 leading-6",
      };
    case "md":
    default:
      return {
        avatarSize: "md" as const,
        titleClass: "text-sm font-semibold text-neutral-900 leading-5",
        subtitleClass: "text-sm font-normal text-neutral-600 leading-5",
      };
  }
}
