export enum AppRoute {
  SignIn = '/login',
  MyList = '/mylist',
  Films = '/films/',
  FilmId = ':id',
  Main = '/',
  AddReview = ':review',
  Player = '/player/'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum MoviePageState {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

export const MOVIE_CARDS_COUNT = 8;
export const RATING_STAR_COUNT = 10;
export const DEFAULT_FILTER = 'All genres';
export const FILM_SAME_GENRE_COUNT = 4;
export const DELAY = 1000;

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}
