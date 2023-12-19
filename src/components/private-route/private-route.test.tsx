import { MemoryHistory, createMemoryHistory } from 'history';
import { AppRoute, AuthorizationStatus, NameSpace } from '../../const';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './private-route';
import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';

describe('PrivateRoute', () => {
  let mockHistory: MemoryHistory;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push(AppRoute.MyList);
  });

  it('render component for public route when user not authorized', () => {
    const expectedText = 'public route';
    const notExpectedText = 'private route';
    const withHistoryComponent = withHistory(
      <Routes>
        <Route
          path={AppRoute.SignIn}
          element={<span>{expectedText}</span>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <span>{notExpectedText}</span>
            </PrivateRoute>
          }
        />
      </Routes>,
      mockHistory
    );
    const { withStoreComponent } = withStore(withHistoryComponent, {
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
    });

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });

  it('renders component for private route, when user authorized', () => {
    const expectedText = 'private route';
    const notExpectedText = 'public route';
    const withHistoryComponent = withHistory(
      <Routes>
        <Route
          path={AppRoute.SignIn}
          element={<span>{notExpectedText}</span>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <span>{expectedText}</span>
            </PrivateRoute>
          }
        />
      </Routes>,
      mockHistory
    );
    const { withStoreComponent } = withStore(withHistoryComponent, {
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
    });

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });
});
