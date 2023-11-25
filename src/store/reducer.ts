import {createReducer} from '@reduxjs/toolkit';
import { setGenre } from './action';
import {films} from '../mocks/films';
import { DEFAULT_FILTER } from '../const';

const initialState = {
  genre: DEFAULT_FILTER,
  filmsList: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      const {genre} = action.payload;
      state.genre = genre;
    })
});

export {reducer};
