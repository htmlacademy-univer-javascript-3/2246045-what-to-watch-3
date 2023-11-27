import { Link, useParams, useNavigate } from 'react-router-dom';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import { AppRoute } from '../../../const';
import { Film } from '../../../mocks/films';
import { FilmSmall } from '../main-page/film-list-props';
import { reviews } from '../../../mocks/reviews';
import FilmTabs from '../../films-tabs/films-tabs';
import { useState } from 'react';
import FilmCard from '../../film-card/film-card';

type MoviePageProps = {
  filmsList: FilmSmall[];
  films: Film[];
}

function MoviePage({filmsList, films}: MoviePageProps): JSX.Element {
  const {id} = useParams();
  const movieInfo = filmsList.find((film) => film.id === id) as FilmSmall;
  const movie = films.find((movieInfo) => movieInfo.id === id);
  const favoriteFilms = films.filter((film) => film.isFavorite);
  const similarFilms = filmsList.filter((film) => film.genre === movieInfo.genre);

  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg" style={{backgroundColor: movie?.backgroundColor}}>
            <img src={movie?.backgroundImage} alt={movieInfo.name}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header/>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{movieInfo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{movieInfo.genre}</span>
                <span className="film-card__year">{movie?.released}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={() => navigate(`/player/${movieInfo.id}`)}>
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
              <img src={movie?.posterImage} alt={movieInfo.name} width="218" height="327"/>
            </div>

            <FilmTabs films={movie} Review={reviews}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {similarFilms.length !== 1 ? similarFilms.slice(0, 4).map((film) => (
              movieInfo.id !== film.id ?
                <article className="small-film-card catalog__films-card" key={film.id}>
                  <FilmCard film={film} isActive={film.id === activeCardId} onMouseLeave={() => setActiveCardId(null)} onMouseOver={() => setActiveCardId(film.id)}/>
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
