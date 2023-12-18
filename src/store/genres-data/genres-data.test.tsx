import { DEFAULT_FILTER } from '../../const';
import { changeActiveGenre, genreProcess } from './genres-data';

describe('GenreProcess slice', () => {
  it('return initial state with empty action', () => {
    const expectedState = { genre: 'Drama' };
    const emptyAction = { type: '' };

    const result = genreProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('return default initial state with empty action and undefined state', () => {
    const expectedState = { genre: DEFAULT_FILTER };
    const emptyAction = { type: '' };

    const result = genreProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('change genre with "changeActiveGenre" action', () => {
    const initialState = { genre: DEFAULT_FILTER };
    const expectedGenre = 'Drama';

    const result = genreProcess.reducer(initialState, changeActiveGenre(expectedGenre));

    expect(result.genre).toBe(expectedGenre);
  });
});
