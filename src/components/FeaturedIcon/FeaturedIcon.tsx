import * as React from "react";
import { cn } from "../../utils/cn";
import { featuredIconVariants } from "./FeaturedIcon.variants";
import type { FeaturedIconProps } from "./FeaturedIcon.types";

export { featuredIconVariants };

export const FeaturedIcon = React.forwardRef<HTMLDivElement, FeaturedIconProps>(
  ({ className, size, shape, variant, color, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(featuredIconVariants({ size, shape, variant, color, className }))}
        {...props}
      >
        {children}
      </div>
    );
  }
);

FeaturedIcon.displayName = "FeaturedIcon";
