import { DEFAULT_FILTER } from '../const';
import { PreviewFilm } from '../types/preview-film';
import { filterFilms } from './filter-by-genre';

describe('Get films by genre', () => {
  const mockFilms: PreviewFilm[] = [
    {
      id: '1',
      name: '',
      previewImage: '',
      previewVideoLink: '',
      genre: 'Action',
    },
  ];

  it('return all films with default genre', () => {
    const expectedFilms = [... mockFilms];

    const result = filterFilms(mockFilms, DEFAULT_FILTER);

    expect(result).toEqual(expectedFilms);
  });

  it('return 0 films with genre comedy', () => {
    const expectedFilms = [] as PreviewFilm[];

    const result = filterFilms(mockFilms, 'Comedy');

    expect(result).toEqual(expectedFilms);
  });
});
