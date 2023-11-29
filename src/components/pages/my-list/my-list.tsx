import Header from '../../header/header';
import Footer from '../../footer/footer';
import { Helmet } from 'react-helmet-async';
import Catalog from '../../catalog/catalog';
import { films } from '../../../mocks/films';


export default function MyListScreen() {
  return(
    <div className="user-page">
      <Helmet>
        <title>WTW. My list</title>
      </Helmet>
      <Header />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          <Catalog films={films}/>
        </div>
      </section>
      <Footer />
    </div>
  );
}
