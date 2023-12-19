import { NameSpace } from '../../const';
import { getFormReviewSubmitting } from './selectors';

describe('PostingReviewProcess selectors', () => {
  const state = {
    [NameSpace.PostingReview]: {
      isFormReviewSubmitting: false
    }
  };

  it('return "isFormReviewSubmitting" from state', () => {
    const { isFormReviewSubmitting } = state[NameSpace.PostingReview];

    const result = getFormReviewSubmitting(state);

    expect(result).toBe(isFormReviewSubmitting);
  });
});
