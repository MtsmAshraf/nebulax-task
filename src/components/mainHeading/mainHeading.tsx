"use client"
import React from 'react'
import styles from "./main-heading.module.css"
const MainHeading = ({
    children,
    animate
}: 
{
    children: React.ReactNode,
    animate: boolean,
}) => {
  
  return (
    <div id={`main-heading-${animate}`} className={animate ? styles.mainHeading + " " + styles.loaded : styles.mainHeading}>
        {children}
    </div>
  )
}

export default MainHeading