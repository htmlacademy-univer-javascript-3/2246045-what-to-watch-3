import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import Header from "../header/header.tsx";

type PromoFilmProps = {
  picture: string;
  title: string;
  genre: string;
  year: number;
}

function PromoFilm(_props: PromoFilmProps): JSX.Element {
  return (
    <main>
      <div className="film-card__bg">
        <img src={_props.picture} alt={_props.title}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>
        <Header/>
      
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={_props.picture} alt={_props.title} width="218" height="327"/>
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{_props.title}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre"> {_props.genre} </span>
              <span className="film-card__year">{_props.year}</span>
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
        