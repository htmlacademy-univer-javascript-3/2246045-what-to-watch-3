import {createAction} from '@reduxjs/toolkit';
//import { Film } from '../types/film';

export const changeGenre = createAction<{genre: string}>('main/changeGenre');
export const gettingFilmsList = createAction<{genre: string}>('main/gettingFilmsList');
