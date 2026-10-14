import type { SVGProps } from "react";

export type SocialPlatform = "Facebook" | "Twitter" | "X (Twitter)" | "Instagram" | "LinkedIn" | "Google" | "YouTube" | "WhatsApp" | "Apple" | "Figma" | "TikTok" | "GitHub" | "Slack";

export interface SocialIconProps extends SVGProps<SVGSVGElement> {
  platform: SocialPlatform;
  size?: number | string;
  grayscale?: boolean;
  className?: string;
}
