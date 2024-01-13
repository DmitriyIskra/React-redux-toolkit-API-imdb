import styles from './css/style.module.css';

import React from 'react'

export default function ListPrev({children}) {
  return (
    <ul className={styles.list}>
      {children}
    </ul>
  )
}
