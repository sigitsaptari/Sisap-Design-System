import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";

const config: StorybookConfig = {
  stories: ["../../../src/**/*.stories.@(ts|tsx|mdx)"],
  framework: "@storybook/react-vite",
  addons: ["@storybook/addon-docs"],
  async viteFinal(config) {
    config.plugins = [...(config.plugins ?? []), tailwindcss()];
    return config;
  },
};

export default config;
