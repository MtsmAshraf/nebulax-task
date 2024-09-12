import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Clients from "@/components/clients/clients";
import Products from "@/components/products/products";
import Services from "@/components/services/services";
import Sales from "@/components/sales/sales";
import Contact from "@/components/contact/contact";
import heroBg from "../public/assets/images/hero-bg.svg"

export default function Home() {
  return (
    <main className={styles.page}>
      <Image src={heroBg} alt='Hero section background shape'></Image>
      <div className="container">
        <Header></Header>
        <Hero></Hero>
        <Clients></Clients>
        <Products></Products>
        <Services></Services>
        <Sales></Sales>
        <Contact></Contact>
      </div>
    </main>
  );
}
