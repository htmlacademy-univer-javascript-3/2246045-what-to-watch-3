import { PropsWithChildren, useState } from 'react';
import { Films } from '../../mocks/films.ts';
import FilmCard from '../film-card/film-card.tsx';


type FilmsCatalogProps = PropsWithChildren<{
  films: Films;
}>

function Catalog(props: FilmsCatalogProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  return (
    <>
      <div className="catalog__films-list">
        {props.films.map((film) => (
          <article className="small-film-card catalog__films-card" key={film.id}>
            <FilmCard film={film} isActive={(film.id) === activeCardId} onMouseLeave={() => setActiveCardId(null)} onMouseOver={() => setActiveCardId((film.id))}/>
          </article>
        ))}
      </div>
      {props.children}
    </>
  );
}

export default Catalog;
