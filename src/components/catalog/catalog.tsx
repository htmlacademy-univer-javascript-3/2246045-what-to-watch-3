import { DELAY } from '../../const';
import { PreviewFilm } from '../../types/preview-film';
import FilmCard from '../film-card/film-card';
import { useRef, useState } from 'react';

type FilmListProps = {
  films: PreviewFilm[];
  filmCount?: number;
}

export default function Catalog({films, filmCount}: FilmListProps) {
  const [activeFilm, setActiveFilm] = useState('');
  const timer = useRef<NodeJS.Timeout>();
  const sliceFilms = filmCount ? films.slice(0, filmCount) : films;

  return (
    <div className="catalog__films-list">
      {sliceFilms.map((film: PreviewFilm) => (
        <FilmCard
          key={film.id}
          id={film.id}
          previewImage={film.previewImage}
          name={film.name}
          previewVideoLink={film.previewVideoLink}
          isPlayingPreviewVideo={film.id === activeFilm}
          onSmallFilmCardMouseOver={() => {
            timer.current = setTimeout(() => {
              setActiveFilm(film.id);
            }, DELAY);
          }}
          onSmallFilmCardMouseOut={() => {
            clearTimeout(timer.current);
            setActiveFilm('');
          }}
        />
      ))}
    </div>
  );
}
