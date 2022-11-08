import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  LayoutContainer,
  HeaderContainer,
  MainViewContainer,
  SidebarContainer,
  ContentContainer,
  Content,
} from "../components/Layout";
import Sidebar from "../containers/Sidebar";
import SidebarRoutes from "../constants/sidebar";
import Breadcum from "../components/Breadcum";
import { CardTitle } from "../components/Card";
import Navbar from "../containers/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <LayoutContainer>
        <MainViewContainer>
          <SidebarContainer>
            <Sidebar options={SidebarRoutes} />
          </SidebarContainer>

          <ContentContainer>
            <HeaderContainer>
              <Navbar />
            </HeaderContainer>
            <Content>
              <CardTitle>Admin Dashboard</CardTitle>
              <Breadcum />
              <Component {...pageProps} />
            </Content>
          </ContentContainer>
        </MainViewContainer>
        {/* TODO: Add social icons */}
        {/* <FooterContainer>Developed by @imjpfeliciano</FooterContainer> */}
      </LayoutContainer>
      <div className="modal-root"></div>
    </>
  );
}

export default MyApp;
