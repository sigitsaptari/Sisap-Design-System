import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type {
  buttonVariants,
  buttonCloseXVariants,
  buttonUtilityVariants,
} from "./Button.variants";

export type ButtonHierarchy =
  | "primary"
  | "secondary"
  | "tertiary"
  | "link-color"
  | "link-gray"
  | "link"
  | "destructive-primary"
  | "destructive-secondary"
  | "destructive-tertiary"
  | "destructive-link"
  | "danger"; // alias for destructive-primary

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    Omit<VariantProps<typeof buttonVariants>, "variant" | "size"> {
  /**
   * Button hierarchy / visual style variant
   * @default "primary"
   */
  variant?: ButtonHierarchy;
  /**
   * Button size scale
   * @default "md"
   */
  size?: ButtonSize;
  /**
   * If true, switches hierarchy to destructive (error) color palette
   * @default false
   */
  destructive?: boolean;
  /**
   * If true, renders a square icon button without horizontal padding
   * @default false
   */
  iconOnly?: boolean;
  /**
   * If true, renders child element directly while merging props (Radix UI Slot)
   */
  asChild?: boolean;
  /**
   * If true, displays loading indicator and disables user interaction
   */
  isLoading?: boolean;
  /**
   * Text displayed beside the spinner while loading. If omitted, children is rendered.
   */
  loadingText?: string;
  /**
   * Icon or element to render on the left of the button text
   */
  leftIcon?: ReactNode;
  /**
   * Icon or element to render on the right of the button text
   */
  rightIcon?: ReactNode;
  /**
   * If true, disables the interactive click wave ripple animation
   * @default false
   */
  disableRipple?: boolean;
  className?: string;
}

export interface ButtonCloseXProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonCloseXVariants> {
  className?: string;
}

export interface ButtonUtilityProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonUtilityVariants> {
  /**
   * Icon to render inside the utility button
   */
  icon?: ReactNode;
  className?: string;
}
