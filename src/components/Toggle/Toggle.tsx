import * as React from "react";
import { cn } from "../../utils/cn";
import { toggleTrackVariants, toggleKnobVariants } from "./Toggle.variants";
import type { ToggleProps } from "./Toggle.types";

/**
 * SisapDS Toggle (Switch) Component
 * Corresponds to Figma Toggle (1102:4208) & _Toggle base (122:3294)
 */
export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      id: customId,
      size = "sm",
      variantType = "default",
      pressed: controlledPressed,
      defaultPressed = false,
      onPressedChange,
      label,
      supportingText,
      disabled = false,
      containerClassName,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const id = customId || generatedId;

    const isControlled = controlledPressed !== undefined;
    const [internalPressed, setInternalPressed] = React.useState(defaultPressed);
    const isPressed = isControlled ? controlledPressed : internalPressed;

    const [isFocused, setIsFocused] = React.useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      onClick?.(e);
      const next = !isPressed;
      if (!isControlled) {
        setInternalPressed(next);
      }
      onPressedChange?.(next);
    };

    const toggleButton = (
      <button
        ref={ref}
        id={id}
        type="button"
        role="switch"
        aria-checked={isPressed}
        disabled={disabled}
        onClick={handleClick}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          toggleTrackVariants({
            variantType,
            size,
            pressed: isPressed,
            focused: isFocused,
            disabled,
          }),
          className
        )}
        {...props}
      >
        <span
          className={cn(
            toggleKnobVariants({
              variantType,
              size,
              pressed: isPressed,
            })
          )}
          aria-hidden="true"
        />
      </button>
    );

    if (!label && !supportingText) {
      return toggleButton;
    }

    return (
      <label
        htmlFor={id}
        className={cn(
          "group flex items-start select-none cursor-pointer transition-colors duration-150",
          size === "sm" ? "gap-2" : "gap-3",
          disabled && "opacity-50 pointer-events-none cursor-not-allowed",
          containerClassName
        )}
      >
        <div className="pt-0.5 inline-flex items-center justify-center shrink-0">
          {toggleButton}
        </div>

        <div className="flex flex-col min-w-0">
          {label && (
            <span
              className={cn(
                "font-medium text-text-secondary group-hover:text-text-primary transition-colors",
                size === "sm" ? "text-sm leading-sm" : "text-md leading-md"
              )}
            >
              {label}
            </span>
          )}
          {supportingText && (
            <span
              className={cn(
                "font-normal text-text-tertiary transition-colors mt-0.5",
                size === "sm" ? "text-sm leading-sm" : "text-md leading-md"
              )}
            >
              {supportingText}
            </span>
          )}
        </div>
      </label>
    );
  }
);

Toggle.displayName = "Toggle";

