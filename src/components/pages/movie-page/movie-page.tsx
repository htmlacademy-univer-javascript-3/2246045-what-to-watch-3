import Footer from '../../footer/footer';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, FILM_SAME_GENRE_COUNT } from '../../../const';
import FilmTabs from '../../films-tabs/films-tabs';
import useFilmById from '../../hooks/get-film-by-id';
import LoadingPage from '../loading-page/loading-page';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmReviewsAction, fetchSimilarFilmsAction } from '../../../store/api-actions';
import { useEffect } from 'react';
import Catalog from '../../catalog/catalog';
import { getCurrentSimilarFilms, getCurrentFilmLoading, getSimilarFilmsLoading } from '../../../store/film-data/selectors';
import { getCurrentFilmReviews, getCurrentFilmReviewsLoading } from '../../../store/review-data/selectors';
import { getAuthorizationStatus } from '../../../store/user-data/selectors';
import HeaderLogo from '../../header-logo/header-logo';
import UserBlock from '../../user-block/user-block';
import { getFavoriteFilmCount } from '../../../store/my-list-data/selectors';
import ChangeFavoriteStatusButton from '../../change-favorite-film-button/change-favorite-film-button';

export default function MoviePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const film = useFilmById();
  const isCurrentFilmLoading = useAppSelector(getCurrentFilmLoading);
  const similarFilms = useAppSelector(getCurrentSimilarFilms);
  const isSimilarFilmsDataLoading = useAppSelector(getSimilarFilmsLoading);
  const filmReviews = useAppSelector(getCurrentFilmReviews);
  const isCurrentFilmReviewsLoading = useAppSelector(getCurrentFilmReviewsLoading);
  const favoriteFilmCount = useAppSelector(getFavoriteFilmCount);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (film) {
      dispatch(fetchFilmReviewsAction({filmId: film.id}));
      dispatch(fetchSimilarFilmsAction({filmId: film.id}));
    }
  }, [dispatch, film]);

  return (
    <div>
      {film && !isCurrentFilmLoading ?
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

              <header className="page-header film-card__head">
                <HeaderLogo />
                <UserBlock />
              </header>

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
                    <ChangeFavoriteStatusButton
                      filmId={film.id}
                      isFavorite={film.isFavorite}
                      favoriteFilmCount={favoriteFilmCount}
                      authorizationStatus={authorizationStatus}
                    />
                    {authorizationStatus === AuthorizationStatus.Auth &&
                    <Link to={`${AppRoute.Films}/${film.id}/review`} className="btn film-card__button">Add review</Link>}
                  </div>
                </div>
              </div>
            </div>

            <div className="film-card__wrap film-card__translate-top">
              <div className="film-card__info">
                <div className="film-card__poster film-card__poster--big">
                  <img src={film.posterImage} alt={film.name} width="218" height="327" />
                </div>
                <FilmTabs film={film} reviews={isCurrentFilmReviewsLoading ? [] : filmReviews} />

              </div>
            </div>
          </section>

          <div className="page-content">
            {similarFilms?.length !== 0 && !isSimilarFilmsDataLoading &&
              <section className="catalog catalog--like-this">
                <h2 className="catalog__title">More like this</h2>
                <Catalog films={similarFilms} filmCount={FILM_SAME_GENRE_COUNT} />
              </section>}
            <Footer />
          </div>
        </> : <LoadingPage />}
    </div>
  );
}
