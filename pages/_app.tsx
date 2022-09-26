import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  LayoutContainer,
  HeaderContainer,
  MainViewContainer,
  SidebarContainer,
  ContentContainer,
} from "../components/Layout";
import Sidebar from "../containers/Sidebar";
import SidebarRoutes from "../constants/sidebar";
import Breadcum from "../components/Breadcum";
import { CardTitle } from "../components/Card";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <LayoutContainer>
        <HeaderContainer>header</HeaderContainer>
        <MainViewContainer>
          <SidebarContainer>
            <Sidebar options={SidebarRoutes} />
          </SidebarContainer>
          <ContentContainer>
            <CardTitle>Admin Dashboard</CardTitle>
            <Breadcum />
            <Component {...pageProps} />
          </ContentContainer>
        </MainViewContainer>
        {/* <FooterContainer>footer</FooterContainer> */}
      </LayoutContainer>
      <div className="modal-root"></div>
    </>
  );
}

export default MyApp;
