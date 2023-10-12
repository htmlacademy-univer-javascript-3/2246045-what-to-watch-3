import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../pages/main-page/main-page.tsx';
/*import AddReview from '../pages/add-review/add-review.tsx';
import HeadGuest from '../pages/head-guest/head-guest.tsx';*/
import MoviePage from '../pages/movie-page/movie-page.tsx';
/*import MoviePageDetails from '../pages/movie-page/movie-page-details/movie-page-details.tsx';
import MoviePageInList from '../pages/movie-page/movie-page-in-list/movie-page-in-list.tsx';*/
import MoviePageReviews from '../pages/movie-page/movie-page-reviews/movie-page-reviews.tsx';
import MyList from '../pages/my-list/my-list.tsx';
import Player from '../pages/player/player.tsx';
/*import PlayerPouse from '../pages/player/player-pause/player-pause.tsx';*/
import SignIn from '../pages/sign-in/sign-in.tsx';
/*import SignInError from '../pages/sign-in/sign-in-error/sign-in-error.tsx';
import SignInMessage from '../pages/sign-in/sign-in-message/sign-in-message.tsx';*/
import Error from '../pages/404/error.tsx';
import PrivateRoute from '../private-route/private-rout.tsx';


/*import PrivateRoute from '../components/private-route';*/

type PromoFilmProps = {
  picture: string;
  title: string;
  genre: string;
  year: number;
}
function App({picture, title, genre, year}: PromoFilmProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<MainPage picture={picture} title={title} genre={genre} year={year}/>} />
          <Route path='login'>
            <Route index element={<SignIn />} />
            <Route path='mylist' element={
              <PrivateRoute>
                <MyList />
              </PrivateRoute>
            }
            />
          </Route>
          <Route path='films/:id' element={<MoviePage />} />
          <Route path='films/:id/review' element={<MoviePageReviews/>} />
          <Route path='player/:id' element={<Player />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
