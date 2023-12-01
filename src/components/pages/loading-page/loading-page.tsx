import ReactLoading from "react-loading";
import styles from './loading.module.css';

export default function LoadingPage(): JSX.Element {
  return (
    <div className={styles.load}>
      <h1 className={styles.loadertext}>Loading</h1>
      <ReactLoading type="balls" className={styles.loader} color="#c9b37e"/>
    </div>
  );
}
