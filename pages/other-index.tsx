import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomePageContainer from "../containers/HomePage";

interface HomeProps {
  appName: string;
}

// localhost:3000/
const Home: NextPage<HomeProps> = ({ appName }) => {
  return <HomePageContainer />;
};

export default Home;
