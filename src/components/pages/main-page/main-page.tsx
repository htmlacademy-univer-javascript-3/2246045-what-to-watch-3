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

function MainPage(props: MainScreenProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <PromoFilm picture={props.picture} title={props.title} genre={props.genre} year={props.year}/>
      </section>
      <div className="page-content">
        <Catalog films={props.films}/>
      </div>
    </>
  );
}

export default MainPage;
