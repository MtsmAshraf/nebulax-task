import React from 'react'
import styles from "./hero.module.css"
import Image from 'next/image'
import hero from "../../public/assets/images/hero.png"
import user1 from "../../public/assets/images/profile-1.jpeg"
const Hero = () => {
  return (
    <section className={styles.hero}>
        <div className={styles.imgCard}>
            <div className={styles.img}>
                <Image src={hero} alt='Black male smiling' loading='lazy'></Image>
            </div>
            <div className={styles.card}>
                <Image src={user1} alt='Black male smiling user image' loading='lazy'></Image>
            </div>
        </div>
    </section>
  )
}

export default Hero