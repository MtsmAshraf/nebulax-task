import React from 'react'
import styles from "./header.module.css"
import logo from "../../public/assets/images/logo.svg"
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (
    <header className={styles.header}>
        <div className="container">
            <div className={styles.logo}>
                <Link href={"/"}>
                    <Image src={logo} alt='logo'></Image>
                </Link>
            </div>
            <div className={styles.btns}>
                <Link href={"/"}>
                    Get Started Now
                </Link>
                <Link href={"/"}>
                    Login
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header