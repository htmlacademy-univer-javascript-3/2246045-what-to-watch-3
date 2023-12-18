import { NameSpace } from '../../const';
import { Review } from '../../types/reviews';
import { State } from '../../types/state';

export const getCurrentFilmReviews = (state: Pick<State, NameSpace.Review>): Review[] => state[NameSpace.Review].currentFilmReviews;
export const getCurrentFilmReviewsLoading = (state: Pick<State, NameSpace.Review>): boolean => state[NameSpace.Review].isCurrentFilmReviewsLoading;
