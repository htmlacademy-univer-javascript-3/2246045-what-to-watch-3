import { render, screen } from '@testing-library/react';
import { APIRoute, AuthorizationStatus, NameSpace } from '../../const';
import { withStore, withHistory } from '../../utils/mock-component';
import userEvent from '@testing-library/user-event';
import { extractActionsTypes } from '../../utils/mocks';
import { logoutAction } from '../../store/api-actions';
import SignOutButton from './sign-out-button';
import { clearMyList } from '../../store/my-list-process/my-list-process';

describe('SignOutButton', () => {
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

    expect(actions).toEqual([
      logoutAction.pending.type,
      clearMyList.type,
      logoutAction.fulfilled.type,
    ]);
  });
});
