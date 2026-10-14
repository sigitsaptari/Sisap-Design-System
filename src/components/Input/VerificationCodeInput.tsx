import * as React from "react";
import { cn } from "../../utils/cn";
import type { VerificationCodeInputProps } from "./Input.types";

export const VerificationCodeInput = React.forwardRef<
  HTMLDivElement,
  VerificationCodeInputProps
>(
  (
    {
      label,
      hintText,
      error,
      digits = 4,
      size = "md",
      value: controlledValue,
      defaultValue = "",
      onChange,
      onComplete,
      disabled = false,
      autoFocus = false,
      containerClassName,
      className,
    },
    ref
  ) => {
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const currentValue = (isControlled ? controlledValue : internalValue).slice(
      0,
      digits
    );

    const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

    const isError = Boolean(error);
    const errorMessage = typeof error === "string" ? error : undefined;
    const displayHint = errorMessage || hintText;

    const sizeClasses = {
      sm: "h-14 w-12 text-xl",
      md: "h-16 w-14 text-2xl",
      lg: "h-20 w-16 text-3xl",
    }[size];

    const handleDigitChange = (index: number, val: string) => {
      // Clean to only alphanumeric / digits
      const sanitized = val.replace(/[^0-9a-zA-Z]/g, "");
      if (!sanitized && val.length > 0) return;

      const chars = currentValue.split("");
      // Take the last entered character if replacing
      chars[index] = sanitized.slice(-1) || "";
      const nextCode = chars.join("");

      if (!isControlled) setInternalValue(nextCode);
      onChange?.(nextCode);

      if (sanitized && index < digits - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      if (nextCode.length === digits) {
        onComplete?.(nextCode);
      }
    };

    const handleKeyDown = (
      index: number,
      e: React.KeyboardEvent<HTMLInputElement>
    ) => {
      if (e.key === "Backspace") {
        if (!currentValue[index] && index > 0) {
          inputRefs.current[index - 1]?.focus();
        }
      } else if (e.key === "ArrowLeft" && index > 0) {
        e.preventDefault();
        inputRefs.current[index - 1]?.focus();
      } else if (e.key === "ArrowRight" && index < digits - 1) {
        e.preventDefault();
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pasted = e.clipboardData
        .getData("text")
        .replace(/[^0-9a-zA-Z]/g, "")
        .slice(0, digits);

      if (!pasted) return;

      if (!isControlled) setInternalValue(pasted);
      onChange?.(pasted);

      // Focus last filled or next input
      const nextFocus = Math.min(pasted.length, digits - 1);
      inputRefs.current[nextFocus]?.focus();

      if (pasted.length === digits) {
        onComplete?.(pasted);
      }
    };

    return (
      <div
        ref={ref}
        className={cn("w-full flex flex-col gap-1.5 font-sans", containerClassName)}
      >
        {label && (
          <label className="text-sm font-medium leading-sm text-neutral-700 select-none">
            {label}
          </label>
        )}

        <div className={cn("flex items-center gap-2 sm:gap-3", className)}>
          {Array.from({ length: digits }).map((_, i) => {
            const char = currentValue[i] || "";
            return (
              <input
                key={i}
                ref={(el) => {
                  inputRefs.current[i] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={char}
                disabled={disabled}
                autoFocus={autoFocus && i === 0}
                onChange={(e) => handleDigitChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                onPaste={handlePaste}
                onFocus={(e) => e.target.select()}
                className={cn(
                  "font-semibold text-center rounded-md border bg-white shadow-xs transition-all outline-none",
                  sizeClasses,
                  isError
                    ? "border-[#FCA5A5] text-neutral-900 focus:border-[#DC2626] focus:ring-4 focus:ring-[#FDA29B]/25"
                    : "border-neutral-300 text-neutral-900 focus:border-[#9E77ED] focus:ring-4 focus:ring-[#9E77ED]/25",
                  disabled && "bg-neutral-50 border-neutral-200 text-neutral-400 cursor-not-allowed shadow-none"
                )}
                aria-label={`Digit ${i + 1} of ${digits}`}
              />
            );
          })}
        </div>

        {displayHint && (
          <p
            className={cn(
              "text-xs mt-0.5 select-none",
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

VerificationCodeInput.displayName = "VerificationCodeInput";
