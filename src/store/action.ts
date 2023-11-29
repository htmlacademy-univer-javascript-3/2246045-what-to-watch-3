import { createAction } from '@reduxjs/toolkit';
import { PreviewFilm } from '../types/preview-film';
import { AuthorizationStatus } from '../const';
import { Film } from '../types/films';
import { Review } from '../types/reviews';

export const changeActiveGenre = createAction<{ genre: string }>('app/changeActiveGenre');

export const loadFilms = createAction<PreviewFilm[]>('data/loadFilms');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');

export const setFilmDataLoadingStatus = createAction<boolean>('data/setFilmDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<string>('app/redirectToRoute');

export const loadFilm = createAction<Film>('data/loadFilm');

export const setSimilarFilmsDataLoadingStatus = createAction<boolean>('data/setSimilarFilmsDataLoadingStatus');

export const loadSimilarFilms = createAction<PreviewFilm[]>('data/loadSimilarFilms');

export const loadFilmReviews = createAction<Review[]>('data/loadFilmReviews');
