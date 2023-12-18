import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ReviewData } from '../../types/state';
import { fetchFilmReviewsAction } from '../api-actions';

const initialState: ReviewData = {
  currentFilmReviews: [],
  isCurrentFilmReviewsLoading: false,
};

export const reviewData = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmReviewsAction.pending, (state) => {
        state.isCurrentFilmReviewsLoading = true;
      })
      .addCase(fetchFilmReviewsAction.fulfilled, (state, action) => {
        state.currentFilmReviews = action.payload;
        state.isCurrentFilmReviewsLoading = false;
      });
  }
});
