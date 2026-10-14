import * as React from "react";
import { cn } from "../../utils/cn";
import { Avatar } from "./Avatar";
import { getAvatarLabelGroupTypography } from "./Avatar.variants";
import type { AvatarLabelGroupProps } from "./Avatar.types";

/**
 * SisapDS AvatarLabelGroup Component
 * Matching Figma `Avatar label group` (82:2793)
 *
 * Typically used for user profiles, comment headers, author cards, and dropdown items:
 * [Avatar: 40px] [Title: "Olivia Rhye"]
 *                [Supporting: "olivia@untitledui.com"]
 */
export const AvatarLabelGroup = React.forwardRef<
  HTMLDivElement,
  AvatarLabelGroupProps
>(
  (
    {
      avatar,
      src,
      initials,
      title,
      supportingText,
      subtitle,
      size = "md",
      href,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { avatarSize, titleClass, subtitleClass } =
      getAvatarLabelGroupTypography(size);

    const renderedSubtitle = supportingText || subtitle;

    const renderAvatar = () => {
      if (avatar) return avatar;
      return <Avatar size={avatarSize} src={src} initials={initials} />;
    };

    const content = (
      <>
        {renderAvatar()}
        <div className="flex flex-col min-w-0 justify-center">
          {title && <span className={cn("truncate", titleClass)}>{title}</span>}
          {renderedSubtitle && (
            <span className={cn("truncate", subtitleClass)}>
              {renderedSubtitle}
            </span>
          )}
          {children}
        </div>
      </>
    );

    const containerClasses = cn(
      "inline-flex items-center gap-2 select-none group text-left",
      href && "hover:opacity-90 transition-opacity cursor-pointer",
      className
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

AvatarLabelGroup.displayName = "AvatarLabelGroup";
