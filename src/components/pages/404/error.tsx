import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import Header from '../../header/header';
import styles from '../error.module.css';


function Error(): JSX.Element {
  return (
    <>      
      <Header/>
      <div className={styles.error}>
        <h1>Упсс..</h1>
        <p>что-то пошло не так, страница не найдена.</p>
        <Link to={AppRoute.Main} className={styles.gotomain}>Вернутся на главную</Link>
      </div>
    </>
  );
}

export default Error;
