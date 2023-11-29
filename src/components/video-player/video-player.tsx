import { useEffect, useRef, useState } from 'react';

type VideoPlayerProps = {
  isPlaying: boolean;
  src: string;
  poster: string;
}

export default function VideoPlayer({isPlaying, src, poster}: VideoPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleDataLoaded = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const playerElement = videoRef.current;

    if (!playerElement) {
      return;
    }

    playerElement.addEventListener('loadeddata', handleDataLoaded);

    return () => {
      playerElement.removeEventListener('loadeddata', handleDataLoaded);
    };
  }, []);

  useEffect(() => {
    const playerElement = videoRef.current;

    if (!isLoaded || !playerElement) {
      return;
    }

    if (isPlaying) {
      playerElement.play();
      return;
    }

    playerElement.load();
  }, [isPlaying, isLoaded]);

  return(
    <video poster={poster} width="280" height="175" ref={videoRef} muted>
      <source src={src} />
    </video>
  );
}
