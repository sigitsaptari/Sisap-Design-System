import type { InputHTMLAttributes, TextareaHTMLAttributes, ReactNode } from "react";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> {
  /**
   * Field label displayed above the input
   */
  label?: string;
  /**
   * Shows a red asterisk beside the label indicating the field is required
   * @default false
   */
  required?: boolean;
  /**
   * Tooltip message or flag to show a help icon beside the label
   */
  helpTooltip?: string;
  /**
   * Supporting message shown below the input
   */
  hintText?: string;
  /**
   * Error message. Setting this turns the input into the destructive error state.
   */
  error?: string | boolean;
  /**
   * Forces destructive error styling
   * @default false
   */
  destructive?: boolean;
  /**
   * Size scale of the input
   * @default "md"
   */
  size?: InputSize;
  /**
   * Icon or element displayed inside the left edge of the input
   */
  leadingIcon?: ReactNode;
  /**
   * Icon or element displayed inside the right edge of the input
   */
  trailingIcon?: ReactNode;
  /**
   * Static prefix text (e.g. "https://", "+62", "USD")
   */
  leadingText?: string;
  /**
   * Static suffix text (e.g. ".com", "kg", "/mo")
   */
  trailingText?: string;
  /**
   * Button or action rendered inside the trailing side of the input
   */
  trailingButton?: ReactNode;
  /**
   * Wrapper container className
   */
  containerClassName?: string;
  className?: string;
}

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  label?: string;
  required?: boolean;
  helpTooltip?: string;
  hintText?: string;
  error?: string | boolean;
  destructive?: boolean;
  size?: "sm" | "md";
  containerClassName?: string;
  className?: string;
}

export interface VerificationCodeInputProps {
  label?: string;
  hintText?: string;
  error?: string | boolean;
  digits?: 4 | 6;
  size?: InputSize;
  value?: string;
  defaultValue?: string;
  onChange?: (code: string) => void;
  onComplete?: (code: string) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  containerClassName?: string;
  className?: string;
}
