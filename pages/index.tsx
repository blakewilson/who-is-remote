import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import CompanyItem from "../components/companyItem";
import CompanyList from "../components/companyList";
import Intro from "../components/intro";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Who is Remote? - Companies with a Permanent WFH Policy</title>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-81413905-3"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'UA-81413905-3');
              `,
          }}
        />
      </Head>

      <Header />

      <Intro />

      <CompanyList />

      <Footer />
    </div>
  );
}
