import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipContent, HelpIcon } from "./Tooltip";
import { Button } from "../Button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Komponen Tooltip SisapDS dengan dukungan panah di semua arah (bottom, top, left, right), teks pendukung (supporting text), bubble standalone `TooltipContent`, serta `HelpIcon` untuk trigger info pada formulir.",
      },
    },
  },
};

export default meta;

export const StandaloneBubbles: StoryObj = {
  name: "Standalone Bubbles",
  render: () => (
    <div className="space-y-8 font-sans max-w-lg">
      <div>
        <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Single Line Title Only
        </h4>
        <div className="flex flex-wrap items-center gap-6">
          <TooltipContent title="This is a tooltip" arrow="bottom-center" />
          <TooltipContent title="Copy to clipboard" arrow="top-center" />
          <TooltipContent title="More actions" arrow="none" />
        </div>
      </div>

      <div className="pt-6 border-t border-border-secondary">
        <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          With Supporting Text
        </h4>
        <div className="flex flex-col gap-6">
          <TooltipContent
            title="Two-Factor Authentication"
            supportingText="We recommend enabling 2FA using an authenticator app like Google Authenticator or 1Password."
            arrow="bottom-left"
          />

          <TooltipContent
            title="Custom Domain Connected"
            supportingText="Your SSL certificate is active and auto-renews in 60 days."
            arrow="top-center"
          />
        </div>
      </div>
    </div>
  ),
};

export const InteractiveHover: StoryObj = {
  name: "Interactive Hover Triggers",
  render: () => (
    <div className="space-y-8 font-sans p-8">
      <div>
        <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Hover Buttons
        </h4>
        <div className="flex items-center gap-6">
          <Tooltip title="Saves your current changes to the cloud" arrow="bottom-center">
            <Button variant="primary">Save Changes</Button>
          </Tooltip>

          <Tooltip
            title="Warning: High Impact Action"
            supportingText="Deleting this workspace will revoke access for all 12 team members immediately."
            arrow="bottom-center"
          >
            <Button variant="destructive-secondary">Delete Workspace</Button>
          </Tooltip>
        </div>
      </div>

      <div className="pt-6 border-t border-border-secondary">
        <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Form Help Icons
        </h4>
        <div className="flex flex-col gap-4 max-w-sm">
          <div className="flex items-center justify-between p-3 rounded-lg border border-border-secondary bg-bg-primary">
            <span className="text-sm font-medium text-text-secondary">Billing Tax ID / NPWP</span>
            <HelpIcon
              tooltipTitle="Indonesian Tax Number"
              tooltipSupportingText="Required for corporate invoicing and automated VAT deduction."
              arrow="bottom-right"
            />
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg border border-border-secondary bg-bg-primary">
            <span className="text-sm font-medium text-text-secondary">API Secret Token</span>
            <HelpIcon
              tooltipTitle="Secret API Key"
              tooltipSupportingText="Never share this key in public client repositories or web browsers."
              arrow="bottom-right"
            />
          </div>
        </div>
      </div>
    </div>
  ),
};
