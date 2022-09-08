import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const SidebarContainer = styled.div`
  background-color: #174a6c;
  width: 20%;
`;

const HeaderContainer = styled.div`
  background-color: #000;
  width: 100%;
  height: 4rem;
`;

const ContentContainer = styled.div`
  background-color: #ddd;
  width: 80%;
`;

const MainViewContainer = styled.div`
  /* background-color: #; */
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 90%;
`;

const FooterContainer = styled.div`
  background-color: purple;
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
        <FooterContainer>footer</FooterContainer>
      </LayoutContainer>
    </>
  );
};

export default Layout;
