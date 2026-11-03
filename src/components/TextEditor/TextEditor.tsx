import * as React from "react";
import { cn } from "../../utils/cn";
import { Icon } from "../Icon";
import { Tooltip } from "../Tooltip";
import {
  textEditorContainerVariants,
  textEditorBoxVariants,
  textEditorButtonVariants,
} from "./TextEditor.variants";
import type {
  TextEditorProps,
  TextEditorToolbarProps,
  TextEditorButtonProps,
} from "./TextEditor.types";

/**
 * SisapDS TextEditorButton
 * Formatting icon button matching Figma _Text editor icon (9291:551743)
 */
export const TextEditorButton = React.forwardRef<HTMLButtonElement, TextEditorButtonProps>(
  ({ icon, active = false, tooltip, size = "sm", className, ...props }, ref) => {
    const button = (
      <button
        ref={ref}
        type="button"
        aria-pressed={active}
        aria-label={tooltip}
        className={cn(textEditorButtonVariants({ size, active }), className)}
        {...props}
      >
        {icon}
      </button>
    );

    if (tooltip) {
      return (
        <Tooltip title={tooltip} arrow="bottom-center" delayMs={300}>
          {button}
        </Tooltip>
      );
    }

    return button;
  }
);

TextEditorButton.displayName = "TextEditorButton";

/**
 * SisapDS TextEditorToolbar
 * Formatting bar matching Figma Text editor toolbar (9291:557668)
 */
export const TextEditorToolbar: React.FC<TextEditorToolbarProps> = ({
  type = "advanced",
  size = "md",
  activeFormats = [],
  onFormatChange,
  onGenerateClick,
  blockType = "paragraph",
  onBlockTypeChange,
  className,
}) => {
  const isFormatActive = (format: string) => activeFormats.includes(format);
  const iconSize = size === "md" ? 18 : 16;

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-1 p-2 border-b border-border-secondary bg-bg-primary select-none",
        className
      )}
      role="toolbar"
      aria-label="Text formatting options"
    >
      {/* Advanced Block Selector (Paragraph / Headings) */}
      {type === "advanced" && (
        <div className="flex items-center pr-2 border-r border-border-secondary mr-1">
          <select
            value={blockType}
            onChange={(e) => onBlockTypeChange?.(e.target.value)}
            className="text-xs font-semibold text-text-secondary bg-transparent py-1 px-2 rounded-xs border border-transparent hover:border-border-secondary focus:border-border-brand focus-visible:outline-none cursor-pointer"
            aria-label="Text block style"
          >
            <option value="paragraph">Paragraph</option>
            <option value="h1">Heading 1</option>
            <option value="h2">Heading 2</option>
            <option value="h3">Heading 3</option>
            <option value="quote">Blockquote</option>
            <option value="code">Code Block</option>
          </select>
        </div>
      )}

      {/* Primary Formatting: Bold, Italic, Underline */}
      <div className="flex items-center gap-0.5">
        <TextEditorButton
          size={size}
          active={isFormatActive("bold")}
          onClick={() => onFormatChange?.("bold")}
          tooltip="Bold (Ctrl+B)"
          icon={<Icon name="Bold01" size={iconSize} />}
        />
        <TextEditorButton
          size={size}
          active={isFormatActive("italic")}
          onClick={() => onFormatChange?.("italic")}
          tooltip="Italic (Ctrl+I)"
          icon={<Icon name="Italic01" size={iconSize} />}
        />
        <TextEditorButton
          size={size}
          active={isFormatActive("underline")}
          onClick={() => onFormatChange?.("underline")}
          tooltip="Underline (Ctrl+U)"
          icon={<Icon name="Underline01" size={iconSize} />}
        />
      </div>

      <div className="h-4 w-px bg-border-secondary mx-1" aria-hidden="true" />

      {/* Alignment & Lists */}
      <div className="flex items-center gap-0.5">
        <TextEditorButton
          size={size}
          active={isFormatActive("align-left")}
          onClick={() => onFormatChange?.("align-left")}
          tooltip="Left Align"
          icon={<Icon name="AlignLeft" size={iconSize} />}
        />
        <TextEditorButton
          size={size}
          active={isFormatActive("align-center")}
          onClick={() => onFormatChange?.("align-center")}
          tooltip="Center Align"
          icon={<Icon name="AlignCenter" size={iconSize} />}
        />
        <TextEditorButton
          size={size}
          active={isFormatActive("bullet-list")}
          onClick={() => onFormatChange?.("bullet-list")}
          tooltip="Bullet List"
          icon={<Icon name="List" size={iconSize} />}
        />
      </div>

      <div className="h-4 w-px bg-border-secondary mx-1" aria-hidden="true" />

      {/* Insert Links, Code, & Media */}
      <div className="flex items-center gap-0.5">
        <TextEditorButton
          size={size}
          active={isFormatActive("link")}
          onClick={() => onFormatChange?.("link")}
          tooltip="Insert Link"
          icon={<Icon name="Link01" size={iconSize} />}
        />
        <TextEditorButton
          size={size}
          active={isFormatActive("code")}
          onClick={() => onFormatChange?.("code")}
          tooltip="Inline Code"
          icon={<Icon name="Code01" size={iconSize} />}
        />
        {type === "advanced" && (
          <>
            <TextEditorButton
              size={size}
              active={isFormatActive("image")}
              onClick={() => onFormatChange?.("image")}
              tooltip="Insert Image"
              icon={<Icon name="Image01" size={iconSize} />}
            />
            <TextEditorButton
              size={size}
              active={isFormatActive("attachment")}
              onClick={() => onFormatChange?.("attachment")}
              tooltip="Attach File"
              icon={<Icon name="Paperclip" size={iconSize} />}
            />
          </>
        )}
      </div>

      {/* AI Generate Button with Sparkle Icon */}
      {onGenerateClick && (
        <div className="ml-auto pl-2">
          <TextEditorButton
            size={size}
            onClick={onGenerateClick}
            tooltip="AI Generate & Summarize"
            className="text-text-brand-secondary hover:text-text-brand-primary"
            icon={<Icon name="Stars01" size={iconSize} />}
          />
        </div>
      )}
    </div>
  );
};

