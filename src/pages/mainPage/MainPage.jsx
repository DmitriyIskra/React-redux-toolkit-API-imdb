import styles from './css/style.module.css';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Search from '../../components/search/Search';
import WrapperPrevFilms from '../../components/listPrevFilms/wrapper/WrapperPrevFilms';


export default function MainPage() {
  const { films } = useSelector( state => state.listFilms )

  const {Search: data} = films;

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Search />
        <Link className={styles.favor} to={'/films/favorites'}>FAVORITES</Link>
      </header>
      <WrapperPrevFilms data={data} />
    </div>
  )
}
