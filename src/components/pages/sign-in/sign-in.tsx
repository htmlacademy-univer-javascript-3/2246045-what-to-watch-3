import Footer from '../../footer/footer';
import { Helmet } from 'react-helmet-async';
import { useRef, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import HeaderLogo from '../../header-logo/header-logo';
import cn from 'classnames';
import { SingInErrorMessage } from '../../../const';
import { loginAction } from '../../../store/api-actions';

export default function SignInScreen() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState('');
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);

  const dispatch = useAppDispatch();

  const containsAnyLetters = (password: string) => /[a-z]+/i.test(password);
  const containsAnyNumbers = (password: string) => /[0-9]+/i.test(password);
  const isValidEmail = (email: string) => /^[\w-\\.]+@+[\w-]+\.[a-z]{2,4}$/i.test(email);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (emailRef.current && passwordRef.current) {
      if(!isValidEmail(emailRef.current.value)) {
        setError(SingInErrorMessage.Email);
        setIsErrorEmail(true);
      } else if (!containsAnyLetters(passwordRef.current.value) || !containsAnyNumbers(passwordRef.current.value)) {
        setError(SingInErrorMessage.Password);
        setIsErrorPassword(true);
      } else {
        dispatch(loginAction({
          email: emailRef.current.value,
          password: passwordRef.current.value
        }));
      }
    }
  };

  return (
    <div className="user-page">
      <Helmet>
        <title>WTW. Sign in</title>
      </Helmet>
      <header className="page-header user-page__head">
        <HeaderLogo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="sign-in__message">
            <p>{error}</p>
          </div>
          <div className="sign-in__fields">
            <div className={cn('sign-in__field', {'sign-in__field--error': isErrorEmail})}>
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                ref={emailRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={cn('sign-in__field', {'sign-in__field--error': isErrorPassword})}>
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                ref={passwordRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn"type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
