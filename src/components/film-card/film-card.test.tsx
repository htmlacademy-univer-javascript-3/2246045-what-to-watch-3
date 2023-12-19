import { makeFakePreviewFilms } from '../../utils/mocks';
import { withHistory } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import SmallFilmCard from './film-card';

describe('FilmCard', () => {
  it('render correctly', () => {
    const smallFilmCard = makeFakePreviewFilms()[0];

    const smallFilmCardImageId = 'small-film-card-image';

    const preparedComponent = withHistory(
      <SmallFilmCard
        id={smallFilmCard.id}
        name={smallFilmCard.name}
        previewImage={smallFilmCard.previewImage}
        previewVideoLink={smallFilmCard.previewVideoLink}
        isPlayingPreviewVideo={false}
        onSmallFilmCardMouseOut={() => ''}
        onSmallFilmCardMouseOver={() => ''}
      />
    );

    render(preparedComponent);

    expect(screen.getByText(smallFilmCard.name)).toBeInTheDocument();
    expect(screen.getByTestId(smallFilmCardImageId)).toBeInTheDocument();
  });
});
