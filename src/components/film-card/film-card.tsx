import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import VideoPlayer from '../video-player/video-player';

export type FilmCardProps = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  isPlayingPreviewVideo: boolean;
  onSmallFilmCardMouseOver: () => void;
  onSmallFilmCardMouseOut: () => void;
}

export default function FilmCard({id, previewImage, name, previewVideoLink, isPlayingPreviewVideo, onSmallFilmCardMouseOver, onSmallFilmCardMouseOut}: FilmCardProps) {
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={onSmallFilmCardMouseOver} onMouseOut={onSmallFilmCardMouseOut}>
      <Link className="small-film-card__link" to={`${AppRoute.Films}/${id}`}>
        <div className="small-film-card__image" data-testid="small-film-card-image">
          <VideoPlayer
            isPlaying={isPlayingPreviewVideo}
            src={previewVideoLink}
            poster={previewImage}
          />
        </div>
        <h3 className="small-film-card__title">
          {name}
        </h3>
      </Link>
    </article>
  );
}
