import * as React from "react";
import { cn } from "../../utils/cn";
import { Icon } from "../Icon";
import { Avatar } from "./Avatar";
import {
  avatarGroupVariants,
  getAvatarAddButtonSize,
} from "./Avatar.variants";
import type { AvatarGroupProps } from "./Avatar.types";

/**
 * SisapDS AvatarGroup Component
 * Matching Figma `Avatar group` (1274:812)
 *
 * Supports:
 * - 3 Sizes: `xs` (24px, -space-x-1), `sm` (32px, -space-x-2), `md` (40px, -space-x-3)
 * - Automatic truncation with overflow count indicator (`+N`)
 * - Optional `_Avatar add button` to invite/add team members
 */
export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      size = "md",
      max = 5,
      total,
      showAddButton = false,
      onAdd,
      addAriaLabel = "Add user",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const rawChildren = React.Children.toArray(children);
    const childCount = rawChildren.length;

    const visibleChildren = max ? rawChildren.slice(0, max) : rawChildren;
    const computedExcess =
      typeof total === "number" ? total - max : childCount - max;
    const hasExcess = computedExcess > 0;

    const { buttonClass, iconSize } = getAvatarAddButtonSize(size);
    const shouldShowAdd = showAddButton || Boolean(onAdd);

    return (
      <div
        ref={ref}
        className={cn("inline-flex items-center gap-2", className)}
        {...props}
      >
        <div className={cn(avatarGroupVariants({ size }))}>
          {visibleChildren.map((child, index) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child as React.ReactElement<any>, {
                key: index,
                size: (child.props as any).size || size,
                border: true,
              });
            }
            return child;
          })}

          {hasExcess && (
            <Avatar
              size={size}
              border
              initials={`+${computedExcess}`}
              className="bg-neutral-100 text-neutral-700 font-semibold"
              aria-label={`${computedExcess} more users`}
            />
          )}
        </div>

        {shouldShowAdd && (
          <button
            type="button"
            onClick={onAdd}
            aria-label={addAriaLabel}
            className={cn(
              "inline-flex items-center justify-center rounded-full border border-dashed border-neutral-300 bg-white text-neutral-500 transition-colors duration-150 hover:bg-neutral-50 hover:border-neutral-400 hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2",
              buttonClass
            )}
          >
            <Icon name="Plus" size={iconSize} />
          </button>
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = "AvatarGroup";
