import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../mocks/films';
import { useState } from 'react';

type FilmCardProps = {
  film: Film;
}

function FilmCard(_props: FilmCardProps): JSX.Element{
  const [card, setCard] = useState(0);
  console.log(card);
  return(
    <>
      <div onMouseOver={() => setCard(Number(_props.film.filmId))} className="small-film-card__image">
        <img src={_props.film.image} alt={_props.film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Films}${_props.film.filmId}`}>{_props.film.name}</Link>
      </h3>
    </>
  );
}

export default FilmCard;
