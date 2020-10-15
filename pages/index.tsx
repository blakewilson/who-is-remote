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

        <meta
          name="title"
          content="Who is Remote? - All Companies with a Permanent WFH Policy"
        />
        <meta
          name="description"
          content="Who is Remote gives you a list of all of the companies who have announced a permanent WFH/Remote Policy."
        />

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
