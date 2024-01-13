import styles from './css/style.module.css';

import { useSelector } from 'react-redux';

import Poster from '../poster/Poster';
import Description from '../description/wrapper/Description';
import Genre from '../description/genre/Genre'
import ImdbRating from '../description/imdbRating/ImdbRating';
import Runtime from '../description/runtime/Runtime';
import Title from '../description/title/Title';
import Year from '../description/year/Year';
import Director from '../description/director/Director';
import Actors from '../description/actors/Actors';

export default function AboutFilm({data}) {
  const { loading } = useSelector( state => state.aboutFilm )

  return (
    <div className={styles.wrapper}> 
      { loading && <div className={styles.loading}>Wait please! Loading...</div> }
      {data && 
      <>
        <Poster data={data.Poster} />
        <Description>
          <div className={styles.wrTitle}>
              <Title data={data.Title} />
              <Year data={data.Year} />
          </div>
          <ImdbRating data={data.imdbRating} />
          <Genre data={data.Genre} />
          <Runtime data={data.Runtime} />
          <Director data={data.Director} />
          <Actors data={data.Actors} />
        </Description>
      </>
      }
    </div>
  )
}
