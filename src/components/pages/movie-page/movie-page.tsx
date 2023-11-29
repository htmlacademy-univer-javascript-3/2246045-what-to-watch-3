import Header from '../../header/header';
import Footer from '../../footer/footer';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, FILM_SAME_GENRE_COUNT } from '../../../const';
import { Review } from '../../../types/reviews';
import Tabs from '../../films-tabs/films-tabs';
import useFilmById from '../../hooks/get-film-by-id';
import LoadingPage from '../loading-page/loading-page';
import { useAppSelector } from '../../hooks';
import { useDispatch } from 'react-redux';
import { fetchFilmReviewsAction, fetchSimilarFilmsAction } from '../../../store/api-actions';
import { store } from '../../../store';
import { useEffect } from 'react';
import Catalog from '../../catalog/catalog';
import { PreviewFilm } from '../../../types/preview-film';

export default function FilmScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const film = useFilmById();
  const isFilmDataLoading = useAppSelector((state) => state.isFilmDataLoading);

  const similarFilms = useAppSelector((state) => state.currentSimilarFilms);
  const isSimilarFilmsDataLoading = useAppSelector((state) => state.isSimilarFilmsLoading);

  const filmReviews = useAppSelector((state) => state.currentFilmReviews) as Review[];

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    if (film) {
      store.dispatch(fetchSimilarFilmsAction({filmId: film.id}));
      store.dispatch(fetchFilmReviewsAction({filmId: film.id}));
    }
  }, [dispatch, film]);

  return (
    <div>
      {film && !isFilmDataLoading ?
        <>
          <Helmet>
            <title>WTW. {film.name}</title>
          </Helmet>
          <section className="film-card film-card--full" style={{background: film.backgroundColor}}>
            <div className="film-card__hero">
              <div className="film-card__bg">
                <img src={film.backgroundImage} alt={film.name} />
              </div>

              <h1 className="visually-hidden">WTW</h1>

              <Header />

              <div className="film-card__wrap">
                <div className="film-card__desc">
                  <h2 className="film-card__title">{film.name}</h2>
                  <p className="film-card__meta">
                    <span className="film-card__genre">{film.genre}</span>
                    <span className="film-card__year">{film.released}</span>
                  </p>

                  <div className="film-card__buttons">
                    <button className="btn btn--play film-card__button" type="button" onClick={() => navigate(`${AppRoute.Player}/${film.id}`)}>
                      <svg viewBox="0 0 19 19" width="19" height="19">
                        <use xlinkHref="#play-s"></use>
                      </svg>
                      <span>Play</span>
                    </button>
                    <button className="btn btn--list film-card__button" type="button">
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"></use>
                      </svg>
                      <span>My list</span>
                      <span className="film-card__count">9</span>
                    </button>
                    {authorizationStatus === AuthorizationStatus.Auth &&
                    <Link to={`${AppRoute.FilmData}/${film.id}/review`} className="btn film-card__button">Add review</Link>}
                  </div>
                </div>
              </div>
            </div>

            <div className="film-card__wrap film-card__translate-top">
              <div className="film-card__info">
                <div className="film-card__poster film-card__poster--big">
                  <img src={film.posterImage} alt={film.name} width="218" height="327" />
                </div>
                <Tabs film={film} reviews={filmReviews} />

              </div>
            </div>
          </section>

          <div className="page-content">
            {similarFilms?.length !== 0 && !isSimilarFilmsDataLoading &&
              <section className="catalog catalog--like-this">
                <h2 className="catalog__title">More like this</h2>
                <Catalog films={similarFilms as PreviewFilm[]} filmCount={FILM_SAME_GENRE_COUNT} />
              </section>}
            <Footer />
          </div>
        </> : <LoadingPage />}
    </div>
  );
}

