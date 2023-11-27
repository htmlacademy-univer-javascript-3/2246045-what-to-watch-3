import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Header from '../header/header.tsx';
{/*import { Film } from '../../mocks/films.ts';*/}

type PromoFilmProps = {
  picture: string;
  title: string;
  genre: string;
  year: number;
  /*film: Film[];*/
}

function PromoFilm(props: PromoFilmProps): JSX.Element {
  {/*const favoriteFilms = props.film.filter((film) => film.isFavorite);*/}
  return (
    <main>
      <div className="film-card__bg">
        <img src={props.picture} alt={props.title}/>
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header/>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={props.picture} alt={props.title} width="218" height="327"/>
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{props.title}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre"> {props.genre} </span>
              <span className="film-card__year">{props.year}</span>
            </p>
            <div className="film-card__buttons">
              <Link to={AppRoute.Player}>
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
              </Link>
              <Link to={AppRoute.MyList}>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                  {/* <span className="film-card__count">{favoriteFilms.length}</span> */}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PromoFilm;
