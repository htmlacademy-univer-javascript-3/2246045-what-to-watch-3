import { createMemoryHistory } from 'history';
import { AppRoute, AuthorizationStatus, NameSpace } from '../../../const';
import { withStore, withHistory } from '../../../utils/mock-component';
import { makeFakeFilm, makeFakeStore } from '../../../utils/mocks';
import MoviePage from './movie-page';
import { render, screen } from '@testing-library/react';

describe('MoviePage', () => {
  const mockFilm = makeFakeFilm();
  const mockHistory = createMemoryHistory();

  beforeEach(() => {
    mockHistory.push(`${AppRoute.Films}/${mockFilm.id}`);
  });

  it('render correctly', () => {
    const { withStoreComponent } = withStore(
      withHistory(<MoviePage />, mockHistory),
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
    expect(screen.getByText(mockFilm.genre)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.released)).toBeInTheDocument();
    expect(screen.queryByText('Add review')).not.toBeInTheDocument();
  });

  it('shows add review button when user is authorized', () => {
    const { withStoreComponent } = withStore(
      withHistory(<MoviePage />, mockHistory),
      makeFakeStore({
        [NameSpace.User]: {
          authorizationStatus: AuthorizationStatus.Auth,
        },
      })
    );

    render(withStoreComponent);

    expect(screen.getByText('Add review')).toBeInTheDocument();
  });
});
