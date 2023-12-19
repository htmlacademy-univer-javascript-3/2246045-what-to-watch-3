type ShowMoreFilmButtonProps = {
  onShowMoreFilmButtonClick: () => void;
}

export default function ShowMoreFilmButton({onShowMoreFilmButtonClick}: ShowMoreFilmButtonProps) {
  return(
    <div className="catalog__more" data-testid="show-more-button">
      <button onClick={onShowMoreFilmButtonClick} className="catalog__button" type="button">Show more</button>
    </div>
  );
}
