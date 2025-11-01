import type { Meta, StoryObj } from "@storybook/react-vite";

import { GradientHeader } from "./gradientHeader";

const meta = {
  title: "Components/GradientHeader",
  component: GradientHeader,
  tags: ["autodocs"],
} satisfies Meta<typeof GradientHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    from: "#ff7e5f",
    to: "#feb47b",
    height: "200px",
    children: (
      <h1 style={{ color: "black", textAlign: "center", paddingTop: "70px" }}>
        test Gradient Header
      </h1>
    ),
  },
};
