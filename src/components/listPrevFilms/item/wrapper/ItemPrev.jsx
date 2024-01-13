import styles from './css/style.module.css';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilm } from '../../../../redux/aboutFilmSlice';
import { addFavotiteFilms, removeFavotiteFilms } from '../../../../redux/favoritesFilmsSlice';


export default function ItemPrev({children, id}) {
  const dispatch = useDispatch();
  const { films } = useSelector( state => state.listFilms );
  const { films: favoriteFilms } = useSelector( state => state.favoriteFilms )

  const handlerFav = (e) => {
    const element = e.target.offsetParent;
    let film = null;

    // сначала поищем в избранном если фильм найден отправляем
    // на удаление (так как произошел повторный клик)
    film = favoriteFilms.find( item => item.imdbID === e.target.id);
    if(film) {
      dispatch(removeFavotiteFilms(film));
      return;
    }

    // если в избранном не найдено ищем в свежем загруженном списке 
    // и отправляем на добавление
    const list = films.Search;

    film = list.find( item => item.imdbID === e.target.id);
    
    dispatch(addFavotiteFilms(film));
  }

  // при открытии страницы с информацией о фильме
  // прежний фильм (информацию очищаем)
  const handler = () => {
    dispatch(clearFilm()); 
  }

  return (
    <li className={styles.item}>
      {children}
      <Link className={styles.link} to={`/films/${id}`} onClick={handler}></Link>
      <div id={id} className={styles.addFavorites} data-type='addFavorites' onClick={handlerFav}></div>
    </li>
  )
}
