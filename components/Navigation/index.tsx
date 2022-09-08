import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background-color: #000;
`;

export const NavigationLinksContainer = styled.ul`
  & > * {
    margin: 0 1rem;
  }
`;

export const NavigationBrandContainer = styled.div`
  color: white;
`;

export const NavigationProfileContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
`;

export const NavigationItem = styled.a`
  text-transform: uppercase;
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  color: #fff;
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
