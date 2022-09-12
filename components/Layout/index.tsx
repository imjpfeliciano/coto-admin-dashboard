import styled from "styled-components";
import theme from "../../utils/theme";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const SidebarContainer = styled.div`
  background-color: ${theme.colors.white};
  width: 20%;
  border-left: 1px solid ${theme.colors.divider};
  padding: 1rem;
`;

export const HeaderContainer = styled.div`
  background-color: ${theme.colors.primary};
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid ${theme.colors.divider};
  padding: 1rem;
`;

export const ContentContainer = styled.div`
  background-color: ${theme.colors.bgColor};
  width: 80%;
  padding: 2rem;
`;

export const MainViewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 90%;
`;

export const FooterContainer = styled.div`
  background-color: ${theme.colors.darkPrimary};
  width: 100%;
  height: 4rem;
`;

const Layout = () => {
  return (
    <>
      <LayoutContainer>
        <HeaderContainer>header</HeaderContainer>
        <MainViewContainer>
          <SidebarContainer>sidebar</SidebarContainer>
          <ContentContainer>content</ContentContainer>
        </MainViewContainer>
        {/* <FooterContainer>footer</FooterContainer> */}
      </LayoutContainer>
    </>
  );
};

export default Layout;
