import React from 'react'
import styles from "./product.module.css"
const Product = ({
    children
}: 
{
    children: React.ReactNode
}) => {
  return (
    <div className={styles.product}>
        {children}
    </div>
  )
}

export default Product