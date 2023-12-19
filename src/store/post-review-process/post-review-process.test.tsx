import { postReview } from '../api-actions';
import { postingReviewProcess } from './post-review-process';

describe('PostingReviewProcess Slice', () => {
  const initialState = { isFormReviewSubmitting: false };

  describe('return initial state', () => {
    it('with empty action', () => {
      const expectedState = { ...initialState };
      const emptyAction = { type: '' };

      const result = postingReviewProcess.reducer(expectedState, emptyAction);

      expect(result).toEqual(expectedState);
    });

    it('with empty action and undefined state', () => {
      const expectedState = { ...initialState };
      const emptyAction = { type: '' };

      const result = postingReviewProcess.reducer(undefined, emptyAction);

      expect(result).toEqual(expectedState);
    });
  });

  describe('postReview', () => {
    it('set "true" on "isFormReviewSubmitting" with "postReview.pending" action', () => {
      const expectedState = { isFormReviewSubmitting: true };

      const result = postingReviewProcess.reducer(initialState, postReview.pending);

      expect(result).toEqual(expectedState);
    });

    it('set "false" on "isFormReviewSubmitting" with "postReview.fulfilled" action', () => {
      const expectedState = { ...initialState };

      const result = postingReviewProcess.reducer(initialState, postReview.fulfilled);
      expect(result).toEqual(expectedState);
    });

    it('set "false" on "isFormReviewSubmitting" with "postReview.rejected" action', () => {
      const expectedState = { ...initialState };

      const result = postingReviewProcess.reducer(initialState, postReview.rejected);
      expect(result).toEqual(expectedState);
    });
  });
});
