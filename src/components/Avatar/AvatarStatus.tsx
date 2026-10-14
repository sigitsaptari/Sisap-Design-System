import * as React from "react";
import { cn } from "../../utils/cn";
import { avatarStatusVariants } from "./Avatar.variants";
import type { AvatarStatusProps } from "./Avatar.types";

/**
 * Official Verified Tick SVG path matching Figma Node 11008:44995
 */
const VerifiedTickSvg: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("w-full h-full shrink-0 select-none", className)}
    aria-hidden="true"
  >
    {/* Blue background shield/badge */}
    <path
      d="M12.3555 2.83363C12.5075 3.20115 12.7992 3.49327 13.1665 3.64579L14.4544 4.17925C14.8219 4.33149 15.1139 4.6235 15.2662 4.99104C15.4184 5.35858 15.4184 5.77155 15.2662 6.13909L14.7331 7.42606C14.5808 7.79376 14.5806 8.20715 14.7336 8.57467L15.2657 9.86125C15.3412 10.0433 15.38 10.2384 15.3801 10.4355C15.3801 10.6325 15.3413 10.8277 15.2659 11.0097C15.1905 11.1918 15.0799 11.3572 14.9406 11.4966C14.8012 11.6359 14.6357 11.7464 14.4537 11.8217L13.1667 12.3548C12.7992 12.5068 12.5071 12.7985 12.3545 13.1657L11.8211 14.4536C11.6688 14.8212 11.3768 15.1132 11.0093 15.2654C10.6417 15.4177 10.2288 15.4177 9.86124 15.2654L8.57427 14.7323C8.20672 14.5805 7.79391 14.5808 7.42658 14.7332L6.13869 15.2659C5.77136 15.4178 5.35875 15.4177 4.99151 15.2655C4.62426 15.1134 4.33241 14.8218 4.18007 14.4546L3.64645 13.1663C3.49449 12.7988 3.2028 12.5067 2.83552 12.3542L1.54763 11.8207C1.18025 11.6686 0.888324 11.3767 0.736026 11.0094C0.583729 10.6421 0.583522 10.2293 0.735452 9.86181L1.26853 8.57484C1.4204 8.20729 1.42009 7.79447 1.26767 7.42715L0.735355 6.13834C0.659883 5.9563 0.621022 5.76117 0.62099 5.56411C0.620959 5.36704 0.659758 5.1719 0.735171 4.98984C0.810584 4.80778 0.921132 4.64236 1.0605 4.50304C1.19987 4.36371 1.36532 4.25322 1.54741 4.17786L2.83437 3.64479C3.20157 3.49296 3.49352 3.20164 3.64614 2.83478L4.1796 1.54689C4.33184 1.17935 4.62386 0.887337 4.9914 0.735096C5.35894 0.582855 5.77191 0.582855 6.13945 0.735096L7.42641 1.26817C7.79396 1.42004 8.20678 1.41973 8.5741 1.26731L9.86253 0.735923C10.23 0.583767 10.6429 0.583799 11.0104 0.736009C11.3778 0.88822 11.6698 1.18015 11.8221 1.54759L12.3557 2.83587L12.3555 2.83363Z"
      fill="#3B82F6"
    />
    {/* White checkmark path */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.1333 5.90291C11.2401 5.73503 11.276 5.53157 11.2328 5.33728C11.1897 5.14299 11.0711 4.9738 10.9033 4.86691C10.7354 4.76003 10.5319 4.72422 10.3376 4.76735C10.1433 4.81048 9.97414 4.92903 9.86726 5.09691L6.93026 9.71191L5.58626 8.03191C5.46201 7.8765 5.2811 7.7768 5.08335 7.75477C4.88559 7.73273 4.68718 7.79016 4.53176 7.91441C4.37634 8.03867 4.27665 8.21957 4.25462 8.41733C4.23258 8.61508 4.29001 8.8135 4.41426 8.96891L6.41426 11.4689C6.4888 11.5622 6.58453 11.6363 6.6935 11.6852C6.80246 11.734 6.92152 11.7561 7.04075 11.7497C7.15998 11.7432 7.27595 11.7084 7.37901 11.6481C7.48207 11.5877 7.56923 11.5037 7.63326 11.4029L11.1333 5.90291Z"
      fill="white"
    />
  </svg>
);

/**
 * AvatarStatus indicator component matching Figma `Status icon` (11008:45024)
 */
export const AvatarStatus: React.FC<AvatarStatusProps> = ({
  status,
  size = "md",
  count = 1,
  statusAvatar,
  className,
  ...props
}) => {
  const containerClasses = cn(avatarStatusVariants({ size }), className);

  switch (status) {
    case "online":
      return (
        <span
          className={cn(
            containerClasses,
            "bg-[#16A34A] ring-[1.5px] ring-white rounded-full shadow-xs"
          )}
          aria-label="Online"
          {...props}
        />
      );

    case "offline":
      return (
        <span
          className={cn(
            containerClasses,
            "bg-[#D4D4D4] ring-[1.5px] ring-white rounded-full shadow-xs"
          )}
          aria-label="Offline"
          {...props}
        />
      );

    case "verified":
      return (
        <span
          className={cn(
            containerClasses,
            "ring-[1.5px] ring-white rounded-full shadow-xs overflow-hidden bg-white"
          )}
          aria-label="Verified user"
          {...props}
        >
          <VerifiedTickSvg />
        </span>
      );

    case "count":
      return (
        <span
          className={cn(
            containerClasses,
            "bg-[#EF4444] ring-[1.5px] ring-white text-white font-bold rounded-full leading-none text-[9px] shadow-xs px-0.5 min-w-[14px]"
          )}
          aria-label={`Unread count: ${count}`}
          {...props}
        >
          {count}
        </span>
      );

    case "avatar":
      return (
        <span
          className={cn(
            containerClasses,
            "rounded-full ring-[1.5px] ring-white overflow-hidden shadow-xs bg-neutral-100"
          )}
          aria-label="Secondary avatar"
          {...props}
        >
          {typeof statusAvatar === "string" ? (
            <img
              src={statusAvatar}
              alt=""
              className="w-full h-full object-cover"
            />
          ) : (
            statusAvatar
          )}
        </span>
      );

    default:
      return null;
  }
};
