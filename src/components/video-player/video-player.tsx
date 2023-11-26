import {useEffect, useRef, MouseEventHandler, useState} from 'react';
import { DELAY } from '../../const';
import { useElementListener } from '../hooks/use-element-listener';

type VideoPlayerProps = {
  preview: string;
  poster: string;
  isPlaying: boolean;
  alt: string;
  onMouseOver: MouseEventHandler<HTMLElement>;
  onMouseLeave: MouseEventHandler<HTMLElement>;
}

function VideoPlayer(props: VideoPlayerProps): JSX.Element {

  const [isLoaded, setIsLoaded] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useElementListener('loadeddata', videoRef, () => setIsLoaded(true));
  useEffect(() => {

    if (videoRef.current === null) {
      return;
    }

    setTimeout(() => {
      if (videoRef.current && isLoaded) {
        videoRef.current.play();
      }
    }, DELAY);

  }, [props.isPlaying, isLoaded]);

  return (
    <div onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave} className="small-film-card__image">
      {props.isPlaying
        ? <video src={props.preview} className="player__video" poster={props.poster} ref={videoRef} muted></video>
        : <img src={props.poster} alt={props.alt} width="280" height="175" />}
    </div>
  );
}
export default VideoPlayer;
