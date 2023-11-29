import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { Film } from './films';
import { PreviewFilm } from './preview-film';
import { PromoFilm } from './promo';
import { Review } from './reviews';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type FilmData = {
  films: PreviewFilm[];
  isFilmsDataLoading: boolean;
  currentFilm?: Film;
  isFilmDataLoading: boolean;
  promoFilm?: PromoFilm;
  isPromoFilmLoading: boolean;
  currentSimilarFilms: PreviewFilm[];
  isSimilarFilmsLoading: boolean;
}

export type ReviewData = {
  currentFilmReviews: Review[];
  isFilmReviewsLoading: boolean;
}

export type GenreProcess = {
  genre: string;
}

export type MyFilmProcess = {
  favoriteFilms: PreviewFilm[];
  favoriteFilmCount: number;
  isFavoriteFilmsLoading: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
