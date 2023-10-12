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
const FILMS = [
  {
    id: '1',
    image: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
  },
  {
    id: '2',
    image: 'img/bohemian-rhapsody.jpg',
    name: 'Bohemian Rhapsody',
  },
  {
    id: '3',
    image: 'img/macbeth.jpg',
    name: 'Macbeth',
  },
  {
    id: '4',
    image: 'img/aviator.jpg',
    name: 'Aviator',
  },
  {
    id: '5',
    image: 'img/we-need-to-talk-about-kevin.jpg',
    name: 'We need to talk about Kevin',
  },
  {
    id: '6',
    image: 'img/what-we-do-in-the-shadows.jpg',
    name: 'What We Do in the Shadows',
  },
  {
    id: '7',
    image: 'img/revenant.jpg',
    name: 'Revenant',
  },
  {
    id: '8',
    image: 'img/johnny-english.jpg',
    name: 'Johnny English',
  },
  {
    id: '9',
    image: 'img/shutter-island.jpg',
    name: 'Shutter Island',
  },
  {
    id: '10',
    image: 'img/pulp-fiction.jpg',
    name: 'Pulp Fiction',
  },
  {
    id: '11',
    image: 'img/no-country-for-old-men.jpg',
    name: 'No Country for Old Men',
  },
  {
    id: '12',
    image: 'img/snatch.jpg',
    name: 'Snatch',
  },
  {
    id: '13',
    image: 'img/moonrise-kingdom.jpg',
    name: 'Moonrise Kingdom',
  },
  {
    id: '14',
    image: 'img/seven-years-in-tibet.jpg',
    name: 'Seven Years in Tibet',
  },
  {
    id: '15',
    image: 'img/midnight-special.jpg',
    name: 'Midnight Special',
  },
  {
    id: '16',
    image: 'img/war-of-the-worlds.jpg',
    name: 'War of the Worlds',
  },
  {
    id: '17',
    image: 'img/dardjeeling-limited.jpg',
    name: 'Dardjeeling Limited',
  },
  {
    id: '18',
    image: 'img/orlando.jpg',
    name: 'Orlando',
  },
  {
    id: '19',
    image: 'img/mindhunter.jpg',
    name: 'Mindhunter',
  },
  {
    id: '20',
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
          <li className="catalog__genres-item" key={genre.name}>
            <a href="#" className="catalog__genres-link">{genre.name}</a>
          </li>
        ))}
      </ul>

      <div className="catalog__films-list">
        {FILMS.map((film) => (
          <article className="small-film-card catalog__films-card"  key={film.id}>
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
