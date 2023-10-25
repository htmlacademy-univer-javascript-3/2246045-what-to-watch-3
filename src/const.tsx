export enum AppRoute {
  SignIn = '/login',
  MyList = '/mylist',
  Films = '/films/',
  Film = ':id',
  Main = '/',
  AddReview = ':review',
  Player = '/player/:id'
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
