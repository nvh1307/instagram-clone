import type { NextPage } from "next";
import Head from "next/head";
import { Header, Navigation, NormalGrid, ReverseGrid } from "../../components";

const SearchPage: NextPage = () => {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Instagram </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* explore main  */}
      <main className="container mt-11 md:mt-14 h-screen lg:max-w-[935px]">
        <div className="mx-[2px] md:px-5 md:py-6  h-full">
          <NormalGrid />
          <ReverseGrid />
          <NormalGrid />
          <ReverseGrid />
          <NormalGrid />
          <ReverseGrid />
        </div>
      </main>
      <Navigation />
    </div>
  );
};
export default SearchPage;
