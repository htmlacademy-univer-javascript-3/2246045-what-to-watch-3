import cn from 'classnames';
import { useState } from 'react';
import { MoviePageState, MoviePageStateNameInterface } from '../../const';
import { Film } from '../../types/films';
import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';
import { Review } from '../../types/reviews';

type TabsProps = {
  film: Film;
  reviews: Review[];
}
const getFilmActiveTabInfo = (activeTab: string, film: Film, reviews: Review[]) => {
  switch(activeTab) {
    case MoviePageState.Overview:
      return (
        <FilmOverview
          description={film.description}
          rating={film.rating}
          scoresCount={film.scoresCount}
          director={film.director}
          starring={film.starring}
        />);
    case MoviePageState.Details:
      return (
        <FilmDetails
          director={film.director}
          starring={film.starring}
          genre={film.genre}
          runTime={film.runTime}
          released={film.released}
        />);
    case MoviePageState.Reviews:
      return(
        <FilmReviews reviews={reviews} />
      );
    default:
      break;
  }
};
export default function Tabs({film, reviews}: TabsProps) {
  const [activeTab, setActiveTab] = useState(MoviePageState.Overview);
  const handlerOverviewLinkClick = () => {
    setActiveTab(MoviePageState.Overview);
  };
  const handlerDetailsLinkClick = () => {
    setActiveTab(MoviePageState.Details);
  };
  const handlerReviewsLinkClick = () => {
    setActiveTab(MoviePageState.Reviews);
  };
  return(
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={cn('film-nav__item', {'film-nav__item--active': activeTab === MoviePageState.Overview})}>
            <a className="film-nav__link" data-testid="film-overview-link" onClick={handlerOverviewLinkClick}>{MoviePageStateNameInterface[MoviePageState.Overview]}</a>
          </li>
          <li className={cn('film-nav__item', {'film-nav__item--active': activeTab === MoviePageState.Details})}>
            <a className="film-nav__link" data-testid="film-details-link" onClick={handlerDetailsLinkClick}>{MoviePageStateNameInterface[MoviePageState.Details]}</a>
          </li>
          <li className={cn('film-nav__item', {'film-nav__item--active': activeTab === MoviePageState.Reviews})}>
            <a className="film-nav__link" data-testid="film-reviews-link" onClick={handlerReviewsLinkClick}>{MoviePageStateNameInterface[MoviePageState.Reviews]}</a>
          </li>
        </ul>
      </nav>
      {getFilmActiveTabInfo(activeTab, film, reviews)}
    </div>
  );
}
