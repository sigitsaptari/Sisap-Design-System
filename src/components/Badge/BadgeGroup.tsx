import * as React from "react";
import { cn } from "../../utils/cn";
import { Badge } from "./Badge";
import {
  badgeGroupVariants,
  normalizeBadgeColor,
  normalizeBadgeType,
} from "./Badge.variants";
import type { BadgeGroupProps } from "./Badge.types";

/**
 * SisapDS Badge Group Component
 * Matching Figma `Badge group` (1046:8088)
 *
 * Typically used for announcement headers, product updates, and featured banners:
 * [Badge: "New feature"] [Message: "We've just released a new dashboard"] [→]
 */
export const BadgeGroup = React.forwardRef<
  HTMLDivElement,
  BadgeGroupProps
>(
  (
    {
      badge,
      badgePosition = "leading",
      size = "md",
      type = "pill-color",
      color = "brand",
      actionText,
      trailingIcon,
      showTrailingArrow = true,
      href,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const colorKey = normalizeBadgeColor(color);
    const normalizedType = normalizeBadgeType(type);

    const innerBadgeSize = size === "md" ? "sm" : "md";

    const renderInnerBadge = () => {
      if (!badge) return null;
      if (typeof badge === "string") {
        return (
          <Badge
            size={innerBadgeSize}
            color={colorKey as any}
            type={normalizedType === "badge-modern" ? "badge-modern" : "pill-color"}
          >
            {badge}
          </Badge>
        );
      }
      return badge;
    };

    const renderTrailingArrow = () => {
      if (!showTrailingArrow) return null;
      if (trailingIcon) return trailingIcon;

      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 transition-transform duration-150 group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          <path
            d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33333M12.6667 8L8.00001 12.6667"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    };

    const content = (
      <>
        {badgePosition === "leading" && renderInnerBadge()}
        {(actionText || children) && (
          <span className="truncate">{actionText || children}</span>
        )}
        {badgePosition === "trailing" && renderInnerBadge()}
        {badgePosition === "leading" && renderTrailingArrow()}
      </>
    );

    const containerClasses = cn(
      badgeGroupVariants({
        size,
        type: normalizedType === "badge-modern" ? "badge-modern" : "pill-color",
        color: colorKey as any,
        className,
      })
    );

    if (href) {
      return (
        <a
          href={href}
          className={containerClasses}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <div ref={ref} className={containerClasses} {...props}>
        {content}
      </div>
    );
  }
);

BadgeGroup.displayName = "BadgeGroup";
