import type { HTMLAttributes, ImgHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { avatarVariants } from "./Avatar.variants";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type AvatarStatusType =
  | "online"
  | "offline"
  | "verified"
  | "count"
  | "avatar";

export interface AvatarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof avatarVariants> {
  /**
   * Image source URL
   */
  src?: string;

  /**
   * Image alternate text
   */
  alt?: string;

  /**
   * User initials or text placeholder (e.g. "OR")
   */
  initials?: string;

  /**
   * Alias for `initials`
   */
  text?: string;

  /**
   * Custom fallback icon element (defaults to User01 icon)
   */
  icon?: ReactNode;

  /**
   * Avatar size scale:
   * - `xs`: 24x24 px
   * - `sm`: 32x32 px
   * - `md`: 40x40 px (default)
   * - `lg`: 48x48 px
   * - `xl`: 56x56 px
   * - `2xl`: 64x64 px
   * @default "md"
   */
  size?: AvatarSize;

  /**
   * If true, applies a crisp white outer ring / border (essential for avatar groups & high contrast)
   * @default false
   */
  border?: boolean;

  /**
   * Status indicator shown at bottom-right corner:
   * - `online`: Green status dot with white border
   * - `offline`: Gray status dot with white border
   * - `verified`: Official verified blue checkmark badge
   * - `count`: Red circular badge displaying count
   * - `avatar`: Secondary miniature company/team avatar
   * - `true`: Equivalent to "online"
   */
  status?: AvatarStatusType | boolean;

  /**
   * Numeric or string count when `status="count"` (e.g. 8)
   */
  statusCount?: number | string;

  /**
   * Secondary avatar element or image URL when `status="avatar"`
   */
  statusAvatar?: ReactNode;

  /**
   * Accessible aria-label for status indicator
   */
  statusAriaLabel?: string;

  /**
   * Additional props passed to the internal `<img>` element
   */
  imgProps?: ImgHTMLAttributes<HTMLImageElement>;

  /**
   * Children slot if overriding content
   */
  children?: ReactNode;
}

export interface AvatarStatusProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Status type to display
   */
  status: AvatarStatusType;

  /**
   * Size scale matching the parent Avatar
   * @default "md"
   */
  size?: AvatarSize;

  /**
   * Count label if `status="count"`
   */
  count?: number | string;

  /**
   * Secondary avatar element or image URL if `status="avatar"`
   */
  statusAvatar?: ReactNode;
}

export type AvatarGroupSize = "xs" | "sm" | "md";

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Avatar size for items in the group
   * @default "md"
   */
  size?: AvatarGroupSize;

  /**
   * Maximum number of avatars shown before displaying the excess count badge (+N)
   * @default 5
   */
  max?: number;

  /**
   * Explicit total count of members to compute `+N` (if larger than children count)
   */
  total?: number;

  /**
   * If true or if onAdd is provided, displays the dashed `+` add button at the end
   * @default false
   */
  showAddButton?: boolean;

  /**
   * Callback fired when clicking the `+` add button
   */
  onAdd?: (e: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * Accessible aria-label for add button
   * @default "Add user"
   */
  addAriaLabel?: string;

  children?: ReactNode;
}

export type AvatarLabelGroupSize = "sm" | "md" | "lg";

export interface AvatarLabelGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /**
   * Avatar element or props
   */
  avatar?: ReactNode;

  /**
   * Avatar image source shortcut
   */
  src?: string;

  /**
   * Avatar initials shortcut
   */
  initials?: string;

  /**
   * Primary title text (e.g. "Olivia Rhye")
   */
  title?: ReactNode;

  /**
   * Supporting / subtitle text (e.g. "olivia@untitledui.com")
   */
  supportingText?: ReactNode;

  /**
   * Alias for `supportingText`
   */
  subtitle?: ReactNode;

  /**
   * Size scale
   * - `sm`: Avatar 32px, title 14px, subtitle 12px
   * - `md`: Avatar 40px, title 14px, subtitle 14px (default)
   * - `lg`: Avatar 48px, title 16px, subtitle 16px
   * @default "md"
   */
  size?: AvatarLabelGroupSize;

  /**
   * If provided, renders container as clickable anchor link `<a>`
   */
  href?: string;
}
