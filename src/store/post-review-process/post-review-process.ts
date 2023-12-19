import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { PostingReviewProcess } from '../../types/state';
import { postReview } from '../api-actions';

const initialState: PostingReviewProcess = {
  isFormReviewSubmitting: false,
};

export const postingReviewProcess = createSlice({
  name: NameSpace.PostingReview,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postReview.pending, (state) => {
        state.isFormReviewSubmitting = true;
      })
      .addCase(postReview.fulfilled, (state) => {
        state.isFormReviewSubmitting = false;
      })
      .addCase(postReview.rejected, (state) => {
        state.isFormReviewSubmitting = false;
      });
  }
});
