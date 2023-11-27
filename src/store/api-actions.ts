import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus} from '../const';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../mocks/auth-data';
import { FilmSmall } from '../components/pages/main-page/film-list-props';
import { AppDispatch, State } from '../state';
import { UserData } from '../mocks/user-data';
import { loadFilms, requireAuthorization, setFilmsDataLoadingStatus } from './action';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsDataLoadingStatus(true));
    const {data} = await api.get<FilmSmall[]>(APIRoute.Films);
    dispatch(setFilmsDataLoadingStatus(false));
    dispatch(loadFilms(data));
  },
);
export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token, avatarUrl}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token, avatarUrl);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
