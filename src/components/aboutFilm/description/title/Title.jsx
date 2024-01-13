import styles from './css/style.module.css';

import React from 'react'

export default function Title({data}) {
  return (
    <h3 className={styles.title}>{data}</h3>
  )
}
