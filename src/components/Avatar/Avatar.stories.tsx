import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import { AvatarGroup } from "./AvatarGroup";
import { AvatarLabelGroup } from "./AvatarLabelGroup";

const SAMPLE_AVATAR_1 =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80";
const SAMPLE_AVATAR_2 =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80";
const SAMPLE_AVATAR_3 =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80";
const SAMPLE_AVATAR_4 =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80";
const SAMPLE_AVATAR_5 =
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80";
const SAMPLE_AVATAR_COMPANY =
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar (Figma Node 25057:4268)",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Implementasi lengkap komponen Avatars dari Figma Section `Avatars` (node 25057:4268), mencakup `Avatar` (11008:45389), `Status icon` (11008:45024), `Avatar group` (1274:812), dan `Avatar label group` (82:2793). Mendukung 6 ukuran (xs, sm, md, lg, xl, 2xl), fallback inisial & icon (User01), status indicator (online, offline, verified, count, company avatar), dan group stacking dengan overflow truncation.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      description: "Ukuran avatar (xs: 24px hingga 2xl: 64px)",
    },
    border: {
      control: "boolean",
      description: "Tampilkan border / ring luar untuk kontras tinggi",
    },
    status: {
      control: "select",
      options: [undefined, "online", "offline", "verified", "count", "avatar"],
      description: "Status indicator di sudut kanan bawah",
    },
    statusCount: {
      control: "number",
      description: "Angka hitungan jika status='count'",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Playground: Story = {
  name: "Playground",
  args: {
    src: SAMPLE_AVATAR_1,
    size: "md",
    border: false,
    status: "online",
  },
};

export const Sizes: Story = {
  name: "Sizes & Placeholders",
  render: () => {
    const sizes = ["xs", "sm", "md", "lg", "xl", "2xl"] as const;

    return (
      <div className="space-y-8">
        <div>
          <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
            Image Avatars (xs to 2xl)
          </h4>
          <div className="flex items-end gap-4">
            {sizes.map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <Avatar size={s} src={SAMPLE_AVATAR_1} alt="User" />
                <span className="text-xs text-neutral-500 font-mono">{s}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
            Initials / Text Fallback (xs to 2xl)
          </h4>
          <div className="flex items-end gap-4">
            {sizes.map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <Avatar size={s} initials="OR" />
                <span className="text-xs text-neutral-500 font-mono">{s}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
            Icon Placeholder Fallback (User01)
          </h4>
          <div className="flex items-end gap-4">
            {sizes.map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <Avatar size={s} />
                <span className="text-xs text-neutral-500 font-mono">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

export const StatusIndicators: Story = {
  name: "Status Indicators (Node 11008:45024)",
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
          Online, Offline, Verified, Count, and Company Avatar
        </h4>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Avatar size="lg" src={SAMPLE_AVATAR_1} status="online" />
            <span className="text-xs text-neutral-600 font-medium">Online</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Avatar size="lg" src={SAMPLE_AVATAR_2} status="offline" />
            <span className="text-xs text-neutral-600 font-medium">Offline</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Avatar size="lg" src={SAMPLE_AVATAR_3} status="verified" />
            <span className="text-xs text-neutral-600 font-medium">Verified</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Avatar
              size="lg"
              src={SAMPLE_AVATAR_4}
              status="count"
              statusCount={8}
            />
            <span className="text-xs text-neutral-600 font-medium">Count (8)</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Avatar
              size="lg"
              src={SAMPLE_AVATAR_5}
              status="avatar"
              statusAvatar={SAMPLE_AVATAR_COMPANY}
            />
            <span className="text-xs text-neutral-600 font-medium">
              Nested Avatar
            </span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
          Status Across All Sizes
        </h4>
        <div className="flex items-end gap-4">
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((size) => (
            <Avatar
              key={size}
              size={size}
              src={SAMPLE_AVATAR_1}
              status="online"
            />
          ))}
        </div>
      </div>
    </div>
  ),
};

export const AvatarGroups: Story = {
  name: "Avatar Group (Node 1274:812)",
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
          Medium Group (40px) with +5 overflow & Add Button
        </h4>
        <AvatarGroup
          size="md"
          max={5}
          total={10}
          showAddButton
          onAdd={() => alert("Invite new team member clicked!")}
        >
          <Avatar src={SAMPLE_AVATAR_1} />
          <Avatar src={SAMPLE_AVATAR_2} />
          <Avatar src={SAMPLE_AVATAR_3} />
          <Avatar src={SAMPLE_AVATAR_4} />
          <Avatar src={SAMPLE_AVATAR_5} />
          <Avatar initials="JD" />
          <Avatar initials="AL" />
        </AvatarGroup>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
          Small Group (32px)
        </h4>
        <AvatarGroup size="sm" max={4} showAddButton>
          <Avatar src={SAMPLE_AVATAR_1} />
          <Avatar src={SAMPLE_AVATAR_2} />
          <Avatar src={SAMPLE_AVATAR_3} />
          <Avatar src={SAMPLE_AVATAR_4} />
          <Avatar src={SAMPLE_AVATAR_5} />
        </AvatarGroup>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
          Extra Small Group (24px)
        </h4>
        <AvatarGroup size="xs" max={3} total={7} showAddButton>
          <Avatar src={SAMPLE_AVATAR_1} />
          <Avatar src={SAMPLE_AVATAR_2} />
          <Avatar src={SAMPLE_AVATAR_3} />
        </AvatarGroup>
      </div>
    </div>
  ),
};

export const AvatarLabelGroups: Story = {
  name: "Avatar Label Group (Node 82:2793)",
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
          Sizes (sm, md, lg)
        </h4>
        <div className="flex flex-col gap-4">
          <AvatarLabelGroup
            size="sm"
            src={SAMPLE_AVATAR_1}
            title="Olivia Rhye"
            supportingText="olivia@untitledui.com"
          />

          <AvatarLabelGroup
            size="md"
            src={SAMPLE_AVATAR_1}
            title="Olivia Rhye"
            supportingText="olivia@untitledui.com"
          />

          <AvatarLabelGroup
            size="lg"
            src={SAMPLE_AVATAR_1}
            title="Olivia Rhye"
            supportingText="olivia@untitledui.com"
          />
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
          With Status Indicator & Clickable Link
        </h4>
        <AvatarLabelGroup
          size="md"
          avatar={
            <Avatar size="md" src={SAMPLE_AVATAR_1} status="online" />
          }
          title="Olivia Rhye"
          supportingText="Active now"
          href="#profile"
        />
      </div>
    </div>
  ),
};
