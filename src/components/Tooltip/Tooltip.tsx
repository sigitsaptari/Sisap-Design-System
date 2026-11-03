import * as React from "react";
import { cn } from "../../utils/cn";
import { Icon } from "../Icon";
import { tooltipBubbleVariants } from "./Tooltip.variants";
import type {
  TooltipProps,
  TooltipContentProps,
  TooltipArrowPosition,
  HelpIconProps,
} from "./Tooltip.types";

/**
 * Exact Figma Tooltip Arrow (16x6px rounded triangle)
 */
function TooltipArrow({ position }: { position: TooltipArrowPosition }) {
  if (position === "none") return null;

  const isTop = position.startsWith("top");
  const isBottom = position.startsWith("bottom");
  const isLeft = position === "left";
  const isRight = position === "right";

  return (
    <div
      className={cn(
        "absolute text-bg-primary-solid pointer-events-none flex items-center justify-center",
        isBottom && "top-full left-1/2 -translate-x-1/2 -mt-0.5",
        position === "bottom-left" && "top-full left-4 -mt-0.5",
        position === "bottom-right" && "top-full right-4 -mt-0.5",
        isTop && "bottom-full left-1/2 -translate-x-1/2 -mb-0.5 rotate-180",
        position === "top-left" && "bottom-full left-4 -mb-0.5 rotate-180",
        position === "top-right" && "bottom-full right-4 -mb-0.5 rotate-180",
        isLeft && "right-full top-1/2 -translate-y-1/2 -mr-1.5 rotate-90",
        isRight && "left-full top-1/2 -translate-y-1/2 -ml-1.5 -rotate-90"
      )}
      aria-hidden="true"
    >
      <svg
        width="16"
        height="8"
        viewBox="0 0 16 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M14.0711 5.94361e-05C14.962 5.94361e-05 15.4081 1.0772 14.7782 1.70717L8.70711 7.77824C8.31658 8.16877 7.68342 8.16877 7.29289 7.77824L1.22183 1.70717C0.591867 1.0772 1.03803 5.98575e-05 1.92894 5.98575e-05L14.0711 5.94361e-05Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

/**
 * SisapDS TooltipContent Component
 * Standalone presentation bubble matching Figma Tooltip (1052:489)
 */
export const TooltipContent: React.FC<TooltipContentProps> = ({
  title,
  supportingText,
  arrow = "bottom-center",
  className,
  ...props
}) => {
  const hasSupportingText = Boolean(supportingText);

  return (
    <div
      role="tooltip"
      className={cn(tooltipBubbleVariants({ hasSupportingText }), className)}
      {...props}
    >
      <div className="text-xs font-semibold leading-xs text-text-white tracking-normal">
        {title}
      </div>
      {supportingText && (
        <div className="text-xs font-normal leading-xs text-semantic-color-components-tooltips-tooltip-supporting-text tracking-normal">
          {supportingText}
        </div>
      )}
      <TooltipArrow position={arrow} />
    </div>
  );
};

TooltipContent.displayName = "TooltipContent";

/**
 * SisapDS Tooltip Wrapper Component
 * Automatically displays Tooltip on hover & focus of children
 */
export const Tooltip: React.FC<TooltipProps> = ({
  title,
  supportingText,
  arrow = "bottom-center",
  delayMs = 150,
  className,
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const timeoutRef = React.useRef<number | null>(null);

  const handleOpen = () => {
    timeoutRef.current = window.setTimeout(() => setIsOpen(true), delayMs);
  };

  const handleClose = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(false);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const getPositionClass = () => {
    switch (arrow) {
      case "bottom-center":
        return "bottom-full left-1/2 -translate-x-1/2 mb-2";
      case "bottom-left":
        return "bottom-full left-0 mb-2";
      case "bottom-right":
        return "bottom-full right-0 mb-2";
      case "top-center":
        return "top-full left-1/2 -translate-x-1/2 mt-2";
      case "top-left":
        return "top-full left-0 mt-2";
      case "top-right":
        return "top-full right-0 mt-2";
      case "left":
        return "left-full top-1/2 -translate-y-1/2 ml-2";
      case "right":
        return "right-full top-1/2 -translate-y-1/2 mr-2";
      default:
        return "bottom-full left-1/2 -translate-x-1/2 mb-2";
    }
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      onFocus={handleOpen}
      onBlur={handleClose}
    >
      {children}
      {isOpen && (
        <div
          className={cn(
            "absolute z-50 animate-in fade-in-0 duration-150",
            getPositionClass(),
            className
          )}
        >
          <TooltipContent
            title={title}
            supportingText={supportingText}
            arrow={arrow}
          />
        </div>
      )}
    </div>
  );
};

Tooltip.displayName = "Tooltip";

/**
 * SisapDS HelpIcon Component
 * Matching Figma Help icon (1054:13)
 */
export const HelpIcon = React.forwardRef<HTMLButtonElement, HelpIconProps>(
  (
    {
      tooltipTitle,
      tooltipSupportingText,
      arrow = "bottom-center",
      size = 16,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Tooltip
        title={tooltipTitle}
        supportingText={tooltipSupportingText}
        arrow={arrow}
      >
        <button
          ref={ref}
          type="button"
          aria-label={typeof tooltipTitle === "string" ? tooltipTitle : "Help info"}
          className={cn(
            "inline-flex items-center justify-center text-text-quaternary hover:text-text-secondary transition-colors focus-visible:outline-none rounded-full cursor-help",
            className
          )}
          {...props}
        >
          <Icon name="HelpCircle" size={size} />
        </button>
      </Tooltip>
    );
  }
);

HelpIcon.displayName = "HelpIcon";
