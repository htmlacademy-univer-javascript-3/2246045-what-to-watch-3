import { FilmData } from '../../types/state';
import { makeFakeFilm, makeFakePreviewFilms, makeFakePromoFilm } from '../../utils/mocks';
import { fetchFilmAction, fetchFilmsAction, fetchPromoFilmAction, fetchSimilarFilmsAction } from '../api-actions';
import { filmData } from './film-data';

describe('FilmData slice', () => {
  const initialState: FilmData = {
    films: [],
    isFilmsLoading: false,
    currentFilm: undefined,
    isCurrentFilmLoading: false,
    promoFilm: undefined,
    isPromoFilmLoading: false,
    currentSimilarFilms: [],
    isSimilarFilmsLoading: false,
  };

  describe('return initial state', () => {
    it('with empty action', () => {
      const expectedState = { ...initialState };

      const emptyAction = { type: '' };

      const result = filmData.reducer(expectedState, emptyAction);

      expect(result).toEqual(expectedState);
    });

    it('with empty action and undefined state', () => {
      const expectedState = { ...initialState };

      const emptyAction = { type: '' };

      const result = filmData.reducer(undefined, emptyAction);

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchFilmsAction', () => {
    it('set "true" on "isFilmsLoading" with "fetchFilmsAction.pending" action', () => {
      const expectedState = { ...initialState, isFilmsLoading: true };

      const result = filmData.reducer(initialState, fetchFilmsAction.pending);

      expect(result).toEqual(expectedState);
    });

    it('set "false" on "isFilmsLoading" and payload on "films" with "fetchFilmsAction.fulfilled" action', () => {
      const films = makeFakePreviewFilms();
      const expectedState = { ...initialState, isFilmsLoading: false, films: films };

      const result = filmData.reducer(initialState, fetchFilmsAction.fulfilled(films, '', undefined));

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchFilmAction', () => {
    it('set "true" on "isCurrentFilmLoading" with "fetchFilmAction.pending" action', () => {
      const expectedState = { ...initialState, isCurrentFilmLoading: true };

      const result = filmData.reducer(initialState, fetchFilmAction.pending);

      expect(result).toEqual(expectedState);
    });

    it('set "false" on "isCurrentFilmLoading" and payload on "currentFilm" with "fetchFilmAction.fulfilled" action', () => {
      const film = makeFakeFilm();
      const expectedState = { ...initialState, isCurrentFilmLoading: false, currentFilm: film };

      const result = filmData.reducer(initialState, fetchFilmAction.fulfilled(film, '', {filmId: ''}));

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchSimilarFilmsAction', () => {
    it('set "true" on "isSimilarFilmsLoading" with "fetchSimilarFilmsAction.pending" action', () => {
      const expectedState = { ...initialState, isSimilarFilmsLoading: true };

      const result = filmData.reducer(initialState, fetchSimilarFilmsAction.pending);

      expect(result).toEqual(expectedState);
    });

    it('set "false" on "isSimilarFilmsLoading" and payload on "currentSimilarFilms" with "fetchSimilarFilmsAction.fulfilled" action', () => {
      const films = makeFakePreviewFilms();
      const expectedState = { ...initialState, isCurrentFilmLoading: false, currentSimilarFilms: films };

      const result = filmData.reducer(initialState, fetchSimilarFilmsAction.fulfilled(films, '', {filmId: ''}));

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchPromoFilmAction', () => {
    it('set "true" on "isPromoFilmLoading" with "fetchPromoFilmAction.pending" action', () => {
      const expectedState = { ...initialState, isPromoFilmLoading: true };

      const result = filmData.reducer(initialState, fetchPromoFilmAction.pending);

      expect(result).toEqual(expectedState);
    });

    it('set "false" on "isPromoFilmLoading" and payload on "currentSimilarFilms" with "fetchPromoFilmAction.fulfilled" action', () => {
      const promoFilm = makeFakePromoFilm();
      const expectedState = { ...initialState, isPromoFilmLoading: false, promoFilm: promoFilm };

      const result = filmData.reducer(initialState, fetchPromoFilmAction.fulfilled(promoFilm, '', undefined));

      expect(result).toEqual(expectedState);
    });
  });
});