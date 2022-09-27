import styled from "styled-components";
import theme from "../../utils/theme";

// NOTE: This is the container for all sidebar elements
export const SidebarOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  color: ${theme.colors.sidebarText};
`;

// NOTE: This is the container for each sidebar group
export const SidebarGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SidebarGroupTitle = styled.span`
  text-transform: uppercase;
  margin: 0.5rem;
  font-weight: 800;
  font-size: 0.75rem;

  padding: 0.25rem;
`;

export const SidebarItemContainer = styled.div`
  padding: 0.5rem;
  padding-left: 1rem;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  cursor: pointer;
  color: ${theme.colors.sidebarItemText};

  &.active {
    background-color: ${theme.colors.sidebarItemHover};

    /* This span contains material icon and subitem text */
    span {
      color: ${theme.colors.white};
    }
  }

  &:hover {
    span {
      opacity: 0.6;
    }
  }
`;

export const ItemTitle = styled.span`
  color: ${theme.colors.sidebarText};
  margin-left: 0.5rem;
`;

export const ItemIcon = styled.img`
  width: 20px;
  margin-right: 5px;
`;

export const ItemCaret = styled.div`
  color: ${theme.colors.secondaryText};
`;

export const SubItemContainer = styled.div`
  display: ${(props: { open: boolean }) => (props.open ? "flex" : "none")};
  flex-direction: column;
`;

export const AnchorContainer = styled.a`
  ${SidebarItemContainer} {
    padding-left: 2.5rem;
  }

  .material-icons {
    display: none;
  }
`;

export const CaretContainer = styled.div`
  margin-left: auto;
`;
