import { useAppSelector } from '.';
import { getFilms } from '../../store/film-data/selectors';
import { filterFilms } from '../../utils/filter-by-genre';

export const useFilmsByGenre = (genre: string) => filterFilms(useAppSelector(getFilms), genre);
