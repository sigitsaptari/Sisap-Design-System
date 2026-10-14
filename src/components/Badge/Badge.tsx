import * as React from "react";
import { cn } from "../../utils/cn";
import {
  badgeVariants,
  badgeCloseXVariants,
  badgeDotColors,
  normalizeBadgeColor,
  normalizeBadgeType,
} from "./Badge.variants";
import type { BadgeProps, BadgeCloseXProps } from "./Badge.types";

/**
 * SisapDS Dismissible Close Button for Badges
 * Matching Figma `_Badge close X` (4824:404158)
 */
export const BadgeCloseX = React.forwardRef<HTMLButtonElement, BadgeCloseXProps>(
  (
    {
      type = "square",
      color = "brand",
      size = "md",
      className,
      "aria-label": ariaLabel = "Dismiss",
      ...props
    },
    ref
  ) => {
    const colorKey = normalizeBadgeColor(color) as NonNullable<
      Parameters<typeof badgeCloseXVariants>[0]
    >["color"];

    return (
      <button
        ref={ref}
        type="button"
        aria-label={ariaLabel}
        className={cn(
          badgeCloseXVariants({
            type,
            size,
            color: colorKey,
            className,
          })
        )}
        {...props}
      >
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 pointer-events-none"
          aria-hidden="true"
        >
          <path
            d="M7 1L1 7M1 1L7 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  }
);

BadgeCloseX.displayName = "BadgeCloseX";

/**
 * SisapDS Badge Component
 * Matching Figma `Badge` (1046:3819)
 *
 * Supports:
 * - 3 Sizes: `sm` (22px), `md` (24px), `lg` (28px)
 * - 3 Types: `pill-color`, `badge-color`, `badge-modern`
 * - 12 Color themes
 * - Dot status indicator, Country flag, Avatar, Leading/Trailing Icons, Dismiss Close X, Icon-only
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      size = "md",
      type = "pill-color",
      color = "brand",
      dot = false,
      country,
      avatar,
      iconLeading,
      leftIcon,
      iconTrailing,
      rightIcon,
      onClose,
      closeAriaLabel = "Dismiss badge",
      iconOnly = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const normalizedType = normalizeBadgeType(type);
    const colorKey = normalizeBadgeColor(color);

    const leading = iconLeading || leftIcon;
    const trailing = iconTrailing || rightIcon;

    // Dot element rendering
    const renderDot = () => {
      if (!dot) return null;
      if (typeof dot === "boolean") {
        return (
          <span
            className={cn(
              "w-1.5 h-1.5 rounded-full shrink-0",
              badgeDotColors[colorKey] ?? "bg-current"
            )}
            aria-hidden="true"
          />
        );
      }
      return <span className="inline-flex shrink-0">{dot}</span>;
    };

    // Country flag rendering (Figma: 16x16 circular element)
    const renderCountry = () => {
      if (!country) return null;
      return (
        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full overflow-hidden shrink-0 -ml-0.5">
          {country}
        </span>
      );
    };

    // User Avatar rendering (Figma: 16x16 circular avatar)
    const renderAvatar = () => {
      if (!avatar) return null;
      return (
        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full overflow-hidden shrink-0 -ml-0.5">
          {typeof avatar === "string" ? (
            <img
              src={avatar}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            avatar
          )}
        </span>
      );
    };

    // Close button dismiss button
    const renderCloseX = () => {
      if (!onClose) return null;
      return (
        <BadgeCloseX
          type={normalizedType === "pill-color" ? "rounded" : "square"}
          color={colorKey as any}
          size={size}
          onClick={onClose}
          aria-label={closeAriaLabel}
          className="-mr-0.5"
        />
      );
    };

    return (
      <span
        ref={ref}
        className={cn(
          badgeVariants({
            type: normalizedType,
            size,
            color: colorKey as any,
            iconOnly,
            className,
          })
        )}
        {...props}
      >
        {renderDot()}
        {renderCountry()}
        {renderAvatar()}
        {leading && (
          <span className="inline-flex items-center justify-center shrink-0 [&>svg]:w-3 [&>svg]:h-3">
            {leading}
          </span>
        )}
        {children && <span>{children}</span>}
        {trailing && (
          <span className="inline-flex items-center justify-center shrink-0 [&>svg]:w-3 [&>svg]:h-3">
            {trailing}
          </span>
        )}
        {renderCloseX()}
      </span>
    );
  }
);

Badge.displayName = "Badge";
