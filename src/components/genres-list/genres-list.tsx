import { Link } from 'react-router-dom';
import { Film } from '../../mocks/films';
import cn from 'classnames';
import {useAppDispatch, useAppSelector} from '../hooks';
import {changeGenre, gettingFilmsList} from '../../store/action';
import { DEFAULT_FILTER } from '../../const';
import Catalog from '../catalog/catalog';

type GenresListProps = {
  films: Film[];
}

const makeFilmsGenresArray = (films: Film[]) => {
  const filmsGenres = films.map((film) => film.genre);
  filmsGenres.unshift(DEFAULT_FILTER);
  const uniqSet = new Set(filmsGenres);
  return [...uniqSet];
};

function GenresList(props: GenresListProps): JSX.Element {
  const genre = useAppSelector((state) => state.genre);
  const filteredFilmList = useAppSelector((state) => state.filmsList);
  const dispatch = useAppDispatch();
  return (
    <>
      <ul className="catalog__genres-list">
        {makeFilmsGenresArray(props.films).map((filmsGenre) => (
          <li className={cn('catalog__genres-item', { 'catalog__genres-item--active': genre === filmsGenre })} key={filmsGenre}>
            <Link to='' className="catalog__genres-link" onClick={() => {
              dispatch(changeGenre({ genre: filmsGenre }));
              dispatch(gettingFilmsList({ genre: filmsGenre }));
            } }
            >{filmsGenre}
            </Link>
          </li>
        ))}
      </ul>
      <div className="catalog__films-list">
        <Catalog films={filteredFilmList} />
      </div>
    </>
  );
}

export default GenresList;
