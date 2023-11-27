import { Link } from 'react-router-dom';
import { Films } from '../pages/main-page/film-list-props';
import cn from 'classnames';
import {useAppDispatch, useAppSelector} from '../hooks';
import { setGenre } from '../../store/action';
import { DEFAULT_FILTER, MOVIE_CARDS_COUNT } from '../../const';
import Catalog from '../catalog/catalog';
import { filterFilms } from '../../filter';
import { useState } from 'react';
import ShowMoreButton from '../show-more-button/show-more-button';

type GenresListProps = {
  films: Films;
}

const makeFilmsGenresArray = (films: Films) => {
  const filmsGenres = films.map((film) => film.genre);
  filmsGenres.unshift(DEFAULT_FILTER);
  const uniqSet = new Set(filmsGenres);
  return [...uniqSet];
};

const sliceFilmsList = (filmsList: Films, count: number) => {
  if (filmsList.length > MOVIE_CARDS_COUNT) {
    const slicedFilmsList = filmsList.slice(0, MOVIE_CARDS_COUNT + count);
    return slicedFilmsList;
  }
  return filmsList;
};

function GenresList(props: GenresListProps): JSX.Element {
  const genre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();
  const filteredFilmsList = filterFilms(props.films, genre);
  const[count, setCount] = useState(0);
  const slicedFilms = sliceFilmsList(filteredFilmsList, count);
  const newLength = Math.min(filteredFilmsList.length, slicedFilms.length);
  return (
    <>
      <ul className="catalog__genres-list">
        {makeFilmsGenresArray(props.films).map((filmsGenre) => (
          <li className={cn('catalog__genres-item', { 'catalog__genres-item--active': genre === filmsGenre })} key={filmsGenre}>
            <Link to='' className="catalog__genres-link" onClick={() => {
              dispatch(setGenre({ genre: filmsGenre }));
              setCount(0);
            } }
            >{filmsGenre}
            </Link>
          </li>
        ))}
      </ul>
      <Catalog films={slicedFilms}/>
      {filteredFilmsList.length > slicedFilms.length &&
         <ShowMoreButton onShowMoreButtonClick={() => setCount(newLength)}/>}
    </>
  );
}

export default GenresList;
