import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Komponen Toggle (Switch) SisapDS dengan 2 jenis tampilan (`default` dan `slim`), 2 ukuran (`sm` dan `md`), fokus ring 4px, dan dukungan label serta teks pendukung.",
      },
    },
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md"],
    },
    variantType: {
      control: "radio",
      options: ["default", "slim"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Playground: Story = {
  args: {
    label: "Remember me",
    supportingText: "Save my login details for next time.",
    size: "sm",
    defaultPressed: true,
    variantType: "default",
  },
};

export const TypesAndSizes: Story = {
  render: () => (
    <div className="space-y-8 font-sans max-w-md">
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">
          Default Type (Inset Knob)
        </h4>
        <div className="flex flex-col gap-4">
          <Toggle
            size="sm"
            defaultPressed
            label="Small Default (36x20)"
            supportingText="Compact toggle for tables and dense forms."
          />
          <Toggle
            size="md"
            defaultPressed
            label="Medium Default (44x24)"
            supportingText="Standard toggle for settings and preferences."
          />
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-border-secondary">
        <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">
          Slim Type (Flush Track)
        </h4>
        <div className="flex flex-col gap-4">
          <Toggle
            variantType="slim"
            size="sm"
            defaultPressed
            label="Small Slim (32x16)"
            supportingText="Slim profile with overlapping knob."
          />
          <Toggle
            variantType="slim"
            size="md"
            defaultPressed
            label="Medium Slim (40x20)"
            supportingText="Modern slim toggle."
          />
        </div>
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-6 font-sans max-w-md">
      <div className="flex flex-col gap-4">
        <Toggle label="Active / Pressed" defaultPressed />
        <Toggle label="Inactive / Unpressed" defaultPressed={false} />
        <Toggle label="Disabled Pressed" defaultPressed disabled />
        <Toggle label="Disabled Unpressed" defaultPressed={false} disabled />
      </div>
    </div>
  ),
};
