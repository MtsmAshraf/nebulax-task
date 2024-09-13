import React from 'react'
import styles from "./sales-card.module.css"
const SalesCard = ({
    children,
    animate
}: {
    children: React.ReactNode,
    animate: boolean
}) => {
  return (
    <div className={animate ? styles.salesCard + " " + styles.loaded : styles.salesCard}>
        {children}
    </div>
  )
}

export default SalesCard