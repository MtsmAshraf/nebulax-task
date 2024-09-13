"use client"
import React, { useEffect, useState } from "react"
import styles from "./products.module.css"
import MainHeading from "../mainHeading/mainHeading"
import MainButton from "../mainButton/mainButton"
import Product from "../product/product"
import chair from "../../public/assets/images/chair.png"
import headset from "../../public/assets/images/headset.png"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faDollar } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"


const Products = () => {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
      const productsSection: any = document.querySelector("#products");
      window.addEventListener("scroll", () => {
        if(window.scrollY >= productsSection.offsetTop - 700){
            setLoaded(true)
          }
      })
    }, [loaded])
  return (
    <section id='products' className={loaded ? styles.products + " " + styles.loaded : styles.products}>
        <div className="container">
            <MainHeading animate={loaded}>
                <span>
                    WE HELP YOU
                </span>
                <h2>
                    Sell Stunning Products
                </h2>
                <p>
                    We'll guide you through our unique 5-step brand-building framework
                </p>
                <MainButton />
            </MainHeading>
            <div className={styles.productsCards}>
                <Product color="sec">
                    <span></span>
                    <div>
                        <Image loading="lazy" src={chair} alt="Orange Chair"></Image>
                        <h4>
                            Minimal Chair
                        </h4>
                        <div className={styles.priceDetails}>
                            <div className={styles.price}>
                                <FontAwesomeIcon icon={faDollar}></FontAwesomeIcon>
                                <p>204<span>.00</span></p>
                            </div>
                            <Link href={"/"}>
                                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                            </Link>
                        </div>
                    </div>
                </Product>
                <Product color="main">
                    <span></span>
                    <div>
                        <Image loading="lazy" src={headset} alt="Headset"></Image>
                        <h4>
                            Beats Headphone
                        </h4>
                        <div className={styles.priceDetails}>
                            <div className={styles.price}>
                                <FontAwesomeIcon icon={faDollar}></FontAwesomeIcon>
                                <p>74<span>.00</span></p>
                            </div>
                            <Link href={"/"}>
                                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                            </Link>
                        </div>
                    </div>
                </Product>
            </div>
        </div>
    </section>
  )
}

export default Products