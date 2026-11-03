import type * as React from "react";

export type TextEditorSize = "sm" | "md";
export type TextEditorToolbarType = "simple" | "advanced";

export interface TextEditorButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon name from Icon component or custom ReactNode */
  icon: React.ReactNode;
  /** Active / selected state (Figma State=Current) */
  active?: boolean;
  /** Accessible label / tooltip description */
  tooltip?: string;
  /** Size */
  size?: TextEditorSize;
}

export interface TextEditorToolbarProps {
  /** Toolbar visual layout: "simple" (264px) or "advanced" (654px with heading dropdown) */
  type?: TextEditorToolbarType;
  /** Size variant */
  size?: TextEditorSize;
  /** Currently active formatting tags (e.g. ['bold', 'italic']) */
  activeFormats?: string[];
  /** Callback when formatting button is toggled */
  onFormatChange?: (format: string) => void;
  /** Callback for AI generation trigger */
  onGenerateClick?: () => void;
  /** Selected block format (e.g. 'paragraph', 'h1', 'h2') */
  blockType?: string;
  /** Callback when block format changes */
  onBlockTypeChange?: (blockType: string) => void;
  /** Additional custom class */
  className?: string;
}

export interface TextEditorProps {
  /** Editor size */
  size?: TextEditorSize;
  /** Toolbar type */
  toolbarType?: TextEditorToolbarType;
  /** Floating toolbar mode instead of top fixed toolbar */
  floatingToolbar?: boolean;
  /** Label for the editor field */
  label?: React.ReactNode;
  /** Value of the editor */
  value?: string;
  /** Default value */
  defaultValue?: string;
  /** Change callback */
  onChange?: (value: string) => void;
  /** Placeholder when empty */
  placeholder?: string;
  /** Secondary hint text displayed at bottom */
  hintText?: React.ReactNode;
  /** Maximum character limit (displays counter) */
  maxLength?: number;
  /** Disables editing */
  disabled?: boolean;
  /** Error state message */
  error?: string;
  /** Container class name */
  className?: string;
  /** Content area class name */
  contentClassName?: string;
}
