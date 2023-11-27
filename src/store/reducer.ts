import {createReducer} from '@reduxjs/toolkit';
import { Films } from '../components/pages/main-page/film-list-props';
import { Film } from '../mocks/films';
import { Review } from '../mocks/reviews';
import {loadFilms, requireAuthorization, setFilmsDataLoadingStatus, setGenre} from './action';
import {AuthorizationStatus, DEFAULT_FILTER} from '../const';

type InitialState = {
  genre: string;
  filmsList: Films;
  films: Film[];
  commentsList: Review[];
  isFilmsDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  avatarUrl: string;
}

const initialState: InitialState = {
  genre: DEFAULT_FILTER,
  filmsList: [],
  films:[],
  commentsList: [],
  isFilmsDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  avatarUrl: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      const {genre} = action.payload;
      state.genre = genre;
    })
    .addCase(loadFilms, (state, action) => {
      state.filmsList = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
