import styles from './css/style.module.css';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import WrapperPrevFilms from '../../components/listPrevFilms/wrapper/WrapperPrevFilms';


// Здесь нужный state передаем в компонент

export default function FavoritesPage() {
  const { films } = useSelector( state => state.favoriteFilms);
  const navigate = useNavigate();

  const handler = () => {
    navigate(-1);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.back} onClick={handler}>Back</div>
      <WrapperPrevFilms data={films} />
    </div>
  )
}
