import Head from "next/head";
import Result2 from "@components/Result2";

export default function res2() {
  return (
    <div className="container">
      <Head>
        <title>Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Header title="Next.js Toolbox" /> */}
        <hr />
        <p className="description">
          This is a comparision between the docs:
          <br />
          <b> <a href="https://www.federalregister.gov/documents/2022/07/26/2022-15372/medicare-program-hospital-outpatient-prospective-payment-and-ambulatory-surgical-center-payment#h-204">
             Proposed Rule - 2022-15372
          </a> </b>
          and
          <b>
            <a href="https://www.federalregister.gov/documents/2022/11/23/2022-23918/medicare-program-hospital-outpatient-prospective-payment-and-ambulatory-surgical-center-payment#h-257">
             Final Rule - 2022-23918 
            </a> </b>

        </p>

      </main>
      <div className="content">
        {/* <Result1/> */}
        <Result2 />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
