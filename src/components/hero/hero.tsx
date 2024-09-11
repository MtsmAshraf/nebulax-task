import React from 'react'
import styles from "./hero.module.css"
import Image from 'next/image'
import hero from "../../public/assets/images/hero.png"
import user1 from "../../public/assets/images/profile-1.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const Hero = () => {
  return (
    <section className={styles.hero}>
        <div className={styles.imgCard}>
            <div className={styles.img}>
                <Image src={hero} alt='Black male smiling' loading='lazy'></Image>
            </div>
            <div className={styles.card}>
                <div className={styles.cardImg}>
                    <Image src={user1} alt='Black male smiling user image' loading='lazy'></Image>
                </div>
                <div className={styles.cardText}>
                    <h3>James Bruno</h3>
                    <span>Digital Marketer</span>
                </div>
            </div>
        </div>
        <div className={styles.text}>
            <h1>We Help You Build & Grow Online Business</h1>
            <form>
                <div className={styles.searchBox}>
                    <input type="search" placeholder='Tell us what you need to build...'/>
                    <button>
                        {/* search */}
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Hero