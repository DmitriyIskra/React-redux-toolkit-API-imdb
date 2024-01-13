import styles from './css/style.module.css';

import React from 'react'

export default function Poster({data}) {
  return (
    <div className={styles.wrapper}>
        <img src={data} alt="..." />
    </div>
  )
}
