import styles from './css/style.module.css';

import React from 'react'

export default function PosterPrev({data}) {
  return (
    <div className={styles.wrapper}>
        <img src={data} alt="..." />
    </div>
  )
}
