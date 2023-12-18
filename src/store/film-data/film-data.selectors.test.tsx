import { NameSpace } from '../../const';
import { makeFakeFilm, makeFakePreviewFilms, makeFakePromoFilm } from '../../utils/mocks';
import {
  getFilms,
  getFilmsDataLoading,
  getCurrentFilm,
  getCurrentFilmLoading,
  getCurrentSimilarFilms,
  getSimilarFilmsLoading,
  getPromoFilm,
  getPromoFilmLoading
} from './selectors';

describe('MyListProcess selectors', () => {
  const state = {
    [NameSpace.Film]: {
      films: makeFakePreviewFilms(),
      isFilmsDataLoading: true,
      currentFilm: makeFakeFilm(),
      isCurrentFilmLoading: false,
      promoFilm: makeFakePromoFilm(),
      isPromoFilmLoading: true,
      currentSimilarFilms: makeFakePreviewFilms(),
      isSimilarFilmsLoading: false,
    }
  };

  describe('films', () => {
    it('return "films" from state', () => {
      const { films } = state[NameSpace.Film];

      const result = getFilms(state);

      expect(result).toBe(films);
    });

    it('return "isFilmsDataLoading" from state', () => {
      const { isFilmsDataLoading } = state[NameSpace.Film];

      const result = getFilmsDataLoading(state);

      expect(result).toBe(isFilmsDataLoading);
    });
  });

  describe('currentFilm', () => {
    it('return "currentFilm" from state', () => {
      const { currentFilm } = state[NameSpace.Film];

      const result = getCurrentFilm(state);

      expect(result).toBe(currentFilm);
    });

    it('return "isCurrentFilmLoading" from state', () => {
      const { isCurrentFilmLoading } = state[NameSpace.Film];

      const result = getCurrentFilmLoading(state);

      expect(result).toBe(isCurrentFilmLoading);
    });
  });

  describe('promoFilm', () => {
    it('return "promoFilm" from state', () => {
      const { promoFilm } = state[NameSpace.Film];

      const result = getPromoFilm(state);

      expect(result).toBe(promoFilm);
    });

    it('return "isPromoFilmLoading" from state', () => {
      const { isPromoFilmLoading } = state[NameSpace.Film];

      const result = getPromoFilmLoading(state);

      expect(result).toBe(isPromoFilmLoading);
    });
  });

  describe('currentSimilarFilms', () => {
    it('return "currentSimilarFilms" from state', () => {
      const { currentSimilarFilms } = state[NameSpace.Film];

      const result = getCurrentSimilarFilms(state);

      expect(result).toBe(currentSimilarFilms);
    });

    it('return "isSimilarFilmsLoading" from state', () => {
      const { isSimilarFilmsLoading } = state[NameSpace.Film];

      const result = getSimilarFilmsLoading(state);

      expect(result).toBe(isSimilarFilmsLoading);
    });
  });
});
