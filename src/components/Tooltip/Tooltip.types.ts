import type * as React from "react";

export type TooltipArrowPosition =
  | "none"
  | "top-center"
  | "top-left"
  | "top-right"
  | "bottom-center"
  | "bottom-left"
  | "bottom-right"
  | "left"
  | "right";

export interface TooltipProps {
  /** Tooltip title / main text */
  title: React.ReactNode;
  /** Optional secondary supporting explanation */
  supportingText?: React.ReactNode;
  /** Arrow placement relative to tooltip bubble */
  arrow?: TooltipArrowPosition;
  /** Trigger element that opens the tooltip on hover / focus */
  children: React.ReactNode;
  /** Additional class name for tooltip container */
  className?: string;
  /** Delay before opening in milliseconds (default 200) */
  delayMs?: number;
}

export interface TooltipContentProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** Title text */
  title: React.ReactNode;
  /** Supporting text */
  supportingText?: React.ReactNode;
  /** Arrow placement */
  arrow?: TooltipArrowPosition;
}

export interface HelpIconProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "title"> {
  /** Tooltip title text */
  tooltipTitle: React.ReactNode;
  /** Optional tooltip supporting text */
  tooltipSupportingText?: React.ReactNode;
  /** Arrow position */
  arrow?: TooltipArrowPosition;
  /** Size in pixels (default 16) */
  size?: number;
}
