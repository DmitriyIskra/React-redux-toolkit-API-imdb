import styles from './css/style.module.css';

import { useDispatch } from 'react-redux';
import { fetchFilms } from '../../redux/listFilmsSlice'; 

export default function Search() {
    const dispatch = useDispatch();

    const handler = (e) => {
        e.preventDefault();

        const value = e.target.text.value;

        if(!value) {
            e.target.text.classList.add(`${styles.invalidInput}`);
            return;
        };

        e.target.text.classList.remove(`${styles.invalidInput}`);

        dispatch(fetchFilms(value))
    }

    return (
        <form className={styles.form} name={styles.form} onSubmit={handler}>
            <input className={styles.input} type="text" name='text' />
            <button className={styles.button}>SEND</button>
        </form>
    )
}
