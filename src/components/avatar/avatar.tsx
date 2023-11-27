import { Link } from 'react-router-dom';
import { useAppDispatch } from '../hooks';
import { logoutAction } from '../../store/api-actions';
import { getAvatar } from '../../services/token';

function Avatar(): JSX.Element {

  const dispatch = useAppDispatch();
  const avatarUrl = getAvatar();

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={avatarUrl} alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <Link className="user-block__link"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
          to={'/'}
        >Sign out
        </Link>
      </li>
    </ul>
  );
}
export default Avatar;
