import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils/cn";
import {
  buttonVariants,
  buttonCloseXVariants,
  buttonUtilityVariants,
} from "./Button.variants";
import type {
  ButtonProps,
  ButtonCloseXProps,
  ButtonUtilityProps,
  ButtonHierarchy,
} from "./Button.types";

export { buttonVariants, buttonCloseXVariants, buttonUtilityVariants };

/**
 * Loading Spinner matching Figma node 8993:429278 (Buttons/Button loading icon)
 */
function ButtonSpinner({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("animate-spin shrink-0", className)}
      aria-hidden="true"
    >
      <path
        opacity="0.3"
        d="M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4441 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47176 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4441C1.23279 12.3522 1 11.1819 1 10C1 8.8181 1.23279 7.64778 1.68509 6.55585C2.13738 5.46392 2.80031 4.47176 3.63604 3.63604C4.47177 2.80031 5.46392 2.13737 6.55585 1.68508C7.64778 1.23279 8.81811 0.999999 10 1C11.1819 1 12.3522 1.23279 13.4442 1.68509C14.5361 2.13738 15.5282 2.80031 16.364 3.63604C17.1997 4.47177 17.8626 5.46392 18.3149 6.55585C18.7672 7.64778 19 8.81811 19 10L19 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 1C11.1819 1 12.3522 1.23279 13.4442 1.68508C14.5361 2.13738 15.5282 2.80031 16.364 3.63604C17.1997 4.47177 17.8626 5.46392 18.3149 6.55585C18.7672 7.64778 19 8.8181 19 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function resolveVariant(
  variant: ButtonHierarchy = "primary",
  destructive = false
): NonNullable<Parameters<typeof buttonVariants>[0]>["variant"] {
  if (destructive) {
    if (variant === "secondary") return "destructive-secondary";
    if (variant === "tertiary") return "destructive-tertiary";
    if (variant === "link" || variant === "link-color" || variant === "link-gray") {
      return "destructive-link";
    }
    return "destructive-primary";
  }

  if (variant === "danger") return "destructive-primary";
  if (variant === "link") return "link-color";
  return variant as NonNullable<Parameters<typeof buttonVariants>[0]>["variant"];
}

interface RippleItem {
  id: number;
  x: number;
  y: number;
  size: number;
}

/**
 * SisapDS Primary Button Component
 * Corresponds to Figma Buttons/Button (3287:427074) & Buttons/Button destructive (6218:85578)
 * Includes interactive click wave ripple animation (tiket.com style) & press scale feedback
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      destructive = false,
      iconOnly = false,
      asChild = false,
      isLoading = false,
      loadingText,
      leftIcon,
      rightIcon,
      disableRipple = false,
      children,
      disabled,
      onPointerDown,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const resolved = resolveVariant(variant, destructive);

    const [ripples, setRipples] = React.useState<RippleItem[]>([]);

    const isLink =
      resolved === "link-color" ||
      resolved === "link-gray" ||
      resolved === "destructive-link";

    const rippleColor = React.useMemo(() => {
      if (resolved === "primary" || resolved === "destructive-primary") {
        return "bg-white/35";
      }
      if (resolved?.startsWith("destructive")) {
        return "bg-red-500/25";
      }
      return "bg-[#7F56D9]/20";
    }, [resolved]);

    const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
      onPointerDown?.(e);

      if (disabled || isLoading || disableRipple || asChild || isLink) {
        return;
      }

      const rect = e.currentTarget.getBoundingClientRect();
      const diameter = Math.max(rect.width, rect.height) * 2.5;
      const x = e.clientX - rect.left - diameter / 2;
      const y = e.clientY - rect.top - diameter / 2;

      const newRipple: RippleItem = {
        id: Date.now() + Math.random(),
        x,
        y,
        size: diameter,
      };

      setRipples((prev) => [...prev, newRipple]);
    };

    const handleRippleAnimationEnd = (id: number) => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    };

    return (
      <Comp
        ref={ref}
        onPointerDown={handlePointerDown}
        className={cn(
          buttonVariants({
            variant: resolved,
            size,
            iconOnly,
            className,
          })
        )}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {/* Click Wave Ripple Layer (tiket.com style) */}
        {!isLink && !asChild && ripples.length > 0 && (
          <span
            className="absolute inset-0 overflow-hidden pointer-events-none rounded-[inherit]"
            aria-hidden="true"
          >
            {ripples.map((ripple) => (
              <span
                key={ripple.id}
                onAnimationEnd={() => handleRippleAnimationEnd(ripple.id)}
                className={cn(
                  "absolute rounded-full pointer-events-none animate-ds-ripple",
                  rippleColor
                )}
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  width: ripple.size,
                  height: ripple.size,
                }}
              />
            ))}
          </span>
        )}

        {isLoading ? (
          <>
            <ButtonSpinner className="[&_svg]:h-auto [&_svg]:w-auto" />
            {loadingText ? (
              <span>{loadingText}</span>
            ) : iconOnly ? null : (
              <span>{children}</span>
            )}
          </>
        ) : (
          <>
            {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
            {children && <span>{children}</span>}
            {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

/**
 * SisapDS Close Button Component
 * Corresponds to Figma Buttons/Button close X (2763:420129)
 */
export const ButtonCloseX = React.forwardRef<HTMLButtonElement, ButtonCloseXProps>(
  ({ className, size = "md", darkBg = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        aria-label="Close"
        className={cn(buttonCloseXVariants({ size, darkBg, className }))}
        {...props}
      >
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          <path
            d="M28 16L16 28M16 16L28 28"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  }
);

ButtonCloseX.displayName = "ButtonCloseX";

/**
 * SisapDS Utility Button Component
 * Corresponds to Figma Buttons/Button utility (8003:526508)
 */
export const ButtonUtility = React.forwardRef<HTMLButtonElement, ButtonUtilityProps>(
  ({ className, size = "xs", variant = "secondary", icon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(buttonUtilityVariants({ size, variant, className }))}
        {...props}
      >
        {icon || children}
      </button>
    );
  }
);

ButtonUtility.displayName = "ButtonUtility";
