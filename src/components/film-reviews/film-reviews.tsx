import ReviewCard from '../review-card/review-card';
import { Review } from '../../types/reviews';

type FilmReviewsProps = {
  reviews: Review[];
}

export default function FilmReviews({reviews}: FilmReviewsProps) {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review: Review) => (
          <ReviewCard
            key={review.id}
            date={review.date}
            comment={review.comment}
            user={review.user}
            rating={review.rating}
          />
        ))}
      </div>
    </div>
  );
}
