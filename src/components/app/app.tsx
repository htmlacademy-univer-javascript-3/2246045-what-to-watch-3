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
import { Films } from '../../mocks/films.ts';
import { Reviews } from '../../mocks/reviews.ts';

type AppProps = {
  picture: string;
  title: string;
  genre: string;
  year: number;
  films: Films;
  reviews: Reviews;
}

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage picture={props.picture} title={props.title} genre={props.genre} year={props.year} films={props.films}/>} />
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
            <Route index element={<MoviePage films={props.films} reviews={props.reviews}/>}/>
            <Route path={AppRoute.AddReview} element={<AddReview films={props.films}/>}/>
          </Route>
        </Route>
        <Route path={AppRoute.Player}>
          <Route path={AppRoute.FilmId}>
            <Route index element={<FilmPlayer films={props.films}/>}/>
          </Route>
        </Route>
        <Route path={AppRoute.SignIn} element={<SignIn/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
