import {Catalog} from '../../catalog/catalog.tsx';
import { Films } from '../../../mocks/films.ts';
import PromoFilm from '../../promofilm/promo-film.tsx';

type MainScreenProps = {
  picture: string;
  title: string;
  genre: string;
  year: number;
  films: Films;
}

function MainPage(_props: MainScreenProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <PromoFilm picture={_props.picture} title={_props.title} genre={_props.genre} year={_props.year}/>
      </section>
      <div className="page-content">
        <Catalog films={_props.films}/>
      </div>
    </>
  );
}

export default MainPage;
