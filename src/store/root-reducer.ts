import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process';
import { filmData } from './film-data/film-data';
import { genreProcess } from './genres-data/genres-data';
import { reviewData } from './review-data/review-data';
import { myListProcess } from './my-list-process/my-list-process';
import { postingReviewProcess } from './post-review-process/post-review-process';

export const rootReducer = combineReducers({
  [NameSpace.Genre]: genreProcess.reducer,
  [NameSpace.Film]: filmData.reducer,
  [NameSpace.Review]: reviewData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.MyList]: myListProcess.reducer,
  [NameSpace.PostingReview]: postingReviewProcess.reducer,
});
