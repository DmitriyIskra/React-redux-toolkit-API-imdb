import styles from './css/style.module.css';

export default function Description({children}) {
  return (
    <div className={styles.wrapper}>
        {children}
    </div>
  )
}
