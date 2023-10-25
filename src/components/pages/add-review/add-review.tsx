import { Link, useParams } from "react-router-dom";
import { Films } from "../../../mocks/films";
import AddReviewForm from "../../add-review-form/add-review-form";
import { AppRoute } from "../../../const";

type AddReviewProps = {
  films: Films;
}

function AddReview(_props: AddReviewProps): JSX.Element {
  const params = useParams();
  const [movieInfo] = _props.films.filter((film) => Number(film.filmId) === Number(params.id));
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={movieInfo.image} alt={movieInfo.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.Films}${movieInfo.filmId}`} className="breadcrumbs__link">{movieInfo.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link to={AppRoute.Main} className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img src={movieInfo.image} alt={movieInfo.name} width="218" height="327"/>
        </div>
      </div>
      <AddReviewForm/>
    </section>

  );
}

export default AddReview;
