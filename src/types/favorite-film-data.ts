import { Film } from './films';

export type FavoriteFilmPostData = Film & {
  previewImage: string;
  previewVideoLink: string;
  }
