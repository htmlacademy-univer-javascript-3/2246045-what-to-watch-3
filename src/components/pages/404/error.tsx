import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from '../404/error.module.css';

export default function Error() {
  return (
    <div className="page-content">
      <Helmet>
        <title>WTW. Page not found</title>
      </Helmet>
      <div className={styles.error}>
        <h1>Упсс..</h1>
        <p>что-то пошло не так, страница не найдена.</p>
        <Link to="/"className={styles.gotomain}>Вернутся на главную</Link>
      </div>
    </div>
  );
}