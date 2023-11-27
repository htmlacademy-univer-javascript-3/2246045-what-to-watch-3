import { DEFAULT_FILTER } from './const';
import { FilmSmall } from './components/pages/main-page/film-list-props';

export const filterFilms = (films: FilmSmall[], genre: string) => {
  if (genre === DEFAULT_FILTER) {
    return (films);
  }
  return films.filter((film) => film.genre === genre);
};
