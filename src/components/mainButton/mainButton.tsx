import React from 'react'
import styles from "./main-button.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
const MainButton = () => {
  return (
    <div className={styles.MainButton}>
        <span>
            MORE DETAILS
        </span>
        <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
    </div>
  )
}

export default MainButton