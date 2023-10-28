import { useState } from 'react';
import { Films } from '../../mocks/films.ts';
import FilmCard from '../film-card/film-card.tsx';

const GENRES = [
  // {
  //   isActive: '--active',
  //   name: 'All genres',
  // },
  {
    isActive: '',
    name: 'Comedies',
  },
  {
    isActive: '',
    name: 'Crime',
  },
  {
    isActive: '',
    name: 'Documentary',
  },
  {
    isActive: '',
    name: 'Dramas',
  },
  {
    isActive: '',
    name: 'Horror',
  },
  {
    isActive: '',
    name: 'Kids & Family',
  },
  {
    isActive: '',
    name: 'Romance',
  },
  {
    isActive: '',
    name: 'Sci-Fi',
  },
  {
    isActive: '',
    name: 'Thrillers',
  },
];



type FilmsCatalogProps = {
  films: Films;
}

function Catalog(_props: FilmsCatalogProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <a href="#" className="catalog__genres-link">All genres</a>
        </li>
        {GENRES.map((genre) => (
          <li className="catalog__genres-item" key={genre.name}>
            <a href="#" className="catalog__genres-link">{genre.name}</a>
          </li>
        ))}
      </ul>

      <div className="catalog__films-list">
        {_props.films.map((film) => (
          <article className="small-film-card catalog__films-card" key={film.filmId}>
            <FilmCard film={film} 
            isActive={Number(film.filmId) === activeCardId} 
            onMouseLeave={() => setActiveCardId(null)} 
            onMouseOver={() => setActiveCardId(Number(film.filmId))}/>
          </article>
        ))}

      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export {Catalog};
