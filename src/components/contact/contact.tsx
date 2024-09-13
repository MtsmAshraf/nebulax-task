import React from 'react'
import styles from "./contact.module.css"
import Form from './form/form'
import formImg from "../../public/assets/images/form-img-nobg.png"
import Image from 'next/image'
const Contact = () => {
  return (
    <section className={styles.contact}>
        <div className="container">
          <div>
              <Form></Form>
          </div>
          <div>
              <Image loading='lazy' src={formImg} alt='Black male with glasses smiling'></Image>
          </div>
        </div>
    </section>
  )
}

export default Contact