import { type NextPage } from "next";
import Head from "next/head";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import LatestVideo from "~/components/LatestVideo";
import Sponsors from "~/components/Sponsors";
import TheCrew from "~/components/TheCrew";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>KoulTime</title>
        <meta name="description" content="The Best Youtube Channel in Tunisia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-[100svh]">
        <Header />
        <LatestVideo />
        <TheCrew />
        <Sponsors />
        <Footer />
      </div>
    </>
  );
};

export default Home;
