import { name, datatype, random, finance, image, internet, commerce } from 'faker';
import { humanizeDate } from './change-date-format';
import { Film } from '../types/films';
import { PreviewFilm } from '../types/preview-film';
import { PromoFilm } from '../types/promo';
import { Review } from '../types/reviews';
import { Action } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { AuthorizationStatus, DEFAULT_FILTER, NameSpace } from '../const';
import { FavoriteFilmPostData } from '../types/favorite-film-data';

export const makeFakeReview = (): Review => ({
  filmId: random.alpha({count: 10}),
  id: random.alpha({count: 10}),
  date: humanizeDate(String(datatype.datetime())),
  user: name.firstName(),
  comment: random.words(),
  rating: Number(finance.amount(1, 10, 0)),
});

export const makeFakeFilm = (): Film => ({
  id: random.alpha({count: 10}),
  name: name.title(),
  posterImage: image.imageUrl(),
  backgroundImage: image.imageUrl(),
  backgroundColor: '#ffffff',
  videoLink: internet.url(),
  description: commerce.productDescription(),
  rating: Number(finance.amount(1, 10, 0)),
  scoresCount: Number(finance.amount(1, 10, 1)),
  director: name.firstName(),
  starring: [name.firstName()],
  runTime: Number(finance.amount(1, 100, 0)),
  genre: random.word(),
  released: Number(finance.amount(1, 100, 0)),
  isFavorite: false,
});

export const makeFakeFavoriteFilmPostData = (): FavoriteFilmPostData => ({
  id: random.alpha({count: 10}),
  name: name.title(),
  posterImage: image.imageUrl(),
  backgroundImage: image.imageUrl(),
  backgroundColor: '#ffffff',
  videoLink: internet.url(),
  description: commerce.productDescription(),
  rating: Number(finance.amount(1, 10, 0)),
  scoresCount: Number(finance.amount(1, 10, 1)),
  director: name.firstName(),
  starring: [name.firstName()],
  runTime: Number(finance.amount(1, 100, 0)),
  genre: random.word(),
  released: Number(finance.amount(1, 100, 0)),
  isFavorite: false,
  previewImage: image.imageUrl(),
  previewVideoLink: internet.url(),
});

export const makeFakePreviewFilms = (): PreviewFilm[] => ([
  {
    id: random.alpha({count: 10}),
    name: name.title(),
    previewImage: image.imageUrl(),
    previewVideoLink: internet.url(),
    genre: random.word(),
  },
]);

export const makeFakePromoFilm = (): PromoFilm => (
  {
    id: random.alpha({count: 10}),
    name: name.title(),
    posterImage: image.imageUrl(),
    backgroundImage: '#ffffff',
    videoLink: internet.url(),
    genre: random.word(),
    released: Number(finance.amount(1, 100, 0)),
    isFavorite: false,
  }
);

export const makeFakeFilmId = (): string => random.alpha({count: 10});

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);


export const makeFakeStore = (initialState?: Partial<State>): State => ({
  [NameSpace.Film]: {
    films: makeFakePreviewFilms(),
    isFilmsLoading: false,
    currentFilm: makeFakeFilm(),
    isCurrentFilmLoading: false,
    promoFilm: makeFakePromoFilm(),
    isPromoFilmLoading: false,
    currentSimilarFilms: makeFakePreviewFilms(),
    isSimilarFilmsLoading: false,
  },
  [NameSpace.Genre]: {
    genre: DEFAULT_FILTER,
  },
  [NameSpace.MyList]: {
    favoriteFilms: [],
    favoriteFilmCount: 0,
    isFavoriteFilmsLoading: false,
  },
  [NameSpace.PostingReview]: {
    isFormReviewSubmitting: false,
  },
  [NameSpace.Review]: {
    currentFilmReviews: [makeFakeReview()],
    isCurrentFilmReviewsLoading: false,
  },
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.NoAuth,
  },
  ...(initialState ?? {}),
});


export const makeFakeAvatarUrl = (): string => internet.url();
