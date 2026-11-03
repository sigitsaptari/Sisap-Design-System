import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextEditor, TextEditorToolbar, TextEditorTooltip } from "./TextEditor";

const meta: Meta<typeof TextEditor> = {
  title: "Components/TextEditor",
  component: TextEditor,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Komponen TextEditor SisapDS dari Figma Text editors (node 9291:557994), mencakup toolbar pemformatan (Simple / Advanced), dukungan AI generator button, floating selection toolbar, penghitung karakter, dan hint status bar.",
      },
    },
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md"],
    },
    toolbarType: {
      control: "radio",
      options: ["simple", "advanced"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextEditor>;

export const Playground: Story = {
  args: {
    label: "Article Description & Summary",
    defaultValue:
      "We need another and a wiser concept of design systems. Connected directly to tokens, variables, and atomic principles, SisapDS delivers cohesive interfaces across both Light and Dark themes seamlessly.",
    hintText: "Supports standard markdown formatting and AI generation.",
    maxLength: 500,
    size: "md",
    toolbarType: "advanced",
  },
};

export const ToolbarVariations: Story = {
  render: () => {
    const [formats, setFormats] = React.useState<string[]>(["bold", "italic"]);

    const handleToggle = (format: string) => {
      setFormats((prev) =>
        prev.includes(format) ? prev.filter((f) => f !== format) : [...prev, format]
      );
    };

    return (
      <div className="space-y-8 font-sans max-w-3xl">
        <div className="p-4 rounded-xl border border-border-secondary bg-bg-primary space-y-3">
          <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">
            Advanced Toolbar (with Select menus & AI button)
          </h4>
          <TextEditorToolbar
            type="advanced"
            activeFormats={formats}
            onFormatChange={handleToggle}
            onGenerateClick={() => alert("AI generation invoked!")}
          />
        </div>

        <div className="p-4 rounded-xl border border-border-secondary bg-bg-primary space-y-3">
          <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">
            Simple Toolbar (Compact)
          </h4>
          <TextEditorToolbar
            type="simple"
            activeFormats={formats}
            onFormatChange={handleToggle}
          />
        </div>

        <div className="p-4 rounded-xl border border-border-secondary bg-bg-primary space-y-3">
          <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">
            Floating Selection Toolbar (Tooltip Style)
          </h4>
          <div className="p-4 flex items-center justify-center bg-bg-secondary rounded-lg">
            <TextEditorTooltip
              activeFormats={formats}
              onFormatChange={handleToggle}
            />
          </div>
        </div>
      </div>
    );
  },
};

export const SizesAndStates: Story = {
  render: () => (
    <div className="space-y-8 font-sans max-w-3xl">
      <div>
        <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">
          Small Size (Compact 512px)
        </h4>
        <TextEditor
          size="sm"
          toolbarType="simple"
          label="Quick Comment"
          placeholder="Leave a short comment or review notes..."
          maxLength={200}
        />
      </div>

      <div>
        <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">
          With Validation Error
        </h4>
        <TextEditor
          size="sm"
          label="Product Specification"
          defaultValue="Draft content..."
          error="The product specification must contain at least 150 words."
        />
      </div>

      <div>
        <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">
          Disabled State
        </h4>
        <TextEditor
          size="sm"
          disabled
          label="Archived Document"
          defaultValue="This document has been locked and archived."
        />
      </div>
    </div>
  ),
};
