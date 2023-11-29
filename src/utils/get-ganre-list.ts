import { DEFAULT_FILTER } from '../const';
import { PreviewFilm } from '../types/preview-film';

export const getGenreList = (films: PreviewFilm[]) => {
  const genreList: string[] = [];
  films.forEach((film) => {
    if (!genreList.includes(film.genre)) {
      genreList.push(film.genre);
    }
  });
  genreList.sort().unshift(DEFAULT_FILTER);
  return genreList;
};
