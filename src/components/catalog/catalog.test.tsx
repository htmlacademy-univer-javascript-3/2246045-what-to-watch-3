import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import Catalog from './catalog';
import { makeFakePreviewFilms } from '../../utils/mocks';

describe('Catalog', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('render correctly', () => {
    const mockPreviewFilms = makeFakePreviewFilms();

    const preparedComponent = withHistory(
      <Catalog
        films={mockPreviewFilms}
        filmCount={mockPreviewFilms.length}
      />
    );
    render(preparedComponent);

    expect(screen.getAllByRole('article')).toHaveLength(1);
  });

  it('render correctly when films.length > shown film count', () => {
    const mockPreviewFilms = new Array(10).fill(null).map(() => makeFakePreviewFilms()[0]);

    const shownFilmCount = 8;

    const preparedComponent = withHistory(
      <Catalog
        films={mockPreviewFilms}
        filmCount={shownFilmCount}
      />
    );

    render(preparedComponent);

    expect(screen.queryByText(mockPreviewFilms[shownFilmCount].name)).not.toBeInTheDocument();
  });
});
