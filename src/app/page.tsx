import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Clients from "@/components/clients/clients";
import Products from "@/components/products/products";
import Services from "@/components/services/services";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className="container">
        <Header></Header>
        <Hero></Hero>
        <Clients></Clients>
        <Products></Products>
        <Services></Services>
      </div>
    </main>
  );
}
