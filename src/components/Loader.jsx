import React from 'react'
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circular}></div>
    </div>
  )
}

export default Loader