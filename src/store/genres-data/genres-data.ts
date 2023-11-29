import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DEFAULT_FILTER, NameSpace } from '../../const';
import { GenreProcess } from '../../types/state';

const initialState: GenreProcess = {
  genre: DEFAULT_FILTER,
};

export const genreProcess = createSlice({
  name: NameSpace.Genre,
  initialState,
  reducers: {
    changeActiveGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
  },
});

export const { changeActiveGenre } = genreProcess.actions;
