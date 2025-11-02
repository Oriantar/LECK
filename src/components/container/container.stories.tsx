import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChildrenSlot } from "../childrenSlot/childrenSlot";
import { Container } from "./container";

const meta = {
  title: "Components/Container",
  component: Container,
  tags: ["autodocs"],
  args: {
    children: <ChildrenSlot />,
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
