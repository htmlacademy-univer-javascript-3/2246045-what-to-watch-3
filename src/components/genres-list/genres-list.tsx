import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeActiveGenre } from '../../store/genres-data/genres-data';
import { getActiveGenre } from '../../store/genres-data/selectors';

type GenreListProps = {
  genres: string[];
  onGenreClick: () => void;
}

export default function GenreList({genres, onGenreClick}: GenreListProps) {
  const activeGenre = useAppSelector(getActiveGenre);
  const dispatch = useAppDispatch();

  return(
    <ul className="catalog__genres-list">
      {genres.map((genre: string) => (
        <li key={genre} data-testid={`tab-${genre}`} className={cn('catalog__genres-item', {'catalog__genres-item--active': activeGenre === genre})}>
          <Link to="#" onClick={() => {
            onGenreClick();
            dispatch(changeActiveGenre(genre));
          }} className="catalog__genres-link"
          >{genre}
          </Link>
        </li>
      ))}
    </ul>
  );
}
