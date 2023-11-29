import PromoFilmCard from '../../promo-film/promo-film';
import Footer from '../../footer/footer';
import { Helmet } from 'react-helmet-async';
import Catalog from '../../catalog/catalog';
import GenreList from '../../genres-list/genres-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ShowMoreFilmButton from '../../show-more-button/show-more-button';
import { useEffect, useState } from 'react';
import { useFilmsByGenre } from '../../hooks/get-films-by-genre';
import { MOVIE_CARDS_COUNT } from '../../../const';
import { getGenreList } from '../../../utils/get-ganre-list';
import { getActiveGenre } from '../../../store/genres-data/selectors';
import { getFilms, getPromoFilm, getPromoFilmLoading } from '../../../store/film-data/selectors';
import { fetchPromoFilmAction } from '../../../store/api-actions';
import LoadingPage from '../../pages/loading-page/loading-page';


export default function MainPage() {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector(getActiveGenre);
  const films = useAppSelector(getFilms);
  const [shownFilmCount, setShownFilmCount] = useState(MOVIE_CARDS_COUNT);
  const filmsByGenre = useFilmsByGenre(activeGenre);
  const promoFilmCard = useAppSelector(getPromoFilm);
  const isPromoFilmLoading = useAppSelector(getPromoFilmLoading);

  useEffect(() => {
    dispatch(fetchPromoFilmAction());
  }, [dispatch]);

  if(isPromoFilmLoading) {
    return(
      <LoadingPage />
    );
  }

  return (
    <>
      <Helmet>
        <title>WTW</title>
      </Helmet>
      {promoFilmCard &&
        <PromoFilmCard
          id={promoFilmCard.id}
          posterImage={promoFilmCard.posterImage}
          name={promoFilmCard.name}
          genre={promoFilmCard.genre}
          released={promoFilmCard.released}
          backgroundImage={promoFilmCard.backgroundImage}
          isFavorite={promoFilmCard.isFavorite}
        />
      }
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
