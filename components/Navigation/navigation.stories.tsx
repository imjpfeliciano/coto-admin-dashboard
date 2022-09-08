import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Navigation,
  NavigationItem,
  NavigationLinksContainer,
  NavigationBrandContainer,
  NavigationProfileContainer,
} from "./index";
import { Avatar } from "../Avatar";
import GearIcon from "../SVG/GearIcon";

export default {
  title: "Components/Navigation",
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args}>
    <NavigationLinksContainer>
      <NavigationItem href="#">Home</NavigationItem>
      <NavigationItem href="#">About</NavigationItem>
      <NavigationItem href="#">Contact</NavigationItem>
    </NavigationLinksContainer>

    <NavigationBrandContainer>
      <h1>Brand</h1>
    </NavigationBrandContainer>

    <NavigationProfileContainer>
      <Avatar
        src="https://avatars.githubusercontent.com/u/11733036?v=4"
        alt="profile-pic"
      />
      <GearIcon color="#fff" width="40" />
    </NavigationProfileContainer>
  </Navigation>
);

export const Primary = Template.bind({});
Primary.args = {};
