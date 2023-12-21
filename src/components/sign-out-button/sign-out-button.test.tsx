import { render, screen } from '@testing-library/react';
import { APIRoute, AppRoute, AuthorizationStatus, NameSpace } from '../../const';
import { withStore, withHistory } from '../../utils/mock-component';
import userEvent from '@testing-library/user-event';
import { extractActionsTypes } from '../../utils/mocks';
import { logoutAction } from '../../store/api-actions';
import SignOutButton from './sign-out-button';
import { clearMyList } from '../../store/my-list-process/my-list-process';
import { redirectToRoute } from '../../store/action';
import { createMemoryHistory } from 'history';

describe('SignOutButton', () => {
  const mockHistory = createMemoryHistory();
  it('log out when sign out is clicked', async () => {
    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(
      withHistory(<SignOutButton />),
      {
        [NameSpace.User]: {
          authorizationStatus: AuthorizationStatus.Auth,
        },
      }
    );

    render(withStoreComponent);
    mockAxiosAdapter.onDelete(APIRoute.Logout).reply(200);
    await userEvent.click(screen.getByTestId('log-out'));
    const actions = extractActionsTypes(mockStore.getActions());
    expect(mockHistory.location.pathname).toBe(AppRoute.Main);
    expect(actions).toEqual([
      logoutAction.pending.type,
      clearMyList.type,
      redirectToRoute.type,
      logoutAction.fulfilled.type,
    ]);
  });
});
