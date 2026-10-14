import type { HTMLAttributes, ReactNode, ButtonHTMLAttributes } from "react";

export type BadgeSize = "sm" | "md" | "lg";

export type BadgeType =
  | "pill-color"
  | "badge-color"
  | "badge-modern"
  // Shorthand aliases
  | "pill"
  | "badge"
  | "modern";

export type BadgeColor =
  | "gray"
  | "brand"
  | "error"
  | "warning"
  | "success"
  | "slate"
  | "sky"
  | "blue"
  | "indigo"
  | "purple"
  | "pink"
  | "orange"
  // Capitalized aliases from Figma
  | "Gray"
  | "Brand"
  | "Error"
  | "Warning"
  | "Success"
  | "Slate"
  | "Sky"
  | "Blue"
  | "Indigo"
  | "Purple"
  | "Pink"
  | "Orange";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Badge size
   * - `sm`: height 22px, font 12px
   * - `md`: height 24px, font 14px
   * - `lg`: height 28px, font 14px
   * @default "md"
   */
  size?: BadgeSize;

  /**
   * Visual type / corner styling
   * - `pill-color` (or `pill`): Full rounded pill with color bg & border
   * - `badge-color` (or `badge`): Rounded-md rectangle with color bg & border
   * - `badge-modern` (or `modern`): White bg, subtle border, shadow-xs, neutral text
   * @default "pill-color"
   */
  type?: BadgeType;

  /**
   * Color theme (12 available palettes matching Figma SisapDS tokens)
   * @default "brand"
   */
  color?: BadgeColor;

  /**
   * Status dot indicator.
   * If `true`, renders a matching colored circular dot.
   * Or pass a custom ReactNode element.
   * @default false
   */
  dot?: boolean | ReactNode;

  /**
   * Circular country flag, code, or image icon
   */
  country?: ReactNode;

  /**
   * Round user avatar image or element
   */
  avatar?: ReactNode;

  /**
   * Icon rendered before badge content
   */
  iconLeading?: ReactNode;

  /**
   * Alias for iconLeading
   */
  leftIcon?: ReactNode;

  /**
   * Icon rendered after badge content
   */
  iconTrailing?: ReactNode;

  /**
   * Alias for iconTrailing
   */
  rightIcon?: ReactNode;

  /**
   * Callback fired when clicking close / dismiss button.
   * If provided, automatically renders the `BadgeCloseX` component.
   */
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * Accessible aria-label for dismiss button
   * @default "Dismiss badge"
   */
  closeAriaLabel?: string;

  /**
   * If true, renders a square / round badge with icon only (no text padding)
   * @default false
   */
  iconOnly?: boolean;

  /**
   * If true, merges props onto the immediate child element (Radix Slot style)
   */
  asChild?: boolean;
}

export interface BadgeCloseXProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  /**
   * Shape style of the close button hit target
   * - `square`: rounded-sm (3px)
   * - `rounded`: rounded-full (pill)
   * @default "square"
   */
  type?: "square" | "rounded";

  /**
   * Badge color theme to match hover tint
   * @default "brand"
   */
  color?: BadgeColor;

  /**
   * Size scale
   * @default "md"
   */
  size?: BadgeSize;
}

export type BadgeGroupSize = "md" | "lg";
export type BadgeGroupType = "pill-color" | "badge-modern";
export type BadgeGroupPosition = "leading" | "trailing";

export interface BadgeGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  /**
   * Inner badge content (ReactNode or string)
   */
  badge?: ReactNode;

  /**
   * Position of the inner badge relative to the message text
   * - `leading`: [Badge] [Message] [ArrowRight]
   * - `trailing`: [Message] [Badge]
   * @default "leading"
   */
  badgePosition?: BadgeGroupPosition;

  /**
   * Badge group container size
   * - `md`: height 30px
   * - `lg`: height 34px
   * @default "md"
   */
  size?: BadgeGroupSize;

  /**
   * Visual type
   * - `pill-color`: colored bg & border
   * - `badge-modern`: white bg, neutral border, shadow-xs
   * @default "pill-color"
   */
  type?: BadgeGroupType;

  /**
   * Color theme
   * @default "brand"
   */
  color?: BadgeColor;

  /**
   * Announcement text / message
   */
  actionText?: ReactNode;

  /**
   * Optional custom trailing icon (defaults to ArrowRight when leading)
   */
  trailingIcon?: ReactNode;

  /**
   * Whether to show trailing arrow icon
   * @default true
   */
  showTrailingArrow?: boolean;

  /**
   * If provided, renders container as an anchor link `<a>` with interactive hover states
   */
  href?: string;
}
