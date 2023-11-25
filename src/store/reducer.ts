import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, gettingFilmsList} from './action';
import {films} from '../mocks/films';
import { DEFAULT_FILTER } from '../const';
import { makeFilteredFilmsArray } from '../filter';

const initialState = {
  genre: DEFAULT_FILTER,
  filmsList: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const {genre} = action.payload;
      state.genre = genre;
    })
    .addCase(gettingFilmsList, (state, action) => {
      const {genre} = action.payload;
      //makeFilteredFilmsArray(films, genre);
      state.filmsList = makeFilteredFilmsArray(films, genre);
    });
});

export {reducer};
