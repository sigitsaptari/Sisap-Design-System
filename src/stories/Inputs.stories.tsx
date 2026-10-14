import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input, Textarea, VerificationCodeInput } from "../components/Input";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";

const meta: Meta<typeof Input> = {
  title: "Components/Inputs (Figma Node 85:1269)",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Implementasi lengkap komponen input dari Figma page `↳ Inputs` (node 85:1269). Mencakup Input field (294 varian), Textarea field (42 varian), dan Verification code / OTP field (6 varian).",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  name: "Playground",
  args: {
    label: "Email Address",
    placeholder: "olivia@untitledui.com",
    hintText: "This is a hint text to help user.",
    required: true,
    helpTooltip: "We will never share your email address with anyone else.",
    size: "md",
    disabled: false,
  },
};

export const InputSizes: StoryObj = {
  name: "1. Input Sizes (sm, md, lg)",
  render: () => (
    <div className="space-y-6 font-sans max-w-md">
      <div>
        <h3 className="text-sm font-semibold text-neutral-900 mb-1">Input Sizes</h3>
        <p className="text-xs text-neutral-500 mb-4">
          Tersedia 3 ukuran: `sm` (36px), `md` (40px), dan `lg` (44px).
        </p>
      </div>

      <Input
        size="sm"
        label="Size Small (36px)"
        placeholder="Small input field"
        leadingIcon={<Icon name="SearchLg" size={16} />}
      />

      <Input
        size="md"
        label="Size Medium (40px) - Default"
        placeholder="Medium input field"
        leadingIcon={<Icon name="SearchLg" size={18} />}
      />

      <Input
        size="lg"
        label="Size Large (44px)"
        placeholder="Large input field"
        leadingIcon={<Icon name="SearchLg" size={20} />}
      />
    </div>
  ),
};

export const InputTypes: StoryObj = {
  name: "2. Input Types & Affixes",
  render: () => {
    return (
      <div className="space-y-6 font-sans max-w-lg">
        <div>
          <h3 className="text-sm font-semibold text-neutral-900 mb-1">
            Input Types & Affixes (Prefix / Suffix)
          </h3>
          <p className="text-xs text-neutral-500 mb-4">
            Mendukung icon leading/trailing, prefix text, password toggle, dan trailing action button.
          </p>
        </div>

        {/* Leading Icon (Email) */}
        <Input
          label="Email with leading icon"
          type="email"
          placeholder="you@company.com"
          leadingIcon={<Icon name="Mail01" size={18} />}
        />

        {/* Leading Text / URL Prefix */}
        <Input
          label="Website URL with prefix"
          leadingText="https://"
          placeholder="www.sisap.design"
          trailingText=".com"
        />

        {/* Phone Prefix */}
        <Input
          label="Phone Number"
          type="tel"
          leadingText="+62"
          placeholder="812-3456-7890"
          leadingIcon={<Icon name="Phone" size={18} />}
        />

        {/* Password with Eye Toggle */}
        <Input
          label="Password with show/hide toggle"
          type="password"
          placeholder="Enter secret password"
          defaultValue="P@ssw0rd123"
          hintText="Must be at least 8 characters long."
        />

        {/* Trailing Action Button */}
        <Input
          label="Invite Member"
          placeholder="colleague@domain.com"
          leadingIcon={<Icon name="User01" size={18} />}
          trailingButton={
            <Button size="xs" variant="primary">
              Send Invite
            </Button>
          }
        />
      </div>
    );
  },
};

