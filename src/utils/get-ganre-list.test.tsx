import { PreviewFilm } from '../types/preview-film';
import { getGenreList } from './get-ganre-list';

describe('Get genre list', () => {
  const mockGenres = ['Drama', 'Action', 'Drama', 'Crime'];

  const mockFilms = mockGenres.map((genreName) => ({
    id: '1',
    name: '',
    previewImage: '',
    previewVideoLink: '',
    genre: genreName,
  })) as PreviewFilm[];

  it('return genre list with all genres, drama, action and crime', () => {
    const expectedGenreList = ['All genres', 'Action', 'Crime', 'Drama'];

    const result = getGenreList(mockFilms);

    expect(result).toEqual(expectedGenreList);
  });
});
