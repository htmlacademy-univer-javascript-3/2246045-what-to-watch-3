import { name, datatype, random, finance, image, internet } from 'faker';
import { humanizeDate } from './change-date-format';
import { FilmCardProps } from '../components/film-card/film-card';
import { Film } from '../types/films';
import { PreviewFilm } from '../types/preview-film';
import { PromoFilm } from '../types/promo';
import { Review } from '../types/reviews';
import { Action } from '@reduxjs/toolkit';

export const makeFakeReview = (): Review => ({
  filmId: random.alpha({count: 10}),
  id: random.alpha({count: 10}),
  date: humanizeDate(String(datatype.datetime())),
  user: name.firstName(),
  comment: random.words(),
  rating: Number(finance.amount(1, 10, 0)),
});

export const makeFakeSmallFilmCard = (): FilmCardProps => ({
  id: random.alpha({count: 10}),
  name: random.word(),
  previewImage: image.imageUrl(),
  previewVideoLink: internet.url(),
  isPlayingPreviewVideo: false,
  onSmallFilmCardMouseOut: () => '',
  onSmallFilmCardMouseOver: () => '',
});

export const makeFakeFilm = (): Film => ({
  id: random.alpha({count: 10}),
  name: random.word(),
  posterImage: image.imageUrl(),
  backgroundImage: image.imageUrl(),
  backgroundColor: '#ffffff',
  videoLink: internet.url(),
  description: random.words(),
  rating: Number(finance.amount(1, 10, 0)),
  scoresCount: Number(finance.amount(1, 10, 1)),
  director: name.firstName(),
  starring: [name.firstName()],
  runTime: Number(finance.amount(1, 100, 0)),
  genre: random.word(),
  released: Number(finance.amount(1, 100, 0)),
  isFavorite: false,
});

export const makeFakePreviewFilms = (): PreviewFilm[] => ([
  {
    id: random.alpha({count: 10}),
    name: random.word(),
    previewImage: image.imageUrl(),
    previewVideoLink: internet.url(),
    genre: random.word(),
  },
]);

export const makeFakePromoFilm = (): PromoFilm => (
  {
    id: random.alpha({count: 10}),
    name: random.word(),
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
