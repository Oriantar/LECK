import type { Meta, StoryObj } from "@storybook/react-vite";

import { GradientHeader } from "./gradientHeader";
import { H1 } from "../..";

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
    children: <H1 style={{ color: "black" }}>test Gradient Header</H1>,
  },
};
