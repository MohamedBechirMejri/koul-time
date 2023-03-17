import { type NextPage } from "next";
import Head from "next/head";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Merch | KoulTime</title>
        <meta name="description" content="Koul time merchandise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center justify-between">
        <Header />
        <h1 className="text-5xl">Soon..</h1>
        <Footer />
      </div>
    </>
  );
};

export default Home;
