import cn from 'classnames';
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
        <li key={genre} className={cn('catalog__genres-item', {'catalog__genres-item--active': activeGenre === genre})}>
          <a onClick={() => {
            onGenreClick();
            dispatch(changeActiveGenre(genre));
          }} className="catalog__genres-link"
          >{genre}
          </a>
        </li>
      ))}
    </ul>
  );
}
