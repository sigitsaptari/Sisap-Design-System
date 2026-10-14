import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { featuredIconVariants } from "./FeaturedIcon.variants";

export interface FeaturedIconProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof featuredIconVariants> {
  /**
   * The icon component or element to render inside
   */
  children?: ReactNode;
  className?: string;
}
