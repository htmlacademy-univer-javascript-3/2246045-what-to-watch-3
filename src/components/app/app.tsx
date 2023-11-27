import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../pages/main-page/main-page.tsx';
import MoviePage from '../pages/movie-page/movie-page.tsx';
import MyList from '../pages/my-list/my-list.tsx';
import FilmPlayer from '../pages/player/player.tsx';
import SignIn from '../pages/sign-in/sign-in.tsx';
import Error from '../pages/404/error.tsx';
import PrivateRoute from '../private-route/private-rout.tsx';
import AddReview from '../pages/add-review/add-review.tsx';
import { useAppSelector } from '../hooks';
import LoadingPage from '../pages/loading-page/loading-page.tsx';

type AppProps = {
  picture: string;
  title: string;
  genre: string;
  year: number;
}

function App(props: AppProps): JSX.Element {
  const filmsList = useAppSelector((state) => state.filmsList);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const films = useAppSelector((state) => state.films);
  const isFilmsDataLoading = useAppSelector((state) => state.isFilmsDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isFilmsDataLoading) {
    return (
      <LoadingPage/>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage picture={props.picture} title={props.title} genre={props.genre} year={props.year} films={filmsList} />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Films}>
          <Route path={AppRoute.FilmId}>
            <Route index element={<MoviePage filmsList={filmsList} films={films}/>}/>
            <Route path={AppRoute.AddReview}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <AddReview films={films}/>
                </PrivateRoute>
              }
            />
          </Route>
        </Route>
        <Route path={AppRoute.Player}>
          <Route path={AppRoute.FilmId}>
            <Route index element={<FilmPlayer films={films}/>}/>
          </Route>
        </Route>
        <Route path={AppRoute.SignIn} element={<SignIn/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
