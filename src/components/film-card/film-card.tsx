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

function FilmCard(props: FilmCardProps): JSX.Element{
  return (
    <>
      <VideoPlayer preview={props.film.videoLink} poster={props.film.posterImage} alt={props.film.name}
        isPlaying={props.isActive} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave}
      />
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Films}${props.film.id}`}>{props.film.name}</Link>
      </h3>
    </>
  );
}
export default FilmCard;
