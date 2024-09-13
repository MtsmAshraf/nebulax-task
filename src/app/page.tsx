import styles from "./page.module.css";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Clients from "@/components/clients/clients";
import Products from "@/components/products/products";
import Services from "@/components/services/services";
import Sales from "@/components/sales/sales";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main className={styles.page}>
      {/* <Image loading="lazy" src={heroBg} alt='Hero section background shape'></Image> */}
      {/* <Image loading="lazy" src={servicesBg} alt='Service bg'></Image> */}
      <Header></Header>
      <Hero></Hero>
      <Clients></Clients>
      <Products></Products>
      <Services></Services>
      <Sales></Sales>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}
