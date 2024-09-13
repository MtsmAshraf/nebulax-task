"use client"
import React from 'react'
import styles from "./card.module.css"
const Card = ({
    children,
    animate
}:{
    children: React.ReactNode,
    animate: boolean
}) => {
  
  return (
    <div id="card" className={animate ? styles.card + " " + styles.loaded : styles.card}>{children}</div>
  )
}

export default Card