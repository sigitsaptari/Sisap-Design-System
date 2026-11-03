import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxGroup } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Komponen Checkbox SisapDS dengan 2 ukuran (`sm`: 16px, `md`: 20px), state checked/unchecked/indeterminate, fokus ring 4px, label + supporting text, dan `CheckboxGroup` untuk manajemen pilihan jamak.",
      },
    },
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md"],
    },
    disabled: {
      control: "boolean",
    },
    error: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {
  args: {
    label: "Remember me",
    supportingText: "Save my login details for next time.",
    size: "sm",
    defaultChecked: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6 font-sans">
      <div>
        <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3">
          Small (16px box, 14px text)
        </h4>
        <Checkbox
          size="sm"
          defaultChecked
          label="Remember me"
          supportingText="Save my login details for next time."
        />
      </div>

      <div>
        <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3">
          Medium (20px box, 16px text)
        </h4>
        <Checkbox
          size="md"
          defaultChecked
          label="Remember me"
          supportingText="Save my login details for next time."
        />
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-8 font-sans">
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">
          Unchecked States
        </h4>
        <div className="flex flex-col gap-3">
          <Checkbox size="sm" label="Default Unchecked" />
          <Checkbox size="sm" label="Disabled Unchecked" disabled />
          <Checkbox size="sm" label="Error State" error="This field is required." />
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">
          Checked States
        </h4>
        <div className="flex flex-col gap-3">
          <Checkbox size="sm" defaultChecked label="Default Checked" />
          <Checkbox size="sm" defaultChecked label="Disabled Checked" disabled />
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">
          Indeterminate State
        </h4>
        <Checkbox
          size="sm"
          checked="indeterminate"
          label="Select all sub-items"
          supportingText="4 of 10 items selected"
        />
      </div>
    </div>
  ),
};

export const InteractiveGroup: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<string[]>(["design", "dev"]);

    return (
      <div className="max-w-md font-sans p-6 rounded-xl border border-border-secondary bg-bg-primary">
        <CheckboxGroup
          label="Notifications & Updates"
          supportingText="Choose which email updates you would like to receive."
          value={selected}
          onChange={setSelected}
        >
          <Checkbox
            value="design"
            label="Design System Updates"
            supportingText="New components, token releases, and Figma updates."
          />
          <Checkbox
            value="dev"
            label="Developer Changelog"
            supportingText="Weekly summary of pull requests and API deprecations."
          />
          <Checkbox
            value="security"
            label="Security Alerts"
            supportingText="Critical vulnerability notices and dependency alerts."
          />
          <Checkbox
            value="marketing"
            label="Marketing & Surveys"
            supportingText="Occasional surveys and product feedback requests."
            disabled
          />
        </CheckboxGroup>

        <div className="mt-6 pt-4 border-t border-border-secondary text-xs text-text-tertiary">
          Selected values: <span className="font-mono font-semibold text-text-primary">{JSON.stringify(selected)}</span>
        </div>
      </div>
    );
  },
};

