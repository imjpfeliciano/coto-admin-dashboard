import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NavigationItem } from "./index";

export default {
  title: "Components/NavigationItem",
  component: NavigationItem,
} as ComponentMeta<typeof NavigationItem>;

const Template: ComponentStory<typeof NavigationItem> = (args) => (
  <NavigationItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  href: "#",
  children: "Home",
};
