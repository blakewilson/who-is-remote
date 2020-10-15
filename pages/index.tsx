import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import CompanyItem from "../components/companyItem";
import CompanyList from "../components/companyList";
import Intro from "../components/intro";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="container mx-auto px-2">
      <Header />

      <Intro />

      <CompanyList />

      <Footer />
    </div>
  );
}
