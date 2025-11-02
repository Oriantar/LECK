import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    link: "#",
    title: "Click Me",
    subtitle: "This is a button",
    color: "#0000ff",
    textcolor: "white",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    link: "#",
    title: "Click Me",
    subtitle: "This is a button",
  },
};

export const WithoutSubtitle: Story = {
  args: {
    link: "#",
    title: "Click Me",
    subtitle: "",
  },
};

export const WithLargeSubtitle: Story = {
  args: {
    link: "#",
    title: "Click Me",
    subtitle: "This is a very long subtitle that should be truncated",
  },
};

export const RedButton: Story = {
  args: {
    color: "#ff0000",
  },
};
