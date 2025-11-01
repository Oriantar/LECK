import type { Meta, StoryObj } from "@storybook/react-vite";

import { Profile } from "./profile";

const meta = {
  title: "Components/Profile",
  component: Profile,
  tags: ["autodocs"],
  args: {
    url: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
    altText: "Profile Image",
    heightAndWidth: "100px",
  },
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
