import * as React from "react";
import { cn } from "../../utils/cn";
import { Icon } from "../Icon";
import { inputContainerVariants, inputBoxVariants } from "./Input.variants";
import type { InputProps } from "./Input.types";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id: customId,
      name,
      label,
      required = false,
      helpTooltip,
      hintText,
      error,
      destructive = false,
      size = "md",
      type = "text",
      leadingIcon,
      trailingIcon,
      leadingText,
      trailingText,
      trailingButton,
      disabled = false,
      containerClassName,
      className,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const id = customId || generatedId;
    const hintId = `${id}-hint`;

    const isError = Boolean(error || destructive);
    const errorMessage = typeof error === "string" ? error : undefined;
    const displayHint = errorMessage || hintText;

    const [showPassword, setShowPassword] = React.useState(false);
    const isPassword = type === "password";
    const resolvedType = isPassword ? (showPassword ? "text" : "password") : type;

    const state = disabled ? "disabled" : isError ? "error" : "default";

    return (
      <div className={cn(inputContainerVariants({ size }), containerClassName)}>
        {/* Label Row */}
        {label && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <label
                htmlFor={id}
                className="text-sm font-medium leading-sm text-neutral-700 select-none cursor-pointer"
              >
                {label}
              </label>
              {required && (
                <span className="text-[#DC2626] text-sm font-semibold leading-sm" title="Required">
                  *
                </span>
              )}
              {helpTooltip && (
                <span
                  className="text-neutral-400 hover:text-neutral-600 transition-colors cursor-help inline-flex"
                  title={helpTooltip}
                >
                  <Icon name="HelpCircle" size={16} />
                </span>
              )}
            </div>
          </div>
        )}

        {/* Input Box Frame */}
        <div className={cn(inputBoxVariants({ size, state }), className)}>
          {/* Leading Text / Prefix */}
          {leadingText && (
            <span className="text-neutral-500 font-normal select-none pr-1 border-r border-neutral-200">
              {leadingText}
            </span>
          )}

          {/* Leading Icon */}
          {leadingIcon && (
            <span className="text-neutral-500 inline-flex shrink-0">
              {leadingIcon}
            </span>
          )}

          {/* Native HTML Input */}
          <input
            ref={ref}
            id={id}
            name={name}
            type={resolvedType}
            disabled={disabled}
            aria-invalid={isError ? "true" : undefined}
            aria-describedby={displayHint ? hintId : undefined}
            className="w-full h-full bg-transparent p-0 outline-none placeholder:text-neutral-400 text-inherit disabled:cursor-not-allowed disabled:placeholder:text-neutral-300 font-sans"
            {...props}
          />

          {/* Trailing Text / Suffix */}
          {trailingText && (
            <span className="text-neutral-500 font-normal select-none pl-1 border-l border-neutral-200">
              {trailingText}
            </span>
          )}

          {/* Password Show / Hide Toggle */}
          {isPassword && !disabled && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="text-neutral-400 hover:text-neutral-600 transition-colors inline-flex shrink-0 cursor-pointer p-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded"
            >
              <Icon name={showPassword ? "EyeOff" : "Eye"} size={18} />
            </button>
          )}

          {/* Trailing Icon (or Error Icon) */}
          {isError && !trailingIcon && !isPassword ? (
            <span className="text-[#DC2626] inline-flex shrink-0 animate-fade-in" aria-hidden="true">
              <Icon name="AlertCircle" size={18} />
            </span>
          ) : (
            trailingIcon && (
              <span className="text-neutral-400 inline-flex shrink-0">
                {trailingIcon}
              </span>
            )
          )}

          {/* Trailing Button */}
          {trailingButton && (
            <div className="shrink-0 -mr-1">{trailingButton}</div>
          )}
        </div>

        {/* Hint / Error Text */}
        {displayHint && (
          <p
            id={hintId}
            className={cn(
              size === "sm" ? "text-xs leading-xs" : "text-sm leading-sm",
              "mt-0.5 select-none",
              isError ? "text-[#DC2626] font-medium" : "text-neutral-500"
            )}
          >
            {displayHint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
