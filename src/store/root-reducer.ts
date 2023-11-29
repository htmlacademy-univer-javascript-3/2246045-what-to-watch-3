import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-data/user-data';
import { filmData } from './film-data/film-data';
import { genreProcess } from './genres-data/genres-data';
import { reviewData } from './review-data/review-data';
import { myListProcess } from './my-list-data/my-list-data';

export const rootReducer = combineReducers({
  [NameSpace.Genre]: genreProcess.reducer,
  [NameSpace.Film]: filmData.reducer,
  [NameSpace.Review]: reviewData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.MyList]: myListProcess.reducer,
});
