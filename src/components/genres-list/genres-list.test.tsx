import { render, screen } from '@testing-library/react';
import GenreList from './genres-list';
import { withStore, withHistory } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import { DEFAULT_FILTER, NameSpace } from '../../const';

describe('GenreList', () => {
  const mockGenre = 'Action';
  const mockGenres = [DEFAULT_FILTER, mockGenre];
  const onGenreClick = vi.fn();

  it('renders correctly', () => {
    const { withStoreComponent } = withStore(
      withHistory(<GenreList genres={mockGenres} onGenreClick={onGenreClick} />),
      makeFakeStore(),
    );

    render(withStoreComponent);

    expect(screen.getByTestId(`tab-${DEFAULT_FILTER}`)).toBeInTheDocument();
    expect(screen.getByTestId(`tab-${DEFAULT_FILTER}`)).toHaveClass(
      'catalog__genres-item--active'
    );
    expect(screen.getByTestId(`tab-${mockGenre}`)).toBeInTheDocument();
  });

  it('select active genre', () => {
    const { withStoreComponent } = withStore(
      withHistory(<GenreList genres={mockGenres} onGenreClick={onGenreClick} />),
      makeFakeStore({
        [NameSpace.Genre]: { genre: mockGenre },
      })
    );

    render(withStoreComponent);

    expect(screen.getByTestId(`tab-${mockGenre}`)).toHaveClass(
      'catalog__genres-item--active'
    );
  });
});
