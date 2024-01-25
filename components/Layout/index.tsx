import styled from 'styled-components'
import theme from '../../utils/theme'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`

export const SidebarContainer = styled.div`
  background-color: ${theme.colors.sidebarBg};
  width: 20%;
`

export const HeaderContainer = styled.div`
  background-color: ${theme.colors.white};
  color: ${theme.colors.primaryText};
  width: 100%;
  height: 4rem;
  padding: 1rem;

  box-shadow: 0 2px 2px -2px ${theme.colors.divider};
`

export const ContentContainer = styled.div`
  background-color: ${theme.colors.bgColor};
  width: 80%;
`

export const Content = styled.div`
  padding: 2rem;
`

export const MainViewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
`

export const FooterContainer = styled.div`
  background-color: ${theme.colors.darkPrimary};
  width: 100%;
  height: 4rem;
`

const Layout = () => {
  return (
    <>
      <LayoutContainer>
        <MainViewContainer>
          <SidebarContainer>sidebar</SidebarContainer>
          <HeaderContainer>header</HeaderContainer>
          <ContentContainer>content</ContentContainer>
        </MainViewContainer>
        {/* <FooterContainer>footer</FooterContainer> */}
      </LayoutContainer>
    </>
  )
}

export default Layout
