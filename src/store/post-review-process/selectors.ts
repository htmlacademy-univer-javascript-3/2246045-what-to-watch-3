import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getFormReviewSubmitting = (state: Pick<State, NameSpace.PostingReview>): boolean => state[NameSpace.PostingReview].isFormReviewSubmitting;
