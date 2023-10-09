const GENRES = [
  // {
  //   isactive: '--active',
  //   name: 'All genres',
  // },
  {
    isactive: '',
    name: 'Comedies',
  },
  {
    isactive: '',
    name: 'Crime',
  },
  {
    isactive: '',
    name: 'Documentary',
  },
  {
    isactive: '',
    name: 'Dramas',
  },
  {
    isactive: '',
    name: 'Horror',
  },
  {
    isactive: '',
    name: 'Kids & Family',
  },
  {
    isactive: '',
    name: 'Romance',
  },
  {
    isactive: '',
    name: 'Sci-Fi',
  },
  {
    isactive: '',
    name: 'Thrillers',
  },
];
const FILMS = [
  {
    image: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
  },
  {
    image: 'img/bohemian-rhapsody.jpg',
    name: 'Bohemian Rhapsody',
  },
  {
    image: 'img/macbeth.jpg',
    name: 'Macbeth',
  },
  {
    image: 'img/aviator.jpg',
    name: 'Aviator',
  },
  {
    image: 'img/we-need-to-talk-about-kevin.jpg',
    name: 'We need to talk about Kevin',
  },
  {
    image: 'img/what-we-do-in-the-shadows.jpg',
    name: 'What We Do in the Shadows',
  },
  {
    image: 'img/revenant.jpg',
    name: 'Revenant',
  },
  {
    image: 'img/johnny-english.jpg',
    name: 'Johnny English',
  },
  {
    image: 'img/shutter-island.jpg',
    name: 'Shutter Island',
  },
  {
    image: 'img/pulp-fiction.jpg',
    name: 'Pulp Fiction',
  },
  {
    image: 'img/no-country-for-old-men.jpg',
    name: 'No Country for Old Men',
  },
  {
    image: 'img/snatch.jpg',
    name: 'Snatch',
  },
  {
    image: 'img/moonrise-kingdom.jpg',
    name: 'Moonrise Kingdom',
  },
  {
    image: 'img/seven-years-in-tibet.jpg',
    name: 'Seven Years in Tibet',
  },
  {
    image: 'img/midnight-special.jpg',
    name: 'Midnight Special',
  },
  {
    image: 'img/war-of-the-worlds.jpg',
    name: 'War of the Worlds',
  },
  {
    image: 'img/dardjeeling-limited.jpg',
    name: 'Dardjeeling Limited',
  },
  {
    image: 'img/orlando.jpg',
    name: 'Orlando',
  },
  {
    image: 'img/mindhunter.jpg',
    name: 'Mindhunter',
  },
  {
    image: 'img/midnight-special.jpg',
    name: 'Midnight Special',
  },
];

function Catalog(): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <a href="#" className="catalog__genres-link">All genres</a>
        </li>
        {GENRES.map((genre) => (
          // eslint-disable-next-line react/jsx-key
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">{genre.name}</a>
          </li>
        ))}
      </ul>

      <div className="catalog__films-list">
        {FILMS.map((film) => (
          // eslint-disable-next-line react/jsx-key
          <article className="small-film-card catalog__films-card">
            <div className="small-film-card__image">
              <img src={film.image} alt={film.name} width="280" height="175"/>
            </div>
            <h3 className="small-film-card__title">
              <a className="small-film-card__link" href="film-page.html">{film.name}</a>
            </h3>
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
