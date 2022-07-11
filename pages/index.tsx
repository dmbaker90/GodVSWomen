import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Counts from "./counts";
import FAQ from "./faq";
import Footer from "./footer";
import TestPage from "./test";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>God VS Women</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Counts />

      <FAQ />

      <Footer />
    </div>
  );
};

export default Home;
