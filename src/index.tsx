import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { PromoFilm } from './mocks/promo.ts';
import { films } from './mocks/films.ts';
import { store } from './store/index.ts';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App picture={PromoFilm.Picture}
        title={PromoFilm.Title}
        genre={PromoFilm.Genre}
        year={PromoFilm.Year}
        films={films}
      />
    </Provider>
  </React.StrictMode>,
);
