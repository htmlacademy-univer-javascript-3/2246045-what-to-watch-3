import { render, screen } from '@testing-library/react';
import Tabs from './films-tabs';
import userEvent from '@testing-library/user-event';
import { makeFakeFilm, makeFakeReview } from '../../utils/mocks';
import { withHistory } from '../../utils/mock-component';

describe('Tabs', () => {
  const mockFilm = makeFakeFilm();
  const mockReviews = [makeFakeReview()];

  const preparedComponent = withHistory(
    <Tabs film={mockFilm} reviews={mockReviews} />
  );

  it('render correctly', () => {
    render(preparedComponent);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('render overview tab', () => {
    render(preparedComponent);

    expect(screen.getByText(mockFilm.description)).toBeInTheDocument();
  });

  it('render details tab', async () => {
    render(preparedComponent);

    await userEvent.click(screen.getByTestId('film-details-link'));

    expect(screen.getByText(/Run time/i)).toBeInTheDocument();
    expect(screen.getByText(/Director/i)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.director)).toBeInTheDocument();
    expect(screen.getByText(/Starring/i)).toBeInTheDocument();
  });

  it('render reviews tab', async () => {
    render(preparedComponent);

    await userEvent.click(screen.getByTestId('film-reviews-link'));

    expect(screen.getAllByTestId('film-reviews-link')).toHaveLength(1);
  });
});
