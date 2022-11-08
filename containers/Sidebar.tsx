"use client";
import Link from "next/link";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import {
  ItemCaret,
  ItemTitle,
  SidebarGroupContainer,
  SidebarGroupTitle,
  SidebarItemContainer,
  SidebarOptionsContainer,
  SubItemContainer,
  AnchorContainer,
  CaretContainer,
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
  active?: boolean;
}

export interface SidebarOption {
  title: string;
  items: SidebarItem[];
}

export interface SidebarProps {
  options: SidebarOption[];
}

const SidebarItem = ({
  icon,
  label,
  path = "#",
  subItems,
  active,
}: SidebarItem) => {
  const [open, setOpen] = useState(false);
  const hasSubItems = Boolean(subItems && subItems.length > 0);
  const Wrapper = hasSubItems ? React.Fragment : Link;
  const wrapperProps = hasSubItems ? {} : { href: path };

  const Container = hasSubItems ? React.Fragment : AnchorContainer;

  const handleClick = () => {
    if (hasSubItems) {
      setOpen(!open);
    }
  };

  return (
    // @ts-ignore
    <Wrapper {...wrapperProps}>
      <Container>
        <SidebarItemContainer
          onClick={handleClick}
          className={`${(open || active) && "active"}`}
        >
          <MaterialIcon iconName={icon} color={theme.colors.sidebarText} />
          <ItemTitle>{label}</ItemTitle>
          {subItems && (
            <CaretContainer>
              <MaterialIcon
                iconName={open ? "expand_less" : "expand_more"}
                color={theme.colors.sidebarText}
              />
            </CaretContainer>
          )}
        </SidebarItemContainer>
        {subItems && subItems.length && open && (
          <SubItemContainer open={open}>
            {subItems &&
              subItems.map((item, index) => (
                <SidebarItem
                  key={`sidebar-subitem-${index}`}
                  {...item}
                  active={open}
                />
              ))}
          </SubItemContainer>
        )}
      </Container>
    </Wrapper>
  );
};

const Sidebar = ({ options }: SidebarProps) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false);
  }, []);

  if (isServer) return null;

  return (
    <SidebarOptionsContainer>
      {options.length &&
        options.map((option, index) => (
          <SidebarGroupContainer key={`sidebar-option-${index}`}>
            <SidebarGroupTitle>{option.title}</SidebarGroupTitle>
            {option.items.length &&
              option.items.map((item, itemIndex) => (
                <SidebarItem
                  key={`sidebar-item-${itemIndex}`}
                  {...item}
                  active={item.path === window.location.pathname}
                />
              ))}
          </SidebarGroupContainer>
        ))}
    </SidebarOptionsContainer>
  );
};

export default Sidebar;
