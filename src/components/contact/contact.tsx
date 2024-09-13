"use client"
import React, { useEffect, useState } from 'react'
import styles from "./contact.module.css"
import Form from './form/form'
import formImg from "../../public/assets/images/form-img-nobg.png"
import Image from 'next/image'
const Contact = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const contactSection: any = document.querySelector("#contact");
    window.addEventListener("scroll", () => {
      if(window.scrollY >= contactSection.offsetTop - 700){
        setLoaded(true)
        console.log("CONTAC LOAD")
      }
    })
  }, [loaded])
  return (
    <section id="contact" className={loaded ? styles.contact + " " + styles.loaded : styles.contact}>
        <div className="container">
          <div>
              <Form animate={loaded}></Form>
          </div>
          <div>
              <Image loading='lazy' src={formImg} alt='Black male with glasses smiling'></Image>
          </div>
        </div>
    </section>
  )
}

export default Contact