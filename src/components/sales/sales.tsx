"use client"
import React, { useEffect, useState } from 'react'
import styles from './sales.module.css'
import MainHeading from '../mainHeading/mainHeading'
import MainButton from '../mainButton/mainButton'
import SalesCard from './salesCard/salesCard'
import Image from 'next/image'
import users from "./users"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'


const Sales = () => {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
      const salesSection: any = document.querySelector("#sales");
      window.addEventListener("scroll", () => {
        if(window.scrollY >= salesSection.offsetTop - 700){
            setLoaded(true)
          }
      })
    }, [loaded])
  return (
    <section id='sales' className={styles.sales}>
        <div className="container">
            <div className={styles.cards}>
                {
                    users.map((user) => {
                        return(
                            <SalesCard key={user.id} animate={loaded}>
                                
                                <div>
                                    <Image src={user.src} alt={`user ${user.id} profile picture`}></Image>
                                </div>
                                <div>
                                    <div>
                                        <h4>
                                            ${user.profit}
                                        </h4>
                                        <span>
                                            <FontAwesomeIcon icon={faCaretUp}></FontAwesomeIcon>
                                        </span>
                                    </div>
                                    <div>
                                        <p>Total Revenue</p>
                                        <span>
                                            +${user.revenue}
                                        </span>
                                    </div>
                                </div>
                                <span></span>
                                <div>
                                    <Image loading='lazy' src={user.lineSrc} alt='line'></Image>
                                </div>
                            </SalesCard>
                        )
                    })
                }
            </div>
            <MainHeading animate={loaded}>
                <span>
                    WHAT WE DO
                </span>
                <h2>
                    Increase our Customers Sales
                </h2>
                <p>
                    Our customers are seeing big results within the first three months
                </p>
                <MainButton></MainButton>
            </MainHeading>
        </div>
    </section>
  )
}

export default Sales