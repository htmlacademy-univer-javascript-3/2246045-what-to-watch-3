import Footer from '../../footer/footer';
import { Helmet } from 'react-helmet-async';
import Catalog from '../../catalog/catalog';
import HeaderLogo from '../../header-logo/header-logo';
import UserBlock from '../../user-block/user-block';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoriteFilmCount, getFavoriteFilms, getFavoriteFilmsLoading } from '../../../store/my-list-process/selectors';
import LoadingPage from '../loading-page/loading-page';
import { useEffect } from 'react';
import { fetchFavoriteFilmsAction } from '../../../store/api-actions';

export default function MyListPage() {
  const dispatch = useAppDispatch();
  const favoriteFilmCount = useAppSelector(getFavoriteFilmCount);
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const isFavoriteFilmsDataLoading = useAppSelector(getFavoriteFilmsLoading);

  useEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
  }, [dispatch]);

  if(isFavoriteFilmsDataLoading) {
    return(
      <LoadingPage />
    );
  }

  return(
    <div className="user-page">
      <Helmet>
        <title>WTW. My list</title>
      </Helmet>

      <header className="page-header user-page__head">
        <HeaderLogo />
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilmCount}</span></h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <Catalog films={favoriteFilms} />
      </section>

      <Footer />
    </div>
  );
}
