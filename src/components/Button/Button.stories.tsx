import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonCloseX, ButtonUtility } from "./Button";
import { Icon } from "../Icon";

const meta: Meta<typeof Button> = {
  title: "Components/Button (Figma Node 25051:35916)",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Implementasi lengkap komponen Button dari Figma section `buttons` (node 25051:35916). Mendukung 5 ukuran (xs, sm, md, lg, xl), 5 hierarchy standar, 4 hierarchy destructive, mode icon-only, loading spinner, Button close X, dan Button utility.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "link-color",
        "link-gray",
        "destructive-primary",
        "destructive-secondary",
        "destructive-tertiary",
        "destructive-link",
      ],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    destructive: { control: "boolean" },
    iconOnly: { control: "boolean" },
    isLoading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  name: "Playground",
  args: {
    children: "Button CTA",
    variant: "primary",
    size: "md",
    destructive: false,
    iconOnly: false,
    isLoading: false,
    disabled: false,
  },
};

export const Hierarchies: Story = {
  name: "1. Button Hierarchies (Standard)",
  render: () => (
    <div className="space-y-6 font-sans">
      <div>
        <h3 className="text-sm font-semibold text-neutral-900 mb-1">Standard Hierarchy</h3>
        <p className="text-xs text-neutral-500 mb-4">
          Tersedia 5 level hierarki: Primary, Secondary, Tertiary, Link color, dan Link gray.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="link-color">Link color</Button>
        <Button variant="link-gray">Link gray</Button>
      </div>

      <div className="pt-4 border-t border-neutral-200">
        <h4 className="text-xs font-semibold text-neutral-700 mb-3">Dengan Icon Leading</h4>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" leftIcon={<Icon name="Plus" size={18} />}>
            Primary
          </Button>
          <Button variant="secondary" leftIcon={<Icon name="Upload01" size={18} />}>
            Secondary
          </Button>
          <Button variant="tertiary" leftIcon={<Icon name="Share01" size={18} />}>
            Tertiary
          </Button>
          <Button variant="link-color" rightIcon={<Icon name="ArrowRight" size={16} />}>
            View details
          </Button>
          <Button variant="link-gray" rightIcon={<Icon name="LinkExternal01" size={16} />}>
            Documentation
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const DestructiveButtons: Story = {
  name: "2. Button Destructive (Figma 6218:85578)",
  render: () => (
    <div className="space-y-6 font-sans">
      <div>
        <h3 className="text-sm font-semibold text-neutral-900 mb-1">Destructive Hierarchy</h3>
        <p className="text-xs text-neutral-500 mb-4">
          Gunakan untuk aksi berisiko tinggi seperti hapus data, batalkan langganan, atau reset akun.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button variant="destructive-primary">Primary Destructive</Button>
        <Button variant="destructive-secondary">Secondary Destructive</Button>
        <Button variant="destructive-tertiary">Tertiary Destructive</Button>
        <Button variant="destructive-link">Destructive Link</Button>
      </div>

      <div className="pt-4 border-t border-neutral-200">
        <h4 className="text-xs font-semibold text-neutral-700 mb-3">Dengan Prop `destructive={true}`</h4>
        <div className="flex flex-wrap items-center gap-4">
          <Button destructive variant="primary" leftIcon={<Icon name="Trash01" size={18} />}>
            Delete Item
          </Button>
          <Button destructive variant="secondary" leftIcon={<Icon name="AlertCircle" size={18} />}>
            Deactivate
          </Button>
          <Button destructive variant="tertiary" leftIcon={<Icon name="XClose" size={18} />}>
            Cancel Action
          </Button>
          <Button destructive variant="link" rightIcon={<Icon name="ArrowRight" size={16} />}>
            Revoke Access
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  name: "3. All Sizes (xs, sm, md, lg, xl)",
  render: () => (
    <div className="space-y-6 font-sans">
      <div>
        <h3 className="text-sm font-semibold text-neutral-900 mb-1">5 Ukuran Standar Figma</h3>
        <p className="text-xs text-neutral-500 mb-4">
          Dari `xs` (32px), `sm` (36px), `md` (40px), `lg` (44px), hingga `xl` (48px).
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button size="xs" leftIcon={<Icon name="Star01" size={16} />}>
          Size XS (32px)
        </Button>
        <Button size="sm" leftIcon={<Icon name="Star01" size={20} />}>
          Size SM (36px)
        </Button>
        <Button size="md" leftIcon={<Icon name="Star01" size={20} />}>
          Size MD (40px)
        </Button>
        <Button size="lg" leftIcon={<Icon name="Star01" size={20} />}>
          Size LG (44px)
        </Button>
        <Button size="xl" leftIcon={<Icon name="Star01" size={20} />}>
          Size XL (48px)
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-neutral-200">
        <Button size="xs" variant="secondary">
          XS Secondary
        </Button>
        <Button size="sm" variant="secondary">
          SM Secondary
        </Button>
        <Button size="md" variant="secondary">
          MD Secondary
        </Button>
        <Button size="lg" variant="secondary">
          LG Secondary
        </Button>
        <Button size="xl" variant="secondary">
          XL Secondary
        </Button>
      </div>
    </div>
  ),
};

export const IconOnlyButtons: Story = {
  name: "4. Icon Only Buttons",
  render: () => (
    <div className="space-y-6 font-sans">
      <div>
        <h3 className="text-sm font-semibold text-neutral-900 mb-1">Icon Only Buttons</h3>
        <p className="text-xs text-neutral-500 mb-4">
          Tombol persegi (`iconOnly={true}`) dengan rasio 1:1 untuk aksi toolbar, pagination, atau icon button.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button iconOnly size="xs" aria-label="Search">
          <Icon name="SearchLg" size={16} />
        </Button>
        <Button iconOnly size="sm" aria-label="Filter">
          <Icon name="FilterLines" size={20} />
        </Button>
        <Button iconOnly size="md" aria-label="Settings">
          <Icon name="Settings01" size={20} />
        </Button>
        <Button iconOnly size="lg" aria-label="Download">
          <Icon name="Download01" size={20} />
        </Button>
        <Button iconOnly size="xl" aria-label="Add">
          <Icon name="Plus" size={20} />
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-neutral-200">
        <Button iconOnly size="sm" variant="secondary" aria-label="Edit">
          <Icon name="Edit01" size={20} />
        </Button>
        <Button iconOnly size="sm" variant="tertiary" aria-label="More">
          <Icon name="DotsVertical" size={20} />
        </Button>
        <Button iconOnly size="sm" destructive variant="primary" aria-label="Delete">
          <Icon name="Trash01" size={20} />
        </Button>
        <Button iconOnly size="sm" destructive variant="secondary" aria-label="Remove">
          <Icon name="Trash01" size={20} />
        </Button>
      </div>
    </div>
  ),
};

export const LoadingStates: Story = {
  name: "5. Loading States (Figma 8993:429278)",
  render: () => (
    <div className="space-y-6 font-sans">
      <div>
        <h3 className="text-sm font-semibold text-neutral-900 mb-1">Button Loading States</h3>
        <p className="text-xs text-neutral-500 mb-4">
          Menggunakan dual-arc SVG spinner resmi dari Figma node 8993:429278.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button isLoading variant="primary">
          Processing...
        </Button>
        <Button isLoading variant="secondary">
          Loading Data...
        </Button>
        <Button isLoading destructive variant="primary">
          Deleting...
        </Button>
        <Button isLoading iconOnly size="md" aria-label="Loading" />
      </div>

      <div className="pt-4 border-t border-neutral-200">
        <h4 className="text-xs font-semibold text-neutral-700 mb-3">Custom loadingText Prop</h4>
        <div className="flex flex-wrap items-center gap-4">
          <Button isLoading loadingText="Saving changes..." variant="primary">
            Save
          </Button>
          <Button isLoading loadingText="Connecting..." variant="secondary">
            Connect
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const CloseXButtonShowcase: Story = {
  name: "6. Button Close X (Figma 2763:420129)",
  render: () => (
    <div className="space-y-6 font-sans">
      <div>
        <h3 className="text-sm font-semibold text-neutral-900 mb-1">
          Button Close X (Node 2763:420129)
        </h3>
        <p className="text-xs text-neutral-500 mb-4">
          Tombol tutup modal, drawer, alert dialog, atau toast dengan dukungan dark background.
        </p>
      </div>

      {/* Light Surface */}
      <div className="p-6 rounded-xl border border-neutral-200 bg-white space-y-3">
        <span className="text-xs font-semibold text-neutral-700">Light Background:</span>
        <div className="flex items-center gap-4">
          <ButtonCloseX size="sm" />
          <ButtonCloseX size="md" />
          <ButtonCloseX size="lg" />
        </div>
      </div>

      {/* Dark Surface */}
      <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900 space-y-3">
        <span className="text-xs font-semibold text-neutral-300">Dark Background (darkBg=true):</span>
        <div className="flex items-center gap-4">
          <ButtonCloseX size="sm" darkBg />
          <ButtonCloseX size="md" darkBg />
          <ButtonCloseX size="lg" darkBg />
        </div>
      </div>
    </div>
  ),
};

export const UtilityButtonShowcase: Story = {
  name: "7. Button Utility (Figma 8003:526508)",
  render: () => (
    <div className="space-y-6 font-sans">
      <div>
        <h3 className="text-sm font-semibold text-neutral-900 mb-1">
          Button Utility (Node 8003:526508)
        </h3>
        <p className="text-xs text-neutral-500 mb-4">
          Tombol compact 28px (xs) dan 32px (sm) untuk aksi tabel, copy code, expand collapse, dan filter kecil.
        </p>
      </div>

      <div className="p-6 rounded-xl border border-neutral-200 bg-white space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-neutral-500 w-28">Secondary (Border):</span>
          <ButtonUtility size="xs" icon={<Icon name="Copy01" size={16} />} />
          <ButtonUtility size="xs" icon={<Icon name="Edit01" size={16} />} />
          <ButtonUtility size="xs" icon={<Icon name="Share01" size={16} />} />
          <div className="h-6 w-px bg-neutral-200 mx-2" />
          <ButtonUtility size="sm" icon={<Icon name="Copy01" size={20} />} />
          <ButtonUtility size="sm" icon={<Icon name="Edit01" size={20} />} />
          <ButtonUtility size="sm" icon={<Icon name="Share01" size={20} />} />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-neutral-500 w-28">Tertiary (Ghost):</span>
          <ButtonUtility size="xs" variant="tertiary" icon={<Icon name="DotsVertical" size={16} />} />
          <ButtonUtility size="xs" variant="tertiary" icon={<Icon name="Download01" size={16} />} />
          <div className="h-6 w-px bg-neutral-200 mx-2" />
          <ButtonUtility size="sm" variant="tertiary" icon={<Icon name="DotsVertical" size={20} />} />
          <ButtonUtility size="sm" variant="tertiary" icon={<Icon name="Download01" size={20} />} />
        </div>
      </div>
    </div>
  ),
};

export const ClickAnimationShowcase: Story = {
  name: "8. Click Animation",
  render: () => (
    <div className="space-y-6 font-sans max-w-2xl">
      <div>
        <h3 className="text-sm font-semibold text-neutral-900 mb-1">
          Interactive Click Feedback
        </h3>
        <p className="text-xs text-neutral-500 mb-4">
          Coba klik tombol di bawah pada posisi kursor berbeda. Efek gelombang riak air (water ripple) akan menyebar dari koordinat klik yang tepat, disertai micro-press scale feedback (98%) yang responsif.
        </p>
      </div>

      <div className="p-6 rounded-xl border border-neutral-200 bg-white space-y-5">
        <div>
          <span className="text-xs font-semibold text-neutral-600 block mb-2">
            Primary & Destructive (White Ripple):
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg" variant="primary">
              Click Me (Primary)
            </Button>
            <Button size="lg" variant="destructive-primary">
              Click Me (Destructive)
            </Button>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold text-neutral-600 block mb-2">
            Secondary & Tertiary (Colored Ripple):
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg" variant="secondary">
              Click Me (Secondary)
            </Button>
            <Button size="lg" variant="tertiary">
              Click Me (Tertiary)
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};

