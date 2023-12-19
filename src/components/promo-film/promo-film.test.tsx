import { makeFakePromoFilm, makeFakeStore } from '../../utils/mocks';
import { withHistory, withStore } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import PromoFilmCard from './promo-film';

describe('PromoFilmCard', () => {
  it('render correctly', () => {
    const promoFilmCard = makeFakePromoFilm();

    const { withStoreComponent } = withStore(
      withHistory(
        <PromoFilmCard
          id={promoFilmCard.id}
          posterImage={promoFilmCard.posterImage}
          name={promoFilmCard.name}
          genre={promoFilmCard.genre}
          released={promoFilmCard.released}
          isFavorite={promoFilmCard.isFavorite}
          backgroundImage={promoFilmCard.backgroundImage}
        />
      ),
      makeFakeStore(),
    );
    render(withStoreComponent);

    expect(screen.getByText(promoFilmCard.name)).toBeInTheDocument();
    expect(screen.getByText(promoFilmCard.genre)).toBeInTheDocument();
    expect(screen.getByText(promoFilmCard.released)).toBeInTheDocument();
  });
});
