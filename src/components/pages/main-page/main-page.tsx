import { Films } from './film-list-props.ts';
import PromoFilm from '../../promofilm/promo-film.tsx';
import GenresList from '../../genres-list/genres-list.tsx';

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
        {/* <PromoFilm picture={props.picture} title={props.title} genre={props.genre} year={props.year} film={props.film}/> */}
        <PromoFilm picture={props.picture} title={props.title} genre={props.genre} year={props.year}/>

      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList films={props.films}/>

        </section>
      </div>
    </>
  );
}

export default MainPage;
