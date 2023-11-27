import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../hooks';
import Avatar from '../avatar/avatar';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <header className="page-header user-page__head">
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
      {authorizationStatus === AuthorizationStatus.Auth ? <Avatar/> :
        <div className="user-block">
          <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
        </div>}
    </header>
  );
}
export default Header;

