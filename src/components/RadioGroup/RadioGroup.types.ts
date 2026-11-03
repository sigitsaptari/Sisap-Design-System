import type * as React from "react";

export type RadioSize = "sm" | "md";
export type RadioGroupItemType =
  | "radio"
  | "icon-simple"
  | "icon-card"
  | "avatar"
  | "payment";

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "onChange"> {
  /** Size variant (sm: 16px, md: 20px) */
  size?: RadioSize;
  /** Label text beside radio */
  label?: React.ReactNode;
  /** Secondary supporting text below label */
  supportingText?: React.ReactNode;
  /** Controlled checked state */
  checked?: boolean;
  /** Default checked state */
  defaultChecked?: boolean;
  /** Change callback */
  onChange?: (checked: boolean) => void;
  /** Disables the radio */
  disabled?: boolean;
  /** Error state */
  error?: boolean;
  /** Required indicator */
  required?: boolean;
  /** Container class */
  containerClassName?: string;
}

export interface RadioGroupItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Value of this option within the group */
  value: string;
  /** Type style of the item */
  type?: RadioGroupItemType;
  /** Size variant */
  size?: RadioSize;
  /** Primary label / title */
  label: React.ReactNode;
  /** Secondary supporting text */
  supportingText?: React.ReactNode;
  /** Left icon element for icon-simple or icon-card */
  icon?: React.ReactNode;
  /** Left avatar element or image src */
  avatar?: React.ReactNode;
  /** Trailing metadata, price, or custom badge */
  trailing?: React.ReactNode;
  /** Optional badge text or badge element */
  badge?: React.ReactNode;
  /** Disabled item state */
  disabled?: boolean;
  /** Controlled selected state (overrides context if passed) */
  selected?: boolean;
}

export interface RadioGroupProps {
  /** Form name for radio inputs */
  name?: string;
  /** Controlled selected value */
  value?: string;
  /** Default selected value */
  defaultValue?: string;
  /** Selection change callback */
  onChange?: (value: string) => void;
  /** Size for child radio controls */
  size?: RadioSize;
  /** Disables the whole group */
  disabled?: boolean;
  /** Group label / legend */
  label?: React.ReactNode;
  /** Group supporting description */
  supportingText?: React.ReactNode;
  /** Layout orientation */
  orientation?: "vertical" | "horizontal";
  /** Error message */
  error?: string;
  /** Container class name */
  className?: string;
  /** Children items */
  children?: React.ReactNode;
}

