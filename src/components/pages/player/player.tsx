import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { getCurrentFilmLoading } from '../../../store/film-data/selectors';
import LoadingPage from '../loading-page/loading-page';
import useFilmById from '../../hooks/get-film-by-id';
import { useRef, useState } from 'react';
import Error from '../404/error';
import { getTimeForPlayer } from '../../../utils/get-time-for-player';

export default function PlayerScreen() {
  const navigate = useNavigate();
  const film = useFilmById();
  const isFilmDataLoading = useAppSelector(getCurrentFilmLoading);

  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressRef = useRef<HTMLProgressElement | null>(null);
  const togglerRef = useRef<HTMLDivElement | null>(null);
  const timeLeftRef = useRef<HTMLDivElement | null>(null);

  function handleControlClick() {
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  }

  function handleFullScreenClick() {
    videoRef.current?.requestFullscreen({ navigationUI: 'hide' });
  }

  function handleTimeUpdate() {
    if (
      progressRef.current &&
      videoRef.current &&
      film &&
      togglerRef.current &&
      timeLeftRef.current
    ) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      progressRef.current.value = progress;
      togglerRef.current.style.left = `${progress}%`;
      timeLeftRef.current.innerHTML = getTimeForPlayer(
        videoRef.current.duration - videoRef.current.currentTime
      );
    }
  }


  if (!film || isFilmDataLoading) {
    return (
      <LoadingPage />
    );
  }

  if (!film.id) {
    return (
      <Error />
    );
  }

  return (
    <div className="player">
      <Helmet>
        <title>WTW. Player {film.name}</title>
      </Helmet>
      <video
        src={film.videoLink}
        className="player__video"
        poster={film.backgroundImage}
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        autoPlay
      >
      </video>

      <button type="button" className="player__exit" onClick={() => navigate(`${AppRoute.Films}/${film.id}`)}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="0" max="100" ref={progressRef}></progress>
            <div className="player__toggler" ref={togglerRef}>Toggler</div>
          </div>
          <div className="player__time-value" ref={timeLeftRef}>
            {getTimeForPlayer(film.runTime)}
          </div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" data-testid="video-control" onClick={handleControlClick}>
            {isPlaying ? (
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </>
            ) : (
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </>
            )}
          </button>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreenClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
