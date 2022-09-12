import styled from "styled-components";
import theme from "../../utils/theme";

// NOTE: This is the container for all sidebar elements
export const SidebarOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// NOTE: This is the container for each sidebar group
export const SidebarGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SidebarGroupTitle = styled.h3`
  color: ${theme.colors.primaryText};
`;

export const SidebarItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  cursor: pointer;
  margin-top: 0.5rem;

  &:hover {
    background-color: ${theme.colors.bgColor};
  }
`;

export const ItemTitle = styled.span`
  color: ${theme.colors.secondaryText};
`;

export const ItemIcon = styled.img`
  width: 20px;
  margin-right: 5px;
`;

export const ItemCaret = styled.div`
  color: ${theme.colors.secondaryText};
`;

export const SubItemContainer = styled.div`
  padding-left: 1rem;
`;
