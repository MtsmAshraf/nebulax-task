import React from 'react'
import styles from "./clients.module.css"
import Image from 'next/image'
import logo1 from "../../public/assets/images/media-24.jpg"
import logo2 from "../../public/assets/images/westin-1.jpg"
import logo3 from "../../public/assets/images/icom.png"
import logo4 from "../../public/assets/images/smart.png"
import logo5 from "../../public/assets/images/one-line.jpg"


const Clients = () => {
  return (
    <section className={styles.clients}>
        <p>Companies we've helped build</p>
        <div className={styles.logos}>
            <div className={styles.img}>
                <Image src={logo1} alt='media 24 logo'></Image>
            </div>
            <div className={styles.img}>
                <Image src={logo3} alt='icom logo'></Image>
            </div>
            <div className={styles.img}>
                <Image src={logo2} alt='westin 1 logo'></Image>
            </div>
            <div className={styles.img}>
                <Image src={logo4} alt='smart logo'></Image>
            </div>
            <div className={styles.img}>
                <Image src={logo5} alt='one line logo'></Image>
            </div>
        </div>
    </section>
  )
}

export default Clients