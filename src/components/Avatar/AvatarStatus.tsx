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
      fillRule="nonzero"
      clipRule="evenodd"
      d="M9.91068 1.42318C10.1917 1.70456 10.573 1.86283 10.9707 1.86318L12.3647 1.86318C13.1603 1.86318 13.8647 2.56755 13.8647 3.36318L13.8647 4.75618C13.8647 5.15418 14.0227 5.53618 14.3047 5.81718L15.2887 6.80218C15.8647 7.37818 15.8647 8.34818 15.2887 8.92418L14.3037 9.90918C14.0223 10.1902 13.864 10.5715 13.8637 10.9692L13.8637 12.3632C13.8637 13.1588 13.1593 13.8632 12.3637 13.8632L10.9707 13.8632C10.573 13.8635 10.1917 14.0218 9.91068 14.3032L8.92468 15.2882C8.34868 15.8642 7.42068 15.8642 6.84468 15.2882L5.81868 14.3022C5.53765 14.0208 5.15637 13.8625 4.75868 13.8622L3.36468 13.8622C2.56905 13.8622 1.86468 13.1578 1.86468 12.3622L1.86468 10.9702C1.86433 10.5725 1.70606 10.1912 1.42468 9.91018L0.43968 8.92318C-0.13632 8.34718 -0.13632 7.37718 0.43968 6.80118L1.42468 5.81618C1.70582 5.53539 1.86406 5.15452 1.86468 4.75718L1.86468 3.36318C1.86468 2.56755 2.56905 1.86318 3.36468 1.86318L4.75768 1.86318C5.15537 1.86283 5.53665 1.70456 5.81768 1.42318L6.80468 0.43918C7.38068 -0.13682 8.34868 -0.13682 8.92568 0.43918L9.91068 1.42318Z"
      fill="#3B82F6"
    />
    {/* White checkmark path */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.88326 1.1534C7.09702 0.817637 6.99612 0.37042 6.65326 0.117401C6.3104 -0.135617 5.82738 -0.0152433 5.61726 0.347401L2.68026 4.9624L1.33626 3.2824C1.08775 2.97177 0.63851 2.92135 0.281761 3.1649C-0.0749876 3.40845 -0.10842 3.88214 0.164261 4.2194L2.16426 6.7194C2.33595 6.93401 2.60747 7.03759 2.88326 6.99507C3.15906 6.95255 3.38531 6.7717 3.48326 6.5134L6.88326 1.1534Z"
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
