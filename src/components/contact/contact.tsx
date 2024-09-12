import React from 'react'
import styles from "./contact.module.css"
import Form from './form/form'
import formImg from "../../public/assets/images/form-img-nobg.png"
import Image from 'next/image'
const Contact = () => {
  return (
    <section className={styles.contact}>
        <div>
            <Form></Form>
        </div>
        <div>
            <Image src={formImg} alt='Black male with glasses smiling'></Image>
        </div>
    </section>
  )
}

export default Contact