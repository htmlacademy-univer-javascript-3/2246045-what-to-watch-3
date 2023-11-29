import MainScreen from '../pages/main-page/main-page';
import SignInScreen from '../pages/sign-in/sign-in';
import MyListPage from '../pages/my-list/my-list';
import FilmScreen from '../pages/movie-page/movie-page';
import AddReviewScreen from '../pages/add-review/add-review';
import PlayerScreen from '../pages/player/player';
import Error from '../pages/404/error';
import PrivateRoute from '../private-route/private-rout';
import { Film } from '../../types/films';
import { PromoFilmCardProps } from '../promo-film-card/promo-film-card';
import { PreviewFilm } from '../../types/preview-film';
import { useAppSelector } from '../hooks';
import LoadingScreen from '../pages/loading-page/loading-page';
import HistoryRouter from '../history-route/history-routr';
import browserHistory from '../../browser-history';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
export type AppProps = {
  promoFilmCard: PromoFilmCardProps;
  smallFilmCards: PreviewFilm[];
  films: Film[];
}

export default function App({promoFilmCard, smallFilmCards, films}: AppProps) {
  const isFilmsDataLoading = useAppSelector((state) => state.isFilmsDataLoading);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (isFilmsDataLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainScreen promoFilmCard={promoFilmCard} />}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignInScreen />}
          />
          <Route
            path={AppRoute.MyList}
            element={
	@@ -59,8 +57,8 @@
          <Route path={AppRoute.FilmData}>
            <Route index element={<Error />} />
            <Route path=':id'>
              <Route index element={<FilmScreen />} />
              <Route path='review' element={<AddReviewScreen />} />
            </Route>
          </Route>
          <Route path={AppRoute.Player}>
            <Route index element={<Error />} />
            <Route path=':id' element={<PlayerScreen films={films} />} />
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