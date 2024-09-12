import React from 'react'
import styles from './sales.module.css'
import MainHeading from '../mainHeading/mainHeading'
import MainButton from '../mainButton/mainButton'
import SalesCard from './salesCard/salesCard'
import Image from 'next/image'
import users from "./users"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'


const Sales = () => {
  return (
    <section className={styles.sales}>
        <div className={styles.cards}>
            {
                users.map((user) => {
                    return(
                        <SalesCard key={user.id}>
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
                        </SalesCard>
                    )
                })
            }
        </div>
        <MainHeading>
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
    </section>
  )
}

export default Sales