import MainScreen from '../pages/main-page/main-page';
import SignInScreen from '../pages/sign-in/sign-in';
import MyListPage from '../pages/my-list/my-list';
import MoviePage from '../pages/movie-page/movie-page';
import AddReviewPage from '../pages/add-review/add-review';
import PlayerScreen from '../pages/player/player';
import Error from '../pages/404/error';
import PrivateRoute from '../private-route/private-rout';
import { Film } from '../../types/films';
import { PromoFilmCardProps } from '../promo-film/promo-film';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
export type AppProps = {
  promoFilmCard: PromoFilmCardProps;
  films: Film[];
}

export default function App({promoFilmCard, films}: AppProps) {  
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainScreen promoFilmCard={promoFilmCard}/>}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignInScreen />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
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
            <Route path=':id' element={<PlayerScreen films={films}/>} />
          </Route>
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
