import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonDropdown from "./ButtonDropdown";

export default {
  title: "Components/ButtonDropdown",
  component: ButtonDropdown,
} as ComponentMeta<typeof ButtonDropdown>;

const Template: ComponentStory<typeof ButtonDropdown> = (args) => (
  <ButtonDropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Click me",
  iconName: "add",
  options: [
    {
      label: "Option 1",
      value: "option1",
    },
    {
      label: "Option 2",
      value: "option2",
    },
    {
      label: "Option 3",
      value: "option3",
    },
  ],
};
