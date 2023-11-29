import { useAppSelector } from '.';
import { PreviewFilm } from '../../types/preview-film';
import { filterFilms } from '../../filter';

export const useFilmsByGenre = (genre: string) => useAppSelector((state) => filterFilms(state.films as PreviewFilm[], genre));
