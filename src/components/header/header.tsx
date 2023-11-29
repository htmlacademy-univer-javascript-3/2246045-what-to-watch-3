import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../hooks';
import SignOutButton from '../sign-out-button/sign-out-button';
const getUserBlock = (authorizationStatus: AuthorizationStatus) => {
  if(authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <Link to={AppRoute.MyList}>
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </Link>
          </div>
        </li>
        <li className="user-block__item">
          <SignOutButton />
        </li>
      </ul>
    );
  } else if (authorizationStatus === AuthorizationStatus.NoAuth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <Link className="user-block__link" to={AppRoute.SignIn}>Sign in</Link>
        </li>
      </ul>
    );
  }
  return (
    <ul className="user-block">
      <li className="user-block__item"></li>
    </ul>
  );
};
export default function Header() {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <Link className="logo__link" to="/">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {getUserBlock(authorizationStatus)}
    </header>
  );
}
