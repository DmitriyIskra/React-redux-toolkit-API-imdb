import styles from './css/style.module.css';

import { v4 } from 'uuid';

import ListPrev from '../list/ListPrev';
import ItemPrev from '../item/wrapper/ItemPrev';
import PosterPrev from '../item/poster/PosterPrev';
import DescriptionPrev from '../item/description/wrapper/DescriptionPrev';
import TitlePrev from '../item/description/title/TitlePrev';
import YearPrev from '../item/description/year/YearPrev';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import useFavoriteStar from '../../../hooks/useFavoriteStar';

export default function WrapperPrevFilms({data}) {
  const { loading } = useSelector( state => state.listFilms);
  useFavoriteStar(styles);
  
  return (
    <div className={styles.wrapper}>
        {loading && <div className={styles.preloader}>Wait please! Loading...</div>}
        <ListPrev>
          {data ? ( 
            data.map(item => {
              return (
                <ItemPrev key={v4()} id={item.imdbID}>
                  <PosterPrev data={item.Poster} />
                  <DescriptionPrev>
                    <YearPrev data={item.Year} />
                    <TitlePrev data={item.Title} />
                  </DescriptionPrev>
                </ItemPrev>
              )
            })
          ) : (
            <li className={styles.notFound}>Movie not found</li>
          )
          }
        </ListPrev>
    </div>
  )
}
