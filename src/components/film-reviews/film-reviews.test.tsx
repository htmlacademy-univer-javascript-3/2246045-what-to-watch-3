import { withHistory } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import FilmReviews from './film-reviews';
import { Review } from '../../types/reviews';

describe('Component: FilmReviews', () => {
  it('render correctly', () => {
    const reviews = [] as Review[];

    const filmReviewsId = 'film-card__reviews-col';

    const preparedComponent = withHistory(<FilmReviews reviews={reviews} />);

    render(preparedComponent);

    expect(screen.getByTestId(filmReviewsId)).toBeInTheDocument();
  });
});
