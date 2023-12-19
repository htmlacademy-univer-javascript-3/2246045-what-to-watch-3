import { MockStore, configureMockStore } from '@jedmao/redux-mock-store';
import { redirect } from './redirect';
import browserHistory from '../../browser-history';
import { AnyAction } from '@reduxjs/toolkit';
import { redirectToRoute } from '../action';
import { AppRoute } from '../../const';
import { State } from '../../types/state';

vi.mock('../../browser-history', () => ({
  default: {
    location: { pathname: ''},
    push(path: string) {
      this.location.pathname = path;
    }
  }
}));

describe('Redirect middleware', () => {
  let store: MockStore;

  beforeAll(() => {
    const middleware = [redirect];
    const mockStoreCreator = configureMockStore<State, AnyAction>(middleware);
    store = mockStoreCreator();
  });

  beforeEach(() => {
    browserHistory.push('');
  });

  it('redirect to sing in page with redirectToRoute action', () => {
    const redirectAction = redirectToRoute(AppRoute.SignIn);
    store.dispatch(redirectAction);
    expect(browserHistory.location.pathname).toBe(AppRoute.SignIn);
  });

  it('does not redirect to main page with empty action', () => {
    const emptyAction = { type: '', payload: AppRoute.Main };
    store.dispatch(emptyAction);
    expect(browserHistory.location.pathname).not.toBe(AppRoute.Main);
  });
});
