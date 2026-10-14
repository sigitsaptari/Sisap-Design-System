import * as React from "react";
import { cn } from "../../utils/cn";
import { Icon } from "../Icon";
import { avatarVariants, getAvatarIconSize } from "./Avatar.variants";
import { AvatarStatus } from "./AvatarStatus";
import type { AvatarProps, AvatarStatusType } from "./Avatar.types";

/**
 * SisapDS Avatar Component
 * Matching Figma `Avatar` (11008:45389)
 *
 * Supports:
 * - 6 Sizes: `xs` (24px), `sm` (32px), `md` (40px), `lg` (48px), `xl` (56px), `2xl` (64px)
 * - 3 Content types: Image, Initials/Text, Icon Placeholder (User01)
 * - 5 Status indicators: `online`, `offline`, `verified`, `count`, `avatar`
 * - Outer border/ring for contrast and overlap in groups
 */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt = "Avatar",
      initials,
      text,
      icon,
      size = "md",
      border = false,
      status,
      statusCount,
      statusAvatar,
      statusAriaLabel,
      imgProps,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = React.useState(false);
    const displayText = initials || text;
    const iconSize = getAvatarIconSize(size);

    // Normalize boolean status: true -> "online"
    const resolvedStatus: AvatarStatusType | null =
      status === true ? "online" : typeof status === "string" ? status : null;

    const renderContent = () => {
      // 1. Explicit children override
      if (children) {
        return children;
      }

      // 2. Image avatar
      if (src && !imageError) {
        return (
          <img
            src={src}
            alt={alt}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover rounded-full"
            {...imgProps}
          />
        );
      }

      // 3. Initials / Text Placeholder
      if (displayText) {
        return (
          <span className="select-none font-semibold uppercase tracking-wider">
            {displayText}
          </span>
        );
      }

      // 4. Icon Placeholder (defaults to User01)
      if (icon) {
        return icon;
      }

      return (
        <Icon
          name="User01"
          size={iconSize}
          className="text-neutral-500 shrink-0"
        />
      );
    };

    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ size, border }), className)}
        {...props}
      >
        {renderContent()}

        {resolvedStatus && (
          <AvatarStatus
            status={resolvedStatus}
            size={size}
            count={statusCount}
            statusAvatar={statusAvatar}
            aria-label={statusAriaLabel}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";
