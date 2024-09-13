import React from 'react'
import styles from "./form.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons'
const Form = ({
  animate
}: {
  animate: boolean
}) => {
  return (
    <form className={animate ? styles.form + " " + styles.loaded : styles.form}>
        <h2>Write Us</h2>
        <div>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            <input type="email" placeholder='Your email'/>
        </div>
        <div>
            <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
            <textarea placeholder='Enter your message'></textarea>
        </div>
        <button>
            send your message
        </button>
    </form>
  )
}

export default Form