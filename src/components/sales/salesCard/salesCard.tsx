import React from 'react'
import styles from "./sales-card.module.css"
const SalesCard = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <div className={styles.salesCard}>
        {children}
    </div>
  )
}

export default SalesCard