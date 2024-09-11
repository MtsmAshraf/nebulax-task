import React from 'react'
import styles from "./products.module.css"
import MainHeading from '../mainHeading/mainHeading'
import MainButton from '../mainButton/mainButton'
import Product from '../product/product'
import chair from "../../public/assets/images/chair.png"
import headset from "../../public/assets/images/headset.png"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faDollar } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'


const Products = () => {
  return (
    <section className={styles.products}>
        <MainHeading>
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
        <div>
            <Product>
                <Image src={chair} alt="Orange Chair"></Image>
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
            </Product>
            <Product>
                <Image src={headset} alt="Headset"></Image>
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
            </Product>
        </div>
    </section>
  )
}

export default Products