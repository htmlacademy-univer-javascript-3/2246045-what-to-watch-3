import MainPage from '../pages/main-page/main-page.tsx';
type PromoFilmProps = {
  picture: string;
  title: string;
  genre: string;
  year: number;
}
function App({picture, title, genre, year}: PromoFilmProps): JSX.Element {
  return (
    <MainPage picture={picture} title={title} genre={genre} year={year}/>
  );
}

export default App;
