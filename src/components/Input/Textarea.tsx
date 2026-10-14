import * as React from "react";
import { cn } from "../../utils/cn";
import { Icon } from "../Icon";
import { inputContainerVariants, textareaBoxVariants } from "./Input.variants";
import type { TextareaProps } from "./Input.types";

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
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
      disabled = false,
      containerClassName,
      className,
      rows = 4,
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

        {/* Native Textarea Element */}
        <textarea
          ref={ref}
          id={id}
          name={name}
          disabled={disabled}
          rows={rows}
          aria-invalid={isError ? "true" : undefined}
          aria-describedby={displayHint ? hintId : undefined}
          className={cn(
            textareaBoxVariants({ size, state }),
            "resize-y placeholder:text-neutral-400 disabled:placeholder:text-neutral-300",
            className
          )}
          {...props}
        />

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

Textarea.displayName = "Textarea";
