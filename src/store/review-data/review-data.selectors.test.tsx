import { NameSpace } from '../../const';
import { makeFakeReview } from '../../utils/mocks';
import { getCurrentFilmReviews, getCurrentFilmReviewsLoading } from './selectors';

describe('ReviewData selectors', () => {
  const state = {
    [NameSpace.Review]: {
      currentFilmReviews: [makeFakeReview()],
      isCurrentFilmReviewsLoading: true,
    }
  };

  it('return "currentFilmReviews" from state', () => {
    const { currentFilmReviews } = state[NameSpace.Review];

    const result = getCurrentFilmReviews(state);

    expect(result).toBe(currentFilmReviews);
  });

  it('return "isCurrentFilmReviewsLoading" from state', () => {
    const { isCurrentFilmReviewsLoading } = state[NameSpace.Review];

    const result = getCurrentFilmReviewsLoading(state);

    expect(result).toBe(isCurrentFilmReviewsLoading);
  });
});
