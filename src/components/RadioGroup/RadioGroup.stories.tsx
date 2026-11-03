import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioGroup, RadioGroupItem } from "./RadioGroup";
import { Icon } from "../Icon";
import { Avatar } from "../Avatar";
import { Badge } from "../Badge";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Komponen Radio & RadioGroup SisapDS dengan 2 ukuran (`sm`: 16px, `md`: 20px), dukungan selectable cards (Icon simple, Icon card, Avatar, Payment), dan navigasi keyboard lengkap (Arrow keys, Space/Enter).",
      },
    },
  },
};

export default meta;

export const StandaloneRadios: StoryObj = {
  name: "Standalone Radios",
  render: () => (
    <div className="space-y-6 font-sans max-w-md">
      <div>
        <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3">
          Sizes & Descriptions
        </h4>
        <div className="flex flex-col gap-3">
          <Radio
            name="plan"
            size="sm"
            defaultChecked
            label="Personal Plan (Small 16px)"
            supportingText="For individuals and small side projects."
          />
          <Radio
            name="plan"
            size="md"
            label="Team Plan (Medium 20px)"
            supportingText="For fast-moving product teams up to 20 seats."
          />
          <Radio
            name="plan"
            disabled
            label="Enterprise Plan (Disabled)"
            supportingText="Dedicated infrastructure and SSO support."
          />
        </div>
      </div>
    </div>
  ),
};

export const SelectableCardsWithIcons: StoryObj = {
  name: "Selectable Cards (Icon Simple)",
  render: () => {
    const [plan, setPlan] = React.useState("pro");

    return (
      <div className="max-w-xl font-sans">
        <RadioGroup
          label="Select Subscription Tier"
          supportingText="Upgrade or downgrade your plan at any time."
          value={plan}
          onChange={setPlan}
        >
          <RadioGroupItem
            value="starter"
            type="icon-simple"
            icon={<Icon name="Zap" size={24} />}
            label="Starter Plan"
            supportingText="Up to 5 team members and 10GB storage."
            trailing="$10/mo"
          />

          <RadioGroupItem
            value="pro"
            type="icon-simple"
            icon={<Icon name="LayersThree01" size={24} />}
            label="Professional Plan"
            supportingText="Unlimited projects, custom domains, and priority support."
            badge={<Badge color="brand" size="sm">Popular</Badge>}
            trailing="$29/mo"
          />

          <RadioGroupItem
            value="enterprise"
            type="icon-simple"
            icon={<Icon name="ShieldTick" size={24} />}
            label="Enterprise Suite"
            supportingText="Custom SAML SSO, 99.99% SLA, and dedicated account manager."
            trailing="$99/mo"
          />
        </RadioGroup>

        <p className="mt-4 text-xs text-text-tertiary">
          Selected plan: <span className="font-mono font-bold text-text-primary">{plan}</span>
        </p>
      </div>
    );
  },
};

export const AvatarSelectionCards: StoryObj = {
  name: "Selectable Cards (Avatar)",
  render: () => {
    const [assignee, setAssignee] = React.useState("olivia");

    return (
      <div className="max-w-xl font-sans">
        <RadioGroup
          label="Assign Task Lead"
          supportingText="Choose the primary owner responsible for this milestone."
          value={assignee}
          onChange={setAssignee}
        >
          <RadioGroupItem
            value="olivia"
            type="avatar"
            avatar={
              <Avatar
                size="md"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
              />
            }
            label="Olivia Rhye"
            supportingText="Product Designer · Design Systems Team"
            trailing="Active"
          />

          <RadioGroupItem
            value="phoenix"
            type="avatar"
            avatar={
              <Avatar
                size="md"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
              />
            }
            label="Phoenix Baker"
            supportingText="Engineering Lead · Core UI Team"
            trailing="In Review"
          />
        </RadioGroup>
      </div>
    );
  },
};

