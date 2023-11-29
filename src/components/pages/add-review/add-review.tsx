import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import AddReviewForm from '../../add-review-form/add-review-form';
import { useAppSelector } from '../../hooks';
import useFilmById from '../../hooks/get-film-by-id';
import LoadingPage from '../loading-page/loading-page';

export default function AddReviewPage() {
  const film = useFilmById();
  const isFilmDataLoading = useAppSelector((state) => state.isFilmDataLoading);

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
              <div className="logo">
                <Link to="/" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>

              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <Link to={`${AppRoute.Films}/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
                  </li>
                  <li className="breadcrumbs__item">
                    <Link to={`${AppRoute.Films}/${film.id}/review`} className="breadcrumbs__link">Add review</Link>
                  </li>
                </ul>
              </nav>

              <ul className="user-block">
                <li className="user-block__item">
                  <div className="user-block__avatar">
                    <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                  </div>
                </li>
                <li className="user-block__item">
                  <Link className="user-block__link" to={AppRoute.SignIn}>Sign out</Link>
                </li>
              </ul>
            </header>

            <div className="film-card__poster film-card__poster--small">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>
          </div>

          <AddReviewForm filmId={film.id} />
        </> : <LoadingPage />}
    </section>
  );
}
