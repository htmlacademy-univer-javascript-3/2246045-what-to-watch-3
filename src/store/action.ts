import {createAction} from '@reduxjs/toolkit';
//import { Film } from '../types/film';

export const setGenre = createAction<{genre: string}>('main/setGenre');
