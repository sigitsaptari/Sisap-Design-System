import type * as React from "react";

export type CheckboxSize = "sm" | "md";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "onChange" | "checked"> {
  /** Size variant corresponding to Figma (sm: 16px box, md: 20px box) */
  size?: CheckboxSize;
  /** Controlled checked state, boolean or "indeterminate" */
  checked?: boolean | "indeterminate";
  /** Default checked state for uncontrolled usage */
  defaultChecked?: boolean;
  /** Change event handler */
  onChange?: (checked: boolean) => void;
  /** Primary label text */
  label?: React.ReactNode;
  /** Optional secondary supporting text */
  supportingText?: React.ReactNode;
  /** Displays error border and message */
  error?: boolean | string;
  /** Disables the checkbox */
  disabled?: boolean;
  /** Required field indicator */
  required?: boolean;
  /** Custom class for the outermost container */
  containerClassName?: string;
}

export interface CheckboxGroupProps {
  /** Name attribute applied to all child checkboxes */
  name?: string;
  /** Controlled array of selected values */
  value?: string[];
  /** Default selected values for uncontrolled usage */
  defaultValue?: string[];
  /** Change event handler returning new array of selected values */
  onChange?: (value: string[]) => void;
  /** Layout orientation */
  orientation?: "vertical" | "horizontal";
  /** Size applied to child checkboxes */
  size?: CheckboxSize;
  /** Disables all child checkboxes */
  disabled?: boolean;
  /** Group legend / label */
  label?: React.ReactNode;
  /** Supporting text for the whole group */
  supportingText?: React.ReactNode;
  /** Error message */
  error?: string;
  /** Container class */
  className?: string;
  /** Children elements */
  children?: React.ReactNode;
}
