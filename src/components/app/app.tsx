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
  const isFilmsDataLoading = useAppSelector((state) => state.isFilmsDataLoading);

  if (isFilmsDataLoading) {
    return (
      <LoadingPage/>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage picture={props.picture} title={props.title} genre={props.genre} year={props.year} films={filmsList}/>} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Films}>
          <Route path={AppRoute.FilmId}>
            <Route index element={<MoviePage films={filmsList}/>}/>
            <Route path={AppRoute.AddReview} element={<AddReview films={filmsList}/>}/>
          </Route>
        </Route>
        <Route path={AppRoute.Player}>
          <Route path={AppRoute.FilmId}>
            <Route index element={<FilmPlayer films={filmsList}/>}/>
          </Route>
        </Route>
        <Route path={AppRoute.SignIn} element={<SignIn/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
