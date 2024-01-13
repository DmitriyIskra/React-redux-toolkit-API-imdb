import { useEffect } from "react";
import { useSelector } from "react-redux";

function redrawFavoriteStars(styles, listFilms) {
    const arr = [...document.querySelectorAll('[data-type=addFavorites]')];
    if(Array.isArray(arr) && listFilms) {
        arr.forEach( item => {
            const result = listFilms.some( film => film.imdbID === item.id);
            if(result) item.classList.add(`${styles.addFavorites_active}`)
        })
    }
}

// Хук меняет внешний вид звезды на карточке при добавлении или удалении 
// фильма в/из избранного
export default function useFavoriteStar(styles) {
    const { films: favoriteFilms } = useSelector( state => state.favoriteFilms );
    const { films } = useSelector( state => state.listFilms );
    

    // ПРИ ЗАГРУЗКЕ НОВОГО СПИСКА БЕЗ ИЗМЕНЕНИЯ СТРАНИЦЫ
    useEffect(() => {
        redrawFavoriteStars(styles, favoriteFilms)
    }, [films])


    // ПРИ ИЗМЕНЕНИИ ИЗБРАННОГО
    // отмечаем звезды для фильмов которые в избранном золотым,
    // или наоборот меняем на обычную звезду если убираем из избранного
    //  если просто меняется избранное без захода новых данных (не было запроса
    // на новый список фильмов работаем со старым списком)
    useEffect(() => {
        redrawFavoriteStars(styles, favoriteFilms)
    }, [favoriteFilms])
}