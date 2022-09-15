import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RoundedButton from "./RoundedButton";

export default {
  title: "Components/Button",
  component: RoundedButton,
} as ComponentMeta<typeof RoundedButton>;

const Template: ComponentStory<typeof RoundedButton> = (args) => (
  <RoundedButton {...args} />
);

export const Rounded = Template.bind({});
Rounded.args = {
  label: "Click me",
  onClick: () => {},
};
