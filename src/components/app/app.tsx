import MainScreen from '../pages/main-page/main-page';
import SignInScreen from '../pages/sign-in/sign-in';
import MyListPage from '../pages/my-list/my-list';
import MoviePage from '../pages/movie-page/movie-page';
import AddReviewPage from '../pages/add-review/add-review';
import PlayerScreen from '../pages/player/player';
import Error from '../pages/404/error';
import PrivateRoute from '../private-route/private-rout';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getFilmsDataLoading } from '../../store/film-data/selectors';
import { getAuthorizationStatus } from '../../store/user-data/selectors';
import { useAppSelector } from '../hooks';
import LoadingPage from '../../components/pages/loading-page/loading-page';
import HistoryRouter from '../history-route/history-routr';
import browserHistory from '../../browser-history';

export default function App() {
  const isFilmsDataLoading = useAppSelector(getFilmsDataLoading);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (isFilmsDataLoading) {
    return (
      <LoadingPage />
    );
  }
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainScreen />}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignInScreen />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <MyListPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Films}>
            <Route index element={<Error />} />
            <Route path=':id'>
              <Route index element={<MoviePage />} />
              <Route path='review' element={<AddReviewPage />} />
            </Route>
          </Route>
          <Route path={AppRoute.Player}>
            <Route index element={<Error />} />
            <Route path=':id' element={<PlayerScreen />} />
          </Route>
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}
