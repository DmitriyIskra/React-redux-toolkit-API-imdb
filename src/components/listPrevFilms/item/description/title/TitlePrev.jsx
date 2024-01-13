import styles from './css/style.module.css';

import React from 'react'

export default function TitlePrev({data}) {
  return (
    <h3 className={styles.title}>{data}</h3>
  )
}
