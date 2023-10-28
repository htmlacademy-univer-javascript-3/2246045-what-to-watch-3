import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../mocks/films';
import VideoPlayer from '../video-player/video-player';
import { MouseEventHandler } from 'react';

type FilmCardProps = {
  film: Film;
  isActive: boolean;
  onMouseLeave: MouseEventHandler<HTMLElement>;
  onMouseOver: MouseEventHandler<HTMLElement>;
}

function FilmCard(_props: FilmCardProps): JSX.Element{
  return (
    <>
      <VideoPlayer preview={_props.film.video} poster={_props.film.image} alt={_props.film.name}
        isPlaying={_props.isActive} onMouseOver={_props.onMouseOver} onMouseLeave={_props.onMouseLeave}
      />
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Films}${_props.film.filmId}`}>{_props.film.name}</Link>
      </h3>
    </>
  );
}
export default FilmCard;
