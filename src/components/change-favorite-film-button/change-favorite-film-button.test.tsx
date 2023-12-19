import { render, screen } from '@testing-library/react';
import { withStore, withHistory } from '../../utils/mock-component';
import { extractActionsTypes, makeFakeStore } from '../../utils/mocks';
import ChangeFavoriteStatusButton from './change-favorite-film-button';
import { APIRoute, AuthorizationStatus, NameSpace } from '../../const';
import userEvent from '@testing-library/user-event';
import { postFilmFavoriteStatus } from '../../store/api-actions';

describe('ChangeFavoriteStatusButton', () => {
  it('render correctly', () => {
    const { withStoreComponent } = withStore(
      withHistory(
        <ChangeFavoriteStatusButton
          filmId='1'
          isFavorite={false}
          authorizationStatus={AuthorizationStatus.NoAuth}
        />
      ),
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });

  it('render correctly when user no authorization', () => {
    const { withStoreComponent } = withStore(
      withHistory(
        <ChangeFavoriteStatusButton
          filmId='1'
          isFavorite={false}
          authorizationStatus={AuthorizationStatus.NoAuth}
        />
      ),
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByTestId('add')).toBeInTheDocument();
  });

  it('render svg "in-list" when film is favorite', () => {
    const { withStoreComponent } = withStore(
      withHistory(
        <ChangeFavoriteStatusButton
          filmId='1'
          isFavorite
          authorizationStatus={AuthorizationStatus.Auth}
        />
      ),
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByTestId('in-list')).toBeInTheDocument();
  });

  it('render svg "add" when film is not favorite', () => {
    const { withStoreComponent } = withStore(
      withHistory(
        <ChangeFavoriteStatusButton
          filmId='1'
          isFavorite={false}
          authorizationStatus={AuthorizationStatus.Auth}
        />
      ),
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByTestId('add')).toBeInTheDocument();
  });

  it('add film in favorite on click', async () => {
    const mockFilmId = '1';
    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(
      withHistory(
        <ChangeFavoriteStatusButton
          filmId={mockFilmId}
          isFavorite={false}
          authorizationStatus={AuthorizationStatus.Auth}
        />
      ),
      makeFakeStore({
        [NameSpace.User]: {
          authorizationStatus: AuthorizationStatus.Auth,
        },
      })
    );

    render(withStoreComponent);
    mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${mockFilmId}/1`).reply(200);
    await userEvent.click(screen.getByRole('button'));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      postFilmFavoriteStatus.pending.type,
      postFilmFavoriteStatus.fulfilled.type,
    ]);
    expect(screen.getByTestId('in-list')).toBeInTheDocument();
  });

  it('remove film in favorite on click', async () => {
    const mockFilmId = '1';
    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(
      withHistory(
        <ChangeFavoriteStatusButton
          filmId={mockFilmId}
          isFavorite
          authorizationStatus={AuthorizationStatus.Auth}
        />
      ),
      makeFakeStore({
        [NameSpace.User]: {
          authorizationStatus: AuthorizationStatus.Auth,
        },
      })
    );

    render(withStoreComponent);
    mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${mockFilmId}/0`).reply(200);
    await userEvent.click(screen.getByRole('button'));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      postFilmFavoriteStatus.pending.type,
      postFilmFavoriteStatus.fulfilled.type,
    ]);
    expect(screen.getByTestId('add')).toBeInTheDocument();
  });
});
