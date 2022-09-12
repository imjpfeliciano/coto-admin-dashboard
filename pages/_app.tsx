import "../styles/globals.css";
import Head from "next/head";
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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <LayoutContainer>
        <HeaderContainer>header</HeaderContainer>
        <MainViewContainer>
          <SidebarContainer>
            <Sidebar options={SidebarRoutes} />
          </SidebarContainer>
          <ContentContainer>
            <Component {...pageProps} />
          </ContentContainer>
        </MainViewContainer>
        {/* <FooterContainer>footer</FooterContainer> */}
      </LayoutContainer>
    </>
  );
}

export default MyApp;
