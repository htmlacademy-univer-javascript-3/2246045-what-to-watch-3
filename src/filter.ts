import { DEFAULT_FILTER } from './const';
import { Film } from './mocks/films';

export const filterFilms = (films: Film[], genre: string) => {
  if (genre === DEFAULT_FILTER) {
    return (films);
  }
  return films.filter((film) => film.genre === genre);
};
