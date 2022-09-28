import React from "react";
import { Meta, Story } from "@storybook/react";

import Card from "../Card";
import Pagination, { PaginationProps } from "./";

export default {
  title: "Components/Pagination",
  component: Pagination,
} as Meta;

const Template: Story = (args) => (
  <Card>
    <Pagination {...args} />
  </Card>
);
export const Default = Template.bind({});
Default.args = {
  total: 1000,
  pageSize: 10,
  onItemClick: (page: number) => {
    console.log(page);
  },
} as PaginationProps;
