import { createMemoryHistory } from 'history';
import SignInScreen from './sign-in';
import { withHistory, withStore } from '../../../utils/mock-component';
import { makeFakeStore } from '../../../utils/mocks';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { APIRoute, AppRoute, SingInErrorMessage } from '../../../const';
import { extractActionsTypes } from '../../../utils/mocks';
import { loginAction } from '../../../store/api-actions';
import { redirectToRoute } from '../../../store/action';

describe('SingInScreen', () => {
  const mockHistory = createMemoryHistory();
  const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(
    withHistory(<SignInScreen />),
    makeFakeStore()
  );

  const mockEmail = 'test@mail.ru';
  const mockPassword = 'password1';
  const mockWrongEmail = 'wrongEmail';
  const mockWrongPassword = '1';

  it('render correctly', () => {
    render(withStoreComponent);

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('type in email field', async () => {
    render(withStoreComponent);
    await userEvent.type(screen.getByPlaceholderText(/Email address/i), mockEmail);

    expect(screen.getByDisplayValue(mockEmail)).toBeInTheDocument();
  });

  it('type in password field', async () => {
    render(withStoreComponent);
    await userEvent.type(screen.getByPlaceholderText(/Password/i), mockPassword);

    expect(screen.getByDisplayValue(mockPassword)).toBeInTheDocument();
  });

  it('display email error', async () => {
    render(withStoreComponent);
    await userEvent.type(
      screen.getByPlaceholderText(/Email address/i),
      mockWrongEmail
    );
    await userEvent.type(screen.getByPlaceholderText(/Password/i), mockPassword);
    await userEvent.click(screen.getByRole('button'));

    expect(screen.getByDisplayValue(mockWrongEmail)).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockPassword)).toBeInTheDocument();
    expect(screen.getByText(SingInErrorMessage.Email)).toBeInTheDocument();
  });

  it('display password error', async () => {
    render(withStoreComponent);
    await userEvent.type(screen.getByPlaceholderText(/Email address/i), mockEmail);
    await userEvent.type(
      screen.getByPlaceholderText(/Password/i),
      mockWrongPassword
    );
    await userEvent.click(screen.getByRole('button'));

    expect(screen.getByDisplayValue(mockEmail)).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockWrongPassword)).toBeInTheDocument();
    expect(screen.getByText(SingInErrorMessage.Password)).toBeInTheDocument();
  });

  it('sing in user and redirect to main page', async () => {
    render(withStoreComponent);
    mockAxiosAdapter.onPost(APIRoute.Login).reply(200, {});
    await userEvent.type(screen.getByPlaceholderText(/Email address/i), mockEmail);
    await userEvent.type(screen.getByPlaceholderText(/Password/i), mockPassword);
    await userEvent.click(screen.getByRole('button'));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(mockHistory.location.pathname).toBe(AppRoute.Main);
    expect(actions).toEqual([
      loginAction.pending.type,
      redirectToRoute.type,
      loginAction.fulfilled.type,
    ]);
  });
});
