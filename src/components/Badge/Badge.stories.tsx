import type { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeCloseX } from "./Badge";
import { BadgeGroup } from "./BadgeGroup";
import { Icon } from "../Icon";
import type { BadgeColor } from "./Badge.types";

const ALL_COLORS: BadgeColor[] = [
  "gray",
  "brand",
  "error",
  "warning",
  "success",
  "slate",
  "sky",
  "blue",
  "indigo",
  "purple",
  "pink",
  "orange",
];

const meta: Meta<typeof Badge> = {
  title: "Components/Badge (Figma Node 12:539)",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Implementasi lengkap komponen Badge dan Badge group dari Figma page `↳ Badges` (node 12:539 & 1046:3819). Mendukung 3 ukuran (sm, md, lg), 3 tipe visual (Pill color, Badge color, Badge modern), 12 varian warna, dot status indicator, avatar, country flag, leading/trailing icon, dismissible close X, icon-only, dan Announcement Badge group.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Ukuran badge (sm: 22px, md: 24px, lg: 28px)",
    },
    type: {
      control: "select",
      options: ["pill-color", "badge-color", "badge-modern"],
      description: "Bentuk dan gaya visual badge",
    },
    color: {
      control: "select",
      options: ALL_COLORS,
      description: "Palet warna badge (12 warna)",
    },
    dot: {
      control: "boolean",
      description: "Status indicator dot",
    },
    iconOnly: {
      control: "boolean",
      description: "Tampilkan hanya icon (kotak/lingkaran)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Playground: Story = {
  name: "Playground",
  args: {
    children: "Label",
    size: "md",
    type: "pill-color",
    color: "brand",
    dot: false,
    iconOnly: false,
  },
};

