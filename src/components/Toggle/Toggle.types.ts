import type * as React from "react";

export type ToggleSize = "sm" | "md";
export type ToggleType = "default" | "slim";

export interface ToggleProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  /** Size variant (sm: 36x20, md: 44x24) */
  size?: ToggleSize;
  /** Visual type (default: inset knob, slim: overlapping knob) */
  variantType?: ToggleType;
  /** Controlled pressed state */
  pressed?: boolean;
  /** Default pressed state for uncontrolled usage */
  defaultPressed?: boolean;
  /** Change callback */
  onPressedChange?: (pressed: boolean) => void;
  /** Primary label text */
  label?: React.ReactNode;
  /** Secondary supporting description */
  supportingText?: React.ReactNode;
  /** Disables the toggle */
  disabled?: boolean;
  /** Container class */
  containerClassName?: string;
}