TextEditorToolbar.displayName = "TextEditorToolbar";

/**
 * SisapDS TextEditorTooltip (Floating Selection Toolbar)
 * Matching Figma Text editor tooltip (9291:557669)
 */
export const TextEditorTooltip: React.FC<{
  activeFormats?: string[];
  onFormatChange?: (format: string) => void;
  className?: string;
}> = ({ activeFormats = [], onFormatChange, className }) => {
  return (
    <div
      role="toolbar"
      aria-label="Floating formatting options"
      className={cn(
        "inline-flex items-center gap-0.5 p-1 rounded-xl bg-bg-primary-solid text-text-white shadow-xl select-none z-50",
        className
      )}
    >
      <TextEditorButton
        size="sm"
        active={activeFormats.includes("bold")}
        onClick={() => onFormatChange?.("bold")}
        tooltip="Bold"
        className="text-text-white hover:bg-neutral-800"
        icon={<Icon name="Bold01" size={16} />}
      />
      <TextEditorButton
        size="sm"
        active={activeFormats.includes("italic")}
        onClick={() => onFormatChange?.("italic")}
        tooltip="Italic"
        className="text-text-white hover:bg-neutral-800"
        icon={<Icon name="Italic01" size={16} />}
      />
      <TextEditorButton
        size="sm"
        active={activeFormats.includes("underline")}
        onClick={() => onFormatChange?.("underline")}
        tooltip="Underline"
        className="text-text-white hover:bg-neutral-800"
        icon={<Icon name="Underline01" size={16} />}
      />
      <TextEditorButton
        size="sm"
        active={activeFormats.includes("link")}
        onClick={() => onFormatChange?.("link")}
        tooltip="Link"
        className="text-text-white hover:bg-neutral-800"
        icon={<Icon name="Link01" size={16} />}
      />
    </div>
  );
};

TextEditorTooltip.displayName = "TextEditorTooltip";

/**
 * SisapDS TextEditor Component
 * Matching Figma Text editor (9292:559325)
 */
export const TextEditor = React.forwardRef<HTMLTextAreaElement, TextEditorProps>(
  (
    {
      size = "md",
      toolbarType = "advanced",
      floatingToolbar = false,
      label,
      value: controlledValue,
      defaultValue = "",
      onChange,
      placeholder = "Start typing your content, or press '/' for commands...",
      hintText,
      maxLength,
      disabled = false,
      error,
      className,
      contentClassName,
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const isControlled = controlledValue !== undefined;
    const content = isControlled ? controlledValue : internalValue;

    const [activeFormats, setActiveFormats] = React.useState<string[]>(["bold"]);
    const [blockType, setBlockType] = React.useState("paragraph");

    const handleFormatToggle = (format: string) => {
      setActiveFormats((prev) =>
        prev.includes(format) ? prev.filter((f) => f !== format) : [...prev, format]
      );
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const next = e.target.value;
      if (!isControlled) {
        setInternalValue(next);
      }
      onChange?.(next);
    };

    const charCount = content.length;
    const isError = Boolean(error);

    return (
      <div className={cn(textEditorContainerVariants({ size }), className)}>
        {/* Label */}
        {label && (
          <label className="text-sm font-semibold text-text-primary select-none">
            {label}
          </label>
        )}

        {/* Editor Box */}
        <div
          className={cn(
            textEditorBoxVariants({ hasError: isError, disabled }),
            contentClassName
          )}
        >
          {/* Top Fixed Toolbar */}
          {!floatingToolbar && (
            <TextEditorToolbar
              type={toolbarType}
              size={size}
              activeFormats={activeFormats}
              onFormatChange={handleFormatToggle}
              blockType={blockType}
              onBlockTypeChange={setBlockType}
              onGenerateClick={() => alert("AI generation assistant invoked!")}
            />
          )}

          {/* Text Area Canvas */}
          <div className="relative p-4 flex-1 flex flex-col min-h-56">
            <textarea
              ref={ref}
              value={content}
              disabled={disabled}
              placeholder={placeholder}
              maxLength={maxLength}
              onChange={handleTextChange}
              rows={8}
              className="w-full flex-1 resize-none bg-transparent text-text-primary placeholder:text-text-placeholder text-sm md:text-md leading-relaxed focus:outline-none"
            />
          </div>

          {/* Bottom Status / Hint Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-t border-border-secondary bg-bg-secondary/40 text-xs text-text-tertiary select-none">
            <div>{hintText || "Markdown syntax supported."}</div>
            <div className="font-mono">
              {maxLength ? `${charCount} / ${maxLength}` : `${charCount} chars`}
            </div>
          </div>
        </div>

        {/* Validation Error Message */}
        {error && (
          <p className="text-xs font-medium text-text-error-primary mt-0.5">
            {error}
          </p>
        )}
      </div>
    );
  }
);

TextEditor.displayName = "TextEditor";
