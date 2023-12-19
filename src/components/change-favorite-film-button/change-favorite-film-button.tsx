import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { postFilmFavoriteStatus } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useNavigate } from 'react-router-dom';
import { getFavoriteFilmCount } from '../../store/my-list-process/selectors';

type ChangeFavoriteStatusButtonProps = {
  filmId: string;
  isFavorite: boolean;
  authorizationStatus: AuthorizationStatus;
}

export default function ChangeFavoriteStatusButton({filmId, isFavorite, authorizationStatus}: ChangeFavoriteStatusButtonProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isCurrentFavorite, setCurrentFavorite] = useState(isFavorite);
  const favoriteFilmCount = useAppSelector(getFavoriteFilmCount);
  return(
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={() => {
        if(authorizationStatus === AuthorizationStatus.Auth) {
          dispatch(postFilmFavoriteStatus({
            id: filmId,
            status: Number(!isCurrentFavorite),
          }));
          setCurrentFavorite(!isCurrentFavorite);
        } else {
          navigate(`${AppRoute.SignIn}`);
        }
      }}
    >
      {isCurrentFavorite && authorizationStatus === AuthorizationStatus.Auth ? (
        <svg width="18" height="14" viewBox="0 0 18 14" data-testid="in-list">
          <use xlinkHref="#in-list"></use>
        </svg>
      ) : (
        <svg viewBox="0 0 19 20" width="19" height="20" data-testid="add">
          <use xlinkHref="#add"></use>
        </svg>
      )}

      <span>My list</span>
      <span className="film-card__count">{favoriteFilmCount}</span>
    </button>
  );
}
