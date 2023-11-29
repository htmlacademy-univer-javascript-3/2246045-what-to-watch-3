import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import Header from '../header/header';
import { useAppSelector } from '../hooks';
{/*import { getFavoriteFilmCount } from '../../store/my-list-process/selectors';
import ChangeFavoriteStatusButton from '../change-favorite-status-button/change-favorite-status-button';
import { getAuthorizationStatus } from '../../store/user-process/selector';*/}

export type PromoFilmCardProps = {
  id: string;
  posterImage: string;
  name: string;
  backgroundImage: string;
  genre: string;
  released: number;
  isFavorite: boolean;
}

export default function PromoFilmCard({id, posterImage, name, genre, released, backgroundImage, isFavorite}: PromoFilmCardProps) {
  const navigate = useNavigate();
  {/*const favoriteFilmCount = useAppSelector(getFavoriteFilmCount);
    const authorizationStatus = useAppSelector(getAuthorizationStatus);*/}

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Header/>
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={posterImage} alt={name} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>

            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button" onClick={() => navigate(`${AppRoute.Player}/${id}`)}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              {/*<ChangeFavoriteStatusButton
                filmId={id}
                isFavorite={isFavorite}
                favoriteFilmCount={favoriteFilmCount}
                authorizationStatus={authorizationStatus}
  />*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
