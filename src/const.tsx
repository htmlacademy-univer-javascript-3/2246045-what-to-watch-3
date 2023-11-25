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

export const SIMILAR_FILMS_COUNT = 4;

export const DEFAULT_FILTER = 'All genres';

export const DELAY = 1000;
