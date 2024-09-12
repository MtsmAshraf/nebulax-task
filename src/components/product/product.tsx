import React from 'react'
import styles from "./product.module.css"
const Product = ({
    children,
    color
}: 
{
    children: React.ReactNode,
    color: string
}) => {
  return (
    <div className={color === "main" ? styles.product + " " + styles.main : styles.product + " " + styles.sec }>
        {children}
    </div>
  )
}

export default Product