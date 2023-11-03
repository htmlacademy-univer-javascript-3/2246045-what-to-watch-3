import { Link, useParams, useNavigate } from 'react-router-dom';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import { AppRoute } from '../../../const';
import { Films } from '../../../mocks/films';
import { reviews } from '../../../mocks/reviews';
import FilmTabs from '../../films-tabs/films-tabs';
import { useState } from 'react';
import FilmCard from '../../film-card/film-card';

type MoviePageProps = {
  films: Films;
}

function MoviePage(props: MoviePageProps): JSX.Element {
  const params = useParams();
  const movieInfo = props.films.find((film) => Number(film.filmId) === Number(params.id));
  const favoriteFilms = props.films.filter((film) => film.isFavorite);
  const similarFilms = props.films.filter((film) => film.genre === movieInfo?.genre);

  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={movieInfo?.image} alt={movieInfo?.name}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header/>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{movieInfo?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{movieInfo?.genre}</span>
                <span className="film-card__year">{movieInfo?.year}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={() => navigate(`/player/${String(movieInfo?.filmId)}`)}>
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
                  <span className="film-card__count">{favoriteFilms.length}</span>
                </button>
                <Link to={`${AppRoute.AddReview}`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={movieInfo?.image} alt={movieInfo?.name} width="218" height="327"/>
            </div>

            <FilmTabs films={movieInfo} Review={reviews}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {similarFilms.length !== 1 ? similarFilms.slice(0, 4).map((film) => (
              movieInfo?.filmId !== film.filmId ?
                <article className="small-film-card catalog__films-card" key={film.filmId}>
                  <FilmCard film={film} isActive={Number(film.filmId) === activeCardId} onMouseLeave={() => setActiveCardId(null)} onMouseOver={() => setActiveCardId(Number(film.filmId))}/>
                </article> : ''
            )
            ) : 'No similar films'}
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default MoviePage;