export const AllColors: Story = {
  name: "12 Color Palettes",
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
          Pill Color (rounded-full)
        </h4>
        <div className="flex flex-wrap gap-2.5">
          {ALL_COLORS.map((col) => (
            <Badge key={col} color={col} type="pill-color" size="md">
              {col.charAt(0).toUpperCase() + col.slice(1)}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
          Badge Color (rounded-md)
        </h4>
        <div className="flex flex-wrap gap-2.5">
          {ALL_COLORS.map((col) => (
            <Badge key={col} color={col} type="badge-color" size="md">
              {col.charAt(0).toUpperCase() + col.slice(1)}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
          Badge Modern (white card + shadow-xs)
        </h4>
        <div className="flex flex-wrap gap-2.5">
          {ALL_COLORS.map((col) => (
            <Badge key={col} color={col} type="badge-modern" size="md" dot>
              {col.charAt(0).toUpperCase() + col.slice(1)}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  name: "Sizes (sm, md, lg)",
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="w-16 text-xs text-neutral-500 font-mono">sm (22px):</span>
        <Badge size="sm" type="pill-color" color="brand">Label</Badge>
        <Badge size="sm" type="badge-color" color="brand">Label</Badge>
        <Badge size="sm" type="badge-modern" color="brand">Label</Badge>
        <Badge size="sm" type="pill-color" color="brand" dot>Label</Badge>
        <Badge size="sm" type="pill-color" color="brand" iconOnly>
          <Icon name="Plus" size={12} />
        </Badge>
      </div>

      <div className="flex items-center gap-4">
        <span className="w-16 text-xs text-neutral-500 font-mono">md (24px):</span>
        <Badge size="md" type="pill-color" color="brand">Label</Badge>
        <Badge size="md" type="badge-color" color="brand">Label</Badge>
        <Badge size="md" type="badge-modern" color="brand">Label</Badge>
        <Badge size="md" type="pill-color" color="brand" dot>Label</Badge>
        <Badge size="md" type="pill-color" color="brand" iconOnly>
          <Icon name="Plus" size={12} />
        </Badge>
      </div>

      <div className="flex items-center gap-4">
        <span className="w-16 text-xs text-neutral-500 font-mono">lg (28px):</span>
        <Badge size="lg" type="pill-color" color="brand">Label</Badge>
        <Badge size="lg" type="badge-color" color="brand">Label</Badge>
        <Badge size="lg" type="badge-modern" color="brand">Label</Badge>
        <Badge size="lg" type="pill-color" color="brand" dot>Label</Badge>
        <Badge size="lg" type="pill-color" color="brand" iconOnly>
          <Icon name="Plus" size={12} />
        </Badge>
      </div>
    </div>
  ),
};

export const ContentVariations: Story = {
  name: "Content Variations",
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
          Status Dot Indicator
        </h4>
        <div className="flex flex-wrap gap-3">
          <Badge color="success" dot>Active</Badge>
          <Badge color="error" dot>Failed</Badge>
          <Badge color="warning" dot>Pending</Badge>
          <Badge color="gray" dot>Draft</Badge>
          <Badge color="brand" dot>In review</Badge>
          <Badge color="blue" dot>Syncing</Badge>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
          Leading & Trailing Icons
        </h4>
        <div className="flex flex-wrap gap-3">
          <Badge
            color="success"
            iconLeading={<Icon name="ArrowUp" size={12} />}
          >
            12.5%
          </Badge>
          <Badge
            color="error"
            iconLeading={<Icon name="ArrowDown" size={12} />}
          >
            4.2%
          </Badge>
          <Badge
            color="brand"
            iconTrailing={<Icon name="ArrowRight" size={12} />}
          >
            Read more
          </Badge>
          <Badge
            color="gray"
            iconLeading={<Icon name="Lock01" size={12} />}
          >
            Private
          </Badge>
          <Badge
            color="purple"
            iconLeading={<Icon name="Star01" size={12} />}
            iconTrailing={<Icon name="Check" size={12} />}
          >
            Pro account
          </Badge>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
          User Avatar & Country Flag
        </h4>
        <div className="flex flex-wrap gap-3">
          <Badge
            color="gray"
            avatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces"
          >
            Olivia Rhye
          </Badge>
          <Badge
            color="brand"
            avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces"
          >
            Phoenix Baker
          </Badge>
          <Badge
            color="gray"
            country={<span className="text-xs leading-none">🇦🇺</span>}
          >
            Australia
          </Badge>
          <Badge
            color="gray"
            country={<span className="text-xs leading-none">🇮🇩</span>}
          >
            Indonesia
          </Badge>
          <Badge
            color="gray"
            country={<span className="text-xs leading-none">🇺🇸</span>}
          >
            United States
          </Badge>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
          Dismissible Close X (onClose)
        </h4>
        <div className="flex flex-wrap gap-3">
          <Badge color="brand" onClose={() => alert("Dismissed Brand")}>
            Label
          </Badge>
          <Badge color="gray" onClose={() => alert("Dismissed Gray")}>
            Label
          </Badge>
          <Badge color="error" onClose={() => alert("Dismissed Error")}>
            Label
          </Badge>
          <Badge color="warning" onClose={() => alert("Dismissed Warning")}>
            Label
          </Badge>
          <Badge color="success" onClose={() => alert("Dismissed Success")}>
            Label
          </Badge>
          <Badge color="blue" onClose={() => alert("Dismissed Blue")}>
            Label
          </Badge>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
          Icon Only (Pill vs Rounded)
        </h4>
        <div className="flex items-center gap-3">
          <Badge type="pill-color" color="brand" iconOnly size="sm">
            <Icon name="Plus" size={12} />
          </Badge>
          <Badge type="pill-color" color="brand" iconOnly size="md">
            <Icon name="Plus" size={12} />
          </Badge>
          <Badge type="pill-color" color="brand" iconOnly size="lg">
            <Icon name="Plus" size={14} />
          </Badge>
          <Badge type="badge-color" color="brand" iconOnly size="sm">
            <Icon name="Check" size={12} />
          </Badge>
          <Badge type="badge-color" color="brand" iconOnly size="md">
            <Icon name="Check" size={12} />
          </Badge>
          <Badge type="badge-color" color="brand" iconOnly size="lg">
            <Icon name="Check" size={14} />
          </Badge>
        </div>
      </div>
    </div>
  ),
};

export const BadgeGroups: Story = {
  name: "Badge Group (Announcement Bar)",
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
          Leading Badge (Figma 1046:8088)
        </h4>
        <div className="flex flex-col items-start gap-3">
          <BadgeGroup
            color="brand"
            badge="New feature"
            actionText="We’ve just released a new dashboard"
            href="#release-notes"
          />
          <BadgeGroup
            color="success"
            badge="Changelog"
            actionText="Version 2.4.0 is now live for all users"
            href="#changelog"
          />
          <BadgeGroup
            color="error"
            badge="Security"
            actionText="Critical patch applied to authentication service"
          />
          <BadgeGroup
            color="warning"
            badge="Maintenance"
            actionText="Scheduled database upgrade this Saturday 02:00 UTC"
          />
          <BadgeGroup
            color="gray"
            badge="Notice"
            actionText="Terms of service updated for 2026"
          />
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
          Badge Modern Group
        </h4>
        <div className="flex flex-col items-start gap-3">
          <BadgeGroup
            type="badge-modern"
            color="brand"
            badge="Featured"
            actionText="Explore our new design token generator"
            href="#tokens"
          />
          <BadgeGroup
            type="badge-modern"
            color="blue"
            badge="Docs"
            actionText="Check out the complete component guidelines"
            href="#docs"
          />
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
          Trailing Badge
        </h4>
        <div className="flex flex-col items-start gap-3">
          <BadgeGroup
            badgePosition="trailing"
            color="brand"
            actionText="We’ve just released a new dashboard"
            badge={
              <Badge size="sm" color="brand" iconTrailing={<Icon name="ArrowRight" size={12} />}>
                Read more
              </Badge>
            }
            href="#read-more"
          />
        </div>
      </div>
    </div>
  ),
};

export const CloseButtons: Story = {
  name: "Close X Buttons",
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
          Square vs Rounded
        </h4>
        <div className="flex items-center gap-4">
          <BadgeCloseX type="square" color="brand" size="md" />
          <BadgeCloseX type="rounded" color="brand" size="md" />
          <BadgeCloseX type="square" color="error" size="md" />
          <BadgeCloseX type="rounded" color="error" size="md" />
          <BadgeCloseX type="square" color="success" size="md" />
          <BadgeCloseX type="rounded" color="success" size="md" />
          <BadgeCloseX type="square" color="gray" size="md" />
          <BadgeCloseX type="rounded" color="gray" size="md" />
        </div>
      </div>
    </div>
  ),
};
