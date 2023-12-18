import { DEFAULT_FILTER, NameSpace } from '../../const';
import { getActiveGenre } from './selectors';

describe('MyListProcess selectors', () => {
  const state = {
    [NameSpace.Genre]: {
      genre: DEFAULT_FILTER,
    }
  };

  it('return "genre" from state', () => {
    const { genre } = state[NameSpace.Genre];

    const result = getActiveGenre(state);

    expect(result).toBe(genre);
  });
});
