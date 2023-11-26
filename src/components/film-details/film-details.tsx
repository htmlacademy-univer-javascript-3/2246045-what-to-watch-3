import { Film } from '../../mocks/films';

type FilmDetailsProps = {
  films: Film;
}

function getTimeFromMins(mins: number) {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  return `${hours }h ${ minutes }m`;
}

function FilmDetailsList(props: FilmDetailsProps): JSX.Element {

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{props.films.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {props.films.starring.map((star, index) =>
              (
                index === props.films.starring.length - 1
                  ? <span key={`id-${star}`}>{star}</span>
                  : <span key={`id-${star}`}>{star}, <br/></span>
              )
            )}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{getTimeFromMins(props.films.runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{props.films.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{props.films.released}</span>
        </p>
      </div>
    </div>
  );
}
export default FilmDetailsList;
