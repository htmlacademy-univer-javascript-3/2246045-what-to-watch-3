import { fireEvent, render, screen } from '@testing-library/react';
import VideoPlayer from './video-player';

describe('VideoPlayer', () => {
  it('render correctly', () => {
    render(<VideoPlayer poster="" src="" isPlaying />);

    expect(screen.getByTestId('video')).toBeInTheDocument();
  });

  it('start playing', () => {
    HTMLVideoElement.prototype.play = vi.fn();
    render(<VideoPlayer poster="" src="" isPlaying />);
    fireEvent(screen.getByTestId('video'), new Event('loadeddata'));

    expect(screen.getByTestId<HTMLVideoElement>('video').play);
  });
});
