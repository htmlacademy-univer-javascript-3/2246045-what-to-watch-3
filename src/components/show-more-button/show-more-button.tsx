import { MouseEventHandler } from 'react';

type ShowMoreButtonProps = {
  onShowMoreButtonClick: MouseEventHandler<HTMLButtonElement>;
}

function ShowMoreButton (props: ShowMoreButtonProps): JSX.Element {

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={props.onShowMoreButtonClick}>Show more</button>
    </div>
  );
}

export default ShowMoreButton;
