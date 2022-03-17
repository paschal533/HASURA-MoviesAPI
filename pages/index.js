//import { useSession } from "next-auth/react";
import Head from "next/head";
import Home from "../components/Home";
//import Loader from "../components/Loader";

export default function HomePage() {
  /*const { status } = useSession({
    required: true,
  });

  // Loading animation...
  if (status === "loading") {
    return <Loader />;
  }*/

  return (
    <div className="">
      <Head>
        <title>MovieAPI - HOME</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
}
