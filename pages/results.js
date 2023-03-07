import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Toolbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Header title="Next.js Toolbox" /> */}
        <hr />
        <p className="description">
          This is a comparision between doc1 and doc2
        </p>
        
      </main>
      <Footer />
    </div>
  );
}
