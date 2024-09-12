import React from 'react'
import styles from "./main-button.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
const MainButton = () => {
  return (
    <Link href={"/"} className={styles.mainButton}>
        <span>
            MORE DETAILS
        </span>
        <div className={styles.btnIcon}>
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </div>
    </Link>
  )
}

export default MainButton