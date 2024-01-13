import styles from './css/style.module.css';

export default function YearPrev({data}) {
  return (
    <h3 className={styles.title}>{data}г.</h3>
  )
}
