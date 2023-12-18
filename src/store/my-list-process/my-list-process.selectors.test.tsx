import { NameSpace } from '../../const';
import { makeFakePreviewFilms } from '../../utils/mocks';
import { getFavoriteFilmCount, getFavoriteFilms, getFavoriteFilmsLoading } from './selectors';

describe('MyListProcess selectors', () => {
  const stateFavoriteFilms = makeFakePreviewFilms();

  const state = {
    [NameSpace.MyList]: {
      favoriteFilms: stateFavoriteFilms,
      favoriteFilmCount: stateFavoriteFilms.length,
      isFavoriteFilmsLoading: true,
    }
  };

  it('return "favoriteFilms" from state', () => {
    const { favoriteFilms } = state[NameSpace.MyList];

    const result = getFavoriteFilms(state);

    expect(result).toBe(favoriteFilms);
  });

  it('return "isFavoriteFilmsLoading" from state', () => {
    const { isFavoriteFilmsLoading } = state[NameSpace.MyList];

    const result = getFavoriteFilmsLoading(state);

    expect(result).toBe(isFavoriteFilmsLoading);
  });

  it('return "favoriteFilmCount" from state', () => {
    const { favoriteFilmCount } = state[NameSpace.MyList];

    const result = getFavoriteFilmCount(state);

    expect(result).toBe(favoriteFilmCount);
  });
});
