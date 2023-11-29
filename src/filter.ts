import { DEFAULT_FILTER } from './const';
import { PreviewFilm } from './types/preview-film';

export const filterFilms = (films: PreviewFilm[], genre: string) => {
  if (genre === DEFAULT_FILTER) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};
