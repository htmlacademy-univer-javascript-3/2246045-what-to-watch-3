import { createMemoryHistory } from 'history';
import { withStore, withHistory } from '../../../utils/mock-component';
import { makeFakeFilm, makeFakeStore } from '../../../utils/mocks';
import { AppRoute, NameSpace } from '../../../const';
import AddReviewPage from './add-review';
import { render, screen } from '@testing-library/react';

describe('AddReviewPage', () => {
  const mockHistory = createMemoryHistory();
  const mockFilm = makeFakeFilm();

  beforeEach(() => {
    mockHistory.push(`${AppRoute.Films}/${mockFilm.id}/review`);
  });

  it('render correctly', () => {
    const { withStoreComponent } = withStore(
      withHistory(<AddReviewPage />, mockHistory),
      makeFakeStore({
        [NameSpace.Film]: {
          films: [],
          isFilmsLoading: false,
          currentFilm: mockFilm,
          isCurrentFilmLoading: false,
          promoFilm: undefined,
          isPromoFilmLoading: false,
          currentSimilarFilms: [],
          isSimilarFilmsLoading: false,
        },
      })
    );

    render(withStoreComponent);

    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
  });
});
