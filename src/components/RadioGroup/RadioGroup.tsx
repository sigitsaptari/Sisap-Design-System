import * as React from "react";
import { cn } from "../../utils/cn";
import { radioCircleVariants, radioItemCardVariants } from "./RadioGroup.variants";
import type {
  RadioProps,
  RadioGroupItemProps,
  RadioGroupProps,
  RadioSize,
} from "./RadioGroup.types";

interface RadioGroupContextValue {
  name?: string;
  size?: RadioSize;
  disabled?: boolean;
  value?: string;
  onChange?: (val: string) => void;
}

const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(null);

/**
 * Solid inner circle dot for Radio (sm: 6x6, md: 8x8)
 */
function RadioDot({ size }: { size: RadioSize }) {
  const dotClass = size === "md" ? "h-2 w-2" : "h-1.5 w-1.5";
  return <span className={cn("rounded-full bg-color-base-white shrink-0", dotClass)} />;
}

/**
 * SisapDS Radio Component
 * Corresponds to Figma _Checkbox base (Type=Radio) (1100:569) & Checkbox (Type=Radio)
 */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      id: customId,
      name: customName,
      size: customSize,
      checked: controlledChecked,
      defaultChecked = false,
      onChange,
      label,
      supportingText,
      error = false,
      disabled: customDisabled,
      required = false,
      containerClassName,
      className,
      value,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const id = customId || generatedId;

    const group = React.useContext(RadioGroupContext);
    const size = customSize || group?.size || "sm";
    const name = customName || group?.name;
    const disabled = Boolean(customDisabled ?? group?.disabled);

    const isGroupSelected =
      group?.value !== undefined && typeof value === "string"
        ? group.value === value
        : undefined;

    const isControlled = controlledChecked !== undefined || isGroupSelected !== undefined;
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked);

    const isChecked = isControlled
      ? (isGroupSelected ?? controlledChecked ?? false)
      : internalChecked;

    const [isFocused, setIsFocused] = React.useState(false);

    const handleChange = () => {
      if (disabled) return;
      if (!isControlled) {
        setInternalChecked(true);
      }
      onChange?.(true);
      if (group && typeof value === "string") {
        group.onChange?.(value);
      }
    };

    const isError = Boolean(error);
    const resolvedState = isError ? "error" : isChecked ? "checked" : "unchecked";

    return (
      <label
        htmlFor={id}
        className={cn(
          "group relative flex items-start select-none cursor-pointer transition-colors duration-150",
          size === "sm" ? "gap-2" : "gap-3",
          disabled && "opacity-50 pointer-events-none cursor-not-allowed",
          containerClassName
        )}
      >
        <input
          ref={ref}
          id={id}
          name={name}
          type="radio"
          value={value}
          checked={isChecked}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="sr-only peer"
          aria-checked={isChecked}
          {...props}
        />

        {/* Outer Radio Frame (aligns with first line of text via paddingTop: 2px) */}
        <div className="pt-0.5 inline-flex items-center justify-center shrink-0">
          <div
            className={cn(
              radioCircleVariants({
                size,
                state: resolvedState,
                focused: isFocused,
              }),
              className
            )}
            aria-hidden="true"
          >
            {isChecked && <RadioDot size={size} />}
          </div>
        </div>

        {/* Text and Supporting Text Column */}
        {(label || supportingText) && (
          <div className="flex flex-col min-w-0">
            {label && (
              <span
                className={cn(
                  "font-medium text-text-secondary group-hover:text-text-primary transition-colors",
                  size === "sm" ? "text-sm leading-sm" : "text-md leading-md",
                  isError && "text-text-error-primary"
                )}
              >
                {label}
                {required && (
                  <span className="text-text-error-primary ml-1" title="Required">
                    *
                  </span>
                )}
              </span>
            )}
            {supportingText && (
              <span
                className={cn(
                  "font-normal text-text-tertiary transition-colors mt-0.5",
                  size === "sm" ? "text-sm leading-sm" : "text-md leading-md",
                  isError && "text-text-error-primary"
                )}
              >
                {supportingText}
              </span>
            )}
          </div>
        )}
      </label>
    );
  }
);

Radio.displayName = "Radio";

/**
 * SisapDS RadioGroupItem Component
 * Matching Figma Radio group item (124:2838) with support for icons, avatars, payment cards
 */
