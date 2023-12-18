import { withHistory } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import { makeFakeFilm } from '../../utils/mocks';
import FilmOverview from './film-overview';

describe('Component: FilmOverview', () => {
  it('render correctly', () => {
    const film = makeFakeFilm();
    const filmDirector = film.director;
    const filmStarring = film.starring;
    const filmRating = film.rating;
    const filmScoresCount = film.scoresCount;
    const filmDescription = film.description;

    const preparedComponent = withHistory(
      <FilmOverview
        description={filmDescription}
        rating={filmRating}
        scoresCount={filmScoresCount}
        director={filmDirector}
        starring={filmStarring}
      />
    );

    render(preparedComponent);

    expect(screen.getByText(`Director: ${filmDirector}`)).toBeInTheDocument();

    expect(screen.getByText(`Starring: ${filmStarring.join(', ')}`)).toBeInTheDocument();

    expect(screen.getByText(`${filmScoresCount} ratings`)).toBeInTheDocument();

    expect(screen.getByText(filmDescription)).toBeInTheDocument();

    expect(screen.getByText(filmRating)).toBeInTheDocument();
  });
});
