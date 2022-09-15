import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AddUserForm from "./AddUserForm";

export default {
  title: "Containers/AddUserForm",
  component: AddUserForm,
} as ComponentMeta<typeof AddUserForm>;

const Template: ComponentStory<typeof AddUserForm> = (args) => (
  <AddUserForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  onUserSave: () => {},
};
