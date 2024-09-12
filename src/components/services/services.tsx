import React from 'react'
import styles from "./services.module.css"
import cards from "./cards"
import Card from './card/card'
import Image from 'next/image'

const Services = () => {
  return (
    <section className={styles.services}>
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