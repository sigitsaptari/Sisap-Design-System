import * as React from "react";
import * as RawIcons from "@untitledui/icons";
import { cn } from "../../utils/cn";
import type { IconProps } from "./Icon.types";

/**
 * SisapDS Icon component.
 * Renders any of the 1,180+ Figma Untitled UI icons with size, color, and className customization.
 *
 * @example
 * ```tsx
 * <Icon name="ArrowRight" size={20} className="text-violet-600" />
 * ```
 */
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  (
    {
      name,
      size = 20,
      strokeWidth = 2,
      color = "currentColor",
      className,
      ...props
    },
    ref
  ) => {
    const Component = RawIcons[name] as React.ComponentType<React.SVGProps<SVGSVGElement>> | undefined;

    if (!Component) {
      console.warn(`[SisapDS Icon] Icon with name "${name}" not found.`);
      return null;
    }

    return (
      <Component
        ref={ref}
        width={size}
        height={size}
        strokeWidth={strokeWidth}
        stroke={color}
        className={cn("inline-block shrink-0 select-none align-middle", className)}
        aria-hidden="true"
        {...props}
      />
    );
  }
);

Icon.displayName = "Icon";
