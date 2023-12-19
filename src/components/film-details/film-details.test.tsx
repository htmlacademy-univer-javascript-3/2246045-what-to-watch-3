import { withHistory } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import FilmDetails from './film-details';
import { makeFakeFilm } from '../../utils/mocks';
import { getRunTime } from '../../utils/get-run-time';

describe('FilmDetails', () => {
  it('render correctly', () => {
    const film = makeFakeFilm();
    const filmDirector = film.director;
    const filmStarring = film.starring;
    const filmRunTime = film.runTime;
    const filmReleased = film.released;
    const filmGenre = film.genre;

    const expectedTextDirector = /Director/i;
    const expectedTextStarring = /Starring/i;
    const expectedTextRunTime = /Run Time/i;
    const expectedTextReleased = /Released/i;
    const expectedTextGenre = /Genre/i;

    const preparedComponent = withHistory(
      <FilmDetails
        director={filmDirector}
        starring={filmStarring}
        runTime={filmRunTime}
        released={filmReleased}
        genre={filmGenre}
      />
    );

    render(preparedComponent);

    expect(screen.getByText(expectedTextDirector)).toBeInTheDocument();
    expect(screen.getByText(filmDirector)).toBeInTheDocument();

    expect(screen.getByText(expectedTextStarring)).toBeInTheDocument();

    filmStarring.forEach((star) => {
      expect(screen.getByTestId(star)).toBeInTheDocument();
    });

    expect(screen.getByText(expectedTextRunTime)).toBeInTheDocument();
    expect(screen.getByText(getRunTime(filmRunTime))).toBeInTheDocument();

    expect(screen.getByText(expectedTextReleased)).toBeInTheDocument();
    expect(screen.getByText(filmReleased)).toBeInTheDocument();

    expect(screen.getByText(expectedTextGenre)).toBeInTheDocument();
    expect(screen.getByText(filmGenre)).toBeInTheDocument();
  });
});
