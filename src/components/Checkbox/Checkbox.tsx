import * as React from "react";
import { cn } from "../../utils/cn";
import {
  checkboxContainerVariants,
  checkboxBoxVariants,
  checkboxLabelVariants,
  checkboxSupportingTextVariants,
} from "./Checkbox.variants";
import type { CheckboxProps, CheckboxGroupProps, CheckboxSize } from "./Checkbox.types";

/**
 * Context for CheckboxGroup coordination
 */
interface CheckboxGroupContextValue {
  name?: string;
  size?: CheckboxSize;
  disabled?: boolean;
  value?: string[];
  onChange?: (val: string, checked: boolean) => void;
}

const CheckboxGroupContext = React.createContext<CheckboxGroupContextValue | null>(null);

/**
 * Exact Figma checkmark vector (sm: 16x16, md: 20x20)
 */
function CheckIcon({ size }: { size: CheckboxSize }) {
  if (size === "md") {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <path
          d="M14.6667 6.5L8.25001 12.9167L5.33334 10"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <path
        d="M12 5L6.5 10.5L4 8"
        strokeWidth="1.6666"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </svg>
  );
}

/**
 * Exact Figma indeterminate minus vector (sm: 16x16, md: 20x20)
 */
function MinusIcon({ size }: { size: CheckboxSize }) {
  if (size === "md") {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <path
          d="M5.91666 10H14.0833"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <path
        d="M4.5 8H11.5"
        strokeWidth="1.66666"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </svg>
  );
}

/**
 * SisapDS Checkbox Component
 * Corresponds to Figma Checkbox (1097:63652) & _Checkbox base (1097:63886)
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
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

    const group = React.useContext(CheckboxGroupContext);

    const size = customSize || group?.size || "sm";
    const name = customName || group?.name;
    const disabled = Boolean(customDisabled ?? group?.disabled);

    // Group-managed checked state if value matches group.value
    const isGroupChecked =
      group?.value && typeof value === "string" ? group.value.includes(value) : undefined;

    const isControlled = controlledChecked !== undefined || isGroupChecked !== undefined;
    const initialChecked = isGroupChecked ?? controlledChecked ?? defaultChecked;

    const [internalChecked, setInternalChecked] = React.useState<boolean | "indeterminate">(
      initialChecked
    );

    const currentChecked = isControlled
      ? (isGroupChecked ?? controlledChecked ?? false)
      : internalChecked;

    const isChecked = currentChecked === true;
    const isIndeterminate = currentChecked === "indeterminate";

    const [isFocused, setIsFocused] = React.useState(false);

    const inputRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => inputRef.current!);

    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = isIndeterminate;
      }
    }, [isIndeterminate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      const next = e.target.checked;
      if (!isControlled) {
        setInternalChecked(next);
      }
      onChange?.(next);
      if (group && typeof value === "string") {
        group.onChange?.(value, next);
      }
    };

    const isError = Boolean(error);
    const resolvedState = isError
      ? "error"
      : isIndeterminate
      ? "indeterminate"
      : isChecked
      ? "checked"
      : "unchecked";

    return (
      <label
        htmlFor={id}
        className={cn(
          checkboxContainerVariants({ size, disabled }),
          containerClassName
        )}
      >
        {/* Hidden Native Checkbox for 100% Screen Reader & Keyboard Access */}
        <input
          ref={inputRef}
          id={id}
          name={name}
          type="checkbox"
          value={value}
          checked={isChecked}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="sr-only peer"
          aria-checked={isIndeterminate ? "mixed" : isChecked}
          aria-invalid={isError ? "true" : undefined}
          {...props}
        />

        {/* Visual Box Frame (with paddingTop: 2px aligning with typography as in Figma) */}
        <div className="pt-0.5 inline-flex items-center justify-center shrink-0">
          <div
            className={cn(
              checkboxBoxVariants({
                size,
                state: resolvedState,
                focused: isFocused,
              }),
              className
            )}
            aria-hidden="true"
          >
            {isIndeterminate ? (
              <MinusIcon size={size} />
            ) : isChecked ? (
              <CheckIcon size={size} />
            ) : null}
          </div>
        </div>

        {/* Text and Supporting Text Column */}
        {(label || supportingText) && (
          <div className="flex flex-col min-w-0">
            {label && (
              <span className={checkboxLabelVariants({ size, error: isError })}>
                {label}
                {required && (
                  <span className="text-text-error-primary ml-1" title="Required">
                    *
                  </span>
                )}
              </span>
            )}
            {supportingText && (
              <span className={checkboxSupportingTextVariants({ size, error: isError })}>
                {supportingText}
              </span>
            )}
          </div>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

/**
 * SisapDS CheckboxGroup Component
 * Manages multiple checkboxes with accessible fieldset/legend semantics
 */
export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  name,
  value: controlledValue,
  defaultValue = [],
  onChange,
  orientation = "vertical",
  size = "sm",
  disabled = false,
  label,
  supportingText,
  error,
  className,
  children,
}) => {
  const [internalValue, setInternalValue] = React.useState<string[]>(defaultValue);
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const handleItemChange = React.useCallback(
    (itemValue: string, isChecked: boolean) => {
      const next = isChecked
        ? [...currentValue, itemValue]
        : currentValue.filter((v) => v !== itemValue);

      if (!isControlled) {
        setInternalValue(next);
      }
      onChange?.(next);
    },
    [currentValue, isControlled, onChange]
  );

  const contextValue = React.useMemo<CheckboxGroupContextValue>(
    () => ({
      name,
      size,
      disabled,
      value: currentValue,
      onChange: handleItemChange,
    }),
    [name, size, disabled, currentValue, handleItemChange]
  );

  return (
    <fieldset
      className={cn("flex flex-col gap-2 border-0 p-0 m-0", className)}
      disabled={disabled}
      aria-invalid={Boolean(error) ? "true" : undefined}
    >
      {label && (
        <legend className="text-sm font-semibold text-text-primary mb-1">
          {label}
        </legend>
      )}
      {supportingText && (
        <p className="text-xs text-text-tertiary mb-2 -mt-1">{supportingText}</p>
      )}

      <CheckboxGroupContext.Provider value={contextValue}>
        <div
          className={cn(
            "flex",
            orientation === "vertical" ? "flex-col gap-3" : "flex-row flex-wrap gap-4"
          )}
        >
          {children}
        </div>
      </CheckboxGroupContext.Provider>

      {error && (
        <p className="text-xs text-text-error-primary mt-1 font-medium">{error}</p>
      )}
    </fieldset>
  );
};

CheckboxGroup.displayName = "CheckboxGroup";
