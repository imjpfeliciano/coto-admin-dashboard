import styled from "styled-components";
import theme from "../../utils/theme";

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${theme.colors.primaryText};
  font-weight: bold;
`;

export const NavigationLinksContainer = styled.ul`
  & > * {
    margin: 0 1rem;
  }
`;

export const NavigationBrandContainer = styled.div``;

export const NavigationProfileContainer = styled.div`
  display: flex;
  flex-direction: row;

  & button {
    &:not(:first-of-type) {
      margin-left: 1rem;
    }
  }
`;

export const NavigationItem = styled.a`
  text-transform: uppercase;
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  border: 0;
  border-radius: 5px;
  font-size: 1rem;

  &:hover {
    opacity: 0.8;
    border: 1px solid #fff;
    font-size: 0.8rem;
    padding: 8px;
  }
`;
