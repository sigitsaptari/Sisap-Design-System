import type { SVGProps, ComponentType } from "react";
import * as RawIcons from "@untitledui/icons";

export type IconName = keyof typeof RawIcons;

export interface IconProps extends SVGProps<SVGSVGElement> {
  /**
   * Name of the Untitled UI icon from Figma (PascalCase, e.g. "ArrowRight", "Check", "Search")
   */
  name: IconName;
  /**
   * Size in pixels (default: 20)
   */
  size?: number | string;
  /**
   * Stroke width for the vector icon (default: 2)
   */
  strokeWidth?: number | string;
  /**
   * Color of the icon (default: "currentColor")
   */
  color?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
}

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;
