import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../hooks';
import SignOutButton from '../sign-out-button/sign-out-button';
import { getAuthorizationStatus } from '../../store/user-data/selectors';

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

export default function UserBlock() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    <>
      {getUserBlock(authorizationStatus)}
    </>
  );
}
