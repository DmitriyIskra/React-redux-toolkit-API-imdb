import styles from './css/style.module.css';

import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAbout } from '../../redux/aboutFilmSlice'; 
import AboutFilm from '../../components/aboutFilm/wrapper/AboutFilm';

export default function FilmPage() {
  const { film } = useSelector( state => state.aboutFilm )
  const dispatch = useDispatch();

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    dispatch(fetchAbout(id))
  }, [])
  
  const navigate = useNavigate();
  const handler = () => navigate(-1)

  return (
    <div className={styles.wrapper}>
      <div className={styles.back} onClick={handler}>Back</div>
      <AboutFilm data={film} />
    </div>
  ) 
}
