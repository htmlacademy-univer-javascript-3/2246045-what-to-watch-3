import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import AddReviewForm from '../../add-review-form/add-review-form';
import { useAppSelector } from '../../hooks';
import useFilmById from '../../hooks/film-by-id';
import LoadingScreen from '../loading-screen/loading-screen';
import Header from '../../header/header';
import { getFilmDataLoading } from '../../store/film-data/selectors';

export default function AddReviewScreen() {
  const film = useFilmById();
  const isFilmDataLoading = useAppSelector(getFilmDataLoading);

  return (
    <section className="film-card film-card--full">
      {film && !isFilmDataLoading ?
        <>
          <Helmet>
            <title>WTW. Add review {film.name}</title>
          </Helmet>
          <div className="film-card__header">
            <div className="film-card__bg">
              <img src={film.backgroundImage} alt={film.name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header">
              <Header />

              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <Link to={`${AppRoute.FilmData}/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
                  </li>
                  <li className="breadcrumbs__item">
                    <Link to={`${AppRoute.FilmData}/${film.id}/review`} className="breadcrumbs__link">Add review</Link>
                  </li>
                </ul>
              </nav>

            </header>

            <div className="film-card__poster film-card__poster--small">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>
          </div>

          <AddReviewForm filmId={film.id} />
        </> : <LoadingScreen />}
    </section>
  );
}
