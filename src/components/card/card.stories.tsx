import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChildrenSlot } from "../childrenSlot/childrenSlot";
import { Card } from "./card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    title: "Card Titles",
    content: "Card Content",
    imageAlt: "Card Image",
    imageSrc:
      "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutImage: Story = {
  args: {
    imageSrc: undefined,
  },
};
export const WithLongContent: Story = {
  args: {
    content:
      "This is a very long content that should be truncated at some point to ensure that the card layout remains intact and visually appealing. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.",
  },
};
export const WithLongTitle: Story = {
  args: {
    title:
      "This is a very long title that should be truncated at some point to ensure that the card layout remains intact and visually appealing. The quick brown fox jumps over the lazy dog.",
  },
};

export const WithLink: Story = {
  args: {
    link: "#",
  },
};

export const WithChildren: Story = {
  args: {
    children: <ChildrenSlot />,
  },
};
