import Link from "next/link";
import styled from "styled-components";
import React from "react";
import {
  ItemCaret,
  ItemIcon,
  ItemTitle,
  SidebarGroupContainer,
  SidebarGroupTitle,
  SidebarItemContainer,
  SidebarOptionsContainer,
  SubItemContainer,
} from "../components/Sidebar";
import MaterialIcon from "../components/MaterialIcon";
import theme from "../utils/theme";

interface SidebarBaseItem {
  icon: string; // FIXME: should be an icon component
  label: string;
  path?: string;
}

interface SidebarItem extends SidebarBaseItem {
  subItems?: SidebarBaseItem[];
}

export interface SidebarOption {
  title: string;
  items: SidebarItem[];
}

export interface SidebarProps {
  options: SidebarOption[];
}

const AnchorContainer = styled.a``;
const SidebarItem = ({ icon, label, path = "#", subItems }: SidebarItem) => {
  const hasSubItems = Boolean(subItems && subItems.length > 0);
  const Wrapper = hasSubItems ? React.Fragment : Link;
  const wrapperProps = hasSubItems ? {} : { href: path };

  const Container = hasSubItems ? React.Fragment : AnchorContainer;

  return (
    // @ts-ignore
    <Wrapper {...wrapperProps}>
      <Container>
        <SidebarItemContainer>
          <MaterialIcon iconName={icon} color={theme.colors.secondaryText} />
          <ItemTitle>{label}</ItemTitle>
          {subItems && <ItemCaret>^</ItemCaret>}
        </SidebarItemContainer>
        {subItems && subItems.length && (
          <SubItemContainer>
            {subItems &&
              subItems.map((item, index) => (
                <SidebarItem key={`sidebar-subitem-${index}`} {...item} />
              ))}
          </SubItemContainer>
        )}
      </Container>
    </Wrapper>
  );
};

const Sidebar = ({ options }: SidebarProps) => {
  return (
    <SidebarOptionsContainer>
      {options.length &&
        options.map((option, index) => (
          <SidebarGroupContainer key={`sidebar-option-${index}`}>
            <SidebarGroupTitle>{option.title}</SidebarGroupTitle>
            {option.items.length &&
              option.items.map((item, itemIndex) => (
                <SidebarItem key={`sidebar-item-${itemIndex}`} {...item} />
              ))}
          </SidebarGroupContainer>
        ))}
    </SidebarOptionsContainer>
  );
};

export default Sidebar;
