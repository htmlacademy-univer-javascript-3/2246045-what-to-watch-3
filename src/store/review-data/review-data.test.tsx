import { ReviewData } from '../../types/state';
import { makeFakeReview } from '../../utils/mocks';
import { fetchFilmReviewsAction } from '../api-actions';
import { reviewData } from './review-data';

describe('ReviewData slice', () => {
  const initialState: ReviewData = {
    currentFilmReviews: [],
    isCurrentFilmReviewsLoading: false,
  };

  describe('return initial state', () => {
    it('with empty action', () => {
      const expectedState = { ...initialState };

      const emptyAction = { type: '' };

      const result = reviewData.reducer(expectedState, emptyAction);

      expect(result).toEqual(expectedState);
    });

    it('with empty action and undefined state', () => {
      const expectedState = { ...initialState };

      const emptyAction = { type: '' };

      const result = reviewData.reducer(undefined, emptyAction);

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchFilmReviewsAction', () => {
    it('set "true" on "isCurrentFilmReviewsLoading" with "fetchFilmReviewsAction.pending" action', () => {
      const expectedState = { ...initialState, isCurrentFilmReviewsLoading: true };

      const result = reviewData.reducer(initialState, fetchFilmReviewsAction.pending);

      expect(result).toEqual(expectedState);
    });

    it('set "false" on "isCurrentFilmReviewsLoading" and payload on "currentFilmReviews" with "fetchFilmReviewsAction.fulfilled" action', () => {
      const reviews = [makeFakeReview()];
      const expectedState = { ...initialState, isCurrentFilmReviewsLoading: false, currentFilmReviews: reviews };

      const result = reviewData.reducer(initialState, fetchFilmReviewsAction.fulfilled(reviews, '', {filmId: ''}));

      expect(result).toEqual(expectedState);
    });
  });
});