export const InputStates: StoryObj = {
  name: "3. Input States (Default, Filled, Error, Disabled)",
  render: () => (
    <div className="space-y-6 font-sans max-w-lg">
      <div>
        <h3 className="text-sm font-semibold text-neutral-900 mb-1">Input States</h3>
        <p className="text-xs text-neutral-500 mb-4">
          Visualisasi state input standar, terisi, error validasi, dan disabled.
        </p>
      </div>

      {/* Default Placeholder */}
      <Input
        label="Default / Placeholder"
        placeholder="Enter your name"
        hintText="Standard input hint text"
      />

      {/* Filled */}
      <Input
        label="Filled State"
        defaultValue="Olivia Rhye"
        hintText="Successfully filled input"
      />

      {/* Error / Destructive */}
      <Input
        label="Validation Error State"
        defaultValue="invalid-email-address"
        error="This is an error message. Please enter a valid email."
        leadingIcon={<Icon name="Mail01" size={18} />}
      />

      {/* Disabled */}
      <Input
        disabled
        label="Disabled Field"
        defaultValue="Readonly or locked value"
        hintText="This field is disabled and cannot be edited."
        leadingIcon={<Icon name="Lock01" size={18} />}
      />
    </div>
  ),
};

export const TextareaShowcase: StoryObj = {
  name: "4. Textarea Input Field (Figma 1238:278)",
  render: () => (
    <div className="space-y-6 font-sans max-w-lg">
      <div>
        <h3 className="text-sm font-semibold text-neutral-900 mb-1">
          Textarea Input Field (Node 1238:278)
        </h3>
        <p className="text-xs text-neutral-500 mb-4">
          Field multi-baris dengan ukuran `sm` (104px) dan `md` (128px), dukungan label, required mark, tooltip, dan error state.
        </p>
      </div>

      <Textarea
        label="Description / Feedback"
        placeholder="Enter a description or leave your detailed feedback..."
        hintText="Write up to 500 characters."
        required
        helpTooltip="Your message will be reviewed directly by the product team."
      />

      <Textarea
        label="With Validation Error"
        defaultValue="Text exceeding limits..."
        error="Character limit exceeded. Please shorten your message."
      />

      <Textarea
        disabled
        label="Disabled Textarea"
        defaultValue="Cannot edit this content."
      />
    </div>
  ),
};

export const VerificationCodeShowcase: StoryObj = {
  name: "5. Verification Code / OTP (Figma 1106:66757)",
  render: () => {
    const [code4, setCode4] = useState("");
    const [code6, setCode6] = useState("");
    const [completedCode, setCompletedCode] = useState<string | null>(null);

    return (
      <div className="space-y-8 font-sans max-w-lg">
        <div>
          <h3 className="text-sm font-semibold text-neutral-900 mb-1">
            Verification Code Input Field (Node 1106:66757)
          </h3>
          <p className="text-xs text-neutral-500 mb-4">
            Input kode OTP terpisah 4-digit atau 6-digit. Mendukung copy-paste otomatis, auto-advance, dan navigasi backspace keyboard.
          </p>
        </div>

        {/* 4 Digits */}
        <div className="p-5 rounded-xl border border-neutral-200 bg-white space-y-3">
          <VerificationCodeInput
            label="4-Digit Verification Code"
            digits={4}
            size="md"
            value={code4}
            onChange={setCode4}
            onComplete={(c) => setCompletedCode(`4-digit: ${c}`)}
            hintText="Enter the 4-digit code sent to your SMS."
          />
          <div className="text-xs font-mono text-neutral-500">
            Current Value: <span className="font-bold text-neutral-800">"{code4}"</span>
          </div>
        </div>

        {/* 6 Digits */}
        <div className="p-5 rounded-xl border border-neutral-200 bg-white space-y-3">
          <VerificationCodeInput
            label="6-Digit Security Code"
            digits={6}
            size="md"
            value={code6}
            onChange={setCode6}
            onComplete={(c) => setCompletedCode(`6-digit: ${c}`)}
            hintText="Enter the 6-digit authentication token."
          />
          <div className="text-xs font-mono text-neutral-500">
            Current Value: <span className="font-bold text-neutral-800">"{code6}"</span>
          </div>
        </div>

        {/* Completed notification */}
        {completedCode && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg font-medium flex items-center gap-2">
            <Icon name="CheckCircle" size={16} className="text-emerald-600" />
            <span>Code completed successfully: {completedCode}</span>
          </div>
        )}
      </div>
    );
  },
};
