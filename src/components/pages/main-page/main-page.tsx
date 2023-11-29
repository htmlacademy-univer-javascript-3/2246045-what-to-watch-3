import PromoFilmCard from '../../promo-film/promo-film';
import { PromoFilmCardProps } from '../../promo-film/promo-film';
import Footer from '../../footer/footer';
import { Helmet } from 'react-helmet-async';
import Catalog from '../../catalog/catalog';
import GenreList from '../../genres-list/genres-list';
import { useAppSelector } from '../../hooks';
import ShowMoreFilmButton from '../../show-more-button/show-more-button';
import { useState } from 'react';
import { useFilmsByGenre } from '../../hooks/get-films-by-genre';
import { MOVIE_CARDS_COUNT } from '../../../const';
import { getGenreList } from '../../../utils/get-ganre-list';

type MainScreenProps = {
  promoFilmCard: PromoFilmCardProps;
}

export default function MainPage({promoFilmCard}: MainScreenProps) {
  const activeGenre = useAppSelector((state) => state.genre);
  const films = useAppSelector((state) => state.films);
  const [shownFilmCount, setShownFilmCount] = useState(MOVIE_CARDS_COUNT);
  const filmsByGenre = useFilmsByGenre(activeGenre);

  return (
    <>
      <Helmet>
        <title>WTW</title>
      </Helmet>
      <PromoFilmCard
        id={promoFilmCard.id}
        posterImage={promoFilmCard.posterImage}
        name={promoFilmCard.name}
        genre={promoFilmCard.genre}
        released={promoFilmCard.released}
        backgroundImage={promoFilmCard.backgroundImage}
      />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList genres={getGenreList(films)} onGenreClick={() => setShownFilmCount(MOVIE_CARDS_COUNT)}/>

          <Catalog films={filmsByGenre} filmCount={shownFilmCount}/>
          {shownFilmCount < filmsByGenre.length && <ShowMoreFilmButton onShowMoreFilmButtonClick={() => setShownFilmCount(shownFilmCount + MOVIE_CARDS_COUNT)} />}
        </section>

        <Footer />
      </div>
    </>
  );
}
