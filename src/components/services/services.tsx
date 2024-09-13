"use client"
import React, { useEffect, useState } from 'react'
import styles from "./services.module.css"
import cards from "./cards"
import Card from './card/card'
import Image from 'next/image'

const Services = () => {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
      const servicesSection: any = document.querySelector("#services");
      window.addEventListener("scroll", () => {
        if(window.scrollY >= servicesSection.offsetTop - 700){
            setLoaded(true)
          }
      })
    }, [loaded])
  return (
    <section id="services" className={styles.services}>
        <div className="container">
            {
                cards.map((card) => {
                    return(
                        <Card key={card.id} animate={loaded}>
                            <div className={styles.cardImg}>
                                <Image src={card.src} alt={card.title}></Image>
                            </div>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </Card>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Services