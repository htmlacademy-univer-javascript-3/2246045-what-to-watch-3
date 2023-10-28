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

function VideoPlayer(_props: VideoPlayerProps): JSX.Element {

  const [isLoaded, setIsLoaded] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useElementListener('loadeddata', videoRef, () => setIsLoaded(true));
  console.log(_props.isPlaying);
  useEffect(() => {

    if (videoRef.current === null) {
      return;
    }

    setTimeout(() => {
      if (videoRef.current && isLoaded) {
        videoRef.current.muted = true;
        videoRef.current.play();
      }
    }, DELAY);

  }, [_props.isPlaying, isLoaded]);

  return (
    <div onMouseOver={_props.onMouseOver} onMouseLeave={_props.onMouseLeave} className="small-film-card__image">
      {_props.isPlaying ? <video src={_props.preview} className="player__video" poster={_props.poster} ref={videoRef}></video> :
        <img src={_props.poster} alt={_props.alt} width="280" height="175" />}
    </div>
  );
}
export default VideoPlayer;
