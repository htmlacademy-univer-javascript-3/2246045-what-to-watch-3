import { Reviews } from '../../mocks/reviews';

type FilmReviewsProps = {
  Review: Reviews | undefined;
}

function FilmReviewsList(props: FilmReviewsProps): JSX.Element {

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {props.Review?.map((review) => (
          <div className="review" key={review.id}>
            <blockquote className="review__quote">
              <p className="review__text">{review.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{review.user}</cite>
                <time className="review__date" dateTime="2016-12-24">{review.date}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.rating}</div>
          </div>))}

      </div>
    </div>
  );
}
export default FilmReviewsList;
