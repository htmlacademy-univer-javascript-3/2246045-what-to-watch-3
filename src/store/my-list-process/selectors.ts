import { NameSpace } from '../../const';
import { PreviewFilm } from '../../types/preview-film';
import { State } from '../../types/state';

export const getFavoriteFilms = (state: Pick<State, NameSpace.MyList>): PreviewFilm[] => state[NameSpace.MyList].favoriteFilms;
export const getFavoriteFilmsLoading = (state: Pick<State, NameSpace.MyList>): boolean => state[NameSpace.MyList].isFavoriteFilmsLoading;
export const getFavoriteFilmCount = (state: Pick<State, NameSpace.MyList>): number => state[NameSpace.MyList].favoriteFilmCount;
