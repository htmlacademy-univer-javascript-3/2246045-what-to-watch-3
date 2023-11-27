import {createAction} from '@reduxjs/toolkit';
import { FilmSmall } from '../components/pages/main-page/film-list-props';
import { AuthorizationStatus } from '../const';

export const setGenre = createAction<{genre: string}>('main/setGenre');
export const loadFilms = createAction<FilmSmall[]>('data/loadFilms');
export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
