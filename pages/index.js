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
        <Header title="Results" />
        <hr />
        <p className="description">
          Click on each heading to view the changes
        </p>

        <div className="container">
          <h1>Redirection Links</h1>
          <ul>
            <li><a href="/results/fulldoc">
            <div className="link-card">
                  <h2>Full document</h2>
                </div>
            </a></li>
            <li>
              <a href="/results/res1">
                <div className="link-card">
                  <h2>C. Direct Supervision of Certain Cardiac and Pulmonary Rehabilitation Services by Interactive Communications Technology</h2>
                </div>
              </a>
            </li>
            <li><a href="/results/res2">
            <div className="link-card">
                  <h2>E. Supervision by Nonphysician Practitioners of Hospital and CAH Diagnostic Services Furnished to Outpatients</h2>
                </div>
            </a></li>
            <li><a href="/results/res3">
            <div className="link-card">
                  <h2>PART 410—SUPPLEMENTARY MEDICAL INSURANCE (SMI) BENEFITS</h2>
                </div>
            </a></li>
            <li><a href="/results/res4">
            <div className="link-card">
                  <h2>410.27 – Proposed Language Changes</h2>
                </div>
            </a></li>
            <li><a href="/results/res5">
            <div className="link-card">
                  <h2>410.28 – Proposed Language Changes</h2>
                </div>
            </a></li>
          </ul>
        </div>

      </main>
      <Footer />
    </div>
  );
}
