import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Result1 from "@components/Result1";

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
          This is a comparision between the docs:
          <br/>
          <b> Proposed Rule - 2022-15372 </b>
           and 
           <b> Final Rule - 2022-23918 </b>
           
        </p>
        
      </main>
      <div class="content">
      <Result1/>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
