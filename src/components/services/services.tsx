import React from 'react'
import styles from "./services.module.css"
import cards from "./cards"
import Card from './card/card'
import Image from 'next/image'
import servicesBg from "../../public/assets/images/services-bg.png"

const Services = () => {
  return (
    <section className={styles.services}>
        <Image src={servicesBg} alt='Service bg'></Image>
        {
            cards.map((card) => {
                return(
                    <Card key={card.id}>
                        <div className={styles.cardImg}>
                            <Image src={card.src} alt={card.title}></Image>
                        </div>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </Card>
                )
            })
        }
    </section>
  )
}

export default Services