export const RadioGroupItem = React.forwardRef<HTMLDivElement, RadioGroupItemProps>(
  (
    {
      value,
      type = "radio",
      size: customSize,
      label,
      supportingText,
      icon,
      avatar,
      trailing,
      badge,
      disabled: customDisabled,
      selected: customSelected,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const group = React.useContext(RadioGroupContext);
    const size = customSize || group?.size || "sm";
    const disabled = Boolean(customDisabled ?? group?.disabled);

    const isSelected =
      customSelected !== undefined
        ? customSelected
        : group?.value !== undefined
        ? group.value === value
        : false;

    const [isFocused, setIsFocused] = React.useState(false);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return;
      onClick?.(e);
      group?.onChange?.(value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (disabled) return;
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        group?.onChange?.(value);
      }
    };

    return (
      <div
        ref={ref}
        role="radio"
        aria-checked={isSelected}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : isSelected ? 0 : -1}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          radioItemCardVariants({
            type,
            selected: isSelected,
            focused: isFocused,
            disabled,
          }),
          className
        )}
        {...props}
      >
        {/* Leading Media: Icon or Avatar */}
        {type === "icon-simple" && icon && (
          <div className="shrink-0 text-text-brand-secondary pt-0.5">
            {icon}
          </div>
        )}

        {type === "icon-card" && icon && (
          <div className="shrink-0 h-10 w-10 rounded-lg bg-bg-secondary border border-border-secondary flex items-center justify-center text-text-brand-secondary">
            {icon}
          </div>
        )}

        {type === "avatar" && avatar && (
          <div className="shrink-0 pt-0.5">{avatar}</div>
        )}

        {type === "payment" && icon && (
          <div className="shrink-0 pt-0.5">{icon}</div>
        )}

        {/* Content Column */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "font-semibold text-text-primary",
                size === "sm" ? "text-sm leading-sm" : "text-md leading-md"
              )}
            >
              {label}
            </span>
            {badge && <span className="inline-flex shrink-0">{badge}</span>}
          </div>
          {supportingText && (
            <p
              className={cn(
                "text-text-tertiary mt-0.5 font-normal",
                size === "sm" ? "text-sm leading-sm" : "text-md leading-md"
              )}
            >
              {supportingText}
            </p>
          )}
        </div>

        {/* Trailing element (Price or metadata) */}
        {trailing && (
          <div className="shrink-0 text-right text-sm font-semibold text-text-primary">
            {trailing}
          </div>
        )}

        {/* Radio Indicator on the right (or left for standard type="radio") */}
        <div className="shrink-0 pt-0.5">
          <div
            className={radioCircleVariants({
              size,
              state: isSelected ? "checked" : "unchecked",
            })}
            aria-hidden="true"
          >
            {isSelected && <RadioDot size={size} />}
          </div>
        </div>
      </div>
    );
  }
);

RadioGroupItem.displayName = "RadioGroupItem";

/**
 * SisapDS RadioGroup Component
 * Matching Figma Radio group (1142:87213) with full keyboard accessibility
 */
export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  value: controlledValue,
  defaultValue,
  onChange,
  size = "sm",
  disabled = false,
  label,
  supportingText,
  orientation = "vertical",
  error,
  className,
  children,
}) => {
  const [internalValue, setInternalValue] = React.useState<string | undefined>(defaultValue);
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const handleChange = React.useCallback(
    (newValue: string) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    },
    [isControlled, onChange]
  );

  const contextValue = React.useMemo<RadioGroupContextValue>(
    () => ({
      name,
      size,
      disabled,
      value: currentValue,
      onChange: handleChange,
    }),
    [name, size, disabled, currentValue, handleChange]
  );

  // Keyboard navigation for arrow keys across children in radiogroup
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    const items = Array.from(
      e.currentTarget.querySelectorAll<HTMLDivElement>('[role="radio"]:not([aria-disabled="true"])')
    );
    if (!items.length) return;

    const currentIndex = items.findIndex((item) => item.getAttribute("aria-checked") === "true");

    let nextIndex = currentIndex;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % items.length;
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      nextIndex = currentIndex === -1 ? items.length - 1 : (currentIndex - 1 + items.length) % items.length;
    }

    if (nextIndex !== currentIndex && items[nextIndex]) {
      const target = items[nextIndex];
      target?.focus();
      target?.click();
    }
  };

  return (
    <div
      role="radiogroup"
      onKeyDown={handleKeyDown}
      className={cn("flex flex-col gap-2", className)}
      aria-invalid={Boolean(error) ? "true" : undefined}
    >
      {label && (
        <label className="text-sm font-semibold text-text-primary mb-0.5">
          {label}
        </label>
      )}
      {supportingText && (
        <p className="text-xs text-text-tertiary -mt-1 mb-2">{supportingText}</p>
      )}

      <RadioGroupContext.Provider value={contextValue}>
        <div
          className={cn(
            "flex",
            orientation === "vertical" ? "flex-col gap-3" : "flex-row flex-wrap gap-4"
          )}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>

      {error && (
        <p className="text-xs text-text-error-primary mt-1 font-medium">{error}</p>
      )}
    </div>
  );
};

RadioGroup.displayName = "RadioGroup";